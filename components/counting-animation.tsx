"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface CountingAnimationProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function CountingAnimation({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: CountingAnimationProps) {
  const [isInView, setIsInView] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    // Handle different number formats
    if (value >= 1000000) {
      return `${prefix}${(latest / 1000000).toFixed(1)}M${suffix}`;
    } else if (value >= 1000) {
      return `${prefix}${(latest / 1000).toFixed(1)}K${suffix}`;
    } else if (value >= 100) {
      return `${prefix}${latest.toFixed(0)}${suffix}`;
    } else {
      return `${prefix}${latest.toFixed(2)}${suffix}`;
    }
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, count, duration]);

  return (
    <motion.div
      className={className}
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
    >
      <motion.span>{rounded}</motion.span>
    </motion.div>
  );
} 