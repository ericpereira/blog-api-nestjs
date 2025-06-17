import { ApiProperty } from "@nestjs/swagger";
import { Post } from "../post/post.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @Column('text')
  @ApiProperty()
  text: string;

  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;

  @CreateDateColumn()
  @ApiProperty({ type: String, format: 'date-time' })
  createdAt: Date;
}