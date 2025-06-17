import { Injectable, NotFoundException, } from "@nestjs/common";
import { Post } from "./post.entity";
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from "./dto/create-post.dto";

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postsRepository: Repository<Post>,
  ) {}

  async findAll() {
    const posts = await this.postsRepository.find({ relations: ['comments'] });
    return posts.map((post) => ({
      id: post.id,
      title: post.title,
      text: post.content,
      commentCount: post.comments.length,
    }));
  }

  create(dto: CreatePostDto) {
    const post = this.postsRepository.create(dto);
    return this.postsRepository.save(post);
  }

  async findOne(id: string) {
    const post = await this.postsRepository.findOne({ where: { id }, relations: ['comments'] });
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }
}