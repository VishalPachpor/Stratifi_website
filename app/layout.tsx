import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "../components/smooth-scroll-provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
      <body className={inter.className} suppressHydrationWarning={true}>
        <SmoothScrollProvider smoothness={1.2} effects={true}>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
