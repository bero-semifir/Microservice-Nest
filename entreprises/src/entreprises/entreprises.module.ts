import { Module } from '@nestjs/common';
import { EntreprisesService } from './entreprises.service';
import { EntreprisesController } from './entreprises.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Entreprise, EntrepriseSchema } from './schemas/entreprise.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Entreprise.name, schema: EntrepriseSchema },
    ]),
  ],
  controllers: [EntreprisesController],
  providers: [EntreprisesService],
})
export class EntreprisesModule {}
