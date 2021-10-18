import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TestCommand } from './test.command';
import { TestService } from './test.service';

@Module({
  imports: [],
  controllers: [],
  providers: [TestService, TestCommand, PrismaService],
})
export class TestModule {}
