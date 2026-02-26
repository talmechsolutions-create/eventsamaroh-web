import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import LeadDetailClient from "./LeadDetailClient"

export const dynamic = "force-dynamic"

type PageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function LeadDetailPage({ params }: PageProps) {
  // ✅ unwrap params (Next.js 16 requirement)
  const { id: idParam } = await params

  const id = Number(idParam)

  if (!Number.isInteger(id) || id <= 0) {
    notFound()
  }

  const lead = await prisma.lead.findUnique({
    where: { id },
    include: {
      payments: true,
      invoices: true,
      booking: true,
      activities: true,
    },
  })

  if (!lead) {
    notFound()
  }

  const serializedLead = {
    ...lead,
    contractAmount: Number(lead.contractAmount),
    paidAmount: Number(lead.paidAmount),
    balanceAmount: Number(lead.balanceAmount),
    payments: lead.payments.map((p) => ({
      ...p,
      baseAmount: Number(p.baseAmount),
      discount: Number(p.discount),
      gstAmount: Number(p.gstAmount),
      finalAmount: Number(p.finalAmount),
    })),
    invoices: lead.invoices.map((inv) => ({
      ...inv,
      subtotal: Number(inv.subtotal),
      discount: Number(inv.discount),
      gstRate: Number(inv.gstRate),
      gstAmount: Number(inv.gstAmount),
      totalAmount: Number(inv.totalAmount),
    })),
  }

  return <LeadDetailClient lead={serializedLead} />
}