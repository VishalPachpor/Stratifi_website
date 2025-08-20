"use client";

import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

export default function HeroSection() {
  return (
    <>
      <section className="hero-section relative w-full min-h-screen bg-white text-black overflow-hidden pt-20 sm:pt-24 md:pt-28 md:scroll-mt-28 scroll-smooth scroll-optimized no-scroll-jank">
        {/* Particles Background */}
        <ParticlesBackground />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] px-4 py-8 sm:py-12 md:py-20">
          {/* Badge */}

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-5xl text-4xl md:text-5xl font-light leading-none tracking-tighter mb-12"
          >
            Let your crypto move smarter without giving up control.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="text-center max-w-3xl text-base sm:text-lg md:text-xl text-black/80 font-light leading-normal tracking-normal mb-16"
          >
            Talk to an on‑chain agent that hunts for better lending rates. It
            shows the plan, the fees, and only moves when you say so.
          </motion.p>

          {/* Removed stats until wired to live data */}

          {/* CTA Buttons - Simple and Clean */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full max-w-lg px-4"
          >
            <button
              type="button"
              onClick={() =>
                window.open("https://app.youform.com/forms/bbbn2d9r", "_blank")
              }
              className="w-full sm:w-auto bg-transparent border-2 border-[#c479fe] text-black font-medium text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#c479fe]/10 hover:scale-105 transition-all duration-200 cursor-pointer shadow-lg android-button-fix min-h-[48px]"
            >
              <span className="android-text-fix">Join Whitelist</span>
            </button>

            {/* Launch Agent Button */}
            <button
              type="button"
              onClick={() => {
                window.open("https://demo.Stratifi.xyz/agent/chat", "_blank");
              }}
              className="w-full sm:w-auto bg-transparent border-2 border-[#c479fe] text-black font-medium text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#c479fe]/10 hover:scale-105 transition-all duration-200 cursor-pointer shadow-lg android-button-fix min-h-[48px]"
            >
              <span className="android-text-fix">Launch Agent</span>
            </button>

            {/* Join Whitelist Button */}
          </motion.div>
        </div>
      </section>
    </>
  );
}
