import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgentsModule } from './agents/agents.module';
import { MongooseModule } from '@nestjs/mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/agents';

@Module({
  imports: [AgentsModule, MongooseModule.forRoot(MONGO_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
