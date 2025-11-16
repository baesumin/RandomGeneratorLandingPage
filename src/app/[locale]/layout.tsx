import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/src/components/theme-provider";
import { getTranslations } from "next-intl/server";
import { routing } from "@/src/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const baseUrl = "https://randomgenerator.xyz";
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
    keywords: [
      "random generator",
      "random number generator",
      "dice roller",
      "coin flip",
      "roulette",
      "pick one",
      "word generator",
      "name picker",
      "color generator",
      "random app",
      "utility app",
      "all in one generator",
    ],
    authors: [{ name: "Alpaca Developer" }],
    creator: "Alpaca Developer",
    publisher: "Alpaca Developer",
    applicationName: "Random Generator - All in One",
    appleWebApp: {
      capable: true,
      title: "Random Generator",
      statusBarStyle: "default",
    },
    icons: {
      icon: "/logo.avif",
      apple: "/logo.avif",
      shortcut: "/logo.avif",
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
          url: `${baseUrl}/og-image.avif`,
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
      images: [`${baseUrl}/og-image.avif`],
    },
    category: "utilities",
  };
}

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const baseUrl = "https://randomgenerator.xyz";

  // JSON-LD structured data for SEO
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Random Generator - All in One",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      ratingCount: "3",
      bestRating: "5",
      worstRating: "1",
    },
    description: t("description"),
    url: `${baseUrl}/${locale}`,
    image: `${baseUrl}/og-image.avif`,
    screenshot: [
      `${baseUrl}/screenshot.png`,
      `${baseUrl}/screenshot2.png`,
      `${baseUrl}/screenshot3.png`,
    ],
    author: {
      "@type": "Organization",
      name: "Alpaca Developer",
    },
    datePublished: "2025-01-01",
    inLanguage: locale,
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Alpaca Developer",
    url: baseUrl,
    logo: `${baseUrl}/logo.avif`,
    sameAs: [],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: t("title"),
    description: t("description"),
    url: `${baseUrl}/${locale}`,
    inLanguage: locale,
    isPartOf: {
      "@type": "WebSite",
      name: t("siteName"),
      url: baseUrl,
    },
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageSchema),
          }}
        />
      </head>
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
