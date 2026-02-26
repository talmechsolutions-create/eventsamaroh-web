import { prisma } from "@/lib/prisma"
import { Prisma } from "@prisma/client"

export async function getLeadPaymentSummary(leadId: number) {
  const lead = await prisma.lead.findUnique({
    where: { id: leadId },
    include: { payments: true },
  })

  if (!lead) {
    throw new Error("Lead not found")
  }

  const totalPaid = lead.payments
    .filter((p) => p.status === "PAID")
    .reduce((sum, p) => {
      return sum.plus(p.finalAmount)
    }, new Prisma.Decimal(0))

  const contractAmount = new Prisma.Decimal(lead.contractAmount)

  let remaining = contractAmount.minus(totalPaid)

  if (remaining.lessThan(0)) {
    remaining = new Prisma.Decimal(0)
  }

  // Convert safely to number for frontend/API usage
  return {
    contractAmount: contractAmount.toNumber(),
    totalPaid: totalPaid.toNumber(),
    remaining: remaining.toNumber(),
  }
}