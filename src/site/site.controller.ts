import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SiteService } from './site.service';

@Controller('site')
export class SiteController {

    constructor(private readonly siteService: SiteService){}

    @Get('/:id')
    getSite(@Param() params) {
        return this.siteService.getSite(params.id);
    }

    @Post()
    createSite(@Body() body) {
        return this.siteService.createSite(body.url, body.name);
    }

    // @Get('/')
    // a() {
    //     return this.siteService.downloadSite();
    // }
}
