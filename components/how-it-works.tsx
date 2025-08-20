"use client";

import { motion } from "framer-motion";
import { BarChart3, KeyRound, Square, TrendingUp } from "lucide-react";

export function HowItWorks() {
  const cards = [
    {
      icon: BarChart3,
      title: "Scan",
      description:
        "Monitors markets, calculates net APY, and flags top opportunities.",
    },
    {
      icon: KeyRound,
      title: "Execute",
      description: "Simulates route, gets approval, and moves funds securely.",
    },
    {
      icon: Square,
      title: "Compound",
      description:
        "Reinvests incentives and redeploys into best-performing pools.",
    },
    {
      icon: TrendingUp,
      title: "Optimize",
      description:
        "Continuously analyzes performance and adjusts strategies for maximum yield.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white font-light text-black antialiased py-20 scroll-smooth scroll-optimized no-scroll-jank">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-[#c479fe]/10 to-transparent blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-light leading-tight tracking-tighter text-center mb-12"
          >
            How it works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl border border-black/10 bg-white transition-colors duration-300 hover:bg-[#f2f2f2] h-48 w-full`}
              >
                <div className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#f2f2f2] flex items-center justify-center">
                        {/* icon */}
                        <card.icon className="w-6 h-6 text-black" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg leading-snug tracking-tight-sm font-light text-black mb-3">
                        {card.title}
                      </h3>
                      <p className="text-black/70 leading-normal tracking-normal text-sm">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
