export const runtime = "nodejs"

import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import puppeteer from "puppeteer-core"
import chromium from "@sparticuz/chromium"

function money(val: any) {
  return Number(val || 0).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

function generateInvoiceHTML(invoice: any) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

  return `...YOUR EXISTING HTML HERE...`
}

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
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
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