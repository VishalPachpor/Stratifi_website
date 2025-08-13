"use client";

import React from "react";
import Image from "next/image";

/* icons now loaded from /public via next/image */

/* ------------------------------ globe background ------------------------------ */
function meridian(cx: number, cy: number, r: number, a: number) {
  const rx = r;
  const ry = r * 0.42;
  const x1 = cx - rx * Math.cos(a);
  const x2 = cx + rx * Math.cos(a);
  const y = cy;
  return `M ${x1} ${y} A ${rx} ${ry} 0 0 1 ${x2} ${y}`;
}

// deterministic RNG to avoid hydration mismatches
function createSeededRng(seed: number) {
  let state = seed >>> 0;
  return function rng() {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 0xffffffff;
  };
}

const STAR_RECTS = (() => {
  const rng = createSeededRng(42);
  return Array.from({ length: 140 }).map(() => {
    const angle = rng() * Math.PI * 2;
    const radius = 360 * Math.sqrt(rng());
    const x = 500 + radius * Math.cos(angle);
    const y = 540 + radius * Math.sin(angle) * 0.56;
    const size = rng() * 1.6 + 0.4;
    return { x, y, size };
  });
})();

const GlobeBackground = () => (
  <svg
    viewBox="0 0 1000 1000"
    className="pointer-events-none absolute left-1/2 top-[52%] -z-10 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2"
    aria-hidden
  >
    <defs>
      <radialGradient id="g" cx="50%" cy="55%" r="55%">
        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.03" />
        <stop offset="70%" stopColor="hsl(var(--primary))" stopOpacity="0.0" />
      </radialGradient>
      <mask id="sphere">
        <circle cx="500" cy="540" r="400" fill="#fff" />
      </mask>
    </defs>
    <circle cx="500" cy="540" r="400" fill="url(#g)" />
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
          cy="540"
          r={85 + i * 45}
          fill="none"
          strokeDasharray="1 14"
        />
      ))}
      {[...Array(12)].map((_, i) => (
        <path
          key={i}
          d={meridian(500, 540, 400, (i * Math.PI) / 6)}
          fill="none"
          strokeDasharray="1 14"
        />
      ))}
    </g>
    <g fill="hsl(var(--muted-foreground))" opacity="0.3" mask="url(#sphere)">
      {STAR_RECTS.map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={r.size} height={r.size} />
      ))}
    </g>
    <g
      stroke="hsl(var(--muted-foreground))"
      strokeWidth="1.5"
      fill="none"
      opacity="0.4"
    >
      {/* subtle curve beneath the header to visually complete the globe */}
      <path d="M220 240 A 380 180 0 0 1 780 240" strokeLinecap="round" />
      <path d="M360 360c32-22 64-35 100-48" />
      <path d="M720 740h42" strokeLinecap="round" />
      <path d="M764 740h42" strokeLinecap="round" />
    </g>
    {/* replace small decorative circle with a rounded square near the top center */}
    <rect
      x="492"
      y="180"
      width="16"
      height="16"
      rx="3"
      fill="hsl(var(--muted-foreground))"
      opacity="0.35"
    />
    <g fill="hsl(var(--muted-foreground))" opacity="0.5">
      <circle cx="410" cy="740" r="10" />
      <rect x="612" y="280" width="10" height="10" rx="2" />
      <rect x="525" y="300" width="12" height="12" rx="2" />
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
    <section className="relative isolate overflow-hidden bg-background py-24">
      <GlobeBackground />
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-medium tracking-tight text-primary">
          Protocols
        </h2>
        {/* strict single row with visible gaps */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          <Card name="AAVE V3" apy="3.57%" logoSrc="/aave.svg" />
          <Card name="COMPOUND" apy="6.39%" logoSrc="/compound.svg" />
          <Card name="MORPHO BLUE" apy="7.67%" logoSrc="/morpho.jpg" />
          <Card
            name="MOONWELL"
            apy="7.48%"
            logoSrc="/moonwell.svg"
            logoClassName="h-16 w-16 md:h-20 md:w-20"
            logoWrapperClassName="top-5"
          />
          <Card name="SEAMLESS" apy="9.13%" logoSrc="/seamless.svg" />
        </div>
      </div>
    </section>
  );
};

export default APRComparison;
