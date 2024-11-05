-- DropForeignKey
ALTER TABLE "Measurement" DROP CONSTRAINT "Measurement_balitaId_fkey";

-- AlterTable
ALTER TABLE "Measurement" ALTER COLUMN "balitaId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Measurement" ADD CONSTRAINT "Measurement_balitaId_fkey" FOREIGN KEY ("balitaId") REFERENCES "Balita"("id") ON DELETE SET NULL ON UPDATE CASCADE;
