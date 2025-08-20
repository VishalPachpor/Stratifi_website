"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GlobeBackground } from "./globe-background";

/* ---------------------------------- card ---------------------------------- */
interface CardProps {
  name: string;
  apy: string;
  logoSrc: string;
  featured?: boolean;
  logoClassName?: string;
  logoWrapperClassName?: string;
}

// CARD: icon pinned at top, name + APY pinned at bottom, clear gap between cards
const Card: React.FC<CardProps> = ({
  name,
  apy,
  logoSrc,
  featured,
  logoClassName,
  logoWrapperClassName,
}) => (
  <div
    className={[
      "relative h-56 rounded-2xl border p-8",
      featured
        ? "bg-accent text-accent-foreground border-transparent shadow-[0_8px_30px_hsl(var(--accent)/0.15)]"
        : "bg-card text-card-foreground border-border",
    ].join(" ")}
  >
    {/* Centered logo shifted slightly upward */}
    <div
      className={[
        "absolute inset-x-0 top-8 bottom-[80px] flex items-start justify-center",
        logoWrapperClassName,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Image
        src={logoSrc}
        alt={`${name} logo`}
        width={50}
        height={50}
        className={["h-16 w-16 md:h-20 md:w-20 object-contain", logoClassName]
          .filter(Boolean)
          .join(" ")}
      />
    </div>

    {/* BOTTOM: name + APY */}
    <div className="absolute bottom-8 left-8 right-8 text-center">
      <div className="text-sm tracking-[0.22em] mb-2">{name}</div>
      <div
        className={
          (featured ? "text-accent-foreground" : "text-primary") +
          " text-lg font-medium"
        }
      >
        {apy}
      </div>
    </div>

    {/* subtle inner border on dark cards */}
    {!featured && (
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_hsl(var(--border)/0.1)]" />
    )}
  </div>
);

/* -------------------------------- section -------------------------------- */
const APRComparison = () => {
  return (
    <section className="relative isolate overflow-hidden bg-background pt-6 md:pt-8 pb-14 md:pb-20 scroll-smooth scroll-optimized no-scroll-jank">
      <GlobeBackground />
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 text-center text-4xl font-light leading-tight tracking-tighter text-black"
        >
          Protocols
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mb-16 text-center text-lg text-black/70 font-light leading-normal tracking-normal"
        >
          40+ Protocol Markets
        </motion.p>
        {/* strict single row with visible gaps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8"
        >
          <Card name="AAVE V3" apy="5.78%" logoSrc="/aave.svg" />
          <Card name="COMPOUND" apy="9.36%" logoSrc="/compound.svg" />
          <Card name="MORPHO BLUE" apy="11.35%" logoSrc="/morpho.jpg" />
          <Card
            name="MOONWELL"
            apy="9.46%"
            logoSrc="/moonwell.svg"
            logoClassName="h-16 w-16 md:h-20 md:w-20 object-top"
            logoWrapperClassName="top-[25px]"
          />
          <Card
            name="SEAMLESS"
            apy="9.13%"
            logoSrc="/seamless.svg"
            logoWrapperClassName="top-[20px]"
          />
          <Card
            name="WASABI"
            apy="10.17%"
            logoSrc="/wasabi.svg"
            logoClassName="h-12 w-12 md:h-16 md:w-16"
          />
        </motion.div>

        {/* Chains Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-20 text-center"
        >
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="text-2xl md:text-3xl font-light leading-tight tracking-tighter text-black mb-8"
          >
            Stratifi supports a growing list of 10+ chains
          </motion.h3>

          {/* Chains Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-8 md:space-x-12">
              {/* First set of chains */}
              <div className="flex items-center space-x-8 md:space-x-12 flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Image
                      src="/chains/Eth.png"
                      alt="Ethereum"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-sm text-black/70 font-light">
                    Ethereum
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Image
                      src="/chains/Base.jpg"
                      alt="Base"
                      width={24}
                      height={24}
                      className="w-6 h-6 object-cover"
                    />
                  </div>
                  <span className="text-sm text-black/70 font-light">Base</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Image
                      src="/chains/Starknet.png"
                      alt="Starknet"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-sm text-black/70 font-light">
                    Starknet
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm overflow-hidden">
                    <Image
                      src="/chains/Katana.jpg"
                      alt="Katana"
                      width={24}
                      height={24}
                      className="w-6 h-6 object-cover"
                    />
                  </div>
                  <span className="text-sm text-black/70 font-light">
                    Katana
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Image
                      src="/chains/near.png"
                      alt="NEAR"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-sm text-black/70 font-light">NEAR</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Image
                      src="/chains/ArbitrumWhite.svg"
                      alt="Arbitrum"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-sm text-black/70 font-light">
                    Arbitrum
                  </span>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center space-x-8 md:space-x-12 flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Image
                      src="/chains/Eth.png"
                      alt="Ethereum"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-sm text-black/70 font-light">
                    Ethereum
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Image
                      src="/chains/Base.jpg"
                      alt="Base"
                      width={24}
                      height={24}
                      className="w-6 h-6 object-cover"
                    />
                  </div>
                  <span className="text-sm text-black/70 font-light">Base</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Image
                      src="/chains/Starknet.png"
                      alt="Starknet"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-sm text-black/70 font-light">
                    Starknet
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm overflow-hidden">
                    <Image
                      src="/chains/Katana.jpg"
                      alt="Katana"
                      width={24}
                      height={24}
                      className="w-6 h-6 object-cover"
                    />
                  </div>
                  <span className="text-sm text-black/70 font-light">
                    Katana
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Image
                      src="/chains/near.png"
                      alt="NEAR"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-sm text-black/70 font-light">NEAR</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Image
                      src="/chains/ArbitrumWhite.svg"
                      alt="Arbitrum"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-sm text-black/70 font-light">
                    Arbitrum
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default APRComparison;
