import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EntrepriseDocument = Entreprise & Document;

@Schema()
export class Entreprise {
  @Prop({ required: true })
  nom: string;
}

export const EntrepriseSchema = SchemaFactory.createForClass(Entreprise);
