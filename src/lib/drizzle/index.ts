import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';
import { getCloudflareContext } from '@opennextjs/cloudflare';

export const runtime = 'edge';

function initDbConnection() {
  const { env } = getCloudflareContext();
  if (process.env.NODE_ENV === 'development') {
    return drizzle(env.DB, { schema });
  }
  return drizzle(env.DB as unknown as D1Database, { schema });
}

export const db = initDbConnection();
