import createMiddleware from 'next-intl/middleware';
import {routing} from './navigation';
 
const intlMiddleware = createMiddleware(routing);

export function proxy(request: any) {
  return intlMiddleware(request);
}
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|fr|de|es|it|pt|nl|pl|ro|sv|da|fi|no|cs|hu|el|tr|uk|ru|ar)/:path*']
};
