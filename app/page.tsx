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
import { Menu, X } from "lucide-react";

export default function StratiFiLanding() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
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

        {/* Mobile Hamburger Menu Button */}
        <button
          className={`md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors ${
            isMobileMenuOpen ? "opacity-0 pointer-events-none" : ""
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="absolute top-0 right-0 h-full w-80 bg-[#0a0613] border-l border-[#AD90FE]/20 shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#AD90FE]/20">
                <div></div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 p-6 space-y-4">
                <Link
                  href="https://docs.stratifi.xyz/docs/stratifi-ai-agent/stratifi-ai-details/"
                  target="_blank"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block p-4 rounded-lg hover:bg-white/10 transition-colors text-white"
                >
                  <div className="text-lg font-medium mb-1">About</div>
                  <div className="text-sm text-gray-400">
                    Learn more about StratiFi
                  </div>
                </Link>

                <Link
                  href="https://demo.stratifi.xyz/agent/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block p-4 rounded-lg bg-gradient-to-r from-[#9b87f5]/20 to-[#7c3aed]/20 border border-[#AD90FE]/30 hover:border-[#AD90FE]/50 transition-colors"
                >
                  <div className="text-lg font-medium mb-1 text-white">
                    Launch Agent
                  </div>
                  <div className="text-sm text-gray-400">
                    Start using StratiFi AI
                  </div>
                </Link>

                <Link
                  href="https://app.youform.com/forms/bbbn2d9r"
                  target="_blank"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block p-4 rounded-lg hover:bg-white/10 transition-colors text-white"
                >
                  <div className="text-lg font-medium mb-1">Join Whitelist</div>
                  <div className="text-sm text-gray-400">Get early access</div>
                </Link>
              </div>

              {/* Menu Footer */}
              <div className="p-6 border-t border-[#AD90FE]/20">
                <div className="flex items-center space-x-4">
                  <Link
                    href="https://x.com/stratifixyz"
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="w-5 h-5 text-gray-400 hover:text-[#AD90FE] transition-colors">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    href="https://t.me/stratifixyz"
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="w-5 h-5 text-gray-400 hover:text-[#AD90FE] transition-colors">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
