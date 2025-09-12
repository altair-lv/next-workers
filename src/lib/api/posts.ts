import 'server-only';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { drizzle } from 'drizzle-orm/d1';
import { posts } from '../drizzle/schema';
import { sql } from 'drizzle-orm';

export async function getPosts() {
  try {
    const { env } = await getCloudflareContext({ async: true });
    const db = drizzle(env.DB);
    const postsList = await db
      .select()
      .from(posts)
      .orderBy(sql`${posts.createdAt} desc`);
    return postsList;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw new Error('Could not load posts. Server error.');
  }
}
