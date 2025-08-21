"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ArticleSection() {
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
            Recent updates
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-black/10 bg-white transition-colors duration-300 hover:bg-[#f2f2f2] w-full overflow-hidden"
          >
            <Link 
              href="https://medium.com/@shabbiryk/the-intelligent-evolution-of-defi-from-automation-to-agentfi-3f6f2576632a"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 group"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h3 className="text-2xl leading-snug tracking-tight-sm font-light text-black mb-3 group-hover:text-[#c479fe] transition-colors duration-300">
                    The Intelligent Evolution of DeFi — AgentFi Economies
                  </h3>
                  <p className="text-black/70 leading-normal tracking-normal">
                    DeFi&apos;s evolution from basic automation to true AgentFi - autonomous AI agents that can independently perceive, strategize, and execute complex yield optimization strategies without human intervention.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center rounded-full bg-[#f2f2f2] p-3 group-hover:bg-[#c479fe]/20 transition-colors duration-300">
                    <ArrowRight className="h-5 w-5 text-black group-hover:text-[#c479fe] transition-colors duration-300" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}