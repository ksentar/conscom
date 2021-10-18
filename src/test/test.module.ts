import { Module } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { PrismaService } from 'src/prisma.service';
import { TestCommand } from './test.command';
import { TestService } from './test.service';

@Module({
  imports: [AppModule],
  providers: [TestService, TestCommand, PrismaService],
  exports: [TestService, TestCommand],
})
export class TestModule {}
