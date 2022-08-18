import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompetencesModule } from './competences/competences.module';

import { MongooseModule } from '@nestjs/mongoose';

const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://localhost:27017/competences';

@Module({
  imports: [CompetencesModule, MongooseModule.forRoot(MONGO_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
