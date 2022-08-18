import { Module } from '@nestjs/common';
import { FormateursService } from './formateurs.service';
import { FormateursController } from './formateurs.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [FormateursController],
  providers: [FormateursService],
})
export class FormateursModule {}
