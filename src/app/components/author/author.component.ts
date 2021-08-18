import { Component, Input } from '@angular/core';
import { Author } from 'src/app/services/posts';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  @Input() user: Author;
  @Input() timestamp: string;
}
