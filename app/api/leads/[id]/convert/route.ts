import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const leadId = Number(params.id)

    if (!leadId) {
      return NextResponse.json(
        { error: "Invalid lead id" },
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

    // Check existing booking
    const existingBooking = await prisma.booking.findUnique({
      where: { leadId },
    })

    if (existingBooking) {
      return NextResponse.json(
        { error: "Already converted" },
        { status: 400 }
      )
    }

    // Create booking
    await prisma.booking.create({
      data: {
        leadId: lead.id,
      },
    })

    // Update lead pipeline
    await prisma.lead.update({
      where: { id: lead.id },
      data: {
        status: "APPROVED",
        stage: "WON",
      },
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("Convert error:", error)
    return NextResponse.json(
      { error: "Conversion failed" },
      { status: 500 }
    )
  }
}