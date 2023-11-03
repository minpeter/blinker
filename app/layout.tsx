import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "blinker ✨",
  description: "Blinking towards subdomains of a domain",
};

import { GeistSans } from "geist/font";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  );
}
