import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/src/components/theme-provider";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const baseUrl = "https://random-generator-all-in-one.vercel.app";
  const currentUrl = `${baseUrl}/${locale}`;

  // All supported locales
  const locales = [
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

  // Generate alternates object for hreflang
  const languages: Record<string, string> = {};
  locales.forEach((loc) => {
    languages[loc] = `${baseUrl}/${loc}`;
  });
  languages["x-default"] = `${baseUrl}/en`;

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/logo.png",
      apple: "/logo.png",
    },
    generator: "alpaca developer",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
      languages,
    },
    openGraph: {
      type: "website",
      url: currentUrl,
      title: t("ogTitle"),
      description: t("ogDescription"),
      siteName: t("siteName"),
      locale: locale,
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: t("siteName"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [`${baseUrl}/og-image.png`],
    },
  };
}

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-1S6ZQ8ZPE2" />
    </html>
  );
}
