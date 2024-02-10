import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import pm from 'picomatch'

const matchOrganization = pm('/env_*/organizations/org_*')
const matchSettings = pm('/settings')

export function middleware(request: NextRequest) {
  if (matchOrganization(request.nextUrl.pathname)) {
    const newUrl = new URL(request.url)
    newUrl.pathname = `${newUrl.pathname}/features`
    return NextResponse.rewrite(newUrl)
  }

  if (matchSettings(request.nextUrl.pathname)) {
    return NextResponse.rewrite(new URL('/settings/team', request.url))
  }
}
