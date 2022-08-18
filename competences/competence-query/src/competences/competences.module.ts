import { Module } from '@nestjs/common';
import { CompetencesService } from './competences.service';
import { CompetencesController } from './competences.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { Competence, CompetenceSchema } from './schema/competence.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Competence.name, schema: CompetenceSchema },
    ]),
  ],
  controllers: [CompetencesController],
  providers: [CompetencesService],
})
export class CompetencesModule {}
