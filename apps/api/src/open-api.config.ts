import { DocumentBuilder } from '@nestjs/swagger'

export const openApiConfig = new DocumentBuilder()
  .setTitle('Sama Event API')
  .setDescription('The Sama Event API docs')
  .setVersion('1.0')
  .addBearerAuth()
  .build()
