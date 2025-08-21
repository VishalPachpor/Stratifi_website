"use client";

import { motion } from "framer-motion";
import NotchedCard from "./NotchedCard";

export function UserSegments() {
  const segments = [
    {
      title: "FOR INSTITUTIONS",
      description:
        "Deploy compliant, customizable agent fleets that continuously optimize cross-chain DeFi strategies with advanced risk controls, transparent reporting, and verifiable, error-free execution.",
    },
    {
      title: "FOR RETAIL USERS",
      description:
        "Deploy autonomous DeFi strategies with full asset ownership, adaptive automation, and session-key safeguards—no technical expertise needed, just tailored precision aligned with your goals.",
    },
    {
      title: "FOR PROTOCOLS",
      description:
        "Intelligent agents optimize continuously, driving consistent volume; semantic abstraction simplifies integration and broadens cross-chain and demographic access through intuitive agent interfaces.",
    },
    {
      title: "FOR DEGENS",
      description:
        "Stratifi&;s AI agent swarms are your DeFi wingman, auto-trading with risk-smart strategies to chase alpha. No dev skills needed—plug in, let them grind arbitrage or yields, and stack bags while you HODL. Moon time!",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white font-light text-black antialiased py-8 sm:py-12 md:py-20 lg:py-24 scroll-smooth scroll-optimized no-scroll-jank">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-to-b from-[#c479fe]/10 to-transparent blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-8 sm:mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-light leading-tight tracking-tighter text-center mb-4 sm:mb-6 md:mb-8 text-black"
          >
            Built for Every User
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 place-items-center">
            {segments.map((segment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full max-w-sm md:max-w-none"
              >
                <NotchedCard title={segment.title}>
                  {segment.description}
                </NotchedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
