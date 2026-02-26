import prisma from "@/lib/prisma"
import Link from "next/link"

export default async function InvoicesPage() {
  const invoices = await prisma.invoice.findMany({
    include: {
      lead: true,
    },
    orderBy: { createdAt: "desc" },
  })

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Invoices</h1>

      <div className="bg-white rounded-xl shadow divide-y">
        {invoices.length === 0 && (
          <div className="p-6 text-gray-500">
            No invoices found.
          </div>
        )}

        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="p-4 flex justify-between items-center"
          >
            <div>
              <div className="font-semibold">
                {invoice.invoiceNumber}
              </div>
              <div className="text-sm text-gray-500">
                {invoice.lead?.name}
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="font-semibold">
                ₹ {Number(invoice.totalAmount).toLocaleString()}
              </div>

              <Link
                href={`/dashboard/admin/invoices/${invoice.id}`}
                className="text-blue-600 text-sm"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}