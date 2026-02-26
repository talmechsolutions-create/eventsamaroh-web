/*
  Warnings:

  - You are about to drop the column `details` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `followUpDate` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `guests` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `source` on the `Lead` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[customerId]` on the table `Lead` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customerId` to the `Lead` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Lead_email_idx";

-- DropIndex
DROP INDEX "Lead_phone_idx";

-- DropIndex
DROP INDEX "Lead_status_idx";

-- AlterTable
ALTER TABLE "Lead" DROP COLUMN "details",
DROP COLUMN "followUpDate",
DROP COLUMN "guests",
DROP COLUMN "notes",
DROP COLUMN "source",
ADD COLUMN     "balanceAmount" DOUBLE PRECISION,
ADD COLUMN     "customerId" TEXT NOT NULL,
ADD COLUMN     "eventCategory" TEXT,
ADD COLUMN     "paidAmount" DOUBLE PRECISION,
ALTER COLUMN "status" SET DEFAULT 'PENDING_APPROVAL';

-- CreateIndex
CREATE UNIQUE INDEX "Lead_customerId_key" ON "Lead"("customerId");
