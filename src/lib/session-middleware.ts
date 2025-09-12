import 'server-only';
import { nanoid } from 'nanoid';
import { cookies } from 'next/headers';
import { getSession } from './get-session';

export async function SessionMiddleware() {
  try {
    const cookiesStore = await cookies();

    const sessionExist = await getSession();

    if (!sessionExist.sessionId) {
      const newSession = nanoid();
      cookiesStore.set({ name: 'sessionId', value: newSession });
    }
  } catch (error) {
    console.error('Error creating session:', error);
  }
}
