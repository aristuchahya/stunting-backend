import { Module } from '@nestjs/common';
import { BalitaService } from './balita.service';
import { BalitaController } from './balita.controller';

@Module({
  controllers: [BalitaController],
  providers: [BalitaService],
})
export class BalitaModule {}
