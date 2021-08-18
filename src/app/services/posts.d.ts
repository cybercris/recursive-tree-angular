type HTML = string;

export interface Author {
  id: number;
  username: string;
}

export interface BaseComment {
  id: number;
  timestamp: string;
  author: Author
  content: string;
  respondsTo: { id: number; } | null;
}

export interface CommentTree extends BaseComment {
  comments: CommentTree[];
}

interface BasePost {
  id: number;
  title: string;
  subtitle: string;
  content: HTML;
  author: Author;
  timestamp: string;
}

export interface RawPost extends BasePost {
  comments: BaseComment[];
}

export interface Post extends BasePost {
  comments: CommentTree[];
}
