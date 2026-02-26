import { Prisma } from "@prisma/client"

function roundToTwo(val: Prisma.Decimal) {
  return val.toDecimalPlaces(2, Prisma.Decimal.ROUND_HALF_UP)
}

export function calculateFullPayment(total: number) {
  const discountPercent = new Prisma.Decimal(
    process.env.FULL_PAYMENT_DISCOUNT || 10
  )

  const gstPercent = new Prisma.Decimal(
    process.env.GST_PERCENTAGE || 18
  )

  const totalDecimal = new Prisma.Decimal(total)

  const discount = roundToTwo(
    totalDecimal.mul(discountPercent).div(100)
  )

  const discountedAmount = totalDecimal.minus(discount)

  const gstAmount = roundToTwo(
    discountedAmount.mul(gstPercent).div(100)
  )

  const finalAmount = roundToTwo(
    discountedAmount.plus(gstAmount)
  )

  return {
    baseAmount: totalDecimal,
    discount,
    gstAmount,
    finalAmount,
  }
}

export function calculateAdvancePayment(amount: number) {
  const gstPercent = new Prisma.Decimal(
    process.env.GST_PERCENTAGE || 18
  )

  const amountDecimal = new Prisma.Decimal(amount)

  const gstAmount = roundToTwo(
    amountDecimal.mul(gstPercent).div(100)
  )

  const finalAmount = roundToTwo(
    amountDecimal.plus(gstAmount)
  )

  return {
    baseAmount: amountDecimal,
    discount: new Prisma.Decimal(0),
    gstAmount,
    finalAmount,
  }
}