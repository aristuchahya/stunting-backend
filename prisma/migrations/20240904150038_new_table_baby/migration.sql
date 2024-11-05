-- CreateEnum
CREATE TYPE "OutputType" AS ENUM ('STUNTING', 'NORMAL');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('LAKI_LAKI', 'PEREMPUAN');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "baby" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" "Gender" NOT NULL,
    "score" DOUBLE PRECISION,
    "result" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "baby_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FuzzyVariable" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "FuzzyVariable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FuzzySet" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lowerBound" DOUBLE PRECISION NOT NULL,
    "upperBound" DOUBLE PRECISION NOT NULL,
    "fuzzyVariableId" INTEGER NOT NULL,

    CONSTRAINT "FuzzySet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FuzzyRule" (
    "id" SERIAL NOT NULL,
    "usiaVariableId" INTEGER NOT NULL,
    "usiaFuzzySetId" INTEGER NOT NULL,
    "beratVariableId" INTEGER NOT NULL,
    "beratFuzzySetId" INTEGER NOT NULL,
    "tinggiVariableId" INTEGER NOT NULL,
    "tinggiFuzzySetId" INTEGER NOT NULL,
    "output" "OutputType" NOT NULL,

    CONSTRAINT "FuzzyRule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "FuzzyVariable_name_key" ON "FuzzyVariable"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FuzzySet_name_fuzzyVariableId_key" ON "FuzzySet"("name", "fuzzyVariableId");

-- AddForeignKey
ALTER TABLE "FuzzySet" ADD CONSTRAINT "FuzzySet_fuzzyVariableId_fkey" FOREIGN KEY ("fuzzyVariableId") REFERENCES "FuzzyVariable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuzzyRule" ADD CONSTRAINT "FuzzyRule_usiaVariableId_fkey" FOREIGN KEY ("usiaVariableId") REFERENCES "FuzzyVariable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuzzyRule" ADD CONSTRAINT "FuzzyRule_usiaFuzzySetId_fkey" FOREIGN KEY ("usiaFuzzySetId") REFERENCES "FuzzySet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuzzyRule" ADD CONSTRAINT "FuzzyRule_beratVariableId_fkey" FOREIGN KEY ("beratVariableId") REFERENCES "FuzzyVariable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuzzyRule" ADD CONSTRAINT "FuzzyRule_beratFuzzySetId_fkey" FOREIGN KEY ("beratFuzzySetId") REFERENCES "FuzzySet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuzzyRule" ADD CONSTRAINT "FuzzyRule_tinggiVariableId_fkey" FOREIGN KEY ("tinggiVariableId") REFERENCES "FuzzyVariable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuzzyRule" ADD CONSTRAINT "FuzzyRule_tinggiFuzzySetId_fkey" FOREIGN KEY ("tinggiFuzzySetId") REFERENCES "FuzzySet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
