"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { usePathname } from "next/navigation";

interface LenisProviderProps {
  children: React.ReactNode;
  options?: {
    duration?: number;
    easing?: (t: number) => number;
    smoothWheel?: boolean;
    wheelMultiplier?: number;
    touchMultiplier?: number;
  };
}

/**
 * Lenis Provider Component
 * Wraps the app and provides smooth scrolling functionality
 * Automatically handles route changes and scroll restoration
 */
export default function LenisProvider({
  children,
  options = {},
}: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Lenis with optimized settings
    lenisRef.current = new Lenis({
      duration: options.duration || 1.2,
      easing:
        options.easing ||
        ((t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: options.smoothWheel !== false,
      wheelMultiplier: options.wheelMultiplier || 1,
      touchMultiplier: options.touchMultiplier || 2,
      infinite: false,
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
    options.smoothWheel,
    options.wheelMultiplier,
    options.touchMultiplier,
  ]);

  // Handle route changes - scroll to top on new page
  useEffect(() => {
    if (lenisRef.current) {
      // Small delay to ensure page content is rendered
      const timer = setTimeout(() => {
        lenisRef.current?.scrollTo(0, { duration: 0.5 });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return <div data-lenis-container>{children}</div>;
}
