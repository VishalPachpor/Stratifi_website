"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
  mode?: "wait" | "sync" | "popLayout";
}

/**
 * Page Transition Component
 * Provides smooth page transitions using Framer Motion
 * Wraps content with proper animation and layout handling
 */
export default function PageTransition({
  children,
  mode = "wait",
}: PageTransitionProps) {
  const pathname = usePathname();

  // Animation variants for page transitions
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98,
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      y: -20,
      scale: 0.98,
    },
  };

  const pageTransition = {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 0.4,
  };

  return (
    <AnimatePresence mode={mode} initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="page-transition-wrapper"
        style={{
          overflow: "hidden",
          minHeight: "100%",
          width: "100%",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * Layout Wrapper Component
 * Use this for layout-level animations that persist across routes
 */
export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="layout-wrapper"
      style={{
        overflow: "hidden",
        minHeight: "100%",
        width: "100%",
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Content Wrapper Component
 * Use this for content that should animate in/out
 */
export function ContentWrapper({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
      }}
      className="content-wrapper"
    >
      {children}
    </motion.div>
  );
}
