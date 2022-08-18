import { Injectable } from '@nestjs/common';
import { CreateFormateurDto } from './dto/create-formateur.dto';
import { UpdateFormateurDto } from './dto/update-formateur.dto';

import { HttpService } from '@nestjs/axios';

@Injectable()
export class FormateursService {
  constructor(private readonly httpService: HttpService) {}

  create(createFormateurDto: CreateFormateurDto) {
    return 'This action adds a new formateur';
  }

  findAll() {
    return `This action returns all formateurs`;
  }

  async findOne(id: string) {
    const agent = await this.httpService
      .get(`http://localhost:3002/agents/${id}`)
      .toPromise();

    const entreprise = await this.httpService
      .get(`http://localhost:3001/entreprises/${agent.data.entreprise_id}`)
      .toPromise();
    return {
      agent: { ...agent.data },
      entreprise: { ...entreprise.data },
    };
  }

  update(id: string, updateFormateurDto: UpdateFormateurDto) {
    return `This action updates a #${id} formateur`;
  }

  remove(id: string) {
    return `This action removes a #${id} formateur`;
  }
}
