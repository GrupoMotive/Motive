import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Motive')
  .setDescription('Projeto Integrador Motive foi desenvolvido sobe a ODS 3 da ONU, a onde elaboramos uma desafiadora missão de como fazer um mundo melhor até 2030')
  .setContact("Motive","https://github.com/orgs/GrupoMotive/dashboard", "grupo1.generation.rj@email.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  process.env.TZ = '-03:00';

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
