import { Module } from '@nestjs/common';
import { FuzzyDetectionService } from './fuzzy-detection.service';
import { FuzzyDetectionController } from './fuzzy-detection.controller';

@Module({
  controllers: [FuzzyDetectionController],
  providers: [FuzzyDetectionService],
})
export class FuzzyDetectionModule {}
