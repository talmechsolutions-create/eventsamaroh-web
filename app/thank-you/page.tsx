import { prisma } from "@/lib/prisma"

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ customerId?: string }>
}) {
  // ✅ Next 16 Safe searchParams
  const params = await searchParams
  const customerId = params?.customerId

  if (!customerId) {
    return (
      <div className="p-20 text-center">
        Missing Customer ID
      </div>
    )
  }

  // ✅ Prisma Query + Include Invoices
  const lead = await prisma.lead.findUnique({
    where: { customerId },
    include: {
      invoices: {
        orderBy: { createdAt: "asc" },
      },
    },
  })

  if (!lead) {
    return (
      <div className="p-20 text-center">
        Booking not found.
      </div>
    )
  }

  // ✅ Resolve Latest Invoice
  let latestInvoice =
    lead.invoices.length > 0
      ? lead.invoices[lead.invoices.length - 1]
      : null

  // 🔥 AUTO CREATE IF NOT EXISTS
  if (!latestInvoice) {
    const newInvoice = await prisma.invoice.create({
      data: {
        leadId: lead.id,
        invoiceNumber: `ES/${new Date().getFullYear()}/${Math.floor(
          1000 + Math.random() * 9000
        )}`,
        customerName: lead.name,
        customerEmail: lead.email,
        customerPhone: lead.phone,
        subtotal: lead.contractAmount,
        discount: 0,
        gstAmount: 0,
        totalAmount: lead.contractAmount,
      },
    })

    latestInvoice = newInvoice
  }

  // ✅ Amount Calculations
  const contractAmount = Number(lead.contractAmount || 0)
  const paidAmount = Number(lead.paidAmount || 0)
  const balanceAmount = Number(lead.balanceAmount || 0)

  return (
    <div className="min-h-screen bg-[#f8f5f0] flex items-center justify-center px-6 py-16">
      <div className="bg-white shadow-xl rounded-2xl max-w-2xl w-full p-10 text-center space-y-6">

        {/* Heading */}
        <h1 className="text-3xl font-semibold text-[#b08d57]">
          Thank You!
        </h1>

        <p className="text-gray-600">
          Your payment has been successfully received.
        </p>

        {/* Amount Summary */}
        <div className="bg-gray-50 rounded-xl p-6 space-y-3 text-left">

          <div className="flex justify-between">
            <span>Total Contract</span>
            <span>₹{contractAmount.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-green-700">
            <span>Paid Now</span>
            <span>₹{paidAmount.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-amber-700">
            <span>Balance Remaining</span>
            <span>₹{balanceAmount.toFixed(2)}</span>
          </div>

        </div>

        {/* Reference ID */}
        <div className="bg-black text-white rounded-full px-6 py-3 inline-block text-sm tracking-wide">
          Reference ID: {lead.customerId}
        </div>

        {/* Manual Download Button (Backup) */}
        {latestInvoice && (
          <div className="mt-8">
            <a
              href={`/api/invoice/pdf/${latestInvoice.id}`}
              className="inline-block bg-[#b08d57] text-white px-8 py-3 rounded-full shadow-md hover:opacity-90 transition"
            >
              Download Invoice (PDF)
            </a>
          </div>
        )}

      </div>

      {/* 🔥 AUTO DOWNLOAD ON PAGE LOAD */}
      {latestInvoice && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              setTimeout(function() {
                window.location.href = "/api/invoice/pdf/${latestInvoice.id}";
              }, 1200);
            `,
          }}
        />
      )}
    </div>
  )
}
