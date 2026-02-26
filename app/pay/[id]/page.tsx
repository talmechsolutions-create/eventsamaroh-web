import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"

export const dynamic = "force-dynamic"

type PageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function PayPage({ params }: PageProps) {
  const { id } = await params
  const paymentId = Number(id)

  if (!Number.isInteger(paymentId)) {
    notFound()
  }

  const payment = await prisma.payment.findUnique({
    where: { id: paymentId },
    include: { lead: true },
  })

  if (!payment) {
    notFound()
  }

  if (payment.status === "PAID") {
    return (
      <div className="p-10 text-center text-green-600 font-semibold">
        Payment already completed.
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto p-10">
      <h1 className="text-2xl font-bold mb-6">Complete Payment</h1>

      <div className="space-y-2 mb-6">
        <p><strong>Name:</strong> {payment.lead.name}</p>
        <p><strong>Phone:</strong> {payment.lead.phone}</p>
        <p><strong>Payment Type:</strong> {payment.type}</p>
        <p><strong>Amount Payable:</strong> ₹{payment.finalAmount.toString()}</p>
      </div>

      <form method="POST" action="/api/webhooks/razorpay">
        <input type="hidden" name="razorpay_order_id" value={`ORDER_${payment.id}`} />
        <input type="hidden" name="razorpay_payment_id" value={`PAY_${Date.now()}`} />
        <button className="bg-black text-white px-6 py-3 rounded">
          Simulate Payment
        </button>
      </form>
    </div>
  )
}