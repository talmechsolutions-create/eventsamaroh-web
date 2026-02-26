import { prisma } from "@/lib/prisma"
import { PaymentStatus } from "@prisma/client"
import { sendInvoiceEmail } from "@/lib/email/sendInvoiceEmail"
import { sendSMS } from "@/lib/sms/sendSMS"

async function approvePayment(paymentId: number) {
  "use server"

  const payment = await prisma.payment.findUnique({
    where: { id: paymentId },
    include: { lead: true, invoice: true },
  })

  if (!payment || payment.approvedByAdmin) return

  await prisma.$transaction(async (tx) => {

    // 1️⃣ Update Payment
    const updatedPayment = await tx.payment.update({
      where: { id: paymentId },
      data: {
        status: PaymentStatus.PAID,
        approvedByAdmin: true,
        approvedAt: new Date(),
        paidAt: new Date(),
      },
    })

    // 2️⃣ Create Booking
    await tx.booking.upsert({
      where: { leadId: payment.leadId },
      update: {},
      create: { leadId: payment.leadId },
    })

    // 3️⃣ Update Lead Status
    await tx.lead.update({
      where: { id: payment.leadId },
      data: { status: "CONFIRMED" },
    })

    // 4️⃣ Create Invoice if not exists
    let invoiceNumber = ""

    if (!payment.invoice) {
      const createdInvoice = await tx.invoice.create({
        data: {
          paymentId: payment.id,
          invoiceNumber: `INV-${Date.now()}-${payment.id}`,
          customerName: payment.lead.name,
          customerEmail: payment.lead.email,
          customerPhone: payment.lead.phone,
          subtotal: payment.baseAmount,
          discount: payment.discount,
          gstAmount: payment.gstAmount,
          totalAmount: payment.finalAmount,
        },
      })

      invoiceNumber = createdInvoice.invoiceNumber
    } else {
      invoiceNumber = payment.invoice.invoiceNumber
    }

    // 5️⃣ Send Email
    if (payment.lead.email) {
      await sendInvoiceEmail({
        to: payment.lead.email,
        invoiceNumber,
        amount: updatedPayment.finalAmount,
      })
    }

    // 6️⃣ Send SMS
    await sendSMS({
      phone: payment.lead.phone,
      message: `Your booking is confirmed. Invoice: ${invoiceNumber}. EventSamaroh Team.`,
    })

  })
}

export default async function AdminPaymentsPage() {

  const payments = await prisma.payment.findMany({
    where: { approvedByAdmin: false },
    include: { lead: true },
    orderBy: { createdAt: "desc" },
  })

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">
        Pending Payment Approvals
      </h1>

      {payments.length === 0 && (
        <div className="text-gray-500">No pending approvals.</div>
      )}

      <div className="space-y-6">
        {payments.map((payment) => {

          const contract = payment.lead?.contractAmount ?? 0
          const paid = payment.finalAmount
          const balance = contract - paid

          return (
            <div
              key={payment.id}
              className="border rounded-xl p-6 shadow-sm bg-white"
            >
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p><b>Customer:</b> {payment.lead?.name}</p>
                  <p><b>Phone:</b> {payment.lead?.phone}</p>
                  <p><b>Email:</b> {payment.lead?.email}</p>
                </div>

                <div>
                  <p><b>Total Contract:</b> ₹{contract}</p>
                  <p><b>Paid Amount:</b> ₹{paid}</p>
                  <p><b>Balance:</b> ₹{balance}</p>
                </div>
              </div>

              <form action={approvePayment.bind(null, payment.id)}>
                <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition">
                  Approve & Confirm Booking
                </button>
              </form>
            </div>
          )
        })}
      </div>
    </div>
  )
}
