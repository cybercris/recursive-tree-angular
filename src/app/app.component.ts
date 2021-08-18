import { Component } from '@angular/core';
import postId from './constants/shownPostId';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  blogTitle = 'Blog do Figueiredo';
  postId = postId;
}
