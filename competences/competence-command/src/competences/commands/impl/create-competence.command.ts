import { CreateCompetenceDto } from 'src/competences/dto/create-competence.dto';

export class CreateCompetenceCommand {
  constructor(public readonly competence: CreateCompetenceDto) {}
}
