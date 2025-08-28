import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*', credentials: true });
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
  console.log(
      `🚀 Server is running on: http://localhost:${process.env.PORT ?? 3000}`
  );
}
bootstrap().then();
