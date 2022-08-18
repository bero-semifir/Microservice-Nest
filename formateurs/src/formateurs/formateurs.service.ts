import { Injectable } from '@nestjs/common';
import { CreateFormateurDto } from './dto/create-formateur.dto';
import { UpdateFormateurDto } from './dto/update-formateur.dto';

import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

const AGENTS_URI = process.env.AGENTS_URI || 'http://localhost:8000/agents';
const ENTREPRISES_URI =
  process.env.ENTREPRISES_URI || 'http://localhost:8000/entreprises';

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
    console.log(
      `${AGENTS_URI}/${id}`,
      // `${ENTREPRISES_URI}/${agent.data.entreprise_id}`,
    );
    // this.httpService.get().toPromise() est déprécié depuis RxJS 7
    const agent = await lastValueFrom(
      this.httpService.get(`${AGENTS_URI}/${id}`),
    );
    const entreprise = await lastValueFrom(
      this.httpService.get(`${ENTREPRISES_URI}/${agent.data.entreprise_id}`),
    );
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
