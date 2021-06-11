import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleEntity } from './article.entity';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { CreateArticleDto } from './dtos/create-article.dto';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly postRepository: Repository<ArticleEntity>,
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async createOne(dto: CreateArticleDto) {
    const author: User = await this.getUser(dto.author);
    const post = this.postRepository.create({ ...dto, author });
    return await this.postRepository.save(post);
  }

  async getUser(userId): Promise<User> {
    return this.usersRepository.findOne(userId);
  }

  async getMany() {
    return await this.postRepository.find();
  }
  async getById(id: number, author?: User) {
    const post = await this.postRepository
      .findOne(id)
      .then((p) => (!author ? p : !!p && author.id === p.author.id ? p : null));
    if (!post)
      throw new NotFoundException('Post does not exist or unauthorized');
    return post;
  }
  async searchByName(query) {
    const searchBy = Object.keys(query)[0];
    return await this.postRepository
      .createQueryBuilder('articles')
      .select()
      .where(`${searchBy} LIKE :searchTerm`, {
        searchTerm: `%${query[searchBy].toString()}%`,
      })
      .getMany();
  }
}
