import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FormateursService } from './formateurs.service';
import { CreateFormateurDto } from './dto/create-formateur.dto';
import { UpdateFormateurDto } from './dto/update-formateur.dto';

@Controller('formateurs')
export class FormateursController {
  constructor(private readonly formateursService: FormateursService) {}

  @Post()
  create(@Body() createFormateurDto: CreateFormateurDto) {
    return this.formateursService.create(createFormateurDto);
  }

  @Get()
  findAll() {
    return this.formateursService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formateursService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFormateurDto: UpdateFormateurDto,
  ) {
    return this.formateursService.update(id, updateFormateurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formateursService.remove(id);
  }
}
