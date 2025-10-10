import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Apply validation globally
  app.useGlobalPipes(new ValidationPipe());
  console.log('port is ', process.env.PORT);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
