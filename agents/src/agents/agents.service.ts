import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAgentDto, UpdateAgentDto } from './dto';
import { Agent } from './entities/agent.entity';
import { AgentDocument } from './schemas/agent.schema';

@Injectable()
export class AgentsService {
  constructor(
    @InjectModel(Agent.name) private agentModel: Model<AgentDocument>,
  ) {}

  async create(createAgentDto: CreateAgentDto): Promise<Agent> {
    const newAgent = this.agentModel.create(createAgentDto);
    return newAgent;
  }

  async findAll(): Promise<Agent[]> {
    return this.agentModel.find().exec();
  }

  async findOne(id: string): Promise<Agent> {
    return this.agentModel.findOne({ _id: id });
  }

  update(id: string, updateAgentDto: UpdateAgentDto) {
    return this.agentModel.findOneAndUpdate({ _id: id }, updateAgentDto);
  }

  remove(id: string) {
    return this.agentModel.findOneAndDelete({ _id: id });
  }
}
