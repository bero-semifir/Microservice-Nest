import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import {
  Competence,
  CompetenceDocument,
} from 'src/competences/schemas/competence.schema';
import { CompetenceCreatedEvent } from '../impl/competence-created.event';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Kafka } from 'kafkajs';

@EventsHandler(CompetenceCreatedEvent)
export class CompetenceCreatedHandler
  implements IEventHandler<CompetenceCreatedEvent>
{
  constructor(
    @InjectModel(Competence.name)
    private CompetenceModel: Model<CompetenceDocument>,
  ) {}

  async handle(event: CompetenceCreatedEvent) {
    const kafka = new Kafka({
      clientId: 'syntaxio-micro-s',
      brokers: ['127.0.0.1:9092'],
    });
    console.log(event);
    const producer = kafka.producer();
    await producer.connect();
    await producer.send({
      topic: 'competence-created',
      messages: [
        {
          value: JSON.stringify(event),
        },
      ],
    });
    await producer.disconnect();
  }
}
