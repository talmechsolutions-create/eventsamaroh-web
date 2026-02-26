export const runtime = "nodejs"

import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const leadId = Number(body.leadId)
    const followUpDate = body.followUpDate
    const note = body.note

    if (!leadId || isNaN(leadId)) {
      return NextResponse.json(
        { error: "Valid Lead ID required" },
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

    let parsedDate: Date | null = null

    if (followUpDate) {
      parsedDate = new Date(followUpDate)

      if (isNaN(parsedDate.getTime())) {
        return NextResponse.json(
          { error: "Invalid follow-up date" },
          { status: 400 }
        )
      }
    }

    await prisma.lead.update({
      where: { id: leadId },
      data: {
        followUpDate: parsedDate,
        followUpCompleted: false,
      },
    })

    if (note && typeof note === "string" && note.trim() !== "") {
      await prisma.leadActivity.create({
        data: {
          leadId,
          type: "FOLLOW_UP",
          message: note.trim(),
        },
      })
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("Followup error:", error)
    return NextResponse.json(
      { error: "Failed" },
      { status: 500 }
    )
  }
}