import { Test, TestingModule } from '@nestjs/testing';
import { FuzzyDetectionService } from './fuzzy-detection.service';

describe('FuzzyDetectionService', () => {
  let service: FuzzyDetectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FuzzyDetectionService],
    }).compile();

    service = module.get<FuzzyDetectionService>(FuzzyDetectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
