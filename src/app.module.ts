import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TestModule } from './test/test.module';

@Module({
  // envFilePath: '.development.env'
  imports: [ConfigModule.forRoot({ isGlobal: true }), UserModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
