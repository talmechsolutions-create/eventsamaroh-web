-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "followUpDate" TIMESTAMP(3),
ADD COLUMN     "notes" TEXT;

-- CreateIndex
CREATE INDEX "Lead_status_idx" ON "Lead"("status");
