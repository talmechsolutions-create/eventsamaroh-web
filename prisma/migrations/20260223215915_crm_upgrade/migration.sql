-- CreateEnum
CREATE TYPE "LeadStage" AS ENUM ('NEW', 'CONTACTED', 'QUOTED', 'NEGOTIATION', 'WON', 'LOST');

-- CreateEnum
CREATE TYPE "LeadPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "assignedToId" TEXT,
ADD COLUMN     "followUpCompleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "guests" INTEGER,
ADD COLUMN     "isArchived" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "priority" "LeadPriority" NOT NULL DEFAULT 'MEDIUM',
ADD COLUMN     "serviceSlug" TEXT,
ADD COLUMN     "stage" "LeadStage" NOT NULL DEFAULT 'NEW',
ALTER COLUMN "email" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "Invoice_invoiceNumber_idx" ON "Invoice"("invoiceNumber");

-- CreateIndex
CREATE INDEX "Lead_stage_idx" ON "Lead"("stage");

-- CreateIndex
CREATE INDEX "Lead_priority_idx" ON "Lead"("priority");

-- CreateIndex
CREATE INDEX "Lead_followUpDate_idx" ON "Lead"("followUpDate");

-- CreateIndex
CREATE INDEX "Lead_createdAt_idx" ON "Lead"("createdAt");

-- CreateIndex
CREATE INDEX "LeadActivity_createdAt_idx" ON "LeadActivity"("createdAt");

-- CreateIndex
CREATE INDEX "Payment_paidAt_idx" ON "Payment"("paidAt");

-- AddForeignKey
ALTER TABLE "Lead" ADD CONSTRAINT "Lead_assignedToId_fkey" FOREIGN KEY ("assignedToId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
