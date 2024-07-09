export const buildNavs = ({ navs, localeIndex, locale }) => {
  return (
    navs?.map(({ path, label, ...otherProps }) => {
      const localizedPath = buildUrl(path, localeIndex);
      const localizedLabel = locale ? locale[label] : label;
      return {
        ...otherProps,
        path: localizedPath,
        label: localizedLabel,
      };
    }) || []
  );
};

export const buildUrl = (url, localeIndex) => {
  // localeIndex -с хамаарч залгах locale-ээ үүсгэнэ
  // default-р "/mn" locale авах учир хоосон үүсгэнэ
  const locale = localeIndex == 0 ? "/en" : "";

  if (url.startsWith("/")) {
    // navs-н path болгоны урд locale-ээ залгана
    url = locale + url;
  }
  // path "/en/" гэж төгсвөл сүүлийн "/"-г устгана
  if (url.endsWith("/") && url.length > 1) {
    url = url.slice(0, -1);
  }

  return url;
};
