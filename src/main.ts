import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || process.env.SERVER_DEV_PORT || 4200

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(PORT)
}

bootstrap()