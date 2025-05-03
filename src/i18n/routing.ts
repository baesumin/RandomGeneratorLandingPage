import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: [
    "en",
    "ko",
    "it",
    "fr",
    "es",
    "de",
    "zh-CN",
    "zh-TW",
    "ja",
    "pt",
    "ru",
    "tr",
    "hi",
    "vi",
    "id",
    "ar",
    "bn",
  ],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",

  // Detect locale from browser/user settings
  localeDetection: true,
});
