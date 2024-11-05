import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BalitaService } from './balita.service';
import { Public } from 'src/common/decorator/public.decorator';
import { Prisma } from '@prisma/client';

@Controller('balita')
export class BalitaController {
  constructor(private readonly balitaService: BalitaService) {}

  @Public()
  @Post()
  createBalita(@Body() data: Prisma.BalitaCreateInput) {
    return this.balitaService.createBalita(data);
  }

  @Public()
  @Get()
  findAll() {
    return this.balitaService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.balitaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.BalitaUpdateInput) {
    return this.balitaService.updateBalita(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.balitaService.removeBalita(id);
  }
}
