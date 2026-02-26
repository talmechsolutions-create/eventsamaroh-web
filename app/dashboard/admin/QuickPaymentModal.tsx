"use client"

import { useState } from "react"

type Lead = {
  id: number
  name: string
  phone: string
}

export default function QuickPaymentModal() {
  const [open, setOpen] = useState(false)

  const [search, setSearch] = useState("")
  const [results, setResults] = useState<Lead[]>([])
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)

  const [paymentType, setPaymentType] = useState<"FULL" | "ADVANCE">("FULL")
  const [amount, setAmount] = useState("")
  const [loading, setLoading] = useState(false)
  const [paymentLink, setPaymentLink] = useState<string | null>(null)

  // 🔍 Search Leads
  const searchLeads = async (value: string) => {
    setSearch(value)
    setSelectedLead(null)

    if (value.length < 2) {
      setResults([])
      return
    }

    const res = await fetch(`/api/leads?search=${value}`)
    const data = await res.json()

    setResults(data)
  }

  // 💳 Generate Payment
  const generatePayment = async () => {
    if (!selectedLead) {
      alert("Please select a lead")
      return
    }

    try {
      setLoading(true)

      const res = await fetch("/api/admin/generate-payment-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadId: selectedLead.id,
          paymentType,
          amount: paymentType === "ADVANCE" ? Number(amount) : undefined,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setPaymentLink(data.paymentLink)
      } else {
        alert(data.error)
      }
    } catch (err) {
      console.error(err)
      alert("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setOpen(true)}
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
      >
        + Quick Generate Payment
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[520px] rounded-xl shadow-xl p-6 relative">

            {/* Close */}
            <button
              onClick={() => {
                setOpen(false)
                setPaymentLink(null)
                setSelectedLead(null)
                setSearch("")
                setResults([])
              }}
              className="absolute top-3 right-3 text-gray-500"
            >
              ✕
            </button>

            <h2 className="text-lg font-semibold mb-5">
              Generate Payment Link
            </h2>

            {/* 🔍 Lead Search */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search by name or phone..."
                value={search}
                onChange={(e) => searchLeads(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />

              {results.length > 0 && (
                <div className="absolute bg-white border w-full mt-1 rounded shadow max-h-40 overflow-y-auto z-10">
                  {results.map((lead) => (
                    <div
                      key={lead.id}
                      onClick={() => {
                        setSelectedLead(lead)
                        setSearch(`${lead.name} - ${lead.phone}`)
                        setResults([])
                      }}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <p className="font-medium">{lead.name}</p>
                      <p className="text-xs text-gray-500">{lead.phone}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {selectedLead && (
              <div className="mb-4 text-sm text-gray-600">
                Selected Lead ID: {selectedLead.id}
              </div>
            )}

            {/* Payment Type */}
            <select
              value={paymentType}
              onChange={(e) =>
                setPaymentType(e.target.value as "FULL" | "ADVANCE")
              }
              className="w-full border px-3 py-2 rounded mb-4"
            >
              <option value="FULL">Full Payment</option>
              <option value="ADVANCE">Advance Payment</option>
            </select>

            {/* Advance Amount */}
            {paymentType === "ADVANCE" && (
              <input
                type="number"
                placeholder="Advance Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border px-3 py-2 rounded mb-4"
              />
            )}

            {/* Generate Button */}
            <button
              onClick={generatePayment}
              disabled={loading}
              className="w-full bg-black text-white py-2 rounded-lg"
            >
              {loading ? "Generating..." : "Generate Link"}
            </button>

            {/* Result */}
            {paymentLink && (
              <div className="mt-6 space-y-3">
                <input
                  value={paymentLink}
                  readOnly
                  className="w-full border px-3 py-2 rounded text-sm"
                />

                <button
                  onClick={() =>
                    navigator.clipboard.writeText(paymentLink)
                  }
                  className="w-full bg-gray-800 text-white py-2 rounded"
                >
                  Copy Link
                </button>

                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    "Please complete your payment: " + paymentLink
                  )}`}
                  target="_blank"
                  className="block text-center bg-green-600 text-white py-2 rounded"
                >
                  Share via WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}