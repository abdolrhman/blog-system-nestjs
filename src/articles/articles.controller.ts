import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dtos/create-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly postService: ArticlesService) {}

  @Get()
  async getMany() {
    const data = await this.postService.getMany();
    return { data };
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const data = await this.postService.getById(id);
    return { data };
  }

  @Post()
  async createPost(@Body() dto: CreateArticleDto) {
    const data = await this.postService.createOne(dto);
    return { message: 'Post created', data };
  }
}
