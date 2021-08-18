import { Injectable } from '@angular/core';
import type { Post } from './posts';
import rawPost from './rawPost';
import { nest } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  getById(id: number): Promise<Post> {
    if (id !== rawPost.id) {
      return Promise.reject({ status: 404, message: 'Not found' });
    }

    // TODO: Implementar a transformação para árvore de comentários
    if (rawPost.comments) {
      rawPost.comments = nest(rawPost.comments);
    }

    return new Promise((resolve) =>
      setTimeout(() => resolve(rawPost as Post), 2000)
    );
  }
}
