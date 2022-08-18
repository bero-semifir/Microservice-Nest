import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEntrepriseDto, UpdateEntrepriseDto } from './dto';
import { Entreprise, EntrepriseDocument } from './schemas/entreprise.schema';

@Injectable()
export class EntreprisesService {
  constructor(
    @InjectModel(Entreprise.name)
    private readonly entrepriseModel: Model<EntrepriseDocument>,
  ) {}

  async create(createEntrepriseDto: CreateEntrepriseDto): Promise<Entreprise> {
    console.log(createEntrepriseDto);
    const entreprise = await this.entrepriseModel.create(createEntrepriseDto);
    return entreprise;
  }

  async findAll(): Promise<Entreprise[]> {
    return this.entrepriseModel.find();
  }

  async findOne(id: string): Promise<Entreprise> {
    return this.entrepriseModel.findOne({ _id: id });
  }

  async update(id: string, updateEntrepriseDto: UpdateEntrepriseDto) {
    return this.entrepriseModel.updateOne({ _id: id }, updateEntrepriseDto);
  }

  async remove(id: string): Promise<Entreprise> {
    return this.entrepriseModel.findByIdAndRemove(id);
  }
}
