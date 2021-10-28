import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TestService {
  private readonly logger = new Logger(TestService.name, { timestamp: true });

  constructor(private prisma: PrismaService) {}

  async test() {
    this.logger.log('Begin');
    const arr = [];

    for (let i = 1; i <= 10000; i++) {
      arr.push({ id: i, name: 'test' });
    }

    await this.prisma.$executeRawUnsafe(
      /* SQL */ `INSERT INTO tests (id, name) SELECT * FROM json_populate_recordset(null::tests, $1) ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name`,
      JSON.stringify(arr),
    );

    this.logger.log('End');
  }
}
