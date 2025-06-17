import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentsService } from './comment.service';

@ApiTags('comments')
@Controller('api/posts/:postId/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @ApiBody({ type: CreateCommentDto })
  addComment(
    @Param('postId') postId: string,
    @Body() body: CreateCommentDto,
  ) {
    return this.commentsService.addCommentToPost(postId, body.text);
  }
}
