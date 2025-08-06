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
            Agents for{" "}
            <span className="bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] bg-clip-text text-transparent font-light">
              OnChain
            </span>{" "}
            Capital
          </h1>

          {/* Description */}
          <p className="text-center max-w-3xl text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-12">
            Stratifi delivers personalized, risk-adjusted yield on your crypto
            assets. It's as simple as using ChatGPT to maximize your returns.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-16 w-full max-w-5xl px-4">
            <div className="text-center min-h-[120px] sm:min-h-[100px] flex flex-col justify-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-3 sm:mb-2 leading-tight android-text-fix">
                <CountingAnimation
                  value={12.0}
                  suffix="%"
                  duration={2.5}
                  className="text-xl sm:text-2xl md:text-3xl font-light text-white leading-tight android-number-display"
                />
              </div>
              <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider leading-relaxed px-1">
                Current APR
              </div>
            </div>
            <div className="text-center min-h-[120px] sm:min-h-[100px] flex flex-col justify-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-3 sm:mb-2 leading-tight android-text-fix">
                <CountingAnimation
                  value={30}
                  prefix="$"
                  suffix="k+"
                  duration={2.5}
                  className="text-xl sm:text-2xl md:text-3xl font-light text-white leading-tight android-number-display"
                />
              </div>
              <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider leading-relaxed px-1">
                Capital Optimized
              </div>
            </div>
            <div className="text-center min-h-[120px] sm:min-h-[100px] flex flex-col justify-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-3 sm:mb-2 leading-tight android-text-fix">
                <CountingAnimation
                  value={3}
                  prefix=""
                  duration={2.5}
                  className="text-xl sm:text-2xl md:text-3xl font-light text-white leading-tight android-number-display"
                />
              </div>
              <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider leading-relaxed px-1">
                Agents
              </div>
            </div>
            <div className="text-center min-h-[120px] sm:min-h-[100px] flex flex-col justify-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-3 sm:mb-2 leading-tight android-text-fix">
                <CountingAnimation
                  value={5}
                  prefix=""
                  suffix="K+"
                  duration={2.5}
                  className="text-xl sm:text-2xl md:text-3xl font-light text-white leading-tight android-number-display"
                />
              </div>
              <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider leading-relaxed px-1">
                Autonomous TXs
              </div>
            </div>
          </div>

          {/* CTA Buttons - Simple and Clean */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full max-w-lg px-4">
            {/* Launch Agent Button */}
            <button
              type="button"
              onClick={() => {
                console.log("Launch Agent clicked!");
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
