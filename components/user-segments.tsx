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
        "Stratifi enables seamless creation and integration of agent swarms via SDKs, empowering developers to launch autonomous, risk-aware strategy agents tailored to their ecosystem.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white font-light text-black antialiased py-16 scroll-smooth scroll-optimized no-scroll-jank">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-[#c479fe]/10 to-transparent blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-light leading-tight tracking-tighter text-center mb-8 text-black"
          >
            Built for Every User
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {segments.map((segment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
