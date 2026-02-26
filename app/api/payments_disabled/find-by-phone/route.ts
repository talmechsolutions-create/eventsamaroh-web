export const runtime = "nodejs"

import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { PaymentStatus } from "@prisma/client"

function serializePayment(payment: any) {
  return {
    ...payment,
    baseAmount: payment.baseAmount?.toNumber(),
    discount: payment.discount?.toNumber(),
    gstAmount: payment.gstAmount?.toNumber(),
    finalAmount: payment.finalAmount?.toNumber(),
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    if (!body.phone || typeof body.phone !== "string") {
      return NextResponse.json(
        { error: "Phone required" },
        { status: 400 }
      )
    }

    const normalizedPhone = body.phone.trim()

    const lead = await prisma.lead.findFirst({
      where: { phone: normalizedPhone },
      include: { payments: true },
    })

    if (!lead) {
      return NextResponse.json({
        success: true,
        payments: [],
      })
    }

    const pendingPayments = lead.payments
      .filter((p) => p.status === PaymentStatus.PENDING)
      .map(serializePayment)

    return NextResponse.json({
      success: true,
      payments: pendingPayments,
    })

  } catch (error) {
    console.error("Find Payment Error:", error)
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}