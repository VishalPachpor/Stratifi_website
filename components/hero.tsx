"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Globe3D from "./globe-3d";
import CountingAnimation from "./counting-animation";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <>
      <section className="hero-section relative w-full min-h-screen bg-gradient-to-br from-[#0a0613] to-[#150d27] text-white overflow-hidden pt-16 sm:pt-20 md:pt-24">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-blue-500/20 to-purple-600/10 blur-3xl"></div>
        </div>

        {/* 3D Globe Background */}
        <div
          className={`absolute pointer-events-none ${
            isMobile
              ? "top-[15%] left-1/2 -translate-x-1/2 w-[180px] h-[180px] opacity-50"
              : "top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-80"
          }`}
        >
          <Globe3D className="w-full h-full" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] px-4 py-8 sm:py-12 md:py-20">
          {/* Badge */}
          <div className="inline-block rounded-full border border-[#9b87f5]/30 px-6 py-3 text-sm font-medium text-[#9b87f5] tracking-wide mb-8">
            NEXT GENERATION OF DEFI
          </div>

          {/* Main Heading */}
          <h1 className="text-center max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight mb-8">
            Let your crypto move smarter — without giving up control.
          </h1>

          {/* Description */}
          <p className="text-center max-w-3xl text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-12">
            Talk to an on‑chain agent that hunts for better lending rates on
            Base. It shows the plan, the fees, and only moves when you say so.
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
              className="w-full sm:w-auto bg-[#AD90FE] text-black font-medium text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#9580E8] hover:scale-105 transition-all duration-200 cursor-pointer shadow-lg android-button-fix min-h-[48px]"
            >
              <span className="android-text-fix">Launch Agent</span>
            </button>

            {/* Join Whitelist Button */}
            <button
              type="button"
              onClick={() =>
                window.open("https://app.youform.com/forms/bbbn2d9r", "_blank")
              }
              className="w-full sm:w-auto bg-transparent border-2 border-[#9b87f5] text-white font-medium text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#9b87f5]/20 hover:scale-105 transition-all duration-200 cursor-pointer shadow-lg android-button-fix min-h-[48px]"
            >
              <span className="android-text-fix">Join Whitelist</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
