import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 8080;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  Logger.log(`application running run port(${port})`);
}
bootstrap();
