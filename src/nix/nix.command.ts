import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { NixService } from './nix.service';

@Injectable()
export class NixCommand {
  constructor(private readonly nixService: NixService) {}

  @Command({
    command: 'nix:get-session',
    describe: 'Get session ID',
  })
  async creatMany() {
    await this.nixService.getSession();
  }

  //   command: 'nix:parser',
  //   describe: 'Parse data from nix.ru',
  // })
  // async parseData() {
  // }
}
