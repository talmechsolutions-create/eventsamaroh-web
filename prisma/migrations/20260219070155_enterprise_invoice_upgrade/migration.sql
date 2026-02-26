/*
  Warnings:

  - You are about to alter the column `subtotal` on the `Invoice` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(12,2)`.
  - You are about to alter the column `discount` on the `Invoice` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(12,2)`.
  - You are about to alter the column `gstAmount` on the `Invoice` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(12,2)`.
  - You are about to alter the column `totalAmount` on the `Invoice` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(12,2)`.
  - The `status` column on the `Lead` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `contractAmount` on the `Lead` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(12,2)`.
  - You are about to alter the column `balanceAmount` on the `Lead` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(12,2)`.
  - You are about to alter the column `paidAmount` on the `Lead` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(12,2)`.
  - You are about to alter the column `baseAmount` on the `Payment` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(12,2)`.
  - You are about to alter the column `discount` on the `Payment` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(12,2)`.
  - You are about to alter the column `gstAmount` on the `Payment` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(12,2)`.
  - You are about to alter the column `finalAmount` on the `Payment` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(12,2)`.
  - Added the required column `leadId` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LeadStatus" AS ENUM ('PENDING_APPROVAL', 'CONFIRMED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "InvoiceStatus" AS ENUM ('DRAFT', 'ISSUED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "InvoiceType" AS ENUM ('PROFORMA', 'TAX', 'FINAL');

-- AlterEnum
ALTER TYPE "PaymentStatus" ADD VALUE 'REFUNDED';

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_paymentId_fkey";

-- AlterTable
ALTER TABLE "Invoice" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "gstRate" DECIMAL(5,2) NOT NULL DEFAULT 18,
ADD COLUMN     "leadId" INTEGER NOT NULL,
ADD COLUMN     "placeOfSupply" TEXT,
ADD COLUMN     "status" "InvoiceStatus" NOT NULL DEFAULT 'ISSUED',
ADD COLUMN     "type" "InvoiceType" NOT NULL DEFAULT 'TAX',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "paymentId" DROP NOT NULL,
ALTER COLUMN "subtotal" SET DATA TYPE DECIMAL(12,2),
ALTER COLUMN "discount" SET DEFAULT 0,
ALTER COLUMN "discount" SET DATA TYPE DECIMAL(12,2),
ALTER COLUMN "gstAmount" SET DATA TYPE DECIMAL(12,2),
ALTER COLUMN "totalAmount" SET DATA TYPE DECIMAL(12,2);

-- AlterTable
ALTER TABLE "Lead" DROP COLUMN "status",
ADD COLUMN     "status" "LeadStatus" NOT NULL DEFAULT 'PENDING_APPROVAL',
ALTER COLUMN "contractAmount" SET DATA TYPE DECIMAL(12,2),
ALTER COLUMN "balanceAmount" SET DATA TYPE DECIMAL(12,2),
ALTER COLUMN "paidAmount" SET DATA TYPE DECIMAL(12,2);

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "razorpaySignature" TEXT,
ALTER COLUMN "baseAmount" SET DATA TYPE DECIMAL(12,2),
ALTER COLUMN "discount" SET DATA TYPE DECIMAL(12,2),
ALTER COLUMN "gstAmount" SET DATA TYPE DECIMAL(12,2),
ALTER COLUMN "finalAmount" SET DATA TYPE DECIMAL(12,2);

-- CreateIndex
CREATE INDEX "Invoice_leadId_idx" ON "Invoice"("leadId");

-- CreateIndex
CREATE INDEX "Lead_status_idx" ON "Lead"("status");

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
