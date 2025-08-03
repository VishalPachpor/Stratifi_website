"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Twitter, MessagesSquare, ArrowUpRight, Linkedin, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-white/10">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0a0613]"></div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Subtle glow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#AD90FE]/5 blur-3xl"></div>
      </div>

      {/* Footer content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-sm">
                <img
                  src="/logo.png"
                  alt="StratiFi Logo"
                  className="w-full h-full"
                />
              </div>
              <span className="text-xl font-semibold">StratiFi</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-sm">
              The next-generation DeFi yield optimizer with AI-powered protocol
              integration for intelligent financial interactions.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <Link href="https://x.com/stratifixyz" className="group">
                <div className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300">
                  <Twitter className="w-5 h-5 group-hover:text-[#AD90FE] transition-colors duration-300" />
                </div>
              </Link>
              <Link href="https://t.me/stratifixyz" className="group">
                <div className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300">
                  <Send className="w-5 h-5 group-hover:text-[#AD90FE] transition-colors duration-300" />
                </div>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium text-white/80 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-medium text-white/80 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="group flex items-center gap-1">
                  <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    Community
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#AD90FE] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-medium text-white/80 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Cookie Settings
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter and copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Newsletter signup */}
          <div className="max-w-md">
            <h4 className="text-sm font-medium mb-3">
              Stay updated with our latest developments
            </h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 rounded-lg px-4 py-2 border border-white/10 focus:outline-none focus:border-[#AD90FE] transition-colors flex-grow"
              />
              <button className="bg-[#AD90FE] hover:bg-[#AD90FE]/90 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} StratiFi. All rights reserved.</p>
            <p className="mt-2 text-xs text-gray-500">
              Risks & disclosures: Yield is variable and not guaranteed. DeFi
              carries smart-contract and protocol risks.
            </p>
          </div>
        </div>
      </div>

      {/* Corner decoration */}
      <div className="absolute bottom-0 right-0 w-20 h-20 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#AD90FE]/50 rounded-tl-lg"></div>
      </div>
    </footer>
  );
}
