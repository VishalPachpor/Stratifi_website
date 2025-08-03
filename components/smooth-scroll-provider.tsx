"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

interface SmoothScrollProviderProps {
  children: React.ReactNode;
  smoothness?: number;
  effects?: boolean;
}

export default function SmoothScrollProvider({
  children,
  smoothness = 1,
  effects = true,
}: SmoothScrollProviderProps) {
  const smootherRef = useRef<ScrollSmoother | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Create smooth scroller
    smootherRef.current = ScrollSmoother.create({
      wrapper: containerRef.current,
      content: containerRef.current?.querySelector(".smooth-content"),
      smooth: smoothness,
      effects: effects,
      normalizeScroll: true,
      ignoreMobileResize: true,
    });

    // Cleanup
    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
      }
    };
  }, [smoothness, effects]);

  return (
    <div ref={containerRef} className="smooth-wrapper">
      <div className="smooth-content">{children}</div>
    </div>
  );
}

// Utility hook for accessing the smoother instance
export const useSmoothScroll = () => {
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      smootherRef.current = ScrollSmoother.get();
    }
  }, []);

  return smootherRef.current;
};
