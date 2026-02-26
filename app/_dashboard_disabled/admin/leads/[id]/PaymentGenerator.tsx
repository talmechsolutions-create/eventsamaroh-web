"use client"

import { useState } from "react"

export default function PaymentGenerator({ leadId }: { leadId: number }) {
  const [loading, setLoading] = useState(false)
  const [paymentLink, setPaymentLink] = useState<string | null>(null)
  const [amount, setAmount] = useState("")

  const generatePayment = async (type: "FULL" | "ADVANCE") => {
    try {
      setLoading(true)

      const res = await fetch("/api/admin/generate-payment-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadId,
          paymentType: type,
          amount: type === "ADVANCE" ? Number(amount) : undefined,
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
    <div className="bg-white shadow rounded-xl p-6 space-y-4">
      <h2 className="text-lg font-semibold">Generate Payment</h2>

      <div className="flex gap-3">
        <button
          onClick={() => generatePayment("FULL")}
          disabled={loading}
          className="bg-black text-white px-4 py-2 rounded"
        >
          {loading ? "Generating..." : "Generate Full Payment"}
        </button>
      </div>

      <div className="flex gap-3 items-center">
        <input
          type="number"
          placeholder="Advance amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border px-3 py-2 rounded w-40"
        />
        <button
          onClick={() => generatePayment("ADVANCE")}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Generate Advance
        </button>
      </div>

      {paymentLink && (
        <div className="mt-4 space-y-2">
          <p className="text-sm text-gray-500">Payment Link</p>

          <div className="flex gap-2 items-center">
            <input
              value={paymentLink}
              readOnly
              className="border px-3 py-2 rounded w-full text-sm"
            />

            <button
              onClick={() => navigator.clipboard.writeText(paymentLink)}
              className="bg-gray-800 text-white px-3 py-2 rounded"
            >
              Copy
            </button>
          </div>

          <a
            href={`https://wa.me/?text=${encodeURIComponent(
              "Please complete your payment: " + paymentLink
            )}`}
            target="_blank"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded"
          >
            Share via WhatsApp
          </a>
        </div>
      )}
    </div>
  )
}