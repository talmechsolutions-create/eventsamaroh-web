import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { requireAdmin } from "@/lib/auth"
import { Prisma } from "@prisma/client"

export async function PATCH(req: Request) {
  try {
    await requireAdmin()

    const body = await req.json()
    const leadId = Number(body.leadId)

    if (!leadId) {
      return NextResponse.json(
        { error: "Invalid lead ID" },
        { status: 400 }
      )
    }

    const result = await prisma.$transaction(async (tx) => {

      const updatedLead = await tx.lead.update({
        where: { id: leadId },
        data: {
          followUpDate: body.followUpDate
            ? new Date(body.followUpDate)
            : null,
          followUpCompleted: Boolean(body.followUpCompleted),
        },
      })

      await tx.leadActivity.create({
        data: {
          leadId,
          type: body.followUpCompleted
            ? "FOLLOWUP_COMPLETED"
            : "FOLLOWUP_SET",
          message: body.followUpCompleted
            ? "Follow-up marked as completed"
            : `Follow-up scheduled for ${body.followUpDate}`,
        },
      })

      return updatedLead
    })

    return NextResponse.json({ success: true, result })

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Update failed" },
      { status: 400 }
    )
  }
}