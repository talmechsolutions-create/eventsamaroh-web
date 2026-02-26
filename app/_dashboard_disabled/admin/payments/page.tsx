import prisma from "@/lib/prisma"

export default async function PaymentsPage() {
  const payments = await prisma.payment.findMany({
    include: {
      lead: true,
      invoice: true,
    },
    orderBy: { createdAt: "desc" },
  })

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Payments</h1>

      <div className="bg-white rounded-xl shadow">
        {payments.length === 0 && (
          <div className="p-6 text-gray-500">
            No payments yet.
          </div>
        )}

        {payments.map((payment) => (
          <div
            key={payment.id}
            className="p-4 border-b flex justify-between"
          >
            <div>
              <div className="font-semibold">
                #{payment.id} — {payment.lead?.name}
              </div>
              <div className="text-sm text-gray-500">
                ₹ {Number(payment.finalAmount).toLocaleString()}
              </div>
            </div>

            <div className="text-sm">
              {payment.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}