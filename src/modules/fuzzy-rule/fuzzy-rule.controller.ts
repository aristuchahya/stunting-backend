import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { FuzzyRuleService } from './fuzzy-rule.service';

import { Public } from 'src/common/decorator/public.decorator';
import { Prisma } from '@prisma/client';

@Controller('fuzzy-rule')
export class FuzzyRuleController {
  constructor(private readonly fuzzyRuleService: FuzzyRuleService) {}

  @HttpCode(HttpStatus.CREATED)
  @Public()
  @Post()
  createFuzzyRule(@Body() data: Prisma.FuzzyRuleCreateInput) {
    return this.fuzzyRuleService.createFuzzyRule(data);
  }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Get()
  findAll() {
    return this.fuzzyRuleService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fuzzyRuleService.findOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  @Public()
  updateFuzzyRule(
    @Param('id') id: string,
    @Body() data: Prisma.FuzzyRuleUpdateInput,
  ) {
    return this.fuzzyRuleService.updateFuzzyRule(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fuzzyRuleService.removeFuzzyRule(id);
  }
}
