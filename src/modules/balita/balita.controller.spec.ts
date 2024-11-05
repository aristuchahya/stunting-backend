import { Test, TestingModule } from '@nestjs/testing';
import { BalitaController } from './balita.controller';
import { BalitaService } from './balita.service';

describe('BalitaController', () => {
  let controller: BalitaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BalitaController],
      providers: [BalitaService],
    }).compile();

    controller = module.get<BalitaController>(BalitaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
