import { PrismaClient } from "@prisma/client"

export async function generateInvoiceNumber(prisma: PrismaClient) {
  const now = new Date()
  const year = now.getFullYear()

  const financialYear = String(year)

  const sequence = await prisma.invoiceSequence.upsert({
    where: { financialYear },
    update: {
      lastNumber: { increment: 1 },
    },
    create: {
      financialYear,
      lastNumber: 1,
    },
  })

  const paddedNumber = String(sequence.lastNumber).padStart(4, "0")

  return `ES/${financialYear}/${paddedNumber}`
}