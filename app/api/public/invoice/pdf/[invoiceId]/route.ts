export const runtime = "nodejs"

import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import puppeteer from "puppeteer"
import { generateInvoiceHTML } from "@/lib/pdf/invoiceTemplate"

export async function GET(
  req: NextRequest,
  { params }: { params: { invoiceId: string } }
) {
  try {
    const numericId = Number(params.invoiceId)

    if (!numericId || isNaN(numericId)) {
      return NextResponse.json(
        { error: "Invalid invoice ID" },
        { status: 400 }
      )
    }

    const invoice = await prisma.invoice.findUnique({
      where: { id: numericId },
      include: { lead: true },
    })

    if (!invoice) {
      return NextResponse.json(
        { error: "Invoice not found" },
        { status: 404 }
      )
    }

    const html = generateInvoiceHTML({
      invoiceNumber: invoice.invoiceNumber,
      customerName: invoice.customerName,
      customerEmail: invoice.customerEmail,
      customerPhone: invoice.customerPhone,
      placeOfSupply: invoice.placeOfSupply,
      subtotal: invoice.subtotal.toNumber(),
      discount: invoice.discount.toNumber(),
      gstAmount: invoice.gstAmount.toNumber(),
      totalAmount: invoice.totalAmount.toNumber(),
      eventCategory: invoice.lead.eventCategory,
      service: invoice.lead.eventType ?? "-",
      eventDate: invoice.lead.eventDate ?? undefined,
    })

    const browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
      ],
    })

    const page = await browser.newPage()
    await page.setContent(html, { waitUntil: "networkidle0" })

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    })

    await browser.close()

    // 🔥 FINAL FIX: Use standard Response (no DOM type conflict)
    return new Response(Buffer.from(pdfBuffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=${invoice.invoiceNumber}.pdf`,
        "Cache-Control": "no-store",
      },
    })
  } catch (error) {
    console.error("PDF generation error:", error)

    return NextResponse.json(
      { error: "PDF generation failed" },
      { status: 500 }
    )
  }
}