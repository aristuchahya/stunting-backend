/*
  Warnings:

  - You are about to drop the column `hasilFuzzy` on the `Measurement` table. All the data in the column will be lost.
  - Added the required column `fuzzyScore` to the `Measurement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outputFuzzy` to the `Measurement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Measurement" DROP COLUMN "hasilFuzzy",
ADD COLUMN     "fuzzyScore" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "outputFuzzy" "OutputType" NOT NULL;
