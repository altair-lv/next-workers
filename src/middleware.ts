import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest): NextResponse {
  console.log('Route accessed:', req.nextUrl.pathname);
  console.log('User Agent:', req.headers.get('user-agent'));
  return NextResponse.next();
}
