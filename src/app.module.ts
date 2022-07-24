import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dirname, join } from 'path';

console.log({ __dirname, __filename });

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(dirname(__filename), 'static'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
