"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  KanbanSquare,
  CreditCard,
  FileText,
  CalendarCheck,
  BarChart3,
} from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const navItems = [
    { href: "/dashboard/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/admin/leads", label: "Leads", icon: Users },
    { href: "/dashboard/admin/leads/kanban", label: "Kanban", icon: KanbanSquare },
    { href: "/dashboard/admin/payments", label: "Payments", icon: CreditCard },
    { href: "/dashboard/admin/invoices", label: "Invoices", icon: FileText },
    { href: "/dashboard/admin/bookings", label: "Bookings", icon: CalendarCheck },
    { href: "/dashboard/admin/analytics", label: "Analytics", icon: BarChart3 },
  ]

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-gray-300 flex flex-col shadow-xl">

        {/* Logo Section */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-white">
            EventSamaroh
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Admin Panel
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2">

          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                  ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                      : "hover:bg-gray-700/50 hover:text-white"
                  }`}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            )
          })}

          <Link
            href="/dashboard/admin/leads/new"
            className="block px-4 py-2 text-sm hover:bg-purple-600 rounded"
          >
            + Create Lead
          </Link>

          <Link
            href="/dashboard/admin/payments"
            className="block px-4 py-2 text-sm hover:bg-purple-600 rounded"
          >
            + Generate Payment
          </Link>

        </nav>

        {/* Footer */}
        <div className="p-4 text-xs text-gray-500 border-t border-gray-700">
          © {new Date().getFullYear()} EventSamaroh
        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>

    </div>
  )
}