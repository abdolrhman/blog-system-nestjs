import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesModule } from './articles/articles.module';
import { CommentsModule } from './comments/comments.module';
import { ThmubsModule } from './thmubs/thmubs.module';
import { ThumbsService } from './thumbs/thumbs.service';
import { ThumbsController } from './thumbs/thumbs.controller';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(), ArticlesModule, CommentsModule, ThmubsModule],
  controllers: [AppController, ThumbsController],
  providers: [AppService, ThumbsService],
})
export class AppModule {}
