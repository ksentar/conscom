import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { TestService } from './test.service';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TestCommand {
  constructor(
    private readonly testService: TestService,
    private readonly prismaService: PrismaService,
  ) {}

  @Command({
    command: 'test:create-many',
    describe: 'Command adding 10000 users to the table Test',
  })
  async creatMany() {
    await this.testService.test();
  }
}
