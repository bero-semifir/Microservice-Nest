import { Test, TestingModule } from '@nestjs/testing';
import { FormateursController } from './formateurs.controller';
import { FormateursService } from './formateurs.service';

describe('FormateursController', () => {
  let controller: FormateursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormateursController],
      providers: [FormateursService],
    }).compile();

    controller = module.get<FormateursController>(FormateursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
