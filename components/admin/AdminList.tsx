"use client"

import AdminCard from "./AdminCard"

export default function AdminList({ leads }: any) {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      {leads.map((lead: any) => (
        <AdminCard key={lead.id} lead={lead} />
      ))}
    </div>
  )
}
