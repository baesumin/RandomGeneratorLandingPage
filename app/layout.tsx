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
      <body>{children}</body>
    </html>
  );
}
