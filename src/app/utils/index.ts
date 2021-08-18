import { BaseComment, CommentTree } from '../services/posts';

export const nest = (data: BaseComment[]): CommentTree[] => {
  const flatTree = {};

  data.forEach((item) => (flatTree[item.id] = { ...item, children: [] }));

  const nodeTree = [];

  data.forEach((item) => {
    if (item.respondsTo) {
      flatTree[item.respondsTo.id].children.push(flatTree[item.id]);
    } else {
      nodeTree.push(flatTree[item.id]);
    }
  });

  return nodeTree;
};
