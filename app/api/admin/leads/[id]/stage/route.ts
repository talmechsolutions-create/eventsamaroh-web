export const runtime = "nodejs"

import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import { LeadStage } from "@prisma/client"

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

    const { stage } = await req.json()

    if (!Object.values(LeadStage).includes(stage)) {
      return NextResponse.json(
        { error: "Invalid stage value" },
        { status: 400 }
      )
    }

    await prisma.lead.update({
      where: { id: leadId },
      data: { stage },
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("Stage Update Error:", error)
    return NextResponse.json({ error: "Failed" }, { status: 500 })
  }
}