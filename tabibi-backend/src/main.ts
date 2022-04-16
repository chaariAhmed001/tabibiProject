import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    "origin": "http://localhost:3000",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "credentials":true,
    allowedHeaders: "Content-Type, Accept"
  });
  app.use(
    session({
      secret: 'my-secret', 
      resave: false,
      saveUninitialized: false,
    }),
  );
  await app.listen(5000);
}
bootstrap();
