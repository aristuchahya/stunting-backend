import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from 'src/common/services/prisma.service';
import { Balita, Prisma } from '@prisma/client';

@Injectable()
export class BalitaService {
  constructor(private readonly prisma: PrismaService) {}
  async createBalita(data: Prisma.BalitaCreateInput): Promise<Balita> {
    return await this.prisma.balita.create({ data });
  }

  async findAll(): Promise<Balita[]> {
    return await this.prisma.balita.findMany();
  }

  async findOne(id: string) {
    const balita = await this.prisma.balita.findUnique({
      where: {
        id,
      },
    });

    if (!balita) {
      throw new NotFoundException('balita not found');
    }

    return balita;
  }

  async updateBalita(
    id: string,
    data: Prisma.BalitaUpdateInput,
  ): Promise<Balita> {
    const balita = await this.prisma.balita.findUnique({
      where: {
        id,
      },
    });

    if (!balita) {
      throw new NotFoundException('balita not found');
    }

    return await this.prisma.balita.update({
      where: {
        id,
      },
      data,
    });
  }

  async removeBalita(id: string) {
    return await this.prisma.balita.delete({
      where: {
        id,
      },
    });
  }
}
