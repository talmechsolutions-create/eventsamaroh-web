import { prisma } from "@/lib/prisma"
import PDFDocument from "pdfkit"
import path from "path"
import QRCode from "qrcode"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params
  const invoiceId = Number(id)

  if (!invoiceId || isNaN(invoiceId)) {
    return NextResponse.json(
      { error: "Invalid invoice ID" },
      { status: 400 }
    )
  }

  const invoice = await prisma.invoice.findUnique({
    where: { id: invoiceId },
    include: {
      payment: true,
    },
  })

  if (!invoice) {
    return NextResponse.json(
      { error: "Invoice not found" },
      { status: 404 }
    )
  }

  const doc = new PDFDocument({
    size: "A4",
    margin: 50,
  })

  const chunks: Uint8Array[] = []

  doc.on("data", (chunk) => chunks.push(chunk))

  const endPromise = new Promise<void>((resolve) => {
    doc.on("end", () => resolve())
  })

  /* ================= LOGO ================= */

  const logoPath = path.join(
    process.cwd(),
    "public",
    "logo-watermark.png"
  )

  doc.image(logoPath, 50, 40, { width: 120 })

  /* ================= HEADER ================= */

  doc
    .fontSize(22)
    .fillColor("#000")
    .text("INVOICE", 0, 50, { align: "right" })

  doc
    .fontSize(10)
    .fillColor("#555")
    .text(
      `Invoice No: ${invoice.invoiceNumber}`,
      { align: "right" }
    )
    .text(
      `Date: ${new Date(
        invoice.issuedAt
      ).toLocaleDateString()}`,
      { align: "right" }
    )

  doc.moveDown(4)

  /* ================= CUSTOMER SECTION ================= */

  doc
    .fontSize(12)
    .fillColor("#000")
    .text("Bill To:", { underline: true })

  doc.moveDown(0.5)

  doc.text(invoice.customerName)
  doc.text(invoice.customerPhone)

  if (invoice.customerEmail) {
    doc.text(invoice.customerEmail)
  }

  /* ================= TRANSACTION ID ================= */

  if (invoice.payment?.razorpayPaymentId) {
    doc.moveDown(1)
    doc
      .fontSize(10)
      .fillColor("#555")
      .text(
        `Transaction ID: ${invoice.payment.razorpayPaymentId}`
      )
  }

  doc.moveDown(2)

  /* ================= AMOUNT BREAKDOWN ================= */

  const currency = (value: any) =>
    `₹ ${Number(value || 0).toLocaleString()}`

  doc.fontSize(12).fillColor("#000")

  invoiceRow(doc, "Subtotal", currency(invoice.subtotal))
  invoiceRow(doc, "Discount", currency(invoice.discount))
  invoiceRow(
    doc,
    `GST (${invoice.gstRate}%)`,
    currency(invoice.gstAmount)
  )

  doc.moveDown(0.5)

  doc
    .moveTo(50, doc.y)
    .lineTo(550, doc.y)
    .stroke()

  doc.moveDown(0.5)

  doc
    .fontSize(14)
    .text("Total:", 50, doc.y, { continued: true })
    .text(currency(invoice.totalAmount), {
      align: "right",
    })

  /* ================= UPI QR SECTION ================= */

  const upiId = "yourbusiness@upi"
  const amount = Number(invoice.totalAmount)

  const upiUrl = `upi://pay?pa=${upiId}&pn=EventSamroh&am=${amount}&cu=INR`

  const qrImage = await QRCode.toDataURL(upiUrl)

  const base64Data = qrImage.replace(
    /^data:image\/png;base64,/,
    ""
  )

  const qrBuffer = Buffer.from(base64Data, "base64")

  doc.moveDown(3)

  doc
    .fontSize(12)
    .fillColor("#000")
    .text("Scan to Pay via UPI", {
      align: "center",
    })

  doc.moveDown(0.5)

  doc.image(qrBuffer, doc.page.width / 2 - 60, doc.y, {
    width: 120,
  })

  doc.moveDown(5)

  /* ================= FOOTER ================= */

  doc
    .fontSize(10)
    .fillColor("#777")
    .text("Thank you for your business.", {
      align: "center",
    })

  doc.end()
  await endPromise

  const pdfBuffer = Buffer.concat(chunks)

  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=invoice-${invoice.invoiceNumber}.pdf`,
    },
  })
}

/* ================= HELPER ================= */

function invoiceRow(
  doc: PDFKit.PDFDocument,
  label: string,
  value: string
) {
  doc
    .fontSize(12)
    .text(label, 50, doc.y, { continued: true })
    .text(value, { align: "right" })

  doc.moveDown(0.5)
}