import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"

export default async function CustomerPortal({
  params,
}: {
  params: { customerId: string }
}) {
  const lead = await prisma.lead.findUnique({
    where: { customerId: params.customerId },
    include: {
      payments: true,
      invoices: true,
      booking: true,
    },
  })

  if (!lead) return notFound()

  return (
    <div className="max-w-4xl mx-auto py-10 space-y-10">

      <h1 className="text-3xl font-bold">
        Welcome {lead.name}
      </h1>

      {/* Booking Status */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-semibold mb-4">
          Booking Status
        </h2>

        {lead.booking ? (
          <p className="text-green-600 font-medium">
            Booking Confirmed
          </p>
        ) : (
          <p className="text-yellow-600">
            Awaiting full payment
          </p>
        )}
      </div>

      {/* Payments */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-semibold mb-4">
          Payments
        </h2>

        {lead.payments.map((p) => (
          <div
            key={p.id}
            className="flex justify-between border-b py-2"
          >
            <span>{p.type}</span>
            <span>₹ {Number(p.finalAmount).toLocaleString()}</span>
          </div>
        ))}
      </div>

      {/* Invoices */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-semibold mb-4">
          Invoices
        </h2>

        {lead.invoices.map((inv) => (
          <div
            key={inv.id}
            className="flex justify-between border-b py-2"
          >
            <span>{inv.invoiceNumber}</span>
            <a
              href={`/api/admin/invoices/${inv.id}/pdf`}
              className="text-indigo-600"
              target="_blank"
            >
              Download
            </a>
          </div>
        ))}
      </div>

      {/* Pay Balance */}
      {Number(lead.balanceAmount) > 0 && (
        <div className="bg-indigo-50 rounded-xl p-6 text-center">
          <p className="mb-3">
            Balance: ₹ {Number(lead.balanceAmount).toLocaleString()}
          </p>

          <a
            href={`/dashboard/admin/leads/${lead.id}`}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
          >
            Contact Sales for Payment Link
          </a>
        </div>
      )}

    </div>
  )
}