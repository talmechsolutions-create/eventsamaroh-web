"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function NewLeadPage() {
  const router = useRouter()

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    eventCategory: "",
    eventDate: "",
    location: "",
    contractAmount: "",
    source: "Walk-in",
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch("/api/admin/leads/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    const data = await res.json()
    setLoading(false)

    if (data.success) {
      router.push(`/dashboard/admin/leads/${data.lead.id}`)
    } else {
      alert(data.error || "Something went wrong")
    }
  }

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">
        Add New Lead
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow p-6 space-y-4"
      >
        <input
          required
          placeholder="Full Name"
          className="w-full border rounded-lg px-4 py-2"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          required
          placeholder="Phone"
          className="w-full border rounded-lg px-4 py-2"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <input
          placeholder="Email"
          className="w-full border rounded-lg px-4 py-2"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          required
          placeholder="Event Category"
          className="w-full border rounded-lg px-4 py-2"
          value={form.eventCategory}
          onChange={(e) =>
            setForm({ ...form, eventCategory: e.target.value })
          }
        />

        <input
          type="date"
          className="w-full border rounded-lg px-4 py-2"
          value={form.eventDate}
          onChange={(e) =>
            setForm({ ...form, eventDate: e.target.value })
          }
        />

        <input
          placeholder="Location"
          className="w-full border rounded-lg px-4 py-2"
          value={form.location}
          onChange={(e) =>
            setForm({ ...form, location: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Contract Amount"
          className="w-full border rounded-lg px-4 py-2"
          value={form.contractAmount}
          onChange={(e) =>
            setForm({ ...form, contractAmount: e.target.value })
          }
        />

        <button
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg"
        >
          {loading ? "Creating..." : "Create Lead"}
        </button>
      </form>
    </div>
  )
}