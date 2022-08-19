import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import {
  Competence,
  CompetenceDocument,
} from 'src/competences/schemas/competence.schema';
import { CompetenceCreatedEvent } from '../impl/competence-created.event';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@EventsHandler(CompetenceCreatedEvent)
export class CompetenceCreatedHandler
  implements IEventHandler<CompetenceCreatedEvent>
{
  constructor(
    @InjectModel(Competence.name)
    private CompetenceModel: Model<CompetenceDocument>,
  ) {}

  handle(event: CompetenceCreatedEvent) {
    console.log(event);
  }
}
