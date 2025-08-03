"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollMagic from "scrollmagic";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ScrollScene {
  trigger: string;
  start?: string;
  end?: string;
  duration?: number;
  pin?: boolean;
  pinSpacing?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
  onUpdate?: (progress: number) => void;
}

export const useSmoothScroll = (scenes: ScrollScene[] = []) => {
  const controllerRef = useRef<ScrollMagic.Controller | null>(null);
  const scenesRef = useRef<ScrollMagic.Scene[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initialize ScrollMagic controller
    controllerRef.current = new ScrollMagic.Controller();

    // Create scenes
    scenes.forEach((sceneConfig, index) => {
      const scene = new ScrollMagic.Scene({
        triggerElement: sceneConfig.trigger,
        triggerHook: 0.5,
        start: sceneConfig.start || "top center",
        end: sceneConfig.end || "bottom center",
        duration: sceneConfig.duration,
        pin: sceneConfig.pin || false,
        pinSpacing: sceneConfig.pinSpacing !== false,
      });

      // Add event handlers
      if (sceneConfig.onEnter) {
        scene.on("enter", sceneConfig.onEnter);
      }
      if (sceneConfig.onLeave) {
        scene.on("leave", sceneConfig.onLeave);
      }
      if (sceneConfig.onEnterBack) {
        scene.on("enter.back", sceneConfig.onEnterBack);
      }
      if (sceneConfig.onLeaveBack) {
        scene.on("leave.back", sceneConfig.onLeaveBack);
      }
      if (sceneConfig.onUpdate) {
        scene.on("progress", (event: any) => {
          sceneConfig.onUpdate?.(event.progress);
        });
      }

      // Add scene to controller
      scene.addTo(controllerRef.current!);
      scenesRef.current[index] = scene;
    });

    // Cleanup function
    return () => {
      scenesRef.current.forEach((scene) => {
        if (scene) {
          scene.destroy();
        }
      });
      if (controllerRef.current) {
        controllerRef.current.destroy();
      }
    };
  }, [scenes]);

  return {
    controller: controllerRef.current,
    scenes: scenesRef.current,
  };
};

// Utility function for smooth scroll animations
export const createSmoothScrollAnimation = (
  element: HTMLElement,
  animation: gsap.TweenVars,
  scrollTrigger: gsap.ScrollTriggerVars = {}
) => {
  return gsap.fromTo(element, animation, {
    ...animation,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      ...scrollTrigger,
    },
  });
};

// Utility function for parallax effects
export const createParallaxEffect = (
  element: HTMLElement,
  speed: number = 0.5,
  direction: "up" | "down" = "down"
) => {
  const yValue = direction === "down" ? speed * 100 : -speed * 100;

  return gsap.to(element, {
    y: `${yValue}%`,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

// Utility function for staggered animations
export const createStaggeredAnimation = (
  elements: HTMLElement[],
  animation: gsap.TweenVars,
  stagger: number = 0.1,
  scrollTrigger: gsap.ScrollTriggerVars = {}
) => {
  return gsap.fromTo(elements, animation, {
    ...animation,
    stagger,
    scrollTrigger: {
      trigger: elements[0],
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      ...scrollTrigger,
    },
  });
};
