export const runtime = "nodejs"

import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

function safeCSV(value: any) {
  if (value === null || value === undefined) return ""

  let str = value.toString()

  // Prevent CSV injection
  if (/^[=+\-@]/.test(str)) {
    str = `'${str}`
  }

  // Escape quotes
  str = str.replace(/"/g, '""')

  // Wrap in quotes if needed
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    str = `"${str}"`
  }

  return str
}

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      where: { isArchived: false },
      orderBy: { createdAt: "desc" },
    })

    const headers = [
      "Customer ID",
      "Name",
      "Phone",
      "Email",
      "Category",
      "Type",
      "Location",
      "Guests",
      "Stage",
      "Priority",
      "Contract Amount",
      "Paid Amount",
      "Balance",
      "Created At",
    ]

    const rows = leads.map((l) => [
      safeCSV(l.customerId),
      safeCSV(l.name),
      safeCSV(l.phone),
      safeCSV(l.email || ""),
      safeCSV(l.eventCategory),
      safeCSV(l.eventType || ""),
      safeCSV(l.location || ""),
      safeCSV(l.guests || ""),
      safeCSV(l.stage),
      safeCSV(l.priority),
      safeCSV(l.contractAmount.toNumber()),
      safeCSV(l.paidAmount.toNumber()),
      safeCSV(l.balanceAmount.toNumber()),
      safeCSV(l.createdAt.toISOString()),
    ])

    const csv =
      [headers, ...rows]
        .map((row) => row.join(","))
        .join("\n")

    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": "attachment; filename=leads.csv",
        "Cache-Control": "no-store",
      },
    })

  } catch (error) {
    console.error("Export error:", error)
    return NextResponse.json(
      { error: "Export failed" },
      { status: 500 }
    )
  }
}