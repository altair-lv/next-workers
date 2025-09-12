'use client';

import { deletePost } from '#/lib/api/posts-actions';
import { startTransition, useCallback } from 'react';

interface Props {
  postId: number;
}

const PostAction: React.FC<Props> = ({ postId }) => {
  const handleDelete = useCallback(() => {
    startTransition(async () => {
      await deletePost(postId);
    });
  }, []);
  return (
    <button onClick={handleDelete} className="px-1.5">
      X
    </button>
  );
};

export default PostAction;
