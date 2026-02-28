"use client"

import { useState } from "react"
import { LeadStage } from "@prisma/client"

export default function LeftPanelEditable({
  lead,
}: {
  lead: any
}) {

  const [stage, setStage] = useState<LeadStage>(lead.stage)
  const [notes, setNotes] = useState(lead.notes || "")
  const [savingStage, setSavingStage] = useState(false)
  const [savingNotes, setSavingNotes] = useState(false)

  const updateStage = async (newStage: LeadStage) => {
    setSavingStage(true)
    await fetch("/api/admin/leads/update-stage", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        leadId: lead.id,
        stage: newStage,
      }),
    })
    setSavingStage(false)
  }

  const updateNotes = async () => {
    setSavingNotes(true)
    await fetch("/api/admin/leads/update-notes", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        leadId: lead.id,
        notes,
      }),
    })
    setSavingNotes(false)
  }

  return (
    <div className="space-y-6">

      {/* Stage Editor */}
      <div>
        <p className="text-xs text-gray-500 mb-1">Stage</p>
        <select
          value={stage}
          onChange={(e) => {
            const value = e.target.value as LeadStage
            setStage(value)
            updateStage(value)
          }}
          className="border rounded-lg px-3 py-2 w-full text-sm"
        >
          {Object.values(LeadStage).map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {savingStage && (
          <p className="text-xs text-gray-400 mt-1">
            Updating...
          </p>
        )}
      </div>

      {/* Notes Editor */}
      <div>
        <p className="text-xs text-gray-500 mb-1">
          Internal Notes
        </p>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          className="border rounded-lg px-3 py-2 w-full text-sm"
        />
        <button
          onClick={updateNotes}
          disabled={savingNotes}
          className="mt-2 bg-black text-white px-4 py-2 rounded-lg text-xs"
        >
          {savingNotes ? "Saving..." : "Save Notes"}
        </button>
      </div>

    </div>
  )
}