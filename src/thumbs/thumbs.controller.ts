import { Body, Controller, Post } from '@nestjs/common';
import { ThumbsService } from './thumbs.service';
import { ThumbEntity } from './thumb.entity';

@Controller('thumbs')
export class ThumbsController {
  constructor(private readonly thumbService: ThumbsService) {}

  @Post()
  async createPost(@Body() thumbBody: ThumbEntity) {
    const data = await this.thumbService.createOne(thumbBody);
    return { message: 'Thumb created', data };
  }
}
