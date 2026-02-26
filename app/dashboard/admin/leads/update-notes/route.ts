import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { requireAdmin } from "@/lib/auth"

export async function PATCH(req: Request) {
  try {
    await requireAdmin()

    const { leadId, notes } = await req.json()

    if (!leadId) {
      return NextResponse.json(
        { error: "Invalid lead ID" },
        { status: 400 }
      )
    }

    await prisma.$transaction(async (tx) => {
      await tx.lead.update({
        where: { id: leadId },
        data: { notes },
      })

      await tx.leadActivity.create({
        data: {
          leadId,
          type: "NOTE_UPDATED",
          message: "Notes updated",
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