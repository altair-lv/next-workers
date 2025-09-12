import Post from './Post';

const PostsLists: React.FC<Props> = ({ posts }) => {
  return posts.map((post) => <Post key={post.id} authorId={post.authorId} content={post.content} createdAt={post.createdAt} id={post.id} />);
};

export default PostsLists;

export interface IPost {
  id: number;
  authorId: string;
  content: string;
  createdAt: Date | null;
}

interface Props {
  posts: IPost[];
}
