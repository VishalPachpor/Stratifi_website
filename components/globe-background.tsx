import React from "react";

// Base meridian path (vertical ellipse segment). We rotate this around the center
// to render evenly spaced longitudes that align like a globe.
function meridian(cx: number, cy: number, r: number) {
  const rx = r * 0.42; // horizontal squash ratio to simulate perspective
  const ry = r;
  return `M ${cx} ${cy - ry} A ${rx} ${ry} 0 0 1 ${cx} ${cy + ry}`;
}

export const GlobeBackground = () => (
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
