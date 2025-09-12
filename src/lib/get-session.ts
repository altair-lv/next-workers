import { cookies } from 'next/headers';
import 'server-only';

export async function getSession() {
  const cookiesStore = await cookies();
  const session = cookiesStore.get('sessionId');

  return {
    sessionId: session?.value,
  };
}
