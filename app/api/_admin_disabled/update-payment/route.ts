export const runtime = "nodejs"

import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { PaymentStatus } from "@prisma/client"

export async function PATCH(req: Request) {
  try {
    const body = await req.json()

    const paymentId = Number(body.paymentId)
    const action = body.action as "MARK_PAID" | "APPROVE" | "CANCEL"

    if (!paymentId || isNaN(paymentId)) {
      return NextResponse.json(
        { error: "Invalid payment ID" },
        { status: 400 }
      )
    }

    if (!["MARK_PAID", "APPROVE", "CANCEL"].includes(action)) {
      return NextResponse.json(
        { error: "Invalid action" },
        { status: 400 }
      )
    }

    if (action === "MARK_PAID") {
      await prisma.payment.update({
        where: { id: paymentId },
        data: {
          status: PaymentStatus.PAID,
        },
      })
    }

    if (action === "APPROVE") {
      await prisma.payment.update({
        where: { id: paymentId },
        data: {
          approvedByAdmin: true,
          approvedAt: new Date(),
        },
      })
    }

    if (action === "CANCEL") {
      await prisma.payment.update({
        where: { id: paymentId },
        data: {
          status: PaymentStatus.FAILED,
        },
      })
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("Payment Update Error:", error)
    return NextResponse.json(
      { error: "Update failed" },
      { status: 500 }
    )
  }
}