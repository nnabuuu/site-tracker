import { Module } from '@nestjs/common';
import { SiteService } from './site.service';
import { SiteController } from './site.controller';
import { Site } from './site.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Site]),
  ],
  providers: [SiteService],
  controllers: [SiteController]
})
export class SiteModule {}
