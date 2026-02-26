import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"

export default async function PaymentDetailPage(
  props: { params: Promise<{ id: string }> }
) {
  const { id } = await props.params

  console.log("PARAM ID:", id)

  const payment = await prisma.payment.findUnique({
    where: { id: Number(id) },
    include: {
      lead: true,
      invoice: true,
    },
  })

  if (!payment) return notFound()

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Payment #{payment.id}
      </h1>

      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <p><strong>Status:</strong> {payment.status}</p>
        <p>
          <strong>Amount:</strong> ₹ {Number(payment.finalAmount).toLocaleString()}
        </p>
        <p><strong>Type:</strong> {payment.type}</p>
        <p><strong>Customer:</strong> {payment.lead?.name}</p>

        {payment.invoice && (
          <p>
            <strong>Invoice:</strong> {payment.invoice.invoiceNumber}
          </p>
        )}
      </div>
    </div>
  )
}