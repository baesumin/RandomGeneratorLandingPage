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

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/logo.png",
      apple: "/logo.png",
    },
    generator: "alpaca developer",
    metadataBase: new URL("https://random-generator-all-in-one.vercel.app/"),
    openGraph: {
      type: "website",
      url: "https://random-generator-all-in-one.vercel.app/",
      title: t("ogTitle"),
      description: t("ogDescription"),
      siteName: t("siteName"),
      images: [
        {
          url: "https://random-generator-all-in-one.vercel.app/og-image.png",
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
      images: ["https://random-generator-all-in-one.vercel.app/og-image.png"],
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
