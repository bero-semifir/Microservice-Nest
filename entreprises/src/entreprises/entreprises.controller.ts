import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EntreprisesService } from './entreprises.service';
import { CreateEntrepriseDto, UpdateEntrepriseDto } from './dto';

@Controller('entreprises')
export class EntreprisesController {
  constructor(private readonly entreprisesService: EntreprisesService) {}

  @Post()
  async create(@Body() createEntrepriseDto: CreateEntrepriseDto) {
    return await this.entreprisesService.create(createEntrepriseDto);
  }

  @Get()
  findAll() {
    return this.entreprisesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('request !');
    return this.entreprisesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEntrepriseDto: UpdateEntrepriseDto,
  ) {
    return this.entreprisesService.update(id, updateEntrepriseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entreprisesService.remove(id);
  }
}
