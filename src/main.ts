import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config/envs.config';
import { setupSwaggerConfig } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await setupSwaggerConfig(app);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      always: true,
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(envs.PORT);
}
await bootstrap();
