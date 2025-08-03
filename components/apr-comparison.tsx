"use client";

import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const protocolData = [
  { name: "AAVE V3", apr: 3.57, earnings: 357.0, color: "#7c3aed" },
  { name: "COMPOUND V3", apr: 3.01, earnings: 301.0, color: "#8b5cf6" },
  { name: "MOONWELL", apr: 7.67, earnings: 767.0, color: "#a855f7" },
  { name: "MORPHO", apr: 7.67, earnings: 767.0, color: "#9333ea" },
  { name: "SEAMLESS", apr: 7.48, earnings: 748.0, color: "#7e22ce" },
];

const APRComparison = () => {
  const graphRef = useRef(null);
  const isInView = useInView(graphRef, { once: true, margin: "-100px" });

  return (
    <section className="relative w-full overflow-hidden font-light text-white antialiased pb-20">
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Headers */}
        <div className="flex justify-between items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-sm text-white/60 uppercase tracking-wider"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-sm text-white/60 uppercase tracking-wider"
          >
            CORE BENEFITS
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-20 w-full">
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 w-full"
          >
            <span className="bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] bg-clip-text text-transparent">
              42.45%
            </span>{" "}
            higher APR
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-white/80 text-lg mb-16 space-y-2"
          >
            <p>Backtesting simulations with USDC markets on Base Network.</p>
            <p>The simulations are made based on DEFILLAMA data.</p>
          </motion.div>

          {/* Animated Graph Lines */}
          <motion.div
            ref={graphRef}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-96 mb-16 w-full"
          >
            <svg
              viewBox="0 0 1200 400"
              className="w-full h-full"
              style={{ overflow: "visible" }}
            >
              {protocolData.map((protocol, index) => {
                const startX = 150;
                const endX = 1050;
                const startY = 350;
                const endY = 50 + index * 30; // Different end heights with more spacing
                const controlX1 = startX + 300;
                const controlY1 = startY;
                const controlX2 = endX - 300;
                const controlY2 = endY;

                const pathData = `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`;

                return (
                  <motion.path
                    key={protocol.name}
                    d={pathData}
                    stroke={protocol.color}
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={
                      isInView
                        ? {
                            pathLength: 1,
                            opacity: 1,
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      delay: index * 0.2,
                      ease: "easeInOut",
                    }}
                    style={{
                      filter: `drop-shadow(0 0 8px ${protocol.color}40)`,
                    }}
                  />
                );
              })}
            </svg>
          </motion.div>

          {/* Investment Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          >
            <div>
              <p className="text-white/60 text-lg mb-2">You invested</p>
              <p className="text-4xl font-bold">$10,000.00</p>
            </div>
            <div>
              <p className="text-white/60 text-lg mb-2">Earned with StratiFi</p>
              <div className="flex items-center gap-3">
                <p className="text-4xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] bg-clip-text text-transparent">
                  +$1031.86
                </p>
                <span className="px-3 py-1 bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] bg-clip-text text-transparent text-sm rounded-full border border-[#9b87f5]/30">
                  10.31% ●
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Protocol Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="space-y-4">
            {protocolData.map((protocol, index) => (
              <motion.div
                key={protocol.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border-b border-white/10 hover:bg-white/5 transition-colors duration-300"
              >
                {/* Protocol Name */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: protocol.color }}
                  />
                  <span className="text-lg font-medium">{protocol.name}</span>
                </div>

                {/* APR */}
                <div className="text-center">
                  <span className="text-xl font-bold">{protocol.apr}%</span>
                </div>

                {/* Earnings */}
                <div className="text-center">
                  <span className="text-xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] bg-clip-text text-transparent">
                    +${protocol.earnings.toFixed(2)}
                  </span>
                </div>

                {/* Daily Average */}
                <div className="text-center">
                  <span className="text-white/60">
                    DAILY AVG. APR {protocol.apr}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-[#9b87f5]/5 to-transparent blur-3xl"></div>
      </div>
    </section>
  );
};

export default APRComparison;
