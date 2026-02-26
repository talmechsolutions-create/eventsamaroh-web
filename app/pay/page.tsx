"use client"

import { useState, useMemo } from "react"
import Link from "next/link"

const servicesMap: Record<string, string[]> = {
  "Wedding Planning": [
    "End to End Wedding",
    "Wedding Decor",
    "Photography & Videography",
    "Catering",
    "Venue Booking",
  ],
  "Corporate Events": [
    "End to End Corporate",
    "Conference Setup",
    "Brand Launch",
    "Catering",
    "Stage & AV Setup",
  ],
  "Birthday Celebrations": [
    "End to End Birthday",
    "Theme Decor",
    "Kids Party Setup",
    "Entertainment",
    "Catering",
  ],
  "Private Parties": [
    "End to End Private Party",
    "Decor Setup",
    "Music & DJ",
    "Catering",
  ],
  "Decor & Design": [
    "Complete Decor Package",
    "Wedding Decor",
    "Corporate Decor",
    "Birthday Decor",
  ],
}

export default function PayPage() {
  const [category, setCategory] = useState("")
  const [service, setService] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [location, setLocation] = useState("")
  const [eventDate, setEventDate] = useState("")
  const [totalAmount, setTotalAmount] = useState("")
  const [paymentType, setPaymentType] = useState<"FULL" | "ADVANCE">("FULL")
  const [advanceAmount, setAdvanceAmount] = useState("")
  const [agree, setAgree] = useState(false)

  const contract = Number(totalAmount) || 0
  const advance = Number(advanceAmount) || 0

  const { discount, gst, payable, balance } = useMemo(() => {
    let discount = 0
    let gst = 0
    let payable = 0
    let balance = 0

    if (paymentType === "FULL") {
      discount = contract * 0.05
      gst = (contract - discount) * 0.18
      payable = contract - discount + gst
      balance = 0
    } else {
      gst = contract * 0.18
      payable = advance
      balance = contract - advance
    }

    return { discount, gst, payable, balance }
  }, [contract, paymentType, advance])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const res = await fetch("/api/public/create-booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventCategory: category,
        eventType: service,
        name,
        phone,
        email,
        location,
        eventDate,
        totalAmount: contract,
        payableAmount: payable,
        balance,
        paymentType,
      }),
    })

    const data = await res.json()

    if (data.success) {
      window.location.href = `/thank-you?customerId=${data.customerId}`
    }
  }

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-semibold mb-10 text-center">
        Secure Booking & Payment
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* EVENT CATEGORY */}
        <select
          required
          value={category}
          onChange={(e) => {
            setCategory(e.target.value)
            setService("")
          }}
          className="w-full border rounded-lg px-4 py-3"
        >
          <option value="">Select Event Category *</option>
          {Object.keys(servicesMap).map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        {/* SERVICE */}
        {category && (
          <select
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          >
            <option value="">Select Service *</option>
            {(servicesMap[category] ?? []).map((srv) => (
              <option key={srv}>{srv}</option>
            ))}
          </select>
        )}

        {/* CUSTOMER DETAILS */}
        <input
          required
          placeholder="Full Name *"
          className="w-full border rounded-lg px-4 py-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          required
          placeholder="Phone *"
          className="w-full border rounded-lg px-4 py-3"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          required
          placeholder="Email *"
          className="w-full border rounded-lg px-4 py-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          required
          placeholder="Location *"
          className="w-full border rounded-lg px-4 py-3"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          required
          type="date"
          className="w-full border rounded-lg px-4 py-3"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />

        {/* PAYMENT SECTION */}
        <input
          required
          type="number"
          placeholder="Total Contract Amount (₹) *"
          className="w-full border rounded-lg px-4 py-3"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
        />

        <select
          value={paymentType}
          onChange={(e) => setPaymentType(e.target.value as "FULL" | "ADVANCE")}
          className="w-full border rounded-lg px-4 py-3"
        >
          <option value="FULL">Full Payment (5% Discount)</option>
          <option value="ADVANCE">Advance Payment</option>
        </select>

        {paymentType === "ADVANCE" && (
          <input
            required
            type="number"
            placeholder="Advance Amount (₹)"
            className="w-full border rounded-lg px-4 py-3"
            value={advanceAmount}
            onChange={(e) => setAdvanceAmount(e.target.value)}
          />
        )}

        {/* SUMMARY */}
        <div className="bg-[#f4efe8] p-6 rounded-xl text-sm space-y-2">
          <p>Total Contract: ₹{contract.toFixed(2)}</p>

          {paymentType === "FULL" ? (
            <>
              <p>Discount (5%): ₹{discount.toFixed(2)}</p>
              <p>GST (18%): ₹{gst.toFixed(2)}</p>
              <p className="font-semibold text-lg">
                Final Payable: ₹{payable.toFixed(2)}
              </p>
            </>
          ) : (
            <>
              <p>Advance Payment: ₹{payable.toFixed(2)}</p>
              <p>Balance Remaining: ₹{balance.toFixed(2)}</p>
              <p>GST (18%): ₹{gst.toFixed(2)}</p>
            </>
          )}
        </div>

        {/* LEGAL */}
        <div className="flex gap-3 text-sm">
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
            required
          />
          <p>
            I agree to the{" "}
            <Link
              href="/terms-and-conditions"
              target="_blank"
              className="underline"
            >
              Terms & Conditions
            </Link>
          </p>
        </div>

        <button
          disabled={!agree}
          className="w-full bg-[#b08d57] text-white py-4 rounded-full"
        >
          Proceed to Secure Payment
        </button>

      </form>
    </div>
  )
}