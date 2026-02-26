export const runtime = "nodejs"

import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import { sendInvoiceEmail } from "@/lib/email/sendInvoiceEmail"
import { Prisma } from "@prisma/client"

/* ================= FINANCIAL YEAR HELPER ================= */

function getFinancialYear() {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1

  if (month >= 4) {
    return `${String(year).slice(-2)}-${String(year + 1).slice(-2)}`
  } else {
    return `${String(year - 1).slice(-2)}-${String(year).slice(-2)}`
  }
}

/* ================= PATCH ================= */

export async function PATCH(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const paymentId = Number(context.params.id)

    if (!Number.isInteger(paymentId)) {
      return NextResponse.json(
        { error: "Invalid payment ID" },
        { status: 400 }
      )
    }

    const existingPayment = await prisma.payment.findUnique({
      where: { id: paymentId },
      include: { lead: true },
    })

    if (!existingPayment) {
      return NextResponse.json(
        { error: "Payment not found" },
        { status: 404 }
      )
    }

    if (existingPayment.status !== "PAID") {
      return NextResponse.json(
        { error: "Payment not completed yet" },
        { status: 400 }
      )
    }

    if (existingPayment.approvedByAdmin) {
      return NextResponse.json(
        { error: "Already approved" },
        { status: 400 }
      )
    }

    const result = await prisma.$transaction(async (tx) => {

      // 1️⃣ Approve payment
      const updatedPayment = await tx.payment.update({
        where: { id: paymentId },
        data: {
          approvedByAdmin: true,
          approvedAt: new Date(),
        },
      })

      // 2️⃣ Fetch all paid payments
      const allPayments = await tx.payment.findMany({
        where: {
          leadId: existingPayment.leadId,
          status: "PAID",
        },
      })

      // 3️⃣ Decimal-safe total calculation
      const totalPaidDecimal = allPayments.reduce(
        (sum, p) => sum.plus(p.finalAmount),
        new Prisma.Decimal(0)
      )

      const contractAmountDecimal = existingPayment.lead.contractAmount
      const balanceDecimal = contractAmountDecimal.minus(totalPaidDecimal)

      const updatedLead = await tx.lead.update({
        where: { id: existingPayment.leadId },
        data: {
          paidAmount: totalPaidDecimal,
          balanceAmount: balanceDecimal,
          status:
            balanceDecimal.lte(0)
              ? "CONFIRMED"
              : "PENDING_APPROVAL",
        },
      })

      // 4️⃣ Log activity
      await tx.leadActivity.create({
        data: {
          leadId: updatedLead.id,
          type: "PAYMENT_APPROVED",
          message: `Payment of ₹${updatedPayment.finalAmount.toNumber()} approved.`,
        },
      })

      // 5️⃣ Generate invoice number
      const financialYear = getFinancialYear()

      const sequence = await tx.invoiceSequence.upsert({
        where: { financialYear },
        update: { lastNumber: { increment: 1 } },
        create: { financialYear, lastNumber: 1 },
      })

      const paddedNumber = String(sequence.lastNumber).padStart(4, "0")
      const invoiceNumber = `INV/${financialYear}/${paddedNumber}`

      // 6️⃣ Create invoice (keep Decimal types)
      const invoice = await tx.invoice.create({
        data: {
          leadId: updatedLead.id,
          paymentId: updatedPayment.id,
          invoiceNumber,
          customerName: updatedLead.name,
          customerEmail: updatedLead.email,
          customerPhone: updatedLead.phone,
          subtotal: updatedPayment.baseAmount,
          discount: updatedPayment.discount,
          gstAmount: updatedPayment.gstAmount,
          totalAmount: updatedPayment.finalAmount,
        },
      })

      await tx.leadActivity.create({
        data: {
          leadId: updatedLead.id,
          type: "INVOICE_GENERATED",
          message: `Invoice ${invoice.invoiceNumber} generated.`,
        },
      })

      if (balanceDecimal.lte(0)) {
        await tx.booking.upsert({
          where: { leadId: updatedLead.id },
          update: {},
          create: { leadId: updatedLead.id },
        })
      }

      return { invoice, updatedLead }
    })

    /* ================= SEND EMAIL ================= */

    if (result.updatedLead.email) {
      await sendInvoiceEmail({
        to: result.updatedLead.email,
        customerName: result.updatedLead.name,
        invoiceNumber: result.invoice.invoiceNumber,
        amount: result.invoice.totalAmount.toNumber(), // ✅ SAFE
      })
    }

    return NextResponse.json({
      success: true,
      message: "Payment approved and invoice emailed.",
    })

  } catch (error) {
    console.error("Approve Error:", error)

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}