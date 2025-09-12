import { NextRequest, NextResponse } from 'next/server';
import { SessionMiddleware } from './lib/session-middleware';

export async function middleware(req: NextRequest): Promise<NextResponse> {
  await SessionMiddleware();

  // console.log('Route accessed:', req.nextUrl.pathname);
  // console.log('User Agent:', req.headers.get('user-agent'));
  return NextResponse.next();
}
