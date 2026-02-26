/*
  Warnings:

  - Made the column `email` on table `Lead` required. This step will fail if there are existing NULL values in that column.
  - Made the column `contractAmount` on table `Lead` required. This step will fail if there are existing NULL values in that column.
  - Made the column `balanceAmount` on table `Lead` required. This step will fail if there are existing NULL values in that column.
  - Made the column `eventCategory` on table `Lead` required. This step will fail if there are existing NULL values in that column.
  - Made the column `paidAmount` on table `Lead` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "followUpDate" TIMESTAMP(3),
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "source" TEXT NOT NULL DEFAULT 'Website',
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "contractAmount" SET NOT NULL,
ALTER COLUMN "balanceAmount" SET NOT NULL,
ALTER COLUMN "balanceAmount" SET DEFAULT 0,
ALTER COLUMN "eventCategory" SET NOT NULL,
ALTER COLUMN "paidAmount" SET NOT NULL,
ALTER COLUMN "paidAmount" SET DEFAULT 0;

-- CreateIndex
CREATE INDEX "Lead_phone_idx" ON "Lead"("phone");

-- CreateIndex
CREATE INDEX "Lead_email_idx" ON "Lead"("email");

-- CreateIndex
CREATE INDEX "Lead_status_idx" ON "Lead"("status");
