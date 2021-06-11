import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesModule } from './articles/articles.module';
import { CommentsModule } from './comments/comments.module';
import { ThumbsModule } from './thumbs/thumbs.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(),
    ArticlesModule,
    CommentsModule,
    ThumbsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
