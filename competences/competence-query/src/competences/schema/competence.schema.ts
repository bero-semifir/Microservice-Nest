import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompetenceDocument = Competence & Document;

@Schema()
export class Competence {
  @Prop()
  nom: string;
  @Prop()
  categorie: string;
}

export const CompetenceSchema = SchemaFactory.createForClass(Competence);
