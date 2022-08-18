import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormateursModule } from './formateurs/formateurs.module';

@Module({
  imports: [FormateursModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
