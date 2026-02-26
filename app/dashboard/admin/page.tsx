import prisma from "@/lib/prisma"
import { Prisma } from "@prisma/client"
import AnalyticsCharts from "./AnalyticsCharts"
import Link from "next/link"
import QuickPaymentModal from "./QuickPaymentModal"

export default async function DashboardPage() {

  const [
    totalLeads,
    totalBookings,
    totalPayments,
    totalInvoices,
    paidPayments,
    pendingPayments,
    wonLeads,
  ] = await Promise.all([
    prisma.lead.count(),
    prisma.booking.count(),
    prisma.payment.count(),
    prisma.invoice.count(),
    prisma.payment.findMany({
      where: { status: "PAID", approvedByAdmin: true },
    }),
    prisma.payment.count({
      where: { status: "PENDING" },
    }),
    prisma.lead.count({
      where: { stage: "WON" },
    }),
  ])

  const totalRevenue = paidPayments.reduce(
    (sum, p) => sum + Number(p.finalAmount),
    0
  )

  const conversionRate =
    totalLeads > 0
      ? ((wonLeads / totalLeads) * 100).toFixed(1)
      : 0

  return (
    <div className="space-y-10">

      <h1 className="text-3xl font-bold">
        Dashboard Overview
      </h1>

      {/* ================= STATS CARDS ================= */}

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard title="Total Revenue" value={`₹ ${totalRevenue.toLocaleString()}`} />

        <StatCard title="Leads" value={totalLeads} />

        <StatCard title="Bookings" value={totalBookings} />

        <StatCard title="Conversion Rate" value={`${conversionRate}%`} />

      </div>

      {/* ================= ANALYTICS ================= */}

      <AnalyticsCharts
        revenue={totalRevenue}
        totalLeads={totalLeads}
        wonLeads={wonLeads}
        paidPayments={paidPayments.length}
        pendingPayments={pendingPayments}
      />

      <div className="mt-8 bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>

        <div className="flex gap-4 flex-wrap">
          <Link
            href="/dashboard/admin/leads/new"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            + Create Lead
          </Link>

          <Link
            href="/dashboard/admin/payments"
            className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition"
          >
            + Generate Payment
          </Link>

          <Link
            href="/dashboard/admin/leads"
            className="bg-gray-800 text-white px-5 py-3 rounded-lg hover:bg-gray-900 transition"
          >
            Manage Leads
          </Link>

          <QuickPaymentModal />
        </div>
      </div>

    </div>
  )
}

function StatCard({ title, value }: { title: string; value: any }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  )
}