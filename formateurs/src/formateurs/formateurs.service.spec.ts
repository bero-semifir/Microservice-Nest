import { Test, TestingModule } from '@nestjs/testing';
import { FormateursService } from './formateurs.service';

describe('FormateursService', () => {
  let service: FormateursService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormateursService],
    }).compile();

    service = module.get<FormateursService>(FormateursService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
