"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

interface UseLenisScrollOptions {
  duration?: number;
  easing?: (t: number) => number;
  orientation?: "vertical" | "horizontal";
  gestureOrientation?: "vertical" | "horizontal";
  smoothWheel?: boolean;
  wheelMultiplier?: number;
  touchMultiplier?: number;
  infinite?: boolean;
}

/**
 * Custom hook for Lenis smooth scrolling
 * Provides smooth scrolling with proper cleanup and configuration
 */
export function useLenisScroll(options: UseLenisScrollOptions = {}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis({
      duration: options.duration || 1.2,
      easing:
        options.easing ||
        ((t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
      orientation: options.orientation || "vertical",
      gestureOrientation: options.gestureOrientation || "vertical",
      smoothWheel: options.smoothWheel !== false,
      wheelMultiplier: options.wheelMultiplier || 1,
      touchMultiplier: options.touchMultiplier || 2,
      infinite: options.infinite || false,
    });

    // Start the animation loop
    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, [
    options.duration,
    options.easing,
    options.orientation,
    options.gestureOrientation,
    options.smoothWheel,
    options.wheelMultiplier,
    options.touchMultiplier,
    options.infinite,
  ]);

  return lenisRef.current;
}

/**
 * Hook to get the current Lenis instance
 * Useful for programmatic scrolling or accessing scroll methods
 */
export function useLenisInstance() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Find existing Lenis instance in the DOM
    const lenisElement = document.querySelector("[data-lenis-container]");
    if (lenisElement && (lenisElement as any).lenis) {
      lenisRef.current = (lenisElement as any).lenis;
    }
  }, []);

  return lenisRef.current;
}
