import { Component, Input } from '@angular/core';
import { CommentTree } from 'src/app/services/posts';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent {
  // TODO: Consertar a anotação de tipo após implementar a tranformação para árvore
  @Input() comments: CommentTree[];

  onShare(id: number): void {
    window.alert(`Compartilhando comentário com id = ${id}`);
  }

  onReport(id: number): void {
    window.alert(`Reportando comentário com id = ${id}`);
  }
}
