export const i18n = {
  locales: ["mn", "en"],
  defaultLocale: "mn",
};

export type I18nConfig = typeof i18n;
export type Locale = I18nConfig["locales"][number];
