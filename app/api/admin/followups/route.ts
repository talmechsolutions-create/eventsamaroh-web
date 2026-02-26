import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function GET() {
  const now = new Date()

  const overdue = await prisma.lead.findMany({
    where: {
      followUpDate: { lte: now },
      status: { not: "CONFIRMED" },
    },
  })

  const safeOverdue = overdue.map((lead) => ({
    ...lead,
    contractAmount: lead.contractAmount.toNumber(),
    paidAmount: lead.paidAmount.toNumber(),
    balanceAmount: lead.balanceAmount.toNumber(),
  }))

  return NextResponse.json(safeOverdue)
}