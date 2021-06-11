import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from './comment.entity';
import { ArticleEntity } from '../articles/article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity, ArticleEntity])],
  providers: [CommentsService],
  controllers: [CommentsController],
})
export class CommentsModule {}
