import { Test, TestingModule } from '@nestjs/testing';
import { BalitaService } from './balita.service';

describe('BalitaService', () => {
  let service: BalitaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BalitaService],
    }).compile();

    service = module.get<BalitaService>(BalitaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
