import 'reflect-metadata';

import helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import {
  cors_allowed_headers,
  cors_config,
  cors_max_age,
  cors_methods,
  Environment,
} from './types';

const setupSwagger = (app: INestApplication, app_id: string) => {
  const config = new DocumentBuilder()
    .setTitle(app_id)
    .setDescription(`The REST API for ${app_id} Service`)
    .setVersion('1.0')
    .addTag(app_id)
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
};

async function bootstrap() {
  const app_id = 'LAZER Another';
  const logger = new Logger(`${app_id} Service`);
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  const configService = app.get(ConfigService);
  const port = configService.get('APP_ANOTHER_SERVICE_PORT') || 3001;
  const node_env: Environment =
    configService.get('NODE_ENV') ?? Environment.DEV;

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true, // this will strip away any extra keys in the request DTOs
    }),
  );

  app.enableCors({
    origin: cors_config[node_env],
    methods: cors_methods,
    allowedHeaders: cors_allowed_headers,
    maxAge: cors_max_age,
    credentials: true,
  });

  app.use(
    helmet({
      hsts: { maxAge: 31536000 },
      frameguard: { action: 'deny' },
      contentSecurityPolicy: {
        directives: {
          'default-src': ["'self'"],
          'frame-ancestors': ["'none'"],
        },
      },
    }),
  );

  setupSwagger(app, app_id);
  await app.listen(port, '0.0.0.0');
  logger.log(`Nest ${app_id} Service is running on: ${await app.getUrl()}`);
}

bootstrap();
