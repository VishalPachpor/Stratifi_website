import type React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
// Smooth scroll removed to fix build issues

// Font preloading disabled until font files are added
const fontPreloadLinks: any[] = [];

export const metadata: Metadata = {
  title: "StratiFi - Agents for DeFi Capital",
  description:
    "Stratifi is your on-chain AI that hunts down the highest yield, moves your funds, and compounds your crypto—automatically.",
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
    <html lang="en">
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QV7DEMYB2V"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QV7DEMYB2V');
          `}
        </Script>
      </head>
      <body className="font-sequel font-light" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
