export const runtime = "nodejs"

import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import {
  Prisma,
  LeadStatus,
  LeadStage,
  LeadPriority,
} from "@prisma/client"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      eventType,
      eventDate,
      location,
      guests,
      name,
      phone,
      details,
    } = body

    if (!eventType || !eventDate || !location || !guests || !name || !phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      )
    }

    const parsedDate = new Date(eventDate)
    if (isNaN(parsedDate.getTime())) {
      return NextResponse.json(
        { success: false, error: "Invalid event date" },
        { status: 400 }
      )
    }

    const parsedGuests = Number(guests)
    if (!Number.isInteger(parsedGuests) || parsedGuests <= 0) {
      return NextResponse.json(
        { success: false, error: "Invalid guest count" },
        { status: 400 }
      )
    }

    const lead = await prisma.lead.create({
      data: {
        customerId: `CUS-${Date.now()}-${Math.floor(Math.random() * 1000)}`,

        name,
        phone,
        email: null,

        eventCategory: eventType,
        eventType,
        serviceSlug: null,
        source: "Website",

        eventDate: parsedDate,
        location,
        guests: parsedGuests,

        contractAmount: new Prisma.Decimal(0),
        paidAmount: new Prisma.Decimal(0),
        balanceAmount: new Prisma.Decimal(0),

        status: LeadStatus.PENDING_APPROVAL,
        stage: LeadStage.NEW,
        priority: LeadPriority.MEDIUM,

        notes: details || null,
      },
    })

    return NextResponse.json({
      success: true,
      leadId: lead.id,
    })

  } catch (error) {
    console.error("LEAD CREATION ERROR:", error)

    return NextResponse.json(
      { success: false, error: "Database error" },
      { status: 500 }
    )
  }
}