import { FuzzyRule } from '@prisma/client';

export class CreateFuzzyDetectionDto {
  balitaId: string;
  date: Date;
  birthWeight: number;
  birthHeight: number;
  zsTbu: number;
  zsBBu: number;
  rules?: FuzzyRule[];
}
