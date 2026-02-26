"use client"

import { useState } from "react"

export default function FollowUpEditor({
  leadId,
  initialDate,
  initialCompleted,
}: {
  leadId: number
  initialDate: Date | null
  initialCompleted: boolean
}) {

  const [date, setDate] = useState(
    initialDate
      ? new Date(initialDate).toISOString().split("T")[0]
      : ""
  )

  const [completed, setCompleted] = useState(initialCompleted)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSave = async () => {
    try {
      setLoading(true)
      setSuccess(false)

      const res = await fetch(
        "/api/admin/leads/update-followup",
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            leadId,
            followUpDate: date || null,
            followUpCompleted: completed,
          }),
        }
      )

      if (!res.ok) throw new Error("Update failed")

      setSuccess(true)

    } catch (err) {
      alert("Failed to update follow-up")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">

      <div>
        <label className="text-sm font-medium text-gray-600">
          Follow-up Date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 border rounded-lg px-3 py-2 w-full"
        />
      </div>

      <label className="flex items-center space-x-2 text-sm">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        <span>Mark as completed</span>
      </label>

      <button
        onClick={handleSave}
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:opacity-90 transition"
      >
        {loading ? "Saving..." : "Save"}
      </button>

      {success && (
        <p className="text-green-600 text-sm">
          Follow-up updated successfully
        </p>
      )}

    </div>
  )
}