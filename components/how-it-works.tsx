"use client";

import { motion } from "framer-motion";
import {
  Search,
  Calculator,
  Zap,
  TrendingUp,
  Wallet,
  ArrowDown,
  Play,
} from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Scan",
      description:
        "Continuously sweeps every lending pool in real-time, tracking APR shifts, bonus incentives, and gas swings across every integrated protocol.",
    },
    {
      icon: Calculator,
      title: "Score",
      description:
        "Rapidly crunches all variables to calculate post-fee yield, green-lighting moves only when the projected upside materially outweighs total costs.",
    },
    {
      icon: Zap,
      title: "Execute",
      description:
        "Seamlessly withdraws funds, atomically swaps assets when needed, then redeposits—all fully automated inside your self-custodial smart account.",
    },
    {
      icon: TrendingUp,
      title: "Compound",
      description:
        "Collects reward tokens, converts them into your base asset, and reinvests the proceeds back into the strategy for compounding growth.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0613] font-light text-white antialiased py-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Glowing circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-blue-500/10 to-purple-600/5 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* How Stratifi works section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-16"
          >
            How StratiFi works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 border border-white/10 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm hover:border-[#AD90FE]/30 transition-all duration-300">
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#AD90FE] drop-shadow-[0_0_6px_#AD90FE]" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#AD90FE] drop-shadow-[0_0_6px_#AD90FE]" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#AD90FE] drop-shadow-[0_0_6px_#AD90FE]" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#AD90FE] drop-shadow-[0_0_6px_#AD90FE]" />

                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#AD90FE] to-[#7c3aed] flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-white">
                        {step.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {step.description}
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
