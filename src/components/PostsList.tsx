import { getPosts } from '#/lib/api/posts';
import Post from './Post';

export interface IPost {
  id: number;
  authorId: string;
  content: string;
  createdAt: Date | null;
}

const PostsList: React.FC = async () => {
  const posts = await getPosts();

  if (posts.length === 0) {
    return <p>No posts yet. Be the first to write one!</p>;
  }

  return posts.map((post) => <Post key={post.id} authorId={post.authorId} content={post.content} createdAt={post.createdAt} id={post.id} />);
};

export default PostsList;
