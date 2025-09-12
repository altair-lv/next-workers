'use server';

import { getCloudflareContext } from '@opennextjs/cloudflare';
import { drizzle } from 'drizzle-orm/d1';
import { revalidatePath } from 'next/cache';
import { posts } from '../drizzle/schema';
import { getSession } from '../get-session';
import { eq } from 'drizzle-orm';

export async function createPost({ message }: { message: string }) {
  try {
    const { sessionId } = await getSession();

    if (!sessionId) {
      throw new Error('You must be logged in to create a post.');
    }
    const { env } = await getCloudflareContext({ async: true });
    const db = drizzle(env.DB);
    await db.insert(posts).values({
      authorId: sessionId!,
      content: message,
      createdAt: new Date(),
    });

    revalidatePath('/posts');
  } catch (error) {
    console.error(error);
    throw new Error("Couldn't create a new post.");
  }
}

export async function deletePost(postId: number) {
  try {
    const { env } = await getCloudflareContext({ async: true });
    const db = drizzle(env.DB);

    await db.delete(posts).where(eq(posts.id, postId));

    revalidatePath('/posts');
  } catch (error) {
    console.error(error);
    throw new Error("Couldn't create a new post.");
  }
}
