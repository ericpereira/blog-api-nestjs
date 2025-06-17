import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Post } from "../post/post.entity";
import { Comment } from "./comment.entity";
import { CommentsController } from "./comment.controller";
import { CommentsService } from "./comment.service";

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Post])],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}