"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import GettingStarted from "@/components/getting-started";
import APRComparison from "@/components/apr-comparison";
import { LaunchAgent } from "@/components/launch-agent";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function StratiFiLanding() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    "01. YEARLY APR",
    "02. ABOUT STRATIFI",
    "03. PROTOCOLS",
    "04. BENEFITS",
    "05. STRATIFI AI",
    "06. LAUNCH PLATFORM",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionIndex = Math.floor(scrollPosition / windowHeight);
      setCurrentSection(Math.min(sectionIndex, sections.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <HeroSection />
      <APRComparison />
      <Features />
      <HowItWorks />
      <GettingStarted />
      <LaunchAgent />

      {/* Background Grid Pattern */}
      <div
        className="fixed inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 rounded-sm">
            <img
              src="/logo.png"
              alt="StratiFi Logo"
              className="w-full h-full"
            />
          </div>
          <span className="text-3xl font-medium">StratiFi</span>
        </div>

        <div className="flex items-center space-x-8">
          <Link
            href="https://docs.stratifi.xyz/docs/stratifi-ai-agent/stratifi-ai-details/"
            target="_blank"
          >
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              About
            </Button>
          </Link>
          <Button
            asChild
            variant="default"
            className="bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] hover:opacity-90 cursor-pointer"
          >
            <Link
              href="https://demo.stratifi.xyz/agent/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              Launch Agent
            </Link>
          </Button>
        </div>
      </nav>

      {/* Left Section Indicator */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40">
        {/* <div className="text-xs text-gray-500 font-mono tracking-wider">{sections[currentSection]}</div> */}
      </div>

      {/* Right Section Indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
        {/* <div className="text-xs text-gray-500 font-mono tracking-wider">CORE BENEFITS</div> */}
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <Footer />
      </main>
    </div>
  );
}
