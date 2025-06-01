import { INestApplication, Logger } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

export async function setupSwaggerConfig(app: INestApplication): Promise<void> {
  const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('API documentation for the NestJS application')
    .setVersion('1.0')
    .build()

  const documentFactory = () => SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api', app, documentFactory)
}
