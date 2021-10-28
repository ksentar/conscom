import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { readFile } from 'fs/promises';

@Injectable()
export class NixService {
  private readonly logger = new Logger(NixService.name, { timestamp: true });
  constructor(private httpService: HttpService) {}
  async getSession() {
    const getNix = this.httpService.request({
      method: 'get',
      url: 'http://10.50.0.106:3000/',
      responseType: 'json',
    });
    // const read = readFile(getNix);
    this.logger.log(getNix);
  }
}
