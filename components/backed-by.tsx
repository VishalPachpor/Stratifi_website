"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BackedBy() {
  const backers = [
    { name: "Balaji Srinivasan", logoSrc: "/chains/balaji.png" },
    { name: "Ethereum Foundation", logoSrc: "/chains/Eth.png" },
    { name: "Starknet Foundation", logoSrc: "/chains/Starknet.png" },
    { name: "Fuel Network", logoSrc: "/chains/FuelWhite.svg" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white font-light text-black antialiased py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight tracking-tighter text-black mb-4"
          >
            Backed by Industry Leaders
          </motion.h2>
        </div>

        {/* Backers Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 place-items-center"
        >
          {backers.map((backer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex-shrink-0 bg-white rounded-lg p-2 md:p-3 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src={backer.logoSrc}
                  alt={`${backer.name} logo`}
                  width={50}
                  height={50}
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
