import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Random Generator",
  description:
    "Flip coins, roll dice, spin roulette wheels and more! The ultimate random generator app that makes decisions fun and easy.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-1S6ZQ8ZPE2`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1S6ZQ8ZPE2');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
