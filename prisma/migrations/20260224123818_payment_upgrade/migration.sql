-- AlterEnum
ALTER TYPE "PaymentStatus" ADD VALUE 'CANCELLED';

-- AlterTable
ALTER TABLE "Lead" ALTER COLUMN "contractAmount" SET DEFAULT 0;

-- CreateIndex
CREATE INDEX "Lead_eventDate_idx" ON "Lead"("eventDate");

-- CreateIndex
CREATE INDEX "Lead_source_idx" ON "Lead"("source");

-- CreateIndex
CREATE INDEX "Payment_approvedByAdmin_idx" ON "Payment"("approvedByAdmin");
