export const runtime = "nodejs"

import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { LeadStage, LeadStatus, LeadPriority } from "@prisma/client"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { leadId } = body

    if (!leadId || !Number.isInteger(leadId)) {
      return NextResponse.json(
        { success: false, error: "Invalid lead ID" },
        { status: 400 }
      )
    }

    // 🔍 Check lead exists
    const lead = await prisma.lead.findUnique({
      where: { id: leadId },
      include: { booking: true },
    })

    if (!lead) {
      return NextResponse.json(
        { success: false, error: "Lead not found" },
        { status: 404 }
      )
    }

    // 🚫 Prevent duplicate booking
    if (lead.booking) {
      return NextResponse.json(
        { success: true, message: "Booking already exists" }
      )
    }

    // 🔒 Transaction for safety
    const result = await prisma.$transaction(async (tx) => {

      const booking = await tx.booking.create({
        data: {
          leadId: lead.id,
        },
      })

      await tx.lead.update({
        where: { id: lead.id },
        data: {
          stage: LeadStage.WON,
          status: LeadStatus.CONFIRMED,
          priority: LeadPriority.HIGH,
        },
      })

      await tx.leadActivity.create({
        data: {
          leadId: lead.id,
          type: "BOOKING_CONFIRMED",
          message: "Lead converted to booking",
        },
      })

      return booking
    })

    return NextResponse.json({
      success: true,
      bookingId: result.id,
    })

  } catch (error) {
    console.error("BOOKING ERROR:", error)

    return NextResponse.json(
      { success: false, error: "Booking failed" },
      { status: 500 }
    )
  }
}