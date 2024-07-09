"use client";
import { usePathname } from "next/navigation";
import { headerLocales } from "./locales";

export const useLocale = () => {
  const pathname = usePathname();
  return pathname?.startsWith("/en") ? 0 : 1;
};

export const HeaderLocale = () => {
  const locale = useLocale();
  return headerLocales[locale];
};
