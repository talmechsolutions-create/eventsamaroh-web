export const runtime = "nodejs"

import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import {
  Prisma,
  LeadStatus,
  PaymentStatus,
  PaymentType,
} from "@prisma/client"
import { nanoid } from "nanoid"

function generateCustomerId() {
  return "CUS-" + nanoid(10)
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    if (
      !body.name ||
      !body.phone ||
      !body.email ||
      !body.eventCategory ||
      !body.totalAmount
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    if (
      !["FULL", "ADVANCE", "BALANCE"].includes(body.paymentType)
    ) {
      return NextResponse.json(
        { error: "Invalid payment type" },
        { status: 400 }
      )
    }

    const customerId = generateCustomerId()

    const contractAmount = new Prisma.Decimal(body.totalAmount || 0)
    const payableAmount = new Prisma.Decimal(body.payableAmount || 0)
    const balanceAmount = new Prisma.Decimal(body.balance || 0)
    const discount = new Prisma.Decimal(body.discount || 0)
    const gst = new Prisma.Decimal(body.gst || 0)

    const result = await prisma.$transaction(async (tx) => {

      const lead = await tx.lead.create({
        data: {
          customerId,
          name: body.name,
          phone: body.phone,
          email: body.email,
          location: body.location ?? null,
          eventDate: body.eventDate
            ? new Date(body.eventDate)
            : null,
          eventType: body.eventType ?? null,
          eventCategory: body.eventCategory,
          contractAmount,
          paidAmount: payableAmount,
          balanceAmount,
          status: LeadStatus.PENDING_APPROVAL,
        },
      })

      await tx.payment.create({
        data: {
          leadId: lead.id,
          type: body.paymentType as PaymentType,
          baseAmount: contractAmount,
          discount,
          gstAmount: gst,
          finalAmount: payableAmount,
          status: PaymentStatus.PENDING,
        },
      })

      return lead
    })

    return NextResponse.json({
      success: true,
      customerId: result.customerId,
    })

  } catch (error) {
    console.error("CREATE BOOKING ERROR:", error)

    return NextResponse.json(
      { error: "Booking failed" },
      { status: 500 }
    )
  }
}