export const runtime = "nodejs"

import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { ratelimit } from "@/lib/rateLimit"
import crypto from "crypto"
import { Prisma } from "@prisma/client"

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "global"
    const { success } = await ratelimit.limit(ip)

    if (!success) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429 }
      )
    }

    const rawBody = await req.text()
    const signature = req.headers.get("x-razorpay-signature")

    // 🔐 Verify signature only in production
    if (process.env.NODE_ENV === "production") {
      if (!signature) {
        return NextResponse.json(
          { error: "Missing signature" },
          { status: 400 }
        )
      }

      const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET!)
        .update(rawBody)
        .digest("hex")

      if (expectedSignature !== signature) {
        return NextResponse.json(
          { error: "Invalid signature" },
          { status: 400 }
        )
      }
    }

    const body = JSON.parse(rawBody)

    // ✅ Support official Razorpay webhook structure
    const razorpay_order_id =
      body?.payload?.payment?.entity?.order_id ??
      body?.razorpay_order_id

    const razorpay_payment_id =
      body?.payload?.payment?.entity?.id ??
      body?.razorpay_payment_id

    if (!razorpay_order_id) {
      return NextResponse.json(
        { error: "Invalid payload" },
        { status: 400 }
      )
    }

    const payment = await prisma.payment.findFirst({
      where: { razorpayOrderId: razorpay_order_id },
      include: { lead: true },
    })

    if (!payment) {
      return NextResponse.json(
        { error: "Payment not found" },
        { status: 404 }
      )
    }

    // 🔁 Idempotency protection
    if (payment.status === "PAID") {
      return NextResponse.json({ success: true })
    }

    await prisma.$transaction(async (tx) => {

      // 1️⃣ Mark payment as PAID
      const updatedPayment = await tx.payment.update({
        where: { id: payment.id },
        data: {
          status: "PAID",
          razorpayPaymentId: razorpay_payment_id,
          paidAt: new Date(),
        },
      })

      // 2️⃣ Safely compute new paid + balance using Decimal
      const currentPaid = new Prisma.Decimal(payment.lead.paidAmount)
      const contractAmount = new Prisma.Decimal(payment.lead.contractAmount)

      const newPaid = currentPaid.add(updatedPayment.finalAmount)

      let newBalance = contractAmount.sub(newPaid)

      if (newBalance.lt(0)) {
        newBalance = new Prisma.Decimal(0)
      }

      await tx.lead.update({
        where: { id: payment.leadId },
        data: {
          paidAmount: newPaid,
          balanceAmount: newBalance,
        },
      })

      // 3️⃣ Log activity
      await tx.leadActivity.create({
        data: {
          leadId: payment.leadId,
          type: "PAYMENT_RECEIVED",
          message: `Payment of ₹${updatedPayment.finalAmount.toNumber()} received via Razorpay.`,
        },
      })

    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("Webhook Error:", error)

    return NextResponse.json(
      { error: "Webhook failed" },
      { status: 500 }
    )
  }
}