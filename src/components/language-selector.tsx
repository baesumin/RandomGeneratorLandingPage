"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";

// Language names in their native language
const languageNames: Record<string, string> = {
  en: "English",
  ko: "한국어",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  ja: "日本語",
  "zh-CN": "简体中文", // 중국어 간체 (zh-CN)
  "zh-TW": "繁體中文", // 중국어 번체 (zh-TW)
  pt: "Português",
  it: "Italiano",
  hi: "हिन्दी",
  vi: "Tiếng Việt",
  id: "Bahasa Indonesia",
  ru: "Русский",
  ar: "العربية",
  bn: "বাংলা",
  tr: "Türkçe",
};

export default function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const availableLocales = [
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
  ];

  const changeLanguage = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale; // 경로의 첫 세그먼트를 새 locale로 교체
    const newPathname = segments.join("/");

    // Store scroll position to restore after navigation
    const scrollY = window.scrollY;

    router.push(newPathname);

    // Restore scroll position after a short delay
    setTimeout(() => {
      window.scrollTo(0, scrollY);
    }, 0);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 gap-1">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline-block">
            {languageNames[locale]}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {availableLocales.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => changeLanguage(lang)}
            className={locale === lang ? "bg-muted" : ""}
          >
            {languageNames[lang]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
