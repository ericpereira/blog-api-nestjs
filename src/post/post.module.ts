import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Post } from "./post.entity";
import { Comment } from "../comment/comment.entity";
import { PostsController } from "./post.controller";
import { PostsService } from "./post.service";

@Module({
  imports: [TypeOrmModule.forFeature([Post, Comment])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}