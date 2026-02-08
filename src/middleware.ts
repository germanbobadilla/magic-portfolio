import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Automatically detect locale from Accept-Language header
  localeDetection: true,

  // Prefix strategy - always show locale in URL
  localePrefix: 'as-needed'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|es)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
