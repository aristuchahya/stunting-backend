import { Module } from '@nestjs/common';
import { FuzzyRuleService } from './fuzzy-rule.service';
import { FuzzyRuleController } from './fuzzy-rule.controller';

@Module({
  controllers: [FuzzyRuleController],
  providers: [FuzzyRuleService],
})
export class FuzzyRuleModule {}
