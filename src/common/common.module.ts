import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from './services/prisma.service';
import { BcryptService } from './services/bcrypt.service';
import { ZodFilter } from './filter/zod/zod.filter';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './guard/jwt/jwt.guard';
import { RolesGuard } from './guard/roles/roles.guard';

@Global()
@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [
    PrismaService,
    BcryptService,
    {
      provide: APP_FILTER,
      useClass: ZodFilter,
    },
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [PrismaService, JwtModule, BcryptService],
})
export class CommonModule {}
