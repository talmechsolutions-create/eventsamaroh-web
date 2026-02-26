"use client"

import { useState, useMemo } from "react"
import Link from "next/link"

export default function PayForm() {
  const [totalAmount, setTotalAmount] = useState("")
  const [paymentType, setPaymentType] = useState<"FULL" | "ADVANCE">("FULL")
  const [advanceAmount, setAdvanceAmount] = useState("")
  const [agree, setAgree] = useState(false)

  const contract = Number(totalAmount) || 0
  const advance = Number(advanceAmount) || 0

  const { discount, gst, payable, balance, isValidAdvance } = useMemo(() => {
    let discount = 0
    let gst = 0
    let payable = 0
    let balance = 0
    let isValidAdvance = true

    if (paymentType === "FULL") {
      discount = contract * 0.05
      gst = (contract - discount) * 0.18
      payable = contract - discount + gst
      balance = 0
    } else {
      gst = contract * 0.18

      if (advance > contract || advance <= 0) {
        isValidAdvance = false
      }

      payable = advance
      balance = contract - advance
    }

    return { discount, gst, payable, balance, isValidAdvance }
  }, [contract, paymentType, advance])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!agree) {
      alert("Please accept Terms & Conditions")
      return
    }

    if (!contract) {
      alert("Please enter total amount")
      return
    }

    if (paymentType === "ADVANCE" && !isValidAdvance) {
      alert("Invalid advance amount")
      return
    }

    try {
      const res = await fetch("/api/public/create-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          totalAmount: contract,
          paymentType,
          advanceAmount: advance,
          payableAmount: payable,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        alert(data.error || "Submission failed")
        return
      }

      // redirect to thank you page
      window.location.href = `/thank-you?customerId=${data.customerId}`

    } catch (err) {
      console.error(err)
      alert("Something went wrong")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div>
        <label className="block text-sm font-medium mb-2">
          Total Contract Amount (₹) *
        </label>
        <input
          type="number"
          required
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#b08d57]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Payment Option *
        </label>
        <select
          value={paymentType}
          onChange={(e) => setPaymentType(e.target.value as any)}
          className="w-full border rounded-lg px-4 py-3"
        >
          <option value="FULL">Full Payment (5% Discount)</option>
          <option value="ADVANCE">Advance Payment</option>
        </select>
      </div>

      {paymentType === "ADVANCE" && (
        <div>
          <label className="block text-sm font-medium mb-2">
            Advance Amount (₹) *
          </label>
          <input
            type="number"
            required
            value={advanceAmount}
            onChange={(e) => setAdvanceAmount(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>
      )}

      <div className="bg-[#f4efe8] rounded-2xl p-6 text-sm space-y-2">

        <p className="flex justify-between">
          <span>Total Contract</span>
          <span>₹{contract.toFixed(2)}</span>
        </p>

        {paymentType === "FULL" && (
          <>
            <p className="flex justify-between text-green-700">
              <span>Discount (5%)</span>
              <span>- ₹{discount.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>GST (18%)</span>
              <span>₹{gst.toFixed(2)}</span>
            </p>
            <hr />
            <p className="flex justify-between font-semibold text-lg">
              <span>Final Payable</span>
              <span>₹{payable.toFixed(2)}</span>
            </p>
          </>
        )}

        {paymentType === "ADVANCE" && (
          <>
            <p className="flex justify-between">
              <span>Advance Paying Now</span>
              <span>₹{payable.toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-amber-700">
              <span>Balance Remaining</span>
              <span>₹{balance.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>GST (18%)</span>
              <span>₹{gst.toFixed(2)}</span>
            </p>
          </>
        )}
      </div>

      <div className="flex items-start gap-3 text-sm">
        <input
          type="checkbox"
          checked={agree}
          onChange={() => setAgree(!agree)}
          className="mt-1"
        />
        <p>
          I agree to the{" "}
          <Link
            href="/terms-and-conditions"
            target="_blank"
            className="underline font-medium"
          >
            Terms & Conditions
          </Link>
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-[#b08d57] text-white py-4 rounded-full font-medium hover:opacity-90 transition"
      >
        Proceed to Secure Payment
      </button>

    </form>
  )
}
