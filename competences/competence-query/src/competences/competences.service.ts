import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Competence, CompetenceDocument } from './schema/competence.schema';
import { Model } from 'mongoose';

@Injectable()
export class CompetencesService {
  constructor(
    @InjectModel(Competence.name)
    private CompetenceModel: Model<CompetenceDocument>,
  ) {}

  async findAll(): Promise<Competence[]> {
    return await this.CompetenceModel.find().exec();
  }

  async findOne(id: string): Promise<Competence> {
    return await this.CompetenceModel.findOne({ _id: id });
  }
}
