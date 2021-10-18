import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Test, Prisma } from '@prisma/client';

@Injectable()
export class TestService {
  constructor(private prisma: PrismaService) {}

  async test() {
    for (let i = 1; i <= 10000; i++) {
      await this.prisma.test.create({
        data: {
          name: `name${i}`,
        },
      });
    }
  }
}
