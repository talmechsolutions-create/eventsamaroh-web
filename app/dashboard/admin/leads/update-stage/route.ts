import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { requireAdmin } from "@/lib/auth"
import { LeadStage } from "@prisma/client"

export async function PATCH(req: Request) {
  try {
    await requireAdmin()

    const { leadId, stage } = await req.json()

    if (!leadId || !Object.values(LeadStage).includes(stage)) {
      return NextResponse.json(
        { error: "Invalid data" },
        { status: 400 }
      )
    }

    await prisma.$transaction(async (tx) => {
      await tx.lead.update({
        where: { id: leadId },
        data: { stage },
      })

      await tx.leadActivity.create({
        data: {
          leadId,
          type: "STAGE_CHANGE",
          message: `Stage updated to ${stage}`,
        },
      })
    })

    return NextResponse.json({ success: true })

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Update failed" },
      { status: 400 }
    )
  }
}