import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [CommandModule, PrismaModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
