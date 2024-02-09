import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/settings') {
    return NextResponse.rewrite(new URL('/settings/team', request.url))
  }
}
