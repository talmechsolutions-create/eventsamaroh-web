export const runtime = "nodejs"

import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { Prisma } from "@prisma/client"

export async function PATCH(req: Request) {
  try {
    const { paymentId } = await req.json()

    if (!paymentId || isNaN(Number(paymentId))) {
      return NextResponse.json({ error: "Invalid payment ID" }, { status: 400 })
    }

    const payment = await prisma.payment.findUnique({
      where: { id: Number(paymentId) },
      include: { lead: true, invoice: true },
    })

    if (!payment) {
      return NextResponse.json({ error: "Payment not found" }, { status: 404 })
    }

    if (payment.status === "CANCELLED") {
      return NextResponse.json({ error: "Already cancelled" }, { status: 400 })
    }

    await prisma.$transaction(async (tx) => {

      // 1️⃣ Cancel payment
      await tx.payment.update({
        where: { id: payment.id },
        data: { status: "CANCELLED" },
      })

      // 2️⃣ Cancel invoice
      if (payment.invoice) {
        await tx.invoice.update({
          where: { id: payment.invoice.id },
          data: { status: "CANCELLED" },
        })
      }

      // 3️⃣ Recalculate financials
      const newPaid = new Prisma.Decimal(payment.lead.paidAmount)
        .minus(payment.finalAmount)

      const newBalance = new Prisma.Decimal(payment.lead.contractAmount)
        .minus(newPaid)

      await tx.lead.update({
        where: { id: payment.leadId },
        data: {
          paidAmount: newPaid,
          balanceAmount: newBalance,
        },
      })

      // 4️⃣ Remove booking if needed
      if (newBalance.greaterThan(0)) {
        await tx.booking.deleteMany({
          where: { leadId: payment.leadId },
        })
      }

      // 5️⃣ Log activity
      await tx.leadActivity.create({
        data: {
          leadId: payment.leadId,
          type: "PAYMENT_CANCELLED",
          message: `Payment of ₹${payment.finalAmount.toNumber()} cancelled.`,
        },
      })

    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("Cancel Error:", error)
    return NextResponse.json({ error: "Cancel failed" }, { status: 500 })
  }
}