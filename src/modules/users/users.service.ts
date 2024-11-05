import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/common/services/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.users.findMany({
      where: {
        role: 'USER',
      },
    });
  }
}
