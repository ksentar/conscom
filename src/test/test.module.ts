import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TestCommand } from './test.command';
import { TestService } from './test.service';

@Module({
  providers: [TestService, TestCommand, PrismaService],
})
export class TestModule {}
