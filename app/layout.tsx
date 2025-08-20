import type React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import LenisProvider from "@/components/providers/lenis-provider";
import PageTransition from "@/components/animations/page-transition";

// Font preloading disabled until font files are added
const fontPreloadLinks: Array<{
  href: string;
  as: string;
  type: string;
}> = [];

export const metadata: Metadata = {
  title: "Stratifi - Agents for DeFi Capital",
  description:
    "Stratifi is your on-chain AI that hunts down the highest yield, moves your funds, and compounds your crypto—automatically.",
  generator: "next.js",
  icons: {
    icon: "/new-logo.svg",
    shortcut: "/new-logo.svg",
    apple: "/new-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth scroll-optimized no-scroll-jank">
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
      <body
        className="scroll-smooth scroll-optimized no-scroll-jank"
        suppressHydrationWarning={true}
      >
        <LenisProvider>
          <PageTransition>{children}</PageTransition>
        </LenisProvider>
      </body>
    </html>
  );
}
