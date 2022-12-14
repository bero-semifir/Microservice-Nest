import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntreprisesModule } from './entreprises/entreprises.module';

const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://localhost:27017/entreprises';

@Module({
  imports: [MongooseModule.forRoot(MONGO_URI), EntreprisesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
