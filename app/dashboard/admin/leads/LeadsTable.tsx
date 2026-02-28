"use client"

import { useMemo, useState } from "react"
import Link from "next/link"

type Lead = {
  id: number
  name: string
  phone: string
  stage: string
  status: string
  contractAmount: number
  paidAmount: number
  balanceAmount: number
  followUpDate?: string | null
  followUpCompleted?: boolean
  booking?: any
}

export default function LeadsTable({ leads }: { leads: Lead[] }) {

  const [search, setSearch] = useState("")
  const [stageFilter, setStageFilter] = useState("ALL")

  /* ================= STAGE COLORS ================= */

  function getStageStyles(stage: string) {
    const styles: Record<string, string> = {
      NEW: "bg-gray-100 text-gray-700",
      CONTACTED: "bg-blue-100 text-blue-700",
      QUOTED: "bg-yellow-100 text-yellow-700",
      NEGOTIATION: "bg-purple-100 text-purple-700",
      WON: "bg-green-100 text-green-700",
      LOST: "bg-red-100 text-red-700",
    }

    return styles[stage] || "bg-gray-100 text-gray-700"
  }

  function getStatusStyles(status: string) {
    const styles: Record<string, string> = {
      PENDING_APPROVAL: "bg-yellow-100 text-yellow-700",
      CONFIRMED: "bg-green-100 text-green-700",
      CANCELLED: "bg-red-100 text-red-700",
    }

    return styles[status] || "bg-gray-100 text-gray-700"
  }

  /* ================= FILTERING ================= */

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.phone.includes(search)

      const matchesStage =
        stageFilter === "ALL" || lead.stage === stageFilter

      return matchesSearch && matchesStage
    })
  }, [leads, search, stageFilter])

  /* ================= UI ================= */

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100">

      {/* FILTER BAR */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 border-b">

        <input
          type="text"
          placeholder="Search by name or phone..."
          className="border rounded-lg px-4 py-2 text-sm w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded-lg px-4 py-2 text-sm w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={stageFilter}
          onChange={(e) => setStageFilter(e.target.value)}
        >
          <option value="ALL">All Stages</option>
          <option value="NEW">NEW</option>
          <option value="CONTACTED">CONTACTED</option>
          <option value="QUOTED">QUOTED</option>
          <option value="NEGOTIATION">NEGOTIATION</option>
          <option value="WON">WON</option>
          <option value="LOST">LOST</option>
        </select>

      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">

          <thead className="bg-gray-50 text-gray-600 sticky top-0 z-10">
            <tr>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Pipeline</th>
              <th className="p-4 text-left">Financial</th>
              <th className="p-4 text-left">Booking</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredLeads.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-gray-400">
                  No leads found.
                </td>
              </tr>
            )}

            {filteredLeads.map((lead) => {

              const paid = lead.paidAmount
              const contract = lead.contractAmount
              const percent = contract > 0 ? (paid / contract) * 100 : 0

              const isOverdue =
                lead.followUpDate &&
                !lead.followUpCompleted &&
                new Date(lead.followUpDate) < new Date()

              return (
                <tr
                  key={lead.id}
                  className={`border-t transition hover:bg-gray-50 ${
                    isOverdue ? "bg-red-50" : ""
                  }`}
                >

                  {/* CUSTOMER */}
                  <td className="p-4">
                    <div className="font-semibold">{lead.name}</div>
                    <div className="text-xs text-gray-500">{lead.phone}</div>

                    {isOverdue && (
                      <div className="text-xs text-red-600 mt-1">
                        Follow-up overdue
                      </div>
                    )}
                  </td>

                  {/* PIPELINE */}
                  <td className="p-4 space-y-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStageStyles(lead.stage)}`}>
                      {lead.stage}
                    </span>

                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles(lead.status)}`}>
                        {lead.status}
                      </span>
                    </div>
                  </td>

                  {/* FINANCIAL */}
                  <td className="p-4 w-72">
                    <div className="flex justify-between text-xs mb-1">
                      <span>₹ {paid.toLocaleString()}</span>
                      <span>₹ {contract.toLocaleString()}</span>
                    </div>

                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all"
                        style={{ width: `${percent}%` }}
                      />
                    </div>

                    <div className="text-xs mt-1 text-gray-500">
                      {percent.toFixed(0)}% Paid
                    </div>
                  </td>

                  {/* BOOKING */}
                  <td className="p-4">
                    {lead.booking ? (
                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                        Confirmed
                      </span>
                    ) : (
                      <span className="text-gray-400 text-xs">
                        —
                      </span>
                    )}
                  </td>

                  {/* ACTION */}
                  <td className="p-4">
                    <Link
                      href={`/dashboard/admin/leads/${lead.id}`}
                      className="text-indigo-600 hover:text-indigo-800 text-xs font-semibold"
                    >
                      View →
                    </Link>
                  </td>

                </tr>
              )
            })}
          </tbody>

        </table>
      </div>

    </div>
  )
}