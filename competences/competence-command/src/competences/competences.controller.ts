import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateCompetenceCommand } from './commands/impl/create-competence.command';
import { CreateCompetenceDto } from './dto/create-competence.dto';
// import { UpdateCompetenceDto } from './dto/update-competence.dto';

@Controller('competences')
export class CompetencesController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  create(@Body() createCompetenceDto: CreateCompetenceDto) {
    return this.commandBus.execute(
      new CreateCompetenceCommand(createCompetenceDto),
    );
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateCompetenceDto: UpdateCompetenceDto,
  // ) {
  //   return this.competencesService.update(+id, updateCompetenceDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.competencesService.remove(+id);
  // }
}
