"use client"

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
} from "recharts"

const COLORS: string[] = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"]

type StageCount = {
  stage: string
  _count: number
}

type PaymentStatusCount = {
  status: string
  _count: number
}

type AnalyticsProps = {
  totalLeads: number
  totalBookings: number
  totalRevenue: number
  conversionRate: number | string
  stageCounts: StageCount[]
  paymentStatus: PaymentStatusCount[]
  avgDeal: number | string
}

export default function AnalyticsClient({
  totalLeads,
  totalBookings,
  totalRevenue,
  conversionRate,
  stageCounts,
  paymentStatus,
  avgDeal,
}: AnalyticsProps) {

  const stageData = stageCounts.map((s) => ({
    name: s.stage,
    value: s._count,
  }))

  const paymentData = paymentStatus.map((p) => ({
    name: p.status,
    value: p._count,
  }))

  const bookingRate =
    totalLeads > 0
      ? ((totalBookings / totalLeads) * 100).toFixed(1)
      : "0"

  return (
    <div className="space-y-12">

      <h1 className="text-3xl font-bold">
        Enterprise Analytics
      </h1>

      {/* KPI CARDS */}
      <div className="grid md:grid-cols-4 gap-6">

        <KPI title="Revenue" value={`₹ ${totalRevenue.toLocaleString()}`} />
        <KPI title="Leads" value={totalLeads} />
        <KPI title="Conversion" value={`${conversionRate}%`} />
        <KPI title="Booking Rate" value={`${bookingRate}%`} />

      </div>

      {/* CHARTS */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* Lead Funnel */}
        <div className="bg-white rounded-2xl shadow p-8 h-[350px]">
          <h2 className="font-semibold mb-6 text-lg">
            Lead Stage Funnel
          </h2>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Payment Status */}
        <div className="bg-white rounded-2xl shadow p-8 h-[350px]">
          <h2 className="font-semibold mb-6 text-lg">
            Payment Status
          </h2>

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={paymentData}
                dataKey="value"
                outerRadius={120}
                label
              >
                {paymentData.map((entry, index: number) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* EXTRA METRICS */}
      <div className="grid md:grid-cols-2 gap-6">

        <Insight
          title="Average Deal Value"
          value={`₹ ${Number(avgDeal).toLocaleString()}`}
        />

        <Insight
          title="Total Bookings"
          value={totalBookings}
        />

      </div>

    </div>
  )
}

/* ================= KPI ================= */

type KPIProps = {
  title: string
  value: string | number
}

function KPI({ title, value }: KPIProps) {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl shadow-lg p-6">
      <p className="text-sm opacity-80">{title}</p>
      <p className="text-3xl font-bold mt-3">{value}</p>
    </div>
  )
}

/* ================= INSIGHT ================= */

type InsightProps = {
  title: string
  value: string | number
}

function Insight({ title, value }: InsightProps) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  )
}