"use client";

import React from "react";
import { motion } from "framer-motion";
import { ContentWrapper } from "@/components/animations/page-transition";

/**
 * Example About Page
 * Demonstrates smooth page transitions and content animations
 */
export default function AboutPage() {
  // Animation variants for staggered content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ContentWrapper>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-light leading-none tracking-tighter text-black mb-8"
            >
              About Stratifi
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-black/80 font-light leading-normal tracking-normal mb-12"
            >
              We&apos;re building the future of DeFi automation, one smart agent
              at a time.
            </motion.p>
          </motion.div>
        </ContentWrapper>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* Mission */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-2xl font-light leading-snug tracking-tight-sm text-black">
                Our Mission
              </h2>
              <p className="text-black/70 leading-normal tracking-normal">
                To democratize access to DeFi yields through intelligent
                automation, making complex strategies accessible to everyone.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-2xl font-light leading-snug tracking-tight-sm text-black">
                Our Vision
              </h2>
              <p className="text-black/70 leading-normal tracking-normal">
                A world where anyone can optimize their crypto investments
                without needing to understand the complexities of DeFi
                protocols.
              </p>
            </motion.div>

            {/* Technology */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-2xl font-light leading-snug tracking-tight-sm text-black">
                Technology
              </h2>
              <p className="text-black/70 leading-normal tracking-normal">
                Built on cutting-edge AI and blockchain technology, our agents
                continuously monitor and optimize your positions.
              </p>
            </motion.div>

            {/* Community */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-2xl font-light leading-snug tracking-tight-sm text-black">
                Community
              </h2>
              <p className="text-black/70 leading-normal tracking-normal">
                Join a community of DeFi enthusiasts and developers building the
                future of automated finance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <ContentWrapper delay={0.3}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-light text-black mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-black/70 mb-8">
              Join the future of DeFi automation today.
            </p>
            <button
              onClick={() => {
                window.open("https://demo.Stratifi.xyz", "_blank");
              }}
              className="bg-[#c479fe] text-white font-medium px-8 py-3 rounded-full hover:bg-[#c479fe]/90 transition-colors duration-200"
            >
              Launch Agent
            </button>
          </motion.div>
        </ContentWrapper>
      </section>
    </div>
  );
}
