import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type AgentDocument = Agent & Document;

@Schema()
export class Agent {
  @Prop()
  nom: string;

  @Prop()
  entreprise_id: mongoose.Schema.Types.ObjectId;
}

export const AgentSchema = SchemaFactory.createForClass(Agent);
