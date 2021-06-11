import { Body, Controller, Post } from '@nestjs/common';
import { CreateCommentDto } from './dtos/create-comment.dto';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentService: CommentsService) {}

  @Post()
  async createPost(@Body() dto: CreateCommentDto) {
    const data = await this.commentService.createOne(dto);
    return { message: 'Comment created', data };
  }
}
