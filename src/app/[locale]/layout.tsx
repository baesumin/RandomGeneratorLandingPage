import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/src/components/theme-provider";

export const metadata: Metadata = {
  title: "Random Generator",
  description:
    "Flip coins, roll dice, spin roulette wheels and more! The ultimate random generator app that makes decisions fun and easy.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  generator: "alpaca developer",
  metadataBase: new URL("https://random-generator-all-in-one.vercel.app/"),
  openGraph: {
    type: "website",
    url: "https://random-generator-all-in-one.vercel.app/",
    title: "Random Generator - All Your Random Needs in One App",
    description:
      "Flip coins, roll dice, spin roulette wheels and more! The ultimate random generator app that makes decisions fun and easy.",
    siteName: "Random Generator",
    images: [
      {
        url: "https://random-generator-all-in-one.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Random Generator App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Generator - All Your Random Needs in One App",
    description:
      "Flip coins, roll dice, spin roulette wheels and more! The ultimate random generator app that makes decisions fun and easy.",
    images: ["https://random-generator-all-in-one.vercel.app/og-image.png"],
  },
};

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
