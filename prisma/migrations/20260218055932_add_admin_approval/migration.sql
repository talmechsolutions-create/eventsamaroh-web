-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "approvedAt" TIMESTAMP(3),
ADD COLUMN     "approvedByAdmin" BOOLEAN NOT NULL DEFAULT false;
