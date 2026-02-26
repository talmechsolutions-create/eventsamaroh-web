export const runtime = "nodejs"

import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"
import { Prisma } from "@prisma/client"

// ==========================
// Decimal Serializer
// ==========================
function serializeLead(lead: any) {
  return {
    ...lead,
    contractAmount: lead.contractAmount?.toNumber(),
    paidAmount: lead.paidAmount?.toNumber(),
    balanceAmount: lead.balanceAmount?.toNumber(),
    payments: lead.payments?.map((p: any) => ({
      ...p,
      baseAmount: p.baseAmount?.toNumber(),
      discount: p.discount?.toNumber(),
      gstAmount: p.gstAmount?.toNumber(),
      finalAmount: p.finalAmount?.toNumber(),
    })),
    invoices: lead.invoices?.map((i: any) => ({
      ...i,
      subtotal: i.subtotal?.toNumber(),
      discount: i.discount?.toNumber(),
      gstRate: i.gstRate?.toNumber(),
      gstAmount: i.gstAmount?.toNumber(),
      totalAmount: i.totalAmount?.toNumber(),
    })),
  }
}

// ======================================
// GET ALL LEADS (NON ARCHIVED) + SEARCH
// ======================================
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const search = searchParams.get("search")

    const leads = await prisma.lead.findMany({
      where: {
        isArchived: false,
        ...(search
          ? {
              OR: [
                { name: { contains: search, mode: "insensitive" } },
                { phone: { contains: search } },
                { email: { contains: search, mode: "insensitive" } },
              ],
            }
          : {}),
      },
      include: {
        payments: true,
        invoices: true,
        activities: true,
      },
      orderBy: { createdAt: "desc" },
      take: search ? 10 : undefined,
    })

    return NextResponse.json(leads.map(serializeLead))

  } catch (error) {
    console.error("GET Leads Error:", error)
    return NextResponse.json(
      { error: "Failed to fetch leads" },
      { status: 500 }
    )
  }
}

// ======================================
// CREATE NEW LEAD
// ======================================
export async function POST(req: Request) {
  try {
    const body = await req.json()

    if (!body.fullName || !body.phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      )
    }

    const normalizedPhone = String(body.phone).trim()
    const normalizedEmail = body.email
      ? String(body.email).toLowerCase().trim()
      : null

    let eventDate: Date | null = null
    if (body.eventDate) {
      const parsed = new Date(body.eventDate)
      if (isNaN(parsed.getTime())) {
        return NextResponse.json(
          { error: "Invalid event date" },
          { status: 400 }
        )
      }
      eventDate = parsed
    }

    let guests: number | null = null
    if (body.guests) {
      const parsedGuests = Number(body.guests)
      if (!Number.isInteger(parsedGuests) || parsedGuests <= 0) {
        return NextResponse.json(
          { error: "Invalid guest count" },
          { status: 400 }
        )
      }
      guests = parsedGuests
    }

    const existingLead = await prisma.lead.findFirst({
      where: {
        phone: normalizedPhone,
        eventDate: eventDate ?? undefined,
        isArchived: false,
      },
    })

    if (existingLead) {
      return NextResponse.json(
        {
          error:
            "We’ve already received your inquiry. Our team will connect with you shortly.",
        },
        { status: 400 }
      )
    }

    const lead = await prisma.lead.create({
      data: {
        customerId: `CUS-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        name: body.fullName.trim(),
        phone: normalizedPhone,
        email: normalizedEmail,
        eventCategory: body.eventCategory || "General",
        eventType: body.eventType || null,
        serviceSlug: body.serviceSlug || null,
        source: body.source || "Website",
        eventDate,
        location: body.location || null,
        guests,
        contractAmount: new Prisma.Decimal(0),
        paidAmount: new Prisma.Decimal(0),
        balanceAmount: new Prisma.Decimal(0),
        notes: body.eventDetails || null,
      },
    })

    return NextResponse.json(serializeLead(lead))

  } catch (error) {
    console.error("POST Lead Error:", error)
    return NextResponse.json(
      { error: "Lead creation failed" },
      { status: 500 }
    )
  }
}