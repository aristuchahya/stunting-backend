/*
  Warnings:

  - The primary key for the `FuzzyRule` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `beratFuzzySetId` on the `FuzzyRule` table. All the data in the column will be lost.
  - You are about to drop the column `beratVariableId` on the `FuzzyRule` table. All the data in the column will be lost.
  - You are about to drop the column `tinggiFuzzySetId` on the `FuzzyRule` table. All the data in the column will be lost.
  - You are about to drop the column `tinggiVariableId` on the `FuzzyRule` table. All the data in the column will be lost.
  - You are about to drop the column `usiaFuzzySetId` on the `FuzzyRule` table. All the data in the column will be lost.
  - You are about to drop the column `usiaVariableId` on the `FuzzyRule` table. All the data in the column will be lost.
  - You are about to drop the `FuzzySet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FuzzyVariable` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `baby` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ageRange` to the `FuzzyRule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `heightMax` to the `FuzzyRule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `heightMin` to the `FuzzyRule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weightMax` to the `FuzzyRule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weightMin` to the `FuzzyRule` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `output` on the `FuzzyRule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "FuzzyRule" DROP CONSTRAINT "FuzzyRule_beratFuzzySetId_fkey";

-- DropForeignKey
ALTER TABLE "FuzzyRule" DROP CONSTRAINT "FuzzyRule_beratVariableId_fkey";

-- DropForeignKey
ALTER TABLE "FuzzyRule" DROP CONSTRAINT "FuzzyRule_tinggiFuzzySetId_fkey";

-- DropForeignKey
ALTER TABLE "FuzzyRule" DROP CONSTRAINT "FuzzyRule_tinggiVariableId_fkey";

-- DropForeignKey
ALTER TABLE "FuzzyRule" DROP CONSTRAINT "FuzzyRule_usiaFuzzySetId_fkey";

-- DropForeignKey
ALTER TABLE "FuzzyRule" DROP CONSTRAINT "FuzzyRule_usiaVariableId_fkey";

-- DropForeignKey
ALTER TABLE "FuzzySet" DROP CONSTRAINT "FuzzySet_fuzzyVariableId_fkey";

-- AlterTable
ALTER TABLE "FuzzyRule" DROP CONSTRAINT "FuzzyRule_pkey",
DROP COLUMN "beratFuzzySetId",
DROP COLUMN "beratVariableId",
DROP COLUMN "tinggiFuzzySetId",
DROP COLUMN "tinggiVariableId",
DROP COLUMN "usiaFuzzySetId",
DROP COLUMN "usiaVariableId",
ADD COLUMN     "ageRange" TEXT NOT NULL,
ADD COLUMN     "heightMax" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "heightMin" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "weightMax" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "weightMin" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
DROP COLUMN "output",
ADD COLUMN     "output" TEXT NOT NULL,
ADD CONSTRAINT "FuzzyRule_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "FuzzyRule_id_seq";

-- DropTable
DROP TABLE "FuzzySet";

-- DropTable
DROP TABLE "FuzzyVariable";

-- DropTable
DROP TABLE "baby";

-- CreateTable
CREATE TABLE "Balita" (
    "id" TEXT NOT NULL,
    "jenisKelamin" "Gender" NOT NULL,
    "tglLahir" TIMESTAMP(3) NOT NULL,
    "bbLahir" DOUBLE PRECISION NOT NULL,
    "tbLahir" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Balita_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Measurement" (
    "id" TEXT NOT NULL,
    "balitaId" TEXT NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "berat" DOUBLE PRECISION NOT NULL,
    "tinggi" DOUBLE PRECISION NOT NULL,
    "zScoreBBU" DOUBLE PRECISION NOT NULL,
    "zScoreTBU" DOUBLE PRECISION NOT NULL,
    "zScoreBBTB" DOUBLE PRECISION NOT NULL,
    "hasilFuzzy" "OutputType" NOT NULL,

    CONSTRAINT "Measurement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Measurement" ADD CONSTRAINT "Measurement_balitaId_fkey" FOREIGN KEY ("balitaId") REFERENCES "Balita"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
