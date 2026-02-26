import { prisma } from "@/lib/prisma"

export default async function AdminKPI() {
  const [totalRevenue, totalLeads, totalBookings, pendingPayments] =
    await Promise.all([
      prisma.payment.aggregate({
        _sum: { finalAmount: true },
        where: { status: "PAID" },
      }),
      prisma.lead.count(),
      prisma.booking.count(),
      prisma.payment.count({
        where: { status: "PENDING" },
      }),
    ])

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

      <KPI
        label="Total Revenue"
        value={`₹ ${Number(totalRevenue._sum.finalAmount || 0).toLocaleString()}`}
      />

      <KPI
        label="Total Leads"
        value={totalLeads}
      />

      <KPI
        label="Bookings"
        value={totalBookings}
      />

      <KPI
        label="Pending Payments"
        value={pendingPayments}
      />

    </div>
  )
}

function KPI({ label, value }: { label: string; value: any }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <p className="text-xs text-gray-500 uppercase tracking-wide">
        {label}
      </p>
      <p className="text-2xl font-bold text-gray-900 mt-2">
        {value}
      </p>
    </div>
  )
}