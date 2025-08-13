"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import APRComparison from "@/components/apr-comparison";
import { Footer } from "@/components/footer";
import FAQ from "@/components/faq";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function StratiFiLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black relative overflow-x-hidden scroll-smooth scroll-optimized no-scroll-jank">
      <HeroSection />
      <HowItWorks />
      <APRComparison />
      <FAQ />

      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Navigation */}
      <nav className="absolute md:fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-8 py-3 sm:py-3 bg-white/50 backdrop-blur-md supports-[backdrop-filter]:bg-white/35 border-b border-black/5">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-sm flex-shrink-0">
            <img
              src="/logo.png"
              alt="StratiFi Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl sm:text-2xl md:text-3xl font-medium android-text-fix">
            StratiFi
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="https://docs.stratifi.xyz/docs/stratifi-ai-agent/stratifi-ai-details/"
            target="_blank"
          ></Link>
          <Button
            asChild
            variant="default"
            className="bg-transparent border-2 border-[#c479fe] text-black hover:bg-[#c479fe]/10 cursor-pointer"
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
          className={`md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors android-button-fix ${
            isMobileMenuOpen ? "opacity-0 pointer-events-none" : ""
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="absolute top-0 right-0 h-full w-72 sm:w-80 bg-white border-l border-black/10 shadow-2xl android-mobile-menu">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-black/10">
                <div></div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-black" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 p-6 space-y-4">
                <Link
                  href="https://docs.stratifi.xyz/docs/stratifi-ai-agent/stratifi-ai-details/"
                  target="_blank"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block p-4 rounded-lg hover:bg-black/5 transition-colors text-black"
                >
                  <div className="text-lg font-medium mb-1">About</div>
                  <div className="text-sm text-gray-600">
                    Learn more about StratiFi
                  </div>
                </Link>

                <Link
                  href="https://demo.stratifi.xyz/agent/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block p-4 rounded-lg border border-[#c479fe]/40 hover:bg-[#c479fe]/10 transition-colors"
                >
                  <div className="text-lg font-medium mb-1 text-black">
                    Launch Agent
                  </div>
                  <div className="text-sm text-gray-600">
                    Start using StratiFi AI
                  </div>
                </Link>

                <Link
                  href="https://app.youform.com/forms/bbbn2d9r"
                  target="_blank"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block p-4 rounded-lg hover:bg-black/5 transition-colors text-black"
                >
                  <div className="text-lg font-medium mb-1">Join Whitelist</div>
                  <div className="text-sm text-gray-600">Get early access</div>
                </Link>
              </div>

              {/* Menu Footer */}
              <div className="p-6 border-t border-black/10">
                <div className="flex items-center space-x-4">
                  <Link
                    href="https://x.com/stratifixyz"
                    className="p-2 rounded-lg hover:bg-black/5 transition-colors"
                  >
                    <div className="w-5 h-5 text-gray-600 hover:text-[#c479fe] transition-colors">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    href="https://t.me/stratifixyz"
                    className="p-2 rounded-lg hover:bg-black/5 transition-colors"
                  >
                    <div className="w-5 h-5 text-gray-600 hover:text-[#c479fe] transition-colors">
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

      {/* Main Content */}
      <main className="relative z-10">
        <Footer />
      </main>
    </div>
  );
}
