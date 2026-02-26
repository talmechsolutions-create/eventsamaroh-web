export const runtime = "nodejs"

import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { PaymentStatus } from "@prisma/client"

export async function GET() {
  const totalRevenueAgg = await prisma.payment.aggregate({
    _sum: { finalAmount: true },
    where: {
      status: PaymentStatus.PAID,
      approvedByAdmin: true,
    },
  })

  const pendingRevenueAgg = await prisma.payment.aggregate({
    _sum: { finalAmount: true },
    where: {
      status: PaymentStatus.PENDING,
    },
  })

  const totalLeads = await prisma.lead.count()

  const bookedLeads = await prisma.lead.count({
    where: {
      booking: {
        isNot: null,
      },
    },
  })

  const totalRevenue = totalRevenueAgg._sum.finalAmount
    ? totalRevenueAgg._sum.finalAmount.toNumber()
    : 0

  const pendingRevenue = pendingRevenueAgg._sum.finalAmount
    ? pendingRevenueAgg._sum.finalAmount.toNumber()
    : 0

  return NextResponse.json({
    totalRevenue,
    pendingRevenue,
    totalLeads,
    bookedLeads,
    conversionRate:
      totalLeads > 0
        ? Number(((bookedLeads / totalLeads) * 100).toFixed(2))
        : 0,
  })
}