import { defaultLang, rtlLangs, ui, type Lang } from './ui';

/** Returns the translation object for a given language. */
export function useTranslations(lang: Lang) {
  return ui[lang] ?? ui[defaultLang];
}

/** Whether a language reads right-to-left. */
export function isRtl(lang: Lang): boolean {
  return rtlLangs.includes(lang);
}

/** Builds a path for a given language (default lang has no prefix). */
export function localizedPath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '' : clean}`;
}
