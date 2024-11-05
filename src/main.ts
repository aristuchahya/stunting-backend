import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Server } from 'http';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { Callback, Context, Handler } from 'aws-lambda';

let server: Server;
async function bootstrap() {
  const expressApp = express();
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );
  app.enableCors();
  app.setGlobalPrefix('api/v1');

  const port = process.env.PORT || 3000;
  await app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrapServer());
  return server;
};

const bootstrapServer = async (): Promise<Server> => {
  if (!server) {
    const expressApp = express();
    const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp),
    );
    app.enableCors();
    app.setGlobalPrefix('api/v1');

    await app.init();
    server = expressApp.listen(3000);
  }
  return server;
};

if (process.env.VERCEL !== '1') {
  bootstrap();
}
