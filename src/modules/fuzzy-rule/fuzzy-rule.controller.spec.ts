import { Test, TestingModule } from '@nestjs/testing';
import { FuzzyRuleController } from './fuzzy-rule.controller';
import { FuzzyRuleService } from './fuzzy-rule.service';

describe('FuzzyRuleController', () => {
  let controller: FuzzyRuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FuzzyRuleController],
      providers: [FuzzyRuleService],
    }).compile();

    controller = module.get<FuzzyRuleController>(FuzzyRuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
