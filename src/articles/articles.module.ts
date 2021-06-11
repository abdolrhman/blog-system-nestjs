import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { ArticleEntity } from './article.entity';
import { User } from '../users/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity, User])],
  providers: [ArticlesService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
