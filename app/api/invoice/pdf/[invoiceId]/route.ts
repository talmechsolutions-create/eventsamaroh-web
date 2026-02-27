export const runtime = "nodejs"
export const dynamic = "force-dynamic"

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

  return `
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 40px;
            color: #333;
          }
          h1 {
            margin-bottom: 10px;
          }
          .section {
            margin-bottom: 20px;
          }
          .label {
            font-weight: bold;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          table, th, td {
            border: 1px solid #ddd;
          }
          th, td {
            padding: 8px;
            text-align: left;
          }
          th {
            background: #f5f5f5;
          }
          .total {
            text-align: right;
            font-size: 18px;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <h1>Invoice</h1>

        <div class="section">
          <div><span class="label">Invoice Number:</span> ${invoice.invoiceNumber}</div>
          <div><span class="label">Date:</span> ${new Date(
            invoice.createdAt
          ).toLocaleDateString()}</div>
        </div>

        <div class="section">
          <div><span class="label">Customer:</span> ${invoice.customerName || "-"}</div>
          <div><span class="label">Email:</span> ${invoice.customerEmail || "-"}</div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Service Charges</td>
              <td>₹ ${money(invoice.totalAmount)}</td>
            </tr>
          </tbody>
        </table>

        <div class="total">
          <strong>Total: ₹ ${money(invoice.totalAmount)}</strong>
        </div>
      </body>
    </html>
  `
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

    // ✅ Production-safe Chromium config for Vercel
    const executablePath = await chromium.executablePath()

    const browser = await puppeteer.launch({
      args: [
        ...chromium.args,
        "--hide-scrollbars",
        "--disable-web-security",
      ],
      defaultViewport: chromium.defaultViewport,
      executablePath,
      headless: true,
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