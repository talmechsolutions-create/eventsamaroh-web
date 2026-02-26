import { prisma } from "@/lib/prisma"
import AnalyticsClient from "./AnalyticsClient"

export default async function AnalyticsPage() {

  /* ================= BASIC COUNTS ================= */

  const totalLeads = await prisma.lead.count()
  const totalBookings = await prisma.booking.count()

  const paidPayments = await prisma.payment.findMany({
    where: { status: "PAID" },
  })

  const totalRevenue = paidPayments.reduce(
    (sum, p) => sum + Number(p.finalAmount),
    0
  )

  /* ================= CONVERSION ================= */

  const wonLeads = await prisma.lead.count({
    where: { stage: "WON" },
  })

  const conversionRate =
    totalLeads > 0 ? ((wonLeads / totalLeads) * 100).toFixed(1) : "0"

  /* ================= STAGE BREAKDOWN ================= */

  const stageCounts = await prisma.lead.groupBy({
    by: ["stage"],
    _count: true,
  })

  /* ================= PAYMENT STATUS ================= */

  const paymentStatus = await prisma.payment.groupBy({
    by: ["status"],
    _count: true,
  })

  /* ================= AVERAGE DEAL ================= */

  const avgDeal =
    paidPayments.length > 0
      ? (totalRevenue / paidPayments.length).toFixed(0)
      : "0"

  return (
    <AnalyticsClient
      totalLeads={totalLeads}
      totalBookings={totalBookings}
      totalRevenue={totalRevenue}
      conversionRate={conversionRate}
      stageCounts={stageCounts}
      paymentStatus={paymentStatus}
      avgDeal={avgDeal}
    />
  )
}