"use client"

import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult
} from "@hello-pangea/dnd"
import { useState } from "react"

const stages = [
  "NEW",
  "CONTACTED",
  "QUOTED",
  "NEGOTIATION",
  "WON",
  "LOST"
]

const stageColors: Record<string, string> = {
  NEW: "bg-gray-100 text-gray-700",
  CONTACTED: "bg-blue-100 text-blue-700",
  QUOTED: "bg-yellow-100 text-yellow-700",
  NEGOTIATION: "bg-purple-100 text-purple-700",
  WON: "bg-green-100 text-green-700",
  LOST: "bg-red-100 text-red-700",
}

export default function KanbanBoard({ leads }: { leads: any[] }) {

  const [items, setItems] = useState(leads)
  const [loadingId, setLoadingId] = useState<number | null>(null)

  function groupByStage() {
    const grouped: Record<string, any[]> = {}

    stages.forEach(stage => {
      grouped[stage] = items.filter(lead => lead.stage === stage)
    })

    return grouped
  }

  async function handleDragEnd(result: DropResult) {
    if (!result.destination) return

    const leadId = Number(result.draggableId)
    const newStage = result.destination.droppableId

    // Optimistic update
    const updated = items.map(lead =>
      lead.id === leadId
        ? { ...lead, stage: newStage }
        : lead
    )

    setItems(updated)
    setLoadingId(leadId)

    try {
      await fetch(`/api/admin/leads/${leadId}/stage`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stage: newStage }),
      })
    } catch (error) {
      console.error("Stage update failed")
    } finally {
      setLoadingId(null)
    }
  }

  const grouped = groupByStage()

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-6">

        {stages.map(stage => {

          // ✅ FIXED HERE (safe fallback)
          const columnLeads = grouped[stage] ?? []

          const totalRevenue = columnLeads.reduce(
            (sum, l) => sum + Number(l.contractAmount),
            0
          )

          return (
            <Droppable droppableId={stage} key={stage}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 min-h-[500px]"
                >

                  {/* HEADER */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between">

                      <h2 className={`px-3 py-1 rounded-full text-xs font-semibold ${stageColors[stage]}`}>
                        {stage}
                      </h2>

                      <span className="text-xs text-gray-500">
                        {columnLeads.length}
                      </span>
                    </div>

                    <div className="text-xs text-gray-400 mt-2">
                      ₹ {totalRevenue.toLocaleString()}
                    </div>
                  </div>

                  {/* CARDS */}
                  {columnLeads.map((lead, index) => {

                    const paid = Number(lead.paidAmount)
                    const contract = Number(lead.contractAmount)
                    const percent =
                      contract > 0 ? (paid / contract) * 100 : 0

                    return (
                      <Draggable
                        draggableId={String(lead.id)}
                        index={index}
                        key={lead.id}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`bg-white rounded-xl p-4 mb-3 border transition hover:shadow-md ${
                              loadingId === lead.id
                                ? "opacity-50"
                                : ""
                            }`}
                          >

                            <div className="font-semibold text-sm">
                              {lead.name}
                            </div>

                            <div className="text-xs text-gray-500">
                              {lead.phone}
                            </div>

                            {/* Financial */}
                            <div className="text-xs mt-3 mb-1">
                              ₹ {paid.toLocaleString()} / ₹ {contract.toLocaleString()}
                            </div>

                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                                style={{ width: `${percent}%` }}
                              />
                            </div>

                          </div>
                        )}
                      </Draggable>
                    )
                  })}

                  {provided.placeholder}

                </div>
              )}
            </Droppable>
          )
        })}

      </div>
    </DragDropContext>
  )
}