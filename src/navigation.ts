import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  locales: ['en', 'fr', 'de', 'es', 'it', 'pt', 'nl', 'pl', 'ro', 'sv', 'da', 'fi', 'no', 'cs', 'hu', 'el', 'tr', 'uk', 'ru', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export const localeNames: Record<string, string> = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  it: 'Italiano',
  pt: 'Português',
  nl: 'Nederlands',
  pl: 'Polski',
  ro: 'Română',
  sv: 'Svenska',
  da: 'Dansk',
  fi: 'Suomi',
  no: 'Norsk',
  cs: 'Čeština',
  hu: 'Magyar',
  el: 'Ελληνικά',
  tr: 'Türkçe',
  uk: 'Українська',
  ru: 'Русский',
  ar: 'العربية'
};

export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);
export const locales = routing.locales;
