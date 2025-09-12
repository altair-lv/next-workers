import { getSession } from '#/lib/get-session';
import PostAction from './PostAction';
import { type IPost } from './PostsLists';

const Post: React.FC<IPost> = async ({ authorId, content, createdAt, id }) => {
  const session = await getSession();
  const isAuthor: boolean = authorId === session.sessionId;

  return (
    <div className="flex px-2 py-1.5 rounded border">
      <div className="flex flex-col w-full">
        <p className="text-xs font-mono">
          by {authorId.split('').splice(0, 6).join('')}&hellip; on {createdAt ? createdAt.toLocaleString() : 'unknown'}
        </p>

        <div className="flex justify-between">
          <p>{content}</p>
          {isAuthor && <PostAction postId={id} />}
        </div>
      </div>
    </div>
  );
};

export default Post;
