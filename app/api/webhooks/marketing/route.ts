export const runtime = "nodejs"

import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { nanoid } from "nanoid"
import { Prisma } from "@prisma/client"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    /*
      Expected fields:
      name
      phone
      email
      campaign
      source
    */

    const rawName = body.name
    const rawPhone = body.phone
    const rawEmail = body.email
    const campaign = body.campaign
    const source = body.source

    if (!rawName || !rawPhone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // 🔐 Normalize data
    const name = String(rawName).trim()
    const phone = String(rawPhone).trim()
    const email = rawEmail
      ? String(rawEmail).toLowerCase().trim()
      : null

    // 🔁 Duplicate protection (phone-based)
    const existingLead = await prisma.lead.findFirst({
      where: {
        phone,
        isArchived: false,
      },
    })

    if (existingLead) {
      return NextResponse.json({
        success: true,
        message: "Lead already exists",
      })
    }

    const customerId = `ES-${nanoid(6).toUpperCase()}`

    const lead = await prisma.lead.create({
      data: {
        customerId,

        name,
        phone,
        email,

        eventCategory: campaign || "Marketing Lead",
        eventType: null,
        serviceSlug: null,
        source: source || "Digital Marketing",

        eventDate: null,
        location: null,
        guests: null,

        // ✅ Explicit financial initialization
        contractAmount: new Prisma.Decimal(0),
        paidAmount: new Prisma.Decimal(0),
        balanceAmount: new Prisma.Decimal(0),

        status: "PENDING_APPROVAL",
        stage: "NEW",
        priority: "MEDIUM",

        notes: null,
      },
    })

    await prisma.leadActivity.create({
      data: {
        leadId: lead.id,
        type: "MARKETING_LEAD",
        message: `Lead created via ${source || "Marketing"}`,
      },
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("Marketing Webhook Error:", error)

    return NextResponse.json(
      { error: "Webhook failed" },
      { status: 500 }
    )
  }
}