import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['th', 'en']
const defaultLocale = 'th'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip middleware for:
  // - API routes
  // - Next.js internal files
  // - Static files (images, icons, etc.)
  // - Files with extensions
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon') ||
    pathname.match(/\.(ico|png|jpg|jpeg|gif|svg|css|js|woff|woff2|ttf|eot)$/)
  ) {
    return NextResponse.next()
  }

  // Check if the pathname already has a valid locale
  const segments = pathname.split('/')
  const potentialLocale = segments[1]

  // If pathname already starts with a valid locale, continue
  if (locales.includes(potentialLocale)) {
    return NextResponse.next()
  }

  // Add default locale to pathname
  const newPathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`
  
  return NextResponse.redirect(new URL(newPathname, request.url))
}

export const config = {
  // Only run middleware on pages, not on API routes or static files
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.svg|.*\\..*).*)/',
    '/'
  ],
} 