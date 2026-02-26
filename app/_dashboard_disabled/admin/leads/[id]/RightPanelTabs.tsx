"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"

/* ================= TYPES ================= */

type Activity = {
  id: number
  type: string
  message: string | null
  createdAt: Date
}

type Payment = {
  id: number
  type: string
  status: "PENDING" | "PAID" | "FAILED" | "REFUNDED" | "CANCELLED"
  finalAmount: string
  approvedByAdmin?: boolean
  invoice?: {
    id: number
  } | null
}

type Invoice = {
  id: number
  invoiceNumber: string
  status: string
  totalAmount: string
}

/* ================= MAIN COMPONENT ================= */

export default function RightPanelTabs({
  activities,
  payments: initialPayments,
  invoices,
}: {
  activities: Activity[]
  payments: Payment[]
  invoices: Invoice[]
}) {
  const [activeTab, setActiveTab] = useState<
    "activity" | "payments" | "invoices"
  >("activity")

  const [payments, setPayments] =
    useState<Payment[]>(initialPayments)

  const [filter, setFilter] = useState<
    "ALL" | "PENDING" | "PAID" | "CANCELLED"
  >("ALL")

  /* ================= DERIVED VALUES ================= */

  const filteredPayments = useMemo(() => {
    if (filter === "ALL") return payments
    return payments.filter((p) => p.status === filter)
  }, [payments, filter])

  const totalPaid = useMemo(() => {
    return payments
      .filter((p) => p.status === "PAID")
      .reduce((sum, p) => sum + Number(p.finalAmount || 0), 0)
  }, [payments])

  const totalAmount = useMemo(() => {
    return payments.reduce(
      (sum, p) => sum + Number(p.finalAmount || 0),
      0
    )
  }, [payments])

  const paidPercentage =
    totalAmount > 0
      ? Math.min((totalPaid / totalAmount) * 100, 100)
      : 0

  /* ================= RENDER ================= */

  return (
    <div className="space-y-8">

      {/* TAB NAVIGATION */}
      <div className="flex gap-8 border-b">
        <TabButton
          label="Activity"
          active={activeTab === "activity"}
          onClick={() => setActiveTab("activity")}
        />
        <TabButton
          label="Payments"
          active={activeTab === "payments"}
          onClick={() => setActiveTab("payments")}
        />
        <TabButton
          label="Invoices"
          active={activeTab === "invoices"}
          onClick={() => setActiveTab("invoices")}
        />
      </div>

      {/* ================= ACTIVITY ================= */}

      {activeTab === "activity" && (
        <div className="space-y-4">
          {activities.length === 0 ? (
            <EmptyState text="No activity logged yet." />
          ) : (
            activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 text-sm"
              >
                <div className="font-semibold text-gray-900">
                  {activity.type}
                </div>

                {activity.message && (
                  <div className="text-gray-600 mt-1">
                    {activity.message}
                  </div>
                )}

                <div className="text-xs text-gray-400 mt-3">
                  {new Date(activity.createdAt).toLocaleString()}
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* ================= PAYMENTS ================= */}

      {activeTab === "payments" && (
        <div className="space-y-6">

          {/* FILTER + COUNT */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <FilterButton
                label="All"
                active={filter === "ALL"}
                onClick={() => setFilter("ALL")}
              />
              <FilterButton
                label="Pending"
                active={filter === "PENDING"}
                onClick={() => setFilter("PENDING")}
              />
              <FilterButton
                label="Paid"
                active={filter === "PAID"}
                onClick={() => setFilter("PAID")}
              />
              <FilterButton
                label="Cancelled"
                active={filter === "CANCELLED"}
                onClick={() => setFilter("CANCELLED")}
              />
            </div>

            <div className="text-sm text-gray-500">
              {filteredPayments.length} payments
            </div>
          </div>

          {/* REVENUE BAR */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">
                Revenue Collected
              </span>
              <span className="font-semibold text-gray-900">
                ₹ {totalPaid.toLocaleString()}
              </span>
            </div>

            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 transition-all"
                style={{ width: `${paidPercentage}%` }}
              />
            </div>
          </div>

          {/* PAYMENT LIST */}
          {filteredPayments.length === 0 ? (
            <EmptyState text="No payments in this category." />
          ) : (
            filteredPayments.map((payment) => (
              <PaymentCard
                key={payment.id}
                payment={payment}
                onUpdate={(updated) => {
                  setPayments((prev) =>
                    prev.map((p) =>
                      p.id === updated.id ? updated : p
                    )
                  )
                }}
              />
            ))
          )}
        </div>
      )}

      {/* ================= INVOICES ================= */}

      {activeTab === "invoices" && (
        <div className="space-y-4">
          {invoices.length === 0 ? (
            <EmptyState text="No invoices generated." />
          ) : (
            invoices.map((invoice) => (
              <div
                key={invoice.id}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 flex justify-between items-center"
              >
                <div>
                  <div className="font-semibold text-gray-900">
                    {invoice.invoiceNumber}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {invoice.status}
                  </div>
                </div>

                <div className="font-semibold">
                  ₹ {Number(
                    invoice.totalAmount || 0
                  ).toLocaleString()}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}

/* ================= PAYMENT CARD ================= */

function PaymentCard({
  payment,
  onUpdate,
}: {
  payment: Payment
  onUpdate: (p: Payment) => void
}) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const approvePayment = async () => {
    try {
      setLoading(true)

      const res = await fetch(
        `/api/admin/approve-payment/${payment.id}`,
        { method: "PATCH" }
      )

      if (!res.ok) {
        console.error("Approval failed")
        return
      }

      router.refresh() // 🔁 real server refresh

    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const cancelPayment = async () => {
    try {
      setLoading(true)

      const res = await fetch(`/api/admin/cancel-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentId: payment.id }),
      })

      if (!res.ok) {
        console.error("Cancel failed")
        return
      }

      router.refresh() // 🔁 real server refresh

    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex justify-between items-center">

      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-sm">
            {payment.type}
          </span>
          <StatusBadge status={payment.status} />
        </div>

        <div className="text-xs text-gray-500">
          ₹ {Number(
            payment.finalAmount || 0
          ).toLocaleString()}
        </div>
      </div>

      <div>
        {payment.status === "PENDING" && (
          <ActionButton
            label="Cancel"
            variant="danger"
            onClick={cancelPayment}
            loading={loading}
          />
        )}

        {payment.status === "PAID" &&
          !payment.approvedByAdmin && (
            <ActionButton
              label="Approve"
              variant="primary"
              onClick={approvePayment}
              loading={loading}
            />
          )}

        {payment.status === "PAID" &&
          payment.approvedByAdmin &&
          payment.invoice && (
            <a
              href={`/dashboard/admin/invoices/${payment.invoice.id}`}
              className="text-xs bg-green-100 text-green-700 px-4 py-2 rounded-lg"
            >
              View Invoice
            </a>
          )}
      </div>
    </div>
  )
}

/* ================= UI COMPONENTS ================= */

function TabButton({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`pb-3 text-sm font-medium transition ${
        active
          ? "border-b-2 border-black text-black"
          : "text-gray-500 hover:text-gray-800"
      }`}
    >
      {label}
    </button>
  )
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`text-xs px-4 py-2 rounded-lg transition ${
        active
          ? "bg-black text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  )
}

function StatusBadge({
  status,
}: {
  status: Payment["status"]
}) {
  const map = {
    PENDING: "bg-yellow-100 text-yellow-700",
    PAID: "bg-green-100 text-green-700",
    FAILED: "bg-red-100 text-red-700",
    REFUNDED: "bg-purple-100 text-purple-700",
    CANCELLED: "bg-gray-200 text-gray-700",
  }

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${map[status]}`}
    >
      {status}
    </span>
  )
}

function ActionButton({
  label,
  variant,
  onClick,
  loading,
}: {
  label: string
  variant: "primary" | "danger"
  onClick: () => void
  loading: boolean
}) {
  const styles =
    variant === "primary"
      ? "bg-blue-100 text-blue-700"
      : "bg-red-100 text-red-700"

  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`text-xs px-4 py-2 rounded-lg ${styles} ${
        loading ? "opacity-60 cursor-not-allowed" : ""
      }`}
    >
      {loading ? "Processing..." : label}
    </button>
  )
}

function EmptyState({ text }: { text: string }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 text-sm text-gray-400">
      {text}
    </div>
  )
}