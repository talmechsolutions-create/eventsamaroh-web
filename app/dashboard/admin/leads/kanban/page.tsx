import { prisma } from "@/lib/prisma"
import KanbanBoard from "./KanbanBoard"

export default async function KanbanPage() {

  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
  })

  // Serialize decimals
  const safeLeads = leads.map((lead) => ({
    ...lead,
    contractAmount: Number(lead.contractAmount),
    paidAmount: Number(lead.paidAmount),
    balanceAmount: Number(lead.balanceAmount),
  }))

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Pipeline Board</h1>
      <KanbanBoard leads={safeLeads} />
    </div>
  )
}