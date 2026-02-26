export const runtime = "nodejs"

import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import { LeadStage, LeadStatus } from "@prisma/client"

export async function PATCH(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params
    const leadId = Number(id)

    if (!leadId || isNaN(leadId)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 })
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
      body.status &&
      !Object.values(LeadStatus).includes(body.status)
    ) {
      return NextResponse.json(
        { error: "Invalid status value" },
        { status: 400 }
      )
    }

    const updated = await prisma.lead.update({
      where: { id: leadId },
      data: {
        stage: body.stage,
        status: body.status,
      },
    })

    const safeUpdated = {
      ...updated,
      contractAmount: updated.contractAmount.toNumber(),
      paidAmount: updated.paidAmount.toNumber(),
      balanceAmount: updated.balanceAmount.toNumber(),
    }

    return NextResponse.json(safeUpdated)

  } catch (error) {
    console.error("Lead Update Error:", error)
    return NextResponse.json(
      { error: "Update failed" },
      { status: 500 }
    )
  }
}