"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSmoothScroll } from "../hooks/use-smooth-scroll";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollAnimations() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const fadeInRef = useRef<HTMLDivElement>(null);
  const staggerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  // Initialize scroll animations
  useSmoothScroll([
    {
      trigger: ".parallax-section",
      start: "top bottom",
      end: "bottom top",
      onUpdate: (progress) => {
        if (parallaxRef.current) {
          gsap.set(parallaxRef.current, {
            y: progress * -100,
            rotation: progress * 360,
          });
        }
      },
    },
    {
      trigger: ".fade-in-section",
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.fromTo(
          fadeInRef.current?.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
          }
        );
      },
    },
    {
      trigger: ".stagger-section",
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        const elements = staggerRef.current?.querySelectorAll(".stagger-item");
        if (elements) {
          gsap.fromTo(
            elements,
            { opacity: 0, scale: 0.8, y: 30 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "back.out(1.7)",
            }
          );
        }
      },
    },
    {
      trigger: ".pin-section",
      start: "top center",
      end: "bottom center",
      pin: true,
      pinSpacing: false,
      onEnter: () => {
        gsap.to(pinRef.current, {
          scale: 1.1,
          duration: 1,
          ease: "power2.out",
        });
      },
      onLeave: () => {
        gsap.to(pinRef.current, {
          scale: 1,
          duration: 1,
          ease: "power2.out",
        });
      },
    },
  ]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Additional GSAP animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeline-section",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    tl.to(".timeline-item:nth-child(1)", { x: 100, opacity: 1 })
      .to(".timeline-item:nth-child(2)", { x: 100, opacity: 1 })
      .to(".timeline-item:nth-child(3)", { x: 100, opacity: 1 });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="space-y-32">
      {/* Parallax Section */}
      <section className="parallax-section relative h-screen flex items-center justify-center overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl"
        />
        <div className="relative z-10 text-center">
          <h2 className="text-6xl font-bold text-white mb-4">
            Parallax Effect
          </h2>
          <p className="text-xl text-white/80">
            Scroll to see the parallax animation
          </p>
        </div>
      </section>

      {/* Fade In Section */}
      <section className="fade-in-section py-20">
        <div ref={fadeInRef} className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Fade In Animations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Feature 1
              </h3>
              <p className="text-white/80">
                This element fades in with a staggered delay when scrolled into
                view.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Feature 2
              </h3>
              <p className="text-white/80">
                Each element animates in sequence for a smooth, professional
                effect.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Feature 3
              </h3>
              <p className="text-white/80">
                The animations are triggered by scroll position and are
                optimized for performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stagger Section */}
      <section className="stagger-section py-20">
        <div ref={staggerRef} className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Staggered Animations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="stagger-item bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg p-4 text-center"
              >
                <div className="text-2xl font-bold text-white mb-2">{item}</div>
                <div className="text-sm text-white/60">Item {item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pin Section */}
      <section className="pin-section relative h-screen flex items-center justify-center">
        <div
          ref={pinRef}
          className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-3xl p-12 text-center"
        >
          <h2 className="text-5xl font-bold text-white mb-4">Pinned Content</h2>
          <p className="text-xl text-white/80 max-w-2xl">
            This section stays pinned while scrolling, creating an immersive
            experience. The content scales up when in view and returns to normal
            when scrolled past.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Timeline Animation
          </h2>
          <div className="space-y-8">
            <div className="timeline-item opacity-0 bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Step 1</h3>
              <p className="text-white/80">
                Initialize the project with ScrollMagic and GSAP
              </p>
            </div>
            <div className="timeline-item opacity-0 bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Step 2</h3>
              <p className="text-white/80">
                Create smooth scroll animations and parallax effects
              </p>
            </div>
            <div className="timeline-item opacity-0 bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Step 3</h3>
              <p className="text-white/80">
                Optimize performance and add interactive elements
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
