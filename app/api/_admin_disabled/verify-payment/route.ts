export const runtime = "nodejs"

import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { PaymentStatus } from "@prisma/client"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const leadId = Number(body.leadId)

    if (!leadId || isNaN(leadId)) {
      return NextResponse.json(
        { error: "Invalid lead ID" },
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

    await prisma.payment.updateMany({
      where: { leadId },
      data: {
        status: PaymentStatus.PAID,
        approvedByAdmin: true,
        approvedAt: new Date(),
      },
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("Bulk Payment Update Error:", error)
    return NextResponse.json(
      { error: "Operation failed" },
      { status: 500 }
    )
  }
}