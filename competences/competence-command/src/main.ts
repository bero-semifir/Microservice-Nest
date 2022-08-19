import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  config();

  const PORT = process.env.PORT || 3000;
  const KAFKA_URI = process.env.KAFKA_URI || 'localhost:9092';

  const microserviceOptions: MicroserviceOptions = {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [KAFKA_URI],
      },
    },
  };
  const app = await NestFactory.create(AppModule);
  await app.connectMicroservice<MicroserviceOptions>(microserviceOptions);
  await app.startAllMicroservices();
  await app.listen(PORT);
}
bootstrap();
