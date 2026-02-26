export const runtime = "nodejs"

import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import { generateInvoiceNumber } from "@/lib/invoice/generateInvoiceNumber"
import {
  Prisma,
  InvoiceType,
  InvoiceStatus,
  PaymentStatus,
} from "@prisma/client"

export async function GET(
  req: NextRequest,
  context: { params: { customerId: string } }
) {
  try {
    const { customerId } = context.params

    if (!customerId) {
      return NextResponse.json(
        { error: "Missing customerId" },
        { status: 400 }
      )
    }

    const lead = await prisma.lead.findUnique({
      where: { customerId },
      include: {
        payments: {
          orderBy: { createdAt: "desc" },
          take: 1,
        },
      },
    })

    if (!lead) {
      return NextResponse.json(
        { error: "Lead not found" },
        { status: 404 }
      )
    }

    const latestPayment = lead.payments[0]

    if (!latestPayment) {
      return NextResponse.json(
        { error: "No payment found for invoice creation" },
        { status: 400 }
      )
    }

    if (latestPayment.status !== PaymentStatus.PAID) {
      return NextResponse.json(
        { error: "Invoice can only be generated for paid payments" },
        { status: 400 }
      )
    }

    if (latestPayment.id) {
      const existingInvoice = await prisma.invoice.findUnique({
        where: { paymentId: latestPayment.id },
      })

      if (existingInvoice) {
        return NextResponse.json({
          success: true,
          invoiceId: existingInvoice.id,
          invoiceNumber: existingInvoice.invoiceNumber,
        })
      }
    }

    const invoiceNumber = await generateInvoiceNumber(prisma)

    const subtotal = new Prisma.Decimal(latestPayment.baseAmount)
    const discount = new Prisma.Decimal(latestPayment.discount)
    const gstAmount = new Prisma.Decimal(latestPayment.gstAmount)
    const totalAmount = new Prisma.Decimal(latestPayment.finalAmount)

    const invoice = await prisma.$transaction(async (tx) => {
      return tx.invoice.create({
        data: {
          leadId: lead.id,
          paymentId: latestPayment.id,
          invoiceNumber,

          type: InvoiceType.TAX,
          status: InvoiceStatus.ISSUED,

          customerName: lead.name,
          customerEmail: lead.email,
          customerPhone: lead.phone,
          placeOfSupply: lead.location ?? "Maharashtra",

          subtotal,
          discount,
          gstRate: new Prisma.Decimal(18),
          gstAmount,
          totalAmount,
        },
      })
    })

    return NextResponse.json({
      success: true,
      invoiceId: invoice.id,
      invoiceNumber: invoice.invoiceNumber,
    })

  } catch (error) {
    console.error("Invoice creation error:", error)

    return NextResponse.json(
      { error: "Invoice creation failed" },
      { status: 500 }
    )
  }
}