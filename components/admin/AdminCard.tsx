"use client"

import AdminActions from "./AdminActions"

export default function AdminCard({ lead }: any) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 border">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-semibold">{lead.name}</h2>
          <p className="text-sm text-gray-500">{lead.customerId}</p>
        </div>

        <span
          className={`px-3 py-1 text-xs rounded-full font-medium ${
            lead.status === "CONFIRMED"
              ? "bg-green-100 text-green-700"
              : lead.status === "CANCELLED"
              ? "bg-red-100 text-red-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {lead.status}
        </span>
      </div>

      {/* Event Info */}
      <div className="text-sm text-gray-700 mb-3">
        <p><strong>Event:</strong> {lead.eventCategory}</p>
        <p><strong>Service:</strong> {lead.eventType}</p>
        <p><strong>Location:</strong> {lead.location || "-"}</p>
      </div>

      {/* Financial */}
      <div className="text-sm text-gray-700 mb-4">
        <p>Total: ₹{lead.contractAmount}</p>
        <p>Paid: ₹{lead.paidAmount}</p>
        <p>Balance: ₹{lead.balanceAmount}</p>
      </div>

      <AdminActions lead={lead} />
    </div>
  )
}
