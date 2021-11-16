import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as shell from 'shelljs';
import { Site } from './site.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SiteService {

    constructor(@InjectRepository(Site) private repository: Repository<Site>){}

    async createSite(url: string, name: string): Promise<Site> {
        const site = {
            url, name
        }
        return await this.repository.create(site);
    }

    async getSite(id: number): Promise<Site> {
        return await this.repository.findOne(id);
    }

    downloadSite(siteUrl: string, siteName: string, includeImages?: boolean) {
        let command = 'node-site-downloader download -s ' + siteUrl + ' -d '
                        + siteUrl + ' -o ' + siteName;
        if(includeImages) {
            command += ' --include-images'
        }

        if (!shell.which('node-site-download')) {
            shell.echo('Sorry, this function requires node-site-download');
        } else {
            if(shell.exec(command).code != 0) {
                shell.echo('Error')
            } else {
                shell.echo('Succeed')
            }
        }
    }

}
