import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Repository } from 'typeorm';
import { ArticleEntity } from '../articles/article.entity';
import { ThumbEntity } from './thumb.entity';

@Injectable()
export class ThumbsService {
  constructor(
    @InjectRepository(ThumbEntity)
    private readonly thumbRepository: Repository<ThumbEntity>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(ArticleEntity)
    private articleRepository: Repository<ArticleEntity>,
  ) {}

  async createOne(body) {
    const article: ArticleEntity = await this.articleRepository.findOne(
      body.article,
    );
    const user: User = await this.userRepository.findOne(body.user);
    const thumb = this.thumbRepository.create({ user, article });
    return await this.thumbRepository.save(thumb);
  }
}
