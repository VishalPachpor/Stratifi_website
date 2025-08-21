"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Partners() {
  const partners = [
    {
      name: "Privy",
      logoSrc: "/partners/Privy.png",
      width: 120,
      height: 40,
    },
    {
      name: "On-ramp.money",
      logoSrc: "/partners/onramp-money.png",
      width: 140,
      height: 40,
    },
    {
      name: "The Graph",
      logoSrc: "/partners/graphl.png",
      width: 120,
      height: 40,
    },
    {
      name: "Safe",
      logoSrc: "/partners/safe.svg",
      width: 100,
      height: 40,
    },
    {
      name: "Zerion",
      logoSrc: "/partners/zerion.png",
      width: 120,
      height: 40,
    },
    {
      name: "Moonpay",
      logoSrc: "/partners/moonpay.svg", // This file doesn't exist yet
      width: 120,
      height: 40,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white font-light text-black antialiased py-20 scroll-smooth scroll-optimized no-scroll-jank">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-[#c479fe]/10 to-transparent blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-light leading-tight tracking-tighter text-center mb-8 text-black"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-lg text-black/70 font-light leading-normal tracking-normal max-w-2xl mx-auto"
          >
            Built in collaboration with the most innovative teams in Web3
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
            {partners.slice(0, 4).map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center space-y-3 group w-full max-w-32"
              >
                <div className="relative w-full h-16 flex items-center justify-center">
                  <Image
                    src={partner.logoSrc}
                    alt={`${partner.name} logo`}
                    width={partner.width}
                    height={partner.height}
                    className="max-w-full max-h-full object-contain opacity-100"
                  />
                </div>
                <span className="text-xs text-black/60 text-center font-light tracking-wide">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Second row with centered 5th partner */}
          <div className="mt-8 md:mt-12 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center space-y-3 group w-full max-w-32"
            >
              <div className="relative w-full h-16 flex items-center justify-center">
                <Image
                  src={partners[4].logoSrc}
                  alt={`${partners[4].name} logo`}
                  width={partners[4].width}
                  height={partners[4].height}
                  className="max-w-full max-h-full object-contain opacity-100"
                />
              </div>
              <span className="text-xs text-black/60 text-center font-light tracking-wide">
                {partners[4].name}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
