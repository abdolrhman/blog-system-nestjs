import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { ArticleEntity } from '../articles/article.entity';
import { User } from '../users/user.entity';

@Entity('thumbs')
export class ThumbEntity {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  article_id: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  public user!: User;

  @ManyToOne(() => ArticleEntity, (article) => article.id)
  @JoinColumn({ name: 'article_id' })
  public article!: ArticleEntity;

  @CreateDateColumn()
  created_at: Date;
}
