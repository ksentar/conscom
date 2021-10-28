import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { NixCommand } from './nix.command';
import { NixService } from './nix.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [NixService, NixCommand],
})
export class NixModule {}
