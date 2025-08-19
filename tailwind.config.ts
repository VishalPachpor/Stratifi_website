import type { Config } from "tailwindcss";

// all in fixtures is set to tailwind v3 as interims solutions

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // Avoid scanning repo root for random files
  ],
  theme: {
    extend: {
      fontFamily: {
        sequel: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          '"Inter"',
          '"SF Pro Display"',
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      // Professional Typography Scale - Major Third (1.25 ratio)
      fontSize: {
        // Base scale following the 1.25 ratio theory
        xs: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.5", letterSpacing: "0" }], // 14px
        base: ["1rem", { lineHeight: "1.5", letterSpacing: "0" }], // 16px - p tag
        lg: ["1.125rem", { lineHeight: "1.4", letterSpacing: "0" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.3", letterSpacing: "-0.005em" }], // 20px - h6
        "2xl": ["1.5625rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }], // 25px - h5
        "3xl": [
          "1.953125rem",
          { lineHeight: "1.3", letterSpacing: "-0.015em" },
        ], // 31.25px - h4
        "4xl": [
          "2.44140625rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ], // 39px - h3
        "5xl": [
          "3.0517578125rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ], // 48.8px - h2
        "6xl": [
          "3.814697265625rem",
          { lineHeight: "1.0", letterSpacing: "-0.02em" },
        ], // 61px - h1
        "7xl": [
          "4.76837158203125rem",
          { lineHeight: "1.0", letterSpacing: "-0.025em" },
        ], // 76.3px
        "8xl": [
          "5.9604644775390625rem",
          { lineHeight: "1.0", letterSpacing: "-0.025em" },
        ], // 95.4px
        "9xl": [
          "7.450580596923828rem",
          { lineHeight: "1.0", letterSpacing: "-0.03em" },
        ], // 119.2px
      },
      // Custom letter spacing utilities
      letterSpacing: {
        tightest: "-0.03em", // -3% for largest headings
        tighter: "-0.02em", // -2% for h1, h2, h3
        tight: "-0.015em", // -1.5% for h4
        "tight-sm": "-0.01em", // -1% for h5
        "tight-xs": "-0.005em", // -0.5% for h6
        normal: "0em", // 0% for body text
        wide: "0.01em", // +1% for emphasis
        wider: "0.02em", // +2% for special cases
        widest: "0.05em", // +5% for display text
      },
      // Custom line height utilities
      lineHeight: {
        none: "1", // 100% for h1
        tight: "1.1", // 110% for h2
        snug: "1.3", // 130% for h4
        normal: "1.5", // 150% for body text (p)
        relaxed: "1.625", // 162.5% for extended body
        loose: "2", // 200% for special cases
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
