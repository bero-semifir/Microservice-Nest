import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Competence,
  CompetenceDocument,
} from 'src/competences/schemas/competence.schema';
import { CreateCompetenceCommand } from '../impl/create-competence.command';
import { CompetenceCreatedEvent } from '../../events/impl/competence-created.event';

@CommandHandler(CreateCompetenceCommand)
export class CreateCompetenceHandler
  implements ICommandHandler<CreateCompetenceCommand>
{
  constructor(
    @InjectModel(Competence.name)
    private CompetenceModel: Model<CompetenceDocument>,
    private eventBus: EventBus,
  ) {}
  async execute(command: CreateCompetenceCommand) {
    const { competence } = command;
    console.log('Async CreateCompetenceHandler:', command);
    this.CompetenceModel.create(competence);
    this.eventBus.publish(new CompetenceCreatedEvent(competence));
  }
}
