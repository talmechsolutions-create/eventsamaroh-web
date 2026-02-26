export const runtime = "nodejs"

import { prisma } from "@/lib/prisma"
import {
  calculateFullPayment,
  calculateAdvancePayment,
} from "@/lib/payment/pricing"
import { NextResponse } from "next/server"
import { requireAdmin } from "@/lib/auth"
import { Prisma } from "@prisma/client"

export async function POST(req: Request) {
  try {
    await requireAdmin()

    const body = await req.json()

    const leadId = Number(body.leadId)
    const paymentType = body.paymentType as "FULL" | "ADVANCE" | "BALANCE"
    const amount = Number(body.amount)

    if (!Number.isInteger(leadId)) {
      return NextResponse.json({ error: "Invalid lead ID" }, { status: 400 })
    }

    if (!["FULL", "ADVANCE", "BALANCE"].includes(paymentType)) {
      return NextResponse.json({ error: "Invalid payment type" }, { status: 400 })
    }

    const lead = await prisma.lead.findUnique({
      where: { id: leadId },
      include: { payments: true },
    })

    if (!lead) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 })
    }

    const existingPending = lead.payments.find(p => p.status === "PENDING")
    if (existingPending) {
      return NextResponse.json({
        success: true,
        paymentLink: existingPending.paymentLink,
        paymentId: existingPending.id,
      })
    }

    const totalPaid = lead.payments
      .filter(p => p.status === "PAID")
      .reduce((sum, p) => {
        return sum.plus(p.finalAmount)
      }, new Prisma.Decimal(0))

    const remaining = new Prisma.Decimal(lead.contractAmount).minus(totalPaid)

    if (remaining.lte(0)) {
      return NextResponse.json(
        { error: "Already fully paid" },
        { status: 400 }
      )
    }

    let pricing

    if (paymentType === "FULL" || paymentType === "BALANCE") {
      pricing = calculateFullPayment(remaining.toNumber())
    } else {
      if (!Number.isFinite(amount) || amount <= 0 || amount > remaining.toNumber()) {
        return NextResponse.json(
          { error: "Invalid amount" },
          { status: 400 }
        )
      }

      pricing = calculateAdvancePayment(amount)
    }

    const payment = await prisma.payment.create({
      data: {
        leadId,
        type: paymentType,
        baseAmount: pricing.baseAmount,
        discount: pricing.discount,
        gstAmount: pricing.gstAmount,
        finalAmount: pricing.finalAmount,
      },
    })

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

    const paymentLink = `${baseUrl}/pay/${payment.id}`

    await prisma.payment.update({
      where: { id: payment.id },
      data: { paymentLink },
    })

    return NextResponse.json({
      success: true,
      paymentLink,
      paymentId: payment.id,
    })

  } catch (error) {
    console.error("Generate Payment Error:", error)
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}