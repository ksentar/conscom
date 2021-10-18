import { Injectable, LoggerService } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TestService {
  constructor(private prisma: PrismaService, private logger: LoggerService) {}

  async test() {
    for (let i = 1; i <= 10000; i++) {
      await this.prisma.test.create({
        data: {
          name: `name${i}`,
        },
      });
      this.logger.log;
    }
  }
}
