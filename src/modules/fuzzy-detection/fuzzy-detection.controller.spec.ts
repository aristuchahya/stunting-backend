import { Test, TestingModule } from '@nestjs/testing';
import { FuzzyDetectionController } from './fuzzy-detection.controller';
import { FuzzyDetectionService } from './fuzzy-detection.service';

describe('FuzzyDetectionController', () => {
  let controller: FuzzyDetectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FuzzyDetectionController],
      providers: [FuzzyDetectionService],
    }).compile();

    controller = module.get<FuzzyDetectionController>(FuzzyDetectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
