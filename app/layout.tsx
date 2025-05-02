import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Random Generator",
  description: "Random Generator Landing Page",
  generator: "alpaca developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1S6ZQ8ZPE2"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1S6ZQ8ZPE2');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
