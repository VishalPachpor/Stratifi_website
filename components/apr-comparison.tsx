"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/* icons now loaded from /public via next/image */

/* ------------------------------ globe background ------------------------------ */
// Base meridian path (vertical ellipse segment). We rotate this around the center
// to render evenly spaced longitudes that align like a globe.
function meridian(cx: number, cy: number, r: number) {
  const rx = r * 0.42; // horizontal squash ratio to simulate perspective
  const ry = r;
  return `M ${cx} ${cy - ry} A ${rx} ${ry} 0 0 1 ${cx} ${cy + ry}`;
}

// deterministic RNG to avoid hydration mismatches
function createSeededRng(seed: number) {
  let state = seed >>> 0;
  return function rng() {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 0xffffffff;
  };
}

// Quantize floating values so Node vs Browser floating point formatting
// cannot produce tiny rounding differences during hydration.
function quantize(value: number, decimals = 2): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

const GlobeBackground = () => (
  <svg
    viewBox="0 0 1000 1000"
    className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[900px] w-[900px] md:h-[1100px] md:w-[1100px] -translate-x-1/2 -translate-y-1/2"
    aria-hidden
  >
    <defs>
      <radialGradient id="g" cx="50%" cy="55%" r="55%">
        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.03" />
        <stop offset="70%" stopColor="hsl(var(--primary))" stopOpacity="0.0" />
      </radialGradient>
      <mask id="sphere">
        <circle cx="500" cy="500" r="400" fill="#fff" />
      </mask>
    </defs>
    <circle cx="500" cy="500" r="400" fill="url(#g)" />
    <g
      mask="url(#sphere)"
      stroke="hsl(var(--muted-foreground))"
      strokeOpacity="0.2"
      strokeWidth="0.8"
    >
      {[...Array(8)].map((_, i) => (
        <circle
          key={i}
          cx="500"
          cy="500"
          r={85 + i * 45}
          fill="none"
          strokeDasharray="1 14"
        />
      ))}
      {[...Array(12)].map((_, i) => {
        const rotation = (i * 180) / 12; // distribute across 180° to avoid duplicates
        return (
          <path
            key={i}
            d={meridian(500, 500, 400)}
            transform={`rotate(${rotation} 500 500)`}
            fill="none"
            strokeDasharray="1 14"
          />
        );
      })}
    </g>

    <ellipse
      cx="500"
      cy="910"
      rx="220"
      ry="28"
      fill="hsl(var(--primary))"
      opacity="0.05"
    />
  </svg>
);

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
      "relative h-52 rounded-2xl border p-6",
      featured
        ? "bg-accent text-accent-foreground border-transparent shadow-[0_8px_30px_hsl(var(--accent)/0.15)]"
        : "bg-card text-card-foreground border-border",
    ].join(" ")}
  >
    {/* Centered logo shifted slightly upward */}
    <div
      className={[
        "absolute inset-x-0 top-6 bottom-[64px] flex items-start justify-center",
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
        className={["h-12 w-12 md:h-14 md:w-14 object-contain", logoClassName]
          .filter(Boolean)
          .join(" ")}
      />
    </div>

    {/* BOTTOM: name + APY */}
    <div className="absolute bottom-6 left-6 right-6 text-center">
      <div className="text-sm tracking-[0.22em]">{name}</div>
      <div
        className={
          (featured ? "text-accent-foreground" : "text-primary") +
          " mt-1 text-lg font-medium"
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
          className="mb-12 text-center text-3xl font-medium tracking-tight text-black"
        >
          Protocols
        </motion.h2>
        {/* strict single row with visible gaps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10"
        >
          <Card name="AAVE V3" apy="3.57%" logoSrc="/aave.svg" />
          <Card name="COMPOUND" apy="6.39%" logoSrc="/compound.svg" />
          <Card name="MORPHO BLUE" apy="7.67%" logoSrc="/morpho.jpg" />
          <Card
            name="MOONWELL"
            apy="7.48%"
            logoSrc="/moonwell.svg"
            logoClassName="h-16 w-16 md:h-20 md:w-20 object-top"
            logoWrapperClassName="top-[10px]"
          />
          <Card name="SEAMLESS" apy="9.13%" logoSrc="/seamless.svg" />
        </motion.div>
      </div>
    </section>
  );
};

export default APRComparison;
