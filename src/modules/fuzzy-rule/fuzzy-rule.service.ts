import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from 'src/common/services/prisma.service';
import { FuzzyRule, Prisma } from '@prisma/client';

@Injectable()
export class FuzzyRuleService {
  constructor(private readonly prisma: PrismaService) {}
  async createFuzzyRule(data: Prisma.FuzzyRuleCreateInput): Promise<FuzzyRule> {
    return await this.prisma.fuzzyRule.create({
      data,
    });
  }

  async findAll(): Promise<FuzzyRule[]> {
    return await this.prisma.fuzzyRule.findMany();
  }

  async findOne(id: string): Promise<FuzzyRule> {
    const fuzzyRule = await this.prisma.fuzzyRule.findUnique({
      where: { id },
    });

    if (!fuzzyRule)
      throw new NotFoundException(`Fuzzy Rule with ${id} not found`);

    return fuzzyRule;
  }

  async updateFuzzyRule(
    id: string,
    data: Prisma.FuzzyRuleUpdateInput,
  ): Promise<FuzzyRule> {
    const fuzzyRule = await this.prisma.fuzzyRule.findUnique({
      where: { id },
    });

    if (!fuzzyRule)
      throw new NotFoundException(`Fuzzy Rule with ${id} not found`);

    return await this.prisma.fuzzyRule.update({
      where: { id },
      data,
    });
  }

  async removeFuzzyRule(id: string) {
    const fuzzyRule = await this.prisma.fuzzyRule.findUnique({
      where: { id },
    });
    if (!fuzzyRule) {
      throw new NotFoundException(`Fuzzy rule with ID ${id} not found`);
    }
    return this.prisma.fuzzyRule.delete({
      where: { id },
    });
  }
}
