"use client"

import { useState } from "react"

export default function AdminActions({ lead }: any) {
  const [loading, setLoading] = useState(false)

  async function updateStatus(status: string) {
    setLoading(true)

    await fetch("/api/admin/update-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        leadId: lead.id,
        status,
      }),
    })

    location.reload()
  }

  async function verifyPayment() {
    setLoading(true)

    await fetch("/api/admin/verify-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ leadId: lead.id }),
    })

    location.reload()
  }

  return (
    <div className="flex gap-3">
      <button
        disabled={loading}
        onClick={() => updateStatus("CONFIRMED")}
        className="bg-green-600 text-white px-4 py-2 rounded-lg"
      >
        Approve
      </button>

      <button
        disabled={loading}
        onClick={() => updateStatus("CANCELLED")}
        className="bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Cancel
      </button>

      <button
        disabled={loading}
        onClick={verifyPayment}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Verify Payment
      </button>
    </div>
  )
}
