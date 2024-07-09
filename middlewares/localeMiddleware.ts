import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n } from "../i18n-config";
import type { I18nConfig } from "../i18n-config";

const getLocale = (request: NextRequest, i18nConfig: I18nConfig): string => {
  const { locales, defaultLocale } = i18nConfig;
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );
  return match(languages, locales, defaultLocale);
};

export const localeMiddleware = (request: NextRequest) => {
  let response: NextResponse<unknown>;
  let nextLocale: string | ResponseCookie;

  const { locales, defaultLocale } = i18n;

  const pathname = request.nextUrl.pathname;

  const pathLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`
  );

  if (pathLocale) {
    const isDefaultLocale = pathLocale === defaultLocale;
    if (isDefaultLocale) {
      let pathWithoutLocale = pathname.slice(`/${pathLocale}`.length) || "/";
      if (request.nextUrl.search) pathWithoutLocale += request.nextUrl.search;
      response = NextResponse.redirect(new URL(pathWithoutLocale, request.url));
    }
    nextLocale = pathLocale;
  } else {
    const isFirstVisit = !request.cookies.has("NEXT_LOCALE");
    const locale = isFirstVisit ? getLocale(request, i18n) : defaultLocale;

    let pathWithoutLocale = pathname;
    if (locales.includes(pathLocale)) {
      pathWithoutLocale = pathname.slice(`/${pathLocale}`.length) || "/";
    }

    let newPath = `/${locale}${pathWithoutLocale}`;
    if (request.nextUrl.search) newPath += request.nextUrl.search;

    response =
      locale === defaultLocale
        ? NextResponse.rewrite(new URL(newPath, request.url))
        : NextResponse.redirect(new URL(newPath, request.url));

    nextLocale = locale;
  }

  if (!response) response = NextResponse.next();

  if (nextLocale) response.cookies.set("NEXT_LOCALE", nextLocale ? "" : "");

  return response;
};
