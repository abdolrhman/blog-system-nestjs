import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dtos/create-comment.dto';
import { CommentEntity } from './comment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleEntity } from '../articles/article.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>,
    @InjectRepository(ArticleEntity)
    private articleRepository: Repository<ArticleEntity>,
  ) {}

  async createOne(dto: CreateCommentDto) {
    const article: ArticleEntity = await this.articleRepository.findOne(
      dto.article,
    );
    const comment = this.commentRepository.create({ ...dto, article });
    return await this.commentRepository.save(comment);
  }
}
