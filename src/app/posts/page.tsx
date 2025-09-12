import PostsLists from '#/components/PostsLists';
import { getPosts } from '#/lib/api/posts';

export const dynamic = 'force-dynamic';

export default async function PostsPage() {
  const posts = await getPosts();

  if (posts.length === 0) {
    return <p>No posts yet. Be the first to write one!</p>;
  }

  return <PostsLists posts={posts} />;
}
