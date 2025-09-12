import { sql } from 'drizzle-orm';
import { int, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const posts = sqliteTable('posts_table', {
  id: int('id').primaryKey({ autoIncrement: true }),
  authorId: text('author_id').notNull(),
  content: text('content').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp_ms' }).default(sql`(STRFTIME('%s', 'now') * 1000)`),
});
