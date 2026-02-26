"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

export default function AnalyticsCharts({
  revenue,
  totalLeads,
  wonLeads,
  paidPayments,
  pendingPayments,
}: {
  revenue: number
  totalLeads: number
  wonLeads: number
  paidPayments: number
  pendingPayments: number
}) {

  const leadData = [
    { name: "Total Leads", value: totalLeads },
    { name: "Won Leads", value: wonLeads },
  ]

  const paymentData = [
    { name: "Paid", value: paidPayments },
    { name: "Pending", value: pendingPayments },
  ]

  const COLORS = ["#22c55e", "#facc15"]

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">

      {/* Lead Conversion Chart */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">
          Lead Conversion
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={leadData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Payment Breakdown */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">
          Payment Status
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={paymentData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {paymentData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
}