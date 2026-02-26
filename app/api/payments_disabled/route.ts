import { prisma } from "@/lib/prisma"
import {
  calculateFullPayment,
  calculateAdvancePayment,
} from "@/lib/payment/pricing"
import { NextResponse } from "next/server"
import { Prisma, PaymentType } from "@prisma/client"


// ✅ EXACT GET CODE (as per screenshot)

export async function GET() {
  try {
    const payments = await prisma.payment.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        lead: true,
        invoice: true,
      },
    })

    return NextResponse.json(payments)

  } catch (error) {
    console.error("Payments fetch error:", error)

    return NextResponse.json(
      { error: "Failed to fetch payments" },
      { status: 500 }
    )
  }
}


// ========================
// EXISTING POST (UNCHANGED)
// ========================

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const leadId = Number(body.leadId)
    const paymentType = body.paymentType as PaymentType
    const amount = Number(body.amount)

    if (!leadId || isNaN(leadId)) {
      return NextResponse.json(
        { error: "Invalid lead ID" },
        { status: 400 }
      )
    }

    if (!Object.values(PaymentType).includes(paymentType)) {
      return NextResponse.json(
        { error: "Invalid payment type" },
        { status: 400 }
      )
    }

    const lead = await prisma.lead.findUnique({
      where: { id: leadId },
      include: { payments: true },
    })

    if (!lead) {
      return NextResponse.json(
        { error: "Lead not found" },
        { status: 404 }
      )
    }

    if (!lead.contractAmount || lead.contractAmount.equals(0)) {
      return NextResponse.json(
        { error: "Contract amount not set" },
        { status: 400 }
      )
    }

    const contractAmount = new Prisma.Decimal(lead.contractAmount)

    const totalPaid = lead.payments
      .filter((p) => p.status === "PAID")
      .reduce(
        (sum, p) => sum.add(p.finalAmount),
        new Prisma.Decimal(0)
      )

    const remaining = contractAmount.sub(totalPaid)

    if (remaining.lte(0)) {
      return NextResponse.json(
        { error: "Payment already completed" },
        { status: 400 }
      )
    }

    let pricing

    if (paymentType === "FULL") {

      if (totalPaid.gt(0)) {
        return NextResponse.json(
          { error: "Full payment not allowed after partial payment" },
          { status: 400 }
        )
      }

      pricing = calculateFullPayment(contractAmount.toNumber())

    } else {

      if (!amount || isNaN(amount) || amount <= 0) {
        return NextResponse.json(
          { error: "Invalid payment amount" },
          { status: 400 }
        )
      }

      const decimalAmount = new Prisma.Decimal(amount)

      if (decimalAmount.gt(remaining)) {
        return NextResponse.json(
          { error: "Amount exceeds remaining balance" },
          { status: 400 }
        )
      }

    pricing = calculateAdvancePayment(decimalAmount.toNumber())
    }

    const payment = await prisma.payment.create({
      data: {
        leadId,
        type: paymentType,
        baseAmount: pricing.baseAmount,
        discount: pricing.discount,
        gstAmount: pricing.gstAmount,
        finalAmount: pricing.finalAmount,
        status: "PENDING",
        approvedByAdmin: false,
      },
    })

    return NextResponse.json({
      success: true,
      payment,
    })

  } catch (error) {
    console.error("Payment creation error:", error)

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}