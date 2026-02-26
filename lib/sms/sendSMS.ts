interface SendSMSProps {
  phone: string
  message: string
}

function normalizePhone(phone: string) {
  const cleaned = phone.replace(/\D/g, "")

  if (cleaned.length === 10) {
    return `91${cleaned}`
  }

  if (cleaned.length === 12 && cleaned.startsWith("91")) {
    return cleaned
  }

  return cleaned
}

export async function sendSMS({ phone, message }: SendSMSProps) {
  const authKey = process.env.MSG91_AUTH_KEY
  const templateId = process.env.MSG91_TEMPLATE_ID

  if (!authKey || !templateId) {
    console.log("SMS credentials not configured.")
    return
  }

  try {
    const normalizedPhone = normalizePhone(phone)

    const response = await fetch("https://api.msg91.com/api/v5/flow/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authkey: authKey,
      },
      body: JSON.stringify({
        template_id: templateId,
        recipients: [
          {
            mobiles: normalizedPhone,
            message,
          },
        ],
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("SMS API Error:", errorText)
    }

  } catch (error) {
    console.error("SMS failed:", error)
  }
}