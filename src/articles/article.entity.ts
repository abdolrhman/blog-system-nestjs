import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from '../users/user.entity';
import { CommentEntity } from '../comments/comment.entity';

@Entity('articles')
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150 })
  title!: string;

  @Column({ type: 'text' })
  body!: string;

  @Column({ type: 'int' })
  thumbs: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.articles, { eager: true })
  @JoinColumn({ name: 'author' })
  author: User;

  @OneToMany((_) => CommentEntity, (comment) => comment.article, {
    cascade: true,
  })
  comments: CommentEntity;
}
