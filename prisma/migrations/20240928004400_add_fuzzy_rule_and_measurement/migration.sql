/*
  Warnings:

  - You are about to drop the column `bbLahir` on the `Balita` table. All the data in the column will be lost.
  - You are about to drop the column `jenisKelamin` on the `Balita` table. All the data in the column will be lost.
  - You are about to drop the column `tbLahir` on the `Balita` table. All the data in the column will be lost.
  - You are about to drop the column `tglLahir` on the `Balita` table. All the data in the column will be lost.
  - You are about to drop the column `berat` on the `Measurement` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal` on the `Measurement` table. All the data in the column will be lost.
  - You are about to drop the column `tinggi` on the `Measurement` table. All the data in the column will be lost.
  - You are about to drop the column `zScoreBBTB` on the `Measurement` table. All the data in the column will be lost.
  - You are about to drop the column `zScoreBBU` on the `Measurement` table. All the data in the column will be lost.
  - You are about to drop the column `zScoreTBU` on the `Measurement` table. All the data in the column will be lost.
  - Added the required column `birth` to the `Balita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthHeight` to the `Balita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthWeight` to the `Balita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Balita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Balita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Balita` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `output` on the `FuzzyRule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `currentAge` to the `Measurement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentHeight` to the `Measurement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentWeight` to the `Measurement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Measurement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Measurement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Balita" DROP COLUMN "bbLahir",
DROP COLUMN "jenisKelamin",
DROP COLUMN "tbLahir",
DROP COLUMN "tglLahir",
ADD COLUMN     "birth" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "birthHeight" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "birthWeight" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "gender" "Gender" NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "FuzzyRule" DROP COLUMN "output",
ADD COLUMN     "output" "OutputType" NOT NULL;

-- AlterTable
ALTER TABLE "Measurement" DROP COLUMN "berat",
DROP COLUMN "tanggal",
DROP COLUMN "tinggi",
DROP COLUMN "zScoreBBTB",
DROP COLUMN "zScoreBBU",
DROP COLUMN "zScoreTBU",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "currentAge" INTEGER NOT NULL,
ADD COLUMN     "currentHeight" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "currentWeight" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
