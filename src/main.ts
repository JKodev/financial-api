import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap().then(() => {
  // tslint:disable-next-line
  console.log('Application is running on http://localhost:3000');
}).catch(error => {
  // tslint:disable-next-line
  console.log('Application was broken for error', error);
});
