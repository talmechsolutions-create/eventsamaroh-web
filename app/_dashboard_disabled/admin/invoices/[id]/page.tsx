import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import Link from "next/link"

export default async function InvoiceDetailPage(
  props: { params: Promise<{ id: string }> }
) {
  // ✅ Next.js 16 param handling
  const { id } = await props.params
  const invoiceId = Number(id)

  if (!invoiceId || isNaN(invoiceId)) return notFound()

  const invoice = await prisma.invoice.findUnique({
    where: { id: invoiceId },
    include: {
      lead: true,
      payment: true,
    },
  })

  if (!invoice) return notFound()

  // ✅ Serialize Decimal fields (safe for future client usage)
  const safeInvoice = {
    ...invoice,
    subtotal: Number(invoice.subtotal),
    discount: Number(invoice.discount),
    gstRate: Number(invoice.gstRate),
    gstAmount: Number(invoice.gstAmount),
    totalAmount: Number(invoice.totalAmount),
  }

  return (
    <div className="max-w-4xl mx-auto space-y-10">

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Invoice {safeInvoice.invoiceNumber}
        </h1>

        <div className="flex gap-3">
          <Link
            href={`/api/admin/invoices/${safeInvoice.id}/pdf`}
            className="px-4 py-2 bg-black text-white rounded-lg text-sm"
            target="_blank"
          >
            Download PDF
          </Link>
        </div>
      </div>

      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-8 space-y-6">

        <InvoiceRow label="Customer" value={safeInvoice.customerName} />
        <InvoiceRow label="Phone" value={safeInvoice.customerPhone} />

        {safeInvoice.customerEmail && (
          <InvoiceRow label="Email" value={safeInvoice.customerEmail} />
        )}

        <InvoiceRow label="Invoice Type" value={safeInvoice.type} />
        <InvoiceRow label="Status" value={safeInvoice.status} />

        <InvoiceRow
          label="Issued On"
          value={new Date(safeInvoice.issuedAt).toLocaleDateString()}
        />

        <div className="border-t pt-6 space-y-3">

          <InvoiceRow
            label="Subtotal"
            value={`₹ ${safeInvoice.subtotal.toLocaleString()}`}
          />

          <InvoiceRow
            label="Discount"
            value={`₹ ${safeInvoice.discount.toLocaleString()}`}
          />

          <InvoiceRow
            label={`GST (${safeInvoice.gstRate}%)`}
            value={`₹ ${safeInvoice.gstAmount.toLocaleString()}`}
          />

          <InvoiceRow
            label="Total"
            value={`₹ ${safeInvoice.totalAmount.toLocaleString()}`}
            strong
          />

        </div>

      </div>

    </div>
  )
}

function InvoiceRow({
  label,
  value,
  strong,
}: {
  label: string
  value: string
  strong?: boolean
}) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-500">{label}</span>
      <span className={strong ? "font-bold" : "font-medium"}>
        {value}
      </span>
    </div>
  )
}