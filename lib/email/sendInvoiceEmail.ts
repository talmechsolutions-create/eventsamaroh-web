import nodemailer from "nodemailer"

interface SendInvoiceEmailProps {
  to: string
  invoiceNumber: string
  amount: number
  customerName: string
}

let transporter: nodemailer.Transporter | null = null

function getTransporter() {
  if (transporter) return transporter

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("Email credentials not configured.")
  }

  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  return transporter
}

function formatINR(amount: number) {
  return amount.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export async function sendInvoiceEmail({
  to,
  invoiceNumber,
  amount,
  customerName,
}: SendInvoiceEmailProps) {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log("Email credentials not configured.")
      return
    }

    const mailer = getTransporter()

    await mailer.sendMail({
      from: `"EventSamaroh" <${process.env.EMAIL_USER}>`,
      to,
      subject: `Invoice ${invoiceNumber} - EventSamaroh`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Thank you for your booking, ${customerName}</h2>
          <p>Your payment has been confirmed.</p>
          <p><strong>Invoice Number:</strong> ${invoiceNumber}</p>
          <p><strong>Amount Paid:</strong> ₹${formatINR(amount)}</p>
          <p>Our team will contact you shortly.</p>
        </div>
      `,
    })
  } catch (error) {
    console.error("Invoice email failed:", error)
  }
}