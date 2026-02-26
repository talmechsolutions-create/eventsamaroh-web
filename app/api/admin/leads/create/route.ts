import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { nanoid } from "nanoid"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      name,
      phone,
      email,
      eventCategory,
      eventDate,
      location,
      contractAmount,
      source,
    } = body

    if (!name || !phone || !eventCategory) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const customerId = `ES-${nanoid(6).toUpperCase()}`

    const contract = Number(contractAmount || 0)

    const lead = await prisma.lead.create({
      data: {
        customerId,
        name,
        phone,
        email,
        eventCategory,
        eventDate: eventDate ? new Date(eventDate) : null,
        location,
        contractAmount: contract,
        balanceAmount: contract,
        source: source || "Walk-in",
      },
    })

    return NextResponse.json({ success: true, lead })

  } catch (error) {
    console.error("Create Lead Error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}