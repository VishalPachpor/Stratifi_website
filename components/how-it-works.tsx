"use client";

import { motion } from "framer-motion";
import { BarChart3, KeyRound, Square } from "lucide-react";

export function HowItWorks() {
  const cards = [
    {
      icon: BarChart3,
      title: "Scan ",
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
            className="text-5xl md:text-6xl lg:text-7xl font-light text-center mb-16"
          >
            How it works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl border border-black/10 bg-white transition-colors duration-300 hover:bg-[#f2f2f2]`}
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-[#f2f2f2] flex items-center justify-center">
                        {/* icon */}
                        <card.icon className="w-6 h-6 text-black" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl leading-snug font-medium text-black whitespace-pre-line">
                        {card.title}
                      </h3>
                      <p className="text-black/70 leading-relaxed mt-3">
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
