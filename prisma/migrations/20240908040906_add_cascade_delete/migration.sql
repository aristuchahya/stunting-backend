-- DropForeignKey
ALTER TABLE "FuzzyRule" DROP CONSTRAINT "FuzzyRule_beratFuzzySetId_fkey";

-- DropForeignKey
ALTER TABLE "FuzzyRule" DROP CONSTRAINT "FuzzyRule_tinggiFuzzySetId_fkey";

-- DropForeignKey
ALTER TABLE "FuzzyRule" DROP CONSTRAINT "FuzzyRule_usiaFuzzySetId_fkey";

-- AddForeignKey
ALTER TABLE "FuzzyRule" ADD CONSTRAINT "FuzzyRule_usiaFuzzySetId_fkey" FOREIGN KEY ("usiaFuzzySetId") REFERENCES "FuzzySet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuzzyRule" ADD CONSTRAINT "FuzzyRule_beratFuzzySetId_fkey" FOREIGN KEY ("beratFuzzySetId") REFERENCES "FuzzySet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuzzyRule" ADD CONSTRAINT "FuzzyRule_tinggiFuzzySetId_fkey" FOREIGN KEY ("tinggiFuzzySetId") REFERENCES "FuzzySet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
