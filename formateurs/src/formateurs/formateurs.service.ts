import { Injectable } from '@nestjs/common';
import { CreateFormateurDto } from './dto/create-formateur.dto';
import { UpdateFormateurDto } from './dto/update-formateur.dto';

import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

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
    // this.httpService.get().toPromise() est déprécié depuis RxJS 7
    const agent = await lastValueFrom(
      this.httpService.get(`http://localhost:3002/agents/${id}`),
    );
    const entreprise = await lastValueFrom(
      this.httpService.get(
        `http://localhost:3001/entreprises/${agent.data.entreprise_id}`,
      ),
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
