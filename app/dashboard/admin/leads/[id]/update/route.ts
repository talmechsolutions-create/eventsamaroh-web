import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const leadId = Number(params.id)

    if (!leadId || isNaN(leadId)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 })
    }

    const body = await req.json()

    const {
      stage,
      status,
      contractAmount,
      followUpDate,
      notes,
    } = body

    const existingLead = await prisma.lead.findUnique({
      where: { id: leadId },
    })

    if (!existingLead) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 })
    }

    // Ensure contract is always a number
    const contract =
      contractAmount !== undefined
        ? Number(contractAmount)
        : existingLead.contractAmount.toNumber()

    // Convert Prisma Decimal properly
    const paid = existingLead.paidAmount.toNumber()

    const balance = contract - paid

    const updated = await prisma.lead.update({
      where: { id: leadId },
      data: {
        stage,
        status,
        contractAmount: contract,
        balanceAmount: balance,
        followUpDate: followUpDate
          ? new Date(followUpDate)
          : null,
        notes,
      },
    })

    await prisma.leadActivity.create({
      data: {
        leadId: leadId,
        type: "LEAD_UPDATED",
        message: "Lead details updated by admin.",
      },
    })

    return NextResponse.json({ success: true, lead: updated })

  } catch (error) {
    console.error("Lead Update Error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}