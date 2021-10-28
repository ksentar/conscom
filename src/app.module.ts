import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { TestModule } from './test/test.module';
import { NixModule } from './nix/nix.module';

@Module({
  imports: [CommandModule, NixModule, TestModule, NixModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
