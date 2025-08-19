"use client";

import Link from "next/link";
import { DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full bg-white/80 supports-[backdrop-filter]:bg-white/60 backdrop-blur-sm text-black border-t border-black/10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-between gap-3 sm:gap-2 text-center sm:text-left"
      >
        {/* Left: Success Fee pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#c479fe]/40 px-3 py-1 text-sm hover:bg-[#c479fe]/10 transition-colors">
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#c479fe]/20">
            <DollarSign className="w-3 h-3 text-[#c479fe]" />
          </span>
          <span>Success Fee</span>
        </div>

        {/* Center: Copyright */}
        <p className="text-sm text-black/60">©Stratifi.xyz</p>

        {/* Right: Pills */}
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-end">
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-[#c479fe]/40 px-3 py-1 text-sm hover:bg-[#c479fe]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c479fe] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <div className="w-4 h-4 text-[#c479fe] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
              </svg>
            </div>
          </Link>
          <Link
            href="https://x.com/Stratifixyz"
            target="_blank"
            aria-label="Twitter"
            className="inline-flex items-center gap-2 rounded-full border border-[#c479fe]/40 px-3 py-1 text-sm hover:bg-[#c479fe]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c479fe] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <div className="w-4 h-4 text-[#c479fe] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
                className="w-4 h-4"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
          </Link>
          <Link
            href="https://t.me/Stratifixyz"
            target="_blank"
            aria-label="Telegram"
            className="inline-flex items-center gap-2 rounded-full border border-[#c479fe]/40 px-3 py-1 text-sm hover:bg-[#c479fe]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c479fe] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <div className="w-4 h-4 text-[#c479fe] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
                className="w-4 h-4"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </div>
          </Link>
        </div>
      </motion.div>
    </footer>
  );
}
