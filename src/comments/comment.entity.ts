import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ArticleEntity } from '../articles/article.entity';

@Entity('comments')
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  body: string;

  @ManyToOne(() => ArticleEntity, (article) => article.comments, {
    eager: true,
  })
  @JoinColumn({ name: 'article' })
  article: ArticleEntity;
}
