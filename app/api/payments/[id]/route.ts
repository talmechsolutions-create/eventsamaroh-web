export const runtime = "nodejs"

import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import { Prisma, PaymentStatus } from "@prisma/client"

function serializePayment(payment: any) {
  return {
    ...payment,
    baseAmount: payment.baseAmount?.toNumber(),
    discount: payment.discount?.toNumber(),
    gstAmount: payment.gstAmount?.toNumber(),
    finalAmount: payment.finalAmount?.toNumber(),
  }
}

function serializeInvoice(invoice: any) {
  return {
    ...invoice,
    subtotal: invoice.subtotal?.toNumber(),
    discount: invoice.discount?.toNumber(),
    gstAmount: invoice.gstAmount?.toNumber(),
    totalAmount: invoice.totalAmount?.toNumber(),
  }
}

export async function PATCH(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const paymentId = Number(context.params.id)
    const body = await req.json()

    if (!paymentId || isNaN(paymentId)) {
      return NextResponse.json(
        { error: "Invalid payment ID" },
        { status: 400 }
      )
    }

    if (!["APPROVE", "CANCEL"].includes(body.action)) {
      return NextResponse.json(
        { error: "Invalid action" },
        { status: 400 }
      )
    }

    const payment = await prisma.payment.findUnique({
      where: { id: paymentId },
      include: { lead: true, invoice: true },
    })

    if (!payment) {
      return NextResponse.json(
        { error: "Payment not found" },
        { status: 404 }
      )
    }

    // ===============================
    // APPROVE
    // ===============================
    if (body.action === "APPROVE") {

      if (payment.status === PaymentStatus.PAID) {
        return NextResponse.json(
          { error: "Payment already approved" },
          { status: 400 }
        )
      }

      if (payment.status === PaymentStatus.CANCELLED) {
        return NextResponse.json(
          { error: "Cannot approve cancelled payment" },
          { status: 400 }
        )
      }

      if (payment.invoice) {
        return NextResponse.json(
          { error: "Invoice already generated" },
          { status: 400 }
        )
      }

      const result = await prisma.$transaction(async (tx) => {

        const updatedPayment = await tx.payment.update({
          where: { id: paymentId },
          data: {
            status: PaymentStatus.PAID,
            approvedByAdmin: true,
            approvedAt: new Date(),
            paidAt: new Date(),
          },
        })

        const currentPaid = new Prisma.Decimal(payment.lead.paidAmount)
        const contractAmount = new Prisma.Decimal(payment.lead.contractAmount)

        const newPaid = currentPaid.add(updatedPayment.finalAmount)
        let newBalance = contractAmount.sub(newPaid)

        if (newBalance.lt(0)) {
          newBalance = new Prisma.Decimal(0)
        }

        await tx.lead.update({
          where: { id: payment.leadId },
          data: {
            paidAmount: newPaid,
            balanceAmount: newBalance,
          },
        })

        const invoiceNumber = `INV-${paymentId}-${Date.now()}`

        const invoice = await tx.invoice.create({
          data: {
            leadId: payment.leadId,
            paymentId,
            invoiceNumber,
            customerName: payment.lead.name,
            customerEmail: payment.lead.email,
            customerPhone: payment.lead.phone,
            subtotal: updatedPayment.baseAmount,
            discount: updatedPayment.discount,
            gstAmount: updatedPayment.gstAmount,
            totalAmount: updatedPayment.finalAmount,
          },
        })

        await tx.leadActivity.create({
          data: {
            leadId: payment.leadId,
            type: "PAYMENT_APPROVED",
            message: `Payment ₹${updatedPayment.finalAmount.toNumber()} approved by admin`,
          },
        })

        return { updatedPayment, invoice }
      })

      return NextResponse.json({
        success: true,
        updatedPayment: serializePayment(result.updatedPayment),
        invoice: serializeInvoice(result.invoice),
      })
    }

    // ===============================
    // CANCEL
    // ===============================
    if (body.action === "CANCEL") {

      if (payment.status === PaymentStatus.PAID) {
        return NextResponse.json(
          { error: "Cannot cancel a paid payment" },
          { status: 400 }
        )
      }

      if (payment.status === PaymentStatus.CANCELLED) {
        return NextResponse.json(
          { error: "Payment already cancelled" },
          { status: 400 }
        )
      }

      await prisma.$transaction(async (tx) => {

        await tx.payment.update({
          where: { id: paymentId },
          data: { status: PaymentStatus.CANCELLED },
        })

        await tx.leadActivity.create({
          data: {
            leadId: payment.leadId,
            type: "PAYMENT_CANCELLED",
            message: `Payment cancelled by admin`,
          },
        })
      })

      return NextResponse.json({ success: true })
    }

  } catch (error) {
    console.error("Payment update error:", error)
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}