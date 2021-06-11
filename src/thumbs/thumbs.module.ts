import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThumbsService } from './thumbs.service';
import { ThumbsController } from './thumbs.controller';
import { User } from '../users/user.entity';
import { ThumbEntity } from './thumb.entity';
import { ArticleEntity } from '../articles/article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity, User, ThumbEntity])],
  providers: [ThumbsService],
  controllers: [ThumbsController],
})
export class ThumbsModule {}
