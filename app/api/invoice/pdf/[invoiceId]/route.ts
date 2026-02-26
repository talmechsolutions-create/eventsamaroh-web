export const runtime = "nodejs"

import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import puppeteer from "puppeteer"

function money(val: any) {
  return Number(val || 0).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

function generateInvoiceHTML(invoice: any) {
  const gstRate = Number(invoice.gstRate || 18)
  const halfGst = Number(invoice.gstAmount || 0) / 2

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

  return `...YOUR HTML REMAINS EXACTLY SAME...`
}

/* ================= GET ================= */

export async function GET(
  req: NextRequest,
  context: { params: { invoiceId: string } }
) {
  try {
    const { invoiceId } = context.params
    const id = Number(invoiceId)

    if (!id || isNaN(id)) {
      return NextResponse.json(
        { error: "Invalid invoice id" },
        { status: 400 }
      )
    }

    const invoice = await prisma.invoice.findUnique({
      where: { id },
    })

    if (!invoice) {
      return NextResponse.json(
        { error: "Invoice not found" },
        { status: 404 }
      )
    }

    const browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
      ],
    })

    const page = await browser.newPage()

    await page.setContent(generateInvoiceHTML(invoice), {
      waitUntil: "networkidle0",
    })

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
    })

    await browser.close()

    // ✅ FIX: Wrap Uint8Array into Buffer
    return new NextResponse(Buffer.from(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=Invoice-${invoice.invoiceNumber}.pdf`,
        "Cache-Control": "no-store",
      },
    })

  } catch (error) {
    console.error("PDF error:", error)
    return NextResponse.json(
      { error: "PDF generation failed" },
      { status: 500 }
    )
  }
}