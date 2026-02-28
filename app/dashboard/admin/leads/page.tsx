import { prisma } from "@/lib/prisma"
import LeadsTable from "./LeadsTable"
import Link from "next/link"

export default async function LeadsPage() {

  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
    include: { booking: true },
  })

  // 🔥 SANITIZE DECIMAL + DATE FIELDS
  const safeLeads = leads.map((lead) => ({
    ...lead,
    contractAmount: Number(lead.contractAmount),
    paidAmount: Number(lead.paidAmount),
    balanceAmount: Number(lead.balanceAmount),
    followUpDate: lead.followUpDate
      ? lead.followUpDate.toISOString()
      : null,
    createdAt: lead.createdAt.toISOString(),
    updatedAt: lead.updatedAt.toISOString(),
    booking: lead.booking
      ? {
          ...lead.booking,
          confirmedAt: lead.booking.confirmedAt.toISOString(),
        }
      : null,
  }))

  return (
    <div className="space-y-8">
      
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Leads CRM</h1>

        <Link
          href="/dashboard/admin/leads/new"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Lead
        </Link>
      </div>

      <LeadsTable leads={safeLeads} />
    </div>
  )
}