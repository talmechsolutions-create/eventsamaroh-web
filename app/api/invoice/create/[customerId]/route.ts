import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import { Prisma } from "@prisma/client"

function generateInvoiceNumber() {
  const year = new Date().getFullYear()
  const timestamp = Date.now().toString().slice(-6)
  return `ES/${year}/${timestamp}`
}

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ customerId: string }> }
) {
  try {
    const { customerId } = await context.params

    if (!customerId) {
      return NextResponse.json(
        { error: "Missing customerId" },
        { status: 400 }
      )
    }

    const lead = await prisma.lead.findUnique({
      where: { customerId },
    })

    if (!lead) {
      return NextResponse.json(
        { error: "Lead not found" },
        { status: 404 }
      )
    }

    // Prevent duplicate invoice
    const existingInvoice = await prisma.invoice.findFirst({
      where: { leadId: lead.id },
    })

    if (existingInvoice) {
      return NextResponse.json({
        success: true,
        invoiceId: existingInvoice.id,
        invoiceNumber: existingInvoice.invoiceNumber,
        message: "Invoice already exists",
      })
    }

    // Convert Decimal safely
    const subtotal = new Prisma.Decimal(lead.contractAmount)
    const gstRate = new Prisma.Decimal(0.18)
    const gstAmount = subtotal.mul(gstRate)
    const totalAmount = subtotal.add(gstAmount)

    const invoice = await prisma.invoice.create({
      data: {
        invoiceNumber: generateInvoiceNumber(),
        leadId: lead.id,

        customerName: lead.name,
        customerEmail: lead.email,
        customerPhone: lead.phone,

        subtotal,
        discount: new Prisma.Decimal(0),
        gstRate: new Prisma.Decimal(18),
        gstAmount,
        totalAmount,
      },
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