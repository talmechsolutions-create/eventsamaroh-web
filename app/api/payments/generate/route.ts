export const runtime = "nodejs"

import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import Razorpay from "razorpay"
import { nanoid } from "nanoid"
import { PaymentType } from "@prisma/client"

if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  throw new Error("Razorpay keys missing in environment")
}

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
})

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
    const leadId = Number(body.leadId)
    const type = body.type as PaymentType

    if (!leadId || isNaN(leadId)) {
      return NextResponse.json(
        { error: "Invalid lead ID" },
        { status: 400 }
      )
    }

    if (!Object.values(PaymentType).includes(type)) {
      return NextResponse.json(
        { error: "Invalid payment type" },
        { status: 400 }
      )
    }

    const lead = await prisma.lead.findUnique({
      where: { id: leadId },
    })

    if (!lead) {
      return NextResponse.json(
        { error: "Lead not found" },
        { status: 404 }
      )
    }

    let amount = lead.contractAmount.toNumber()

    if (type === PaymentType.ADVANCE) {
      amount = amount * 0.3
    }

    if (type === PaymentType.BALANCE) {
      amount = lead.balanceAmount.toNumber()
    }

    let discount = 0

    if (type === PaymentType.FULL) {
      discount = amount * 0.05
    }

    const finalAmount = amount - discount
    const gstAmount = finalAmount * 0.18
    const payable = finalAmount + gstAmount

    if (payable <= 0) {
      return NextResponse.json(
        { error: "Invalid payable amount" },
        { status: 400 }
      )
    }

    const order = await razorpay.orders.create({
      amount: Math.round(payable * 100),
      currency: "INR",
      receipt: `rcpt_${nanoid(6)}`,
    })

    const payment = await prisma.payment.create({
      data: {
        leadId: lead.id,
        type,
        baseAmount: amount,
        discount,
        gstAmount,
        finalAmount: payable,
        razorpayOrderId: order.id,
      },
    })

    const paymentLink = `${process.env.NEXT_PUBLIC_BASE_URL}/pay/${payment.id}`

    await prisma.payment.update({
      where: { id: payment.id },
      data: { paymentLink },
    })

    return NextResponse.json({
      success: true,
      payment: serializePayment(payment),
      orderId: order.id,
      paymentLink,
    })

  } catch (error) {
    console.error("Generate Payment Error:", error)
    return NextResponse.json(
      { error: "Failed to generate payment link" },
      { status: 500 }
    )
  }
}