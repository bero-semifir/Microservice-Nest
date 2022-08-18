import { Controller, Get, Param } from '@nestjs/common';
import { CompetencesService } from './competences.service';

@Controller('competences')
export class CompetencesController {
  constructor(private readonly competencesService: CompetencesService) {}

  @Get()
  findAll() {
    return this.competencesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.competencesService.findOne(id);
  }
}
