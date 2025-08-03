"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function LaunchAgent() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center">
        {/* Dollar sign icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative">
            <div className="w-20 h-16 border border-[#AD90FE] rounded-lg flex items-center justify-center">
              <span className="text-[#AD90FE] text-3xl font-bold">$</span>
            </div>
            {/* Green dots */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#AD90FE] rounded-full"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#AD90FE] rounded-full"></div>
          </div>
        </motion.div>

        {/* LAUNCH ARMA text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#AD90FE] text-sm font-medium tracking-widest mb-6"
        >
          LAUNCH YOUR STRATIFI AGENT
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-light text-white text-center mb-8 max-w-3xl leading-tight"
        >
          Start earning
          <br /> in 60 seconds
        </motion.h2>

        {/* Help text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 text-center mb-10"
        >
          Need help? Read the{" "}
          <Link
            href="https://docs.stratifi.xyz/docs/stratifi-ai-agent/stratifi-ai-details/"
            target="_blank"
            className="text-white underline underline-offset-2 hover:text-[#AD90FE]"
          >
            Docs
          </Link>{" "}
          or join our{" "}
          <Link
            href="https://discord.gg/e77VZyrh"
            className="text-white underline underline-offset-2 hover:text-[#AD90FE]"
          >
            Discord
          </Link>
        </motion.p>

        {/* Launch button */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-[#AD90FE] text-black hover:bg-[#AD90FE]/90 hover:scale-105 transition-all text-base font-medium py-6 px-8 cursor-pointer"
          >
            <Link
              href="https://demo.stratifi.xyz/agent/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              Launch Agent
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
