import { AggregateRoot } from '@nestjs/cqrs';

export class Competence extends AggregateRoot {
  constructor(private nom: string, private categorie: string) {
    super();
  }
}
