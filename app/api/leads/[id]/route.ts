export const runtime = "nodejs"

import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import {
  LeadStage,
  LeadPriority,
} from "@prisma/client"

// ======================================
// Helper: Convert Decimal safely
// ======================================
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
// GET SINGLE LEAD
// ======================================
export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const numericId = Number(context.params.id)

    if (!numericId || isNaN(numericId)) {
      return NextResponse.json(
        { error: "Invalid lead ID" },
        { status: 400 }
      )
    }

    const lead = await prisma.lead.findUnique({
      where: { id: numericId },
      include: {
        payments: true,
        invoices: true,
        activities: true,
        booking: true,
      },
    })

    if (!lead) {
      return NextResponse.json(
        { error: "Lead not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(serializeLead(lead))

  } catch (error) {
    console.error("GET Lead Error:", error)
    return NextResponse.json(
      { error: "Failed to fetch lead" },
      { status: 500 }
    )
  }
}

// ======================================
// UPDATE LEAD (CRM EDIT)
// ======================================
export async function PATCH(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const numericId = Number(context.params.id)

    if (!numericId || isNaN(numericId)) {
      return NextResponse.json(
        { error: "Invalid lead ID" },
        { status: 400 }
      )
    }

    const body = await req.json()

    if (
      body.stage &&
      !Object.values(LeadStage).includes(body.stage)
    ) {
      return NextResponse.json(
        { error: "Invalid stage value" },
        { status: 400 }
      )
    }

    if (
      body.priority &&
      !Object.values(LeadPriority).includes(body.priority)
    ) {
      return NextResponse.json(
        { error: "Invalid priority value" },
        { status: 400 }
      )
    }

    const updated = await prisma.lead.update({
      where: { id: numericId },
      data: {
        stage: body.stage ?? undefined,
        priority: body.priority ?? undefined,
        notes: body.notes ?? undefined,
        followUpDate: body.followUpDate
          ? new Date(body.followUpDate)
          : undefined,
        followUpCompleted:
          typeof body.followUpCompleted === "boolean"
            ? body.followUpCompleted
            : undefined,
      },
      include: {
        payments: true,
        invoices: true,
        activities: true,
        booking: true,
      },
    })

    return NextResponse.json({
      success: true,
      updated: serializeLead(updated),
    })

  } catch (error) {
    console.error("PATCH Lead Error:", error)
    return NextResponse.json(
      { error: "Update failed" },
      { status: 500 }
    )
  }
}

// ======================================
// SOFT DELETE LEAD
// ======================================
export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const numericId = Number(context.params.id)

    if (!numericId || isNaN(numericId)) {
      return NextResponse.json(
        { error: "Invalid lead ID" },
        { status: 400 }
      )
    }

    await prisma.lead.update({
      where: { id: numericId },
      data: { isArchived: true },
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("DELETE Lead Error:", error)
    return NextResponse.json(
      { error: "Delete failed" },
      { status: 500 }
    )
  }
}