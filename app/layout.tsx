import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "../components/smooth-scroll-provider";

// Preload font files for better performance
const fontPreloadLinks = [
  { href: '/fonts/SequelSansDisplay-Book.woff2', as: 'font', type: 'font/woff2' },
  { href: '/fonts/SequelSansDisplay-Book.woff', as: 'font', type: 'font/woff' },
];

export const metadata: Metadata = {
  title: "StratiFi - Agents for DeFi Capital",
  description:
    "StratiFi delivers personalized, risk-adjusted yield on your crypto assets. Historically higher returns, no overhead.",
  generator: "v0.dev",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {fontPreloadLinks.map((link, index) => (
          <link
            key={index}
            rel="preload"
            href={link.href}
            as={link.as}
            type={link.type}
            crossOrigin="anonymous"
          />
        ))}
      </head>
      <body className="font-sequel font-light" suppressHydrationWarning={true}>
        <SmoothScrollProvider smoothness={1.2} effects={true}>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
