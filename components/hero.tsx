"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Globe3D from "./globe-3d";
import { Button } from "@/components/ui/button";
import CountingAnimation from "./counting-animation";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <section
      className={`hero-section relative w-full overflow-hidden bg-[#0a0613] font-light text-white antialiased min-h-screen flex flex-col justify-start items-center pt-20 isolate ${
        isMobile ? "pb-20" : "pb-0"
      }`}
      style={{
        background: "linear-gradient(135deg, #0a0613 0%, #150d27 100%)",
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Glowing circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-blue-500/20 to-purple-600/10 blur-3xl"></div>
      </div>

      <div
        className="absolute right-0 top-0 h-1/2 w-1/2"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.15) 0%, rgba(13, 10, 25, 0) 60%)",
        }}
      />
      <div
        className="absolute left-0 top-0 h-1/2 w-1/2 -scale-x-100"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.15) 0%, rgba(13, 10, 25, 0) 60%)",
        }}
      />

      {/* Main Content - Upper Section */}
      <div
        className={`relative z-10 max-w-6xl mx-auto px-4 text-center md:px-6 lg:px-8 ${
          isMobile ? "mt-12" : "mt-20"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-block rounded-full border border-[#9b87f5]/30 px-6 py-3 text-sm font-medium text-[#9b87f5] tracking-wide"
          >
            NEXT GENERATION OF DEFI
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-5xl text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl"
          >
            Agents for{" "}
            <span className="bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] bg-clip-text text-transparent font-semibold">
              OnChain
            </span>{" "}
            Capital
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-3xl text-lg text-white/90 sm:text-xl md:text-xl lg:text-2xl font-light leading-relaxed"
          >
            Stratifi delivers personalized, risk-adjusted yield on your crypto
            assets. Its as simple as using ChatGPT to maximize your returns.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center justify-center gap-6 sm:flex-row pt-8"
          >
            <Button
              asChild
              size="lg"
              variant="default"
              className="bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] hover:opacity-90"
            >
              <Link href="/docs/get-started">Launch Agent</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-white/70 hover:text-white gap-2"
            >
              <a href="#how-it-works">
                Learn how it works
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-y-1"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </a>
            </Button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/10"
          >
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                <CountingAnimation
                  value={15.0}
                  suffix="%"
                  duration={2.5}
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
                />
              </div>
              <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">
                Current APR
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                <CountingAnimation
                  value={762}
                  prefix="$"
                  suffix="M+"
                  duration={2.5}
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
                />
              </div>
              <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">
                Capital Optimized
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                <CountingAnimation
                  value={30000}
                  prefix="+"
                  duration={2.5}
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
                />
              </div>
              <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">
                Agents
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                <CountingAnimation
                  value={273}
                  prefix="+"
                  suffix="K"
                  duration={2.5}
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
                />
              </div>
              <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">
                Autonomous TXs
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 3D Globe - Positioned in marked area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true, margin: "-200px" }}
        className={`absolute z-0 pointer-events-none ${
          isMobile
            ? "top-[10%] left-[10%] transform -translate-x-1/2 -translate-y-1/2"
            : "top-[5%] right-[28%] transform translate-x-[10%] -translate-y-[10%]"
        }`}
        style={{
          width: isMobile ? "min(80vw, 400px)" : "min(50vw, 700px)",
          height: isMobile ? "min(40vh, 400px)" : "min(50vh, 700px)",
          maxWidth: isMobile ? "400px" : "700px",
          maxHeight: isMobile ? "400px" : "700px",
          opacity: isMobile ? 0.3 : 1,
        }}
      >
        <Globe3D className="w-full h-full" />
      </motion.div>
    </section>
  );
}
