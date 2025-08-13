"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <>
      <section className="hero-section relative w-full min-h-screen bg-white text-black overflow-hidden pt-20 sm:pt-24 md:pt-28 md:scroll-mt-28">
        {/* Background Effects */}
        <div className="hero-bg absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" />
          {/* Halftone spotlight inspired by Arma */}
          <div
            aria-hidden
            className="halftone-spotlight halftone-spotlight--brand"
            style={{
              width: isMobile
                ? "clamp(320px, 110vw, 560px)"
                : "clamp(640px, 72vw, 940px)",
              height: isMobile
                ? "clamp(320px, 110vw, 560px)"
                : "clamp(640px, 72vw, 940px)",
              left: "50%",
              top: isMobile ? "0%" : "-6%",
              transform: "translateX(-50%)",
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] px-4 py-8 sm:py-12 md:py-20">
          {/* Badge */}

          {/* Main Heading */}
          <h1 className="text-center max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight mb-8">
            Let your crypto move smarter without giving up control.
          </h1>

          {/* Description */}
          <p className="text-center max-w-3xl text-lg sm:text-xl md:text-2xl text-black/80 font-light leading-relaxed mb-12">
            Talk to an on‑chain agent that hunts for better lending rates. It
            shows the plan, the fees, and only moves when you say so.
          </p>

          {/* Removed stats until wired to live data */}

          {/* CTA Buttons - Simple and Clean */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full max-w-lg px-4">
            {/* Launch Agent Button */}
            <button
              type="button"
              onClick={() => {
                window.open("https://demo.stratifi.xyz/agent/chat", "_blank");
              }}
              className="w-full sm:w-auto bg-transparent border-2 border-[#c479fe] text-black font-medium text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#c479fe]/10 hover:scale-105 transition-all duration-200 cursor-pointer shadow-lg android-button-fix min-h-[48px]"
            >
              <span className="android-text-fix">Launch Agent</span>
            </button>

            {/* Join Whitelist Button */}
            <button
              type="button"
              onClick={() =>
                window.open("https://app.youform.com/forms/bbbn2d9r", "_blank")
              }
              className="w-full sm:w-auto bg-transparent border-2 border-[#c479fe] text-black font-medium text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#c479fe]/10 hover:scale-105 transition-all duration-200 cursor-pointer shadow-lg android-button-fix min-h-[48px]"
            >
              <span className="android-text-fix">Join Whitelist</span>
            </button>
          </div>
          {/* Chains row */}
          <div className="mt-6 flex items-center justify-center gap-6 opacity-80">
            <Image
              src="/ETH.svg"
              alt="Ethereum"
              width={36}
              height={36}
              className="h-8 w-auto"
            />
            <Image
              src="/KatanaLogo.jpg"
              alt="Katana"
              width={36}
              height={36}
              className="h-8 w-auto"
            />
            <Image
              src="/base.jpg"
              alt="Base"
              width={36}
              height={36}
              className="h-8 w-auto"
            />
            <Image
              src="/StarknetLogo.png"
              alt="Starknet"
              width={36}
              height={36}
              className="h-8 w-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
