"use client"

import { useState } from "react"
import PaymentGenerator from "./PaymentGenerator"

type LeadDetailProps = {
  lead: any
}

export default function LeadDetailClient({ lead }: LeadDetailProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "payments" | "activity">("overview")

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            {lead.name}
          </h1>
          <p className="text-gray-500 mt-1">
            {lead.phone} • {lead.email}
          </p>
        </div>

        <div className="flex gap-3">
          <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700">
            {lead.status}
          </span>
          <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
            {lead.stage}
          </span>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-xl p-6">
          <p className="text-sm text-gray-500">Contract</p>
          <p className="text-2xl font-semibold mt-2">
            ₹{lead.contractAmount}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <p className="text-sm text-gray-500">Paid</p>
          <p className="text-2xl font-semibold mt-2 text-green-600">
            ₹{lead.paidAmount}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 border-2 border-red-500">
          <p className="text-sm text-gray-500">Balance</p>
          <p className="text-2xl font-semibold mt-2 text-red-600">
            ₹{lead.balanceAmount}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b mt-8">
        {["overview", "payments", "activity"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`pb-3 capitalize ${
              activeTab === tab
                ? "border-b-2 border-black font-semibold"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Payment History Tab */}
      {activeTab === "payments" && (
        <div className="bg-white shadow rounded-xl p-6 mt-6">
          <h2 className="text-lg font-semibold mb-4">Payment History</h2>

          {lead.payments.length === 0 ? (
            <p className="text-gray-500 text-sm">No payments yet.</p>
          ) : (
            <div className="space-y-4">
              {lead.payments.map((payment: any) => (
                <div
                  key={payment.id}
                  className="flex justify-between items-center border p-4 rounded-lg"
                >
                  <div>
                    <p className="font-medium">
                      ₹{payment.finalAmount}
                    </p>
                    <p className="text-sm text-gray-500">
                      Type: {payment.type}
                    </p>
                    <p className="text-xs text-gray-400">
                      {payment.createdAt
                        ? new Date(payment.createdAt).toLocaleString()
                        : ""}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      payment.status === "PAID"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {payment.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Lead Information */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Lead Details</h2>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="text-gray-500">Event Category</p>
            <p className="font-medium">{lead.eventCategory}</p>
          </div>

          <div>
            <p className="text-gray-500">Event Date</p>
            <p className="font-medium">
              {lead.eventDate
                ? new Date(lead.eventDate).toLocaleDateString()
                : "—"}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Location</p>
            <p className="font-medium">{lead.location || "—"}</p>
          </div>

          <div>
            <p className="text-gray-500">Source</p>
            <p className="font-medium">{lead.source}</p>
          </div>
        </div>
      </div>

      {/* Payment Generator */}
      <PaymentGenerator leadId={lead.id} />
    </div>
  )
}