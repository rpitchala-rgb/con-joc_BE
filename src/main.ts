
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin:"*"
  });
  app.setGlobalPrefix('api');
  setupSwagger(app);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
