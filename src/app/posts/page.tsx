import PostsLists from '#/components/PostsList';
import PostsListSkeleton from '#/components/PostsListSkeleton';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Posts',
};

export default async function PostsPage() {
  return (
    <>
      <Suspense fallback={<PostsListSkeleton />}>
        <PostsLists />
      </Suspense>
    </>
  );
}
