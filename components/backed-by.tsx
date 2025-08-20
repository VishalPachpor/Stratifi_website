"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BackedBy() {
  const backers = [
    {
      name: "Balaji Srinivasan",
      logoSrc: "/chains/balaji.png",
    },
    {
      name: "Ethereum Foundation",
      logoSrc: "/chains/Eth.png",
    },
    {
      name: "Starknet Foundation",
      logoSrc: "/chains/Starknet.png",
    },
    {
      name: "Fuel Network",
      logoSrc: "/chains/FuelWhite.svg",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white font-light text-black antialiased py-16 scroll-smooth scroll-optimized no-scroll-jank">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-[#c479fe]/10 to-transparent blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-[#f2f2f2] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 border border-black/10"
        >
          {/* Left side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-medium text-black"
          >
            Backed by industry leaders
          </motion.div>

          {/* Right side - Backers */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center space-x-6 md:space-x-8 flex-wrap justify-center md:justify-end"
          >
            {backers.map((backer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="flex items-center space-x-2 text-black/70 hover:text-black transition-colors duration-300"
              >
                <div className="w-6 h-6 flex-shrink-0">
                  <Image
                    src={backer.logoSrc}
                    alt={`${backer.name} logo`}
                    width={24}
                    height={24}
                    className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <span className="text-sm md:text-base font-medium whitespace-nowrap">
                  {backer.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
