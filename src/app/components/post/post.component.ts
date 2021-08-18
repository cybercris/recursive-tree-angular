import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { RawPost } from 'src/app/services/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postId: number;
  post: RawPost;

  constructor(private postsService: PostsService) {}

  async ngOnInit(): Promise<void> {
    this.post = await this.postsService.getById(this.postId);
  }

}
