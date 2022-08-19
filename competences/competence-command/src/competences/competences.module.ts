import { Module } from '@nestjs/common';
import { CompetencesController } from './competences.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { Competence, CompetenceSchema } from './schemas/competence.schema';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handler';
import { EventHandlers } from './events/handlers';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      { name: Competence.name, schema: CompetenceSchema },
    ]),
  ],
  controllers: [CompetencesController],
  providers: [...CommandHandlers, ...EventHandlers],
})
export class CompetencesModule {}
