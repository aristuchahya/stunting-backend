import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FuzzyDetectionService } from './fuzzy-detection.service';
import { Public } from 'src/common/decorator/public.decorator';
import { CreateFuzzyDetectionDto } from './dto/create-fuzzy-detection.dto';

@Controller('fuzzy-detection')
export class FuzzyDetectionController {
  constructor(private readonly fuzzyDetectionService: FuzzyDetectionService) {}

  @Public()
  @Post(':balitaId')
  createMeasurement(
    @Param('balitaId') balitaId: string,
    @Body() fuzzyDetect: CreateFuzzyDetectionDto,
  ) {
    return this.fuzzyDetectionService.detectStunting({
      balitaId,
      ...fuzzyDetect,
    });
  }

  @Public()
  @Get()
  findAll() {
    return this.fuzzyDetectionService.findAll();
  }

  @Public()
  @Get(':balitaId')
  findOne(@Param('balitaId') balitaId: string) {
    return this.fuzzyDetectionService.findOne(balitaId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fuzzyDetectionService.remove(+id);
  }
}
