import { Body, Controller, Get, Param, Post, Query, HttpStatus, HttpException, HttpCode } from '@nestjs/common';

import { News } from './news.interface';
import { NewsService } from './news.service';


@Controller('news')
export class NewsController {
    constructor(private newsService: NewsService) {}

    @Get('all')
    @HttpCode(200)
    async getNews(): Promise<News[]> {
        return this.newsService.findAll();
    }
    @Post(':id')
    @HttpCode(200)
    editNews(@Param('id') id:number) {
        let article = this.newsService.edit(id);
        if(article.length) {
            return "Success!!";
        } else {
            throw new HttpException('Error, there is no such record', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
