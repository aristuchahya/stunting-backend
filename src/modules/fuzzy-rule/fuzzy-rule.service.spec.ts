import { Test, TestingModule } from '@nestjs/testing';
import { FuzzyRuleService } from './fuzzy-rule.service';

describe('FuzzyRuleService', () => {
  let service: FuzzyRuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FuzzyRuleService],
    }).compile();

    service = module.get<FuzzyRuleService>(FuzzyRuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
