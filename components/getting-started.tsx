import { motion, useInView } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { gettingStartedSteps } from "@/lib/data";

const GettingStarted = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden font-light text-white antialiased pb-20"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Getting started section */}
        <div className="max-w-6xl mx-auto">
          {/* Getting started heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light">
              Getting started
            </h2>
          </motion.div>

          {/* Steps and Progress Bar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Steps in horizontal row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {gettingStartedSteps.map((step, index) => (
                <AnimatedStepCard
                  key={index}
                  step={step}
                  index={index}
                  currentStep={currentStep}
                  isComplete={isComplete}
                />
              ))}
            </div>

            {/* Progress Bar - Positioned below the cards */}
            <div className="relative">
              <AnimatedProgressIndicator
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                isComplete={isComplete}
                setIsComplete={setIsComplete}
                isInView={isInView}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Animated Step Card Component
const AnimatedStepCard = ({
  step,
  index,
  currentStep,
  isComplete,
}: {
  step: any;
  index: number;
  currentStep: number;
  isComplete: boolean;
}) => {
  // Calculate if this card should be active based on progress
  const totalSteps = 7;
  const stepsPerCard = totalSteps / 3; // ~2.33 steps per card
  const cardStartStep = index * stepsPerCard;
  const cardEndStep = (index + 1) * stepsPerCard;

  const isActive = currentStep >= cardStartStep;
  const isCurrent = currentStep >= cardStartStep && currentStep < cardEndStep;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
      className={`group relative flex flex-col items-center gap-4 p-4 border rounded-2xl backdrop-blur-xl transition-all duration-500 ${
        isActive
          ? "border-white/30 bg-gradient-to-br from-background/40 to-primary/20 shadow-[0_0_20px_rgba(155,135,245,0.2)]"
          : "border-white/10 bg-gradient-to-br from-background/20 to-primary/10"
      }`}
      animate={{
        opacity: isActive ? 1 : 0.6,
        scale: isCurrent ? 1.02 : 1,
        boxShadow: isCurrent
          ? "0 0 30px rgba(155,135,245,0.3)"
          : isActive
          ? "0 0 20px rgba(155,135,245,0.2)"
          : "0 0 0px rgba(155,135,245,0)",
      }}
    >
      {/* Corner decorations */}
      <div
        className={`absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 transition-all duration-500 ${
          isActive
            ? "border-primary/80 drop-shadow-[0_0_8px_hsl(var(--primary)_/_0.8)]"
            : "border-primary/50 drop-shadow-[0_0_6px_hsl(var(--primary)_/_0.5)]"
        }`}
      />
      <div
        className={`absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 transition-all duration-500 ${
          isActive
            ? "border-primary/80 drop-shadow-[0_0_8px_hsl(var(--primary)_/_0.8)]"
            : "border-primary/50 drop-shadow-[0_0_6px_hsl(var(--primary)_/_0.5)]"
        }`}
      />
      <div
        className={`absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 transition-all duration-500 ${
          isActive
            ? "border-primary/80 drop-shadow-[0_0_8px_hsl(var(--primary)_/_0.8)]"
            : "border-primary/50 drop-shadow-[0_0_6px_hsl(var(--primary)_/_0.5)]"
        }`}
      />
      <div
        className={`absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 transition-all duration-500 ${
          isActive
            ? "border-primary/80 drop-shadow-[0_0_8px_hsl(var(--primary)_/_0.8)]"
            : "border-primary/50 drop-shadow-[0_0_6px_hsl(var(--primary)_/_0.5)]"
        }`}
      />

      <div className="flex items-center gap-3 mb-2">
        <motion.div
          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 ${
            isActive
              ? "bg-gradient-to-br from-primary/90 to-primary shadow-[0_0_15px_rgba(155,135,245,0.6)]"
              : "bg-gradient-to-br from-primary/80 to-primary"
          }`}
          animate={{
            scale: isCurrent ? [1, 1.1, 1] : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <step.icon
            className={`w-5 h-5 transition-all duration-500 ${
              isActive ? "text-white" : "text-primary-foreground"
            }`}
          />
        </motion.div>
        <h3
          className={`text-lg font-semibold transition-all duration-500 ${
            isActive ? "text-white" : "text-white/80"
          }`}
        >
          {step.title}
        </h3>
      </div>

      <div className="text-center">
        <p
          className={`text-sm transition-all duration-500 ${
            isActive ? "text-white/80" : "text-white/60"
          }`}
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

// Animated Progress Indicator Component
const AnimatedProgressIndicator = ({
  currentStep,
  setCurrentStep,
  isComplete,
  setIsComplete,
  isInView,
}: {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  isComplete: boolean;
  setIsComplete: (complete: boolean) => void;
  isInView: boolean;
}) => {
  const totalSteps = 7;

  useEffect(() => {
    if (!isInView) return;

    let step = 0;
    const timer = setInterval(() => {
      if (step < totalSteps - 1) {
        step += 1;
        setCurrentStep(step);
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, 800); // Each step takes 800ms

    return () => clearInterval(timer);
  }, [setCurrentStep, setIsComplete, totalSteps, isInView]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mt-8"
    >
      {/* Horizontal Progress Line with Moving Dot - Single Line Layout */}
      <div className="flex items-center gap-4">
        {/* Progress Line - Full width spanning the cards */}
        <div className="relative flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
          {/* Progress Fill */}
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] rounded-full"
            initial={{ width: "0%" }}
            animate={{
              width: isComplete
                ? "100%"
                : `${((currentStep + 1) / totalSteps) * 100}%`,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Moving Dot */}
          <motion.div
            className="absolute top-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] -translate-y-1/2"
            initial={{ left: "0%" }}
            animate={{
              left: isComplete
                ? "100%"
                : `${((currentStep + 1) / totalSteps) * 100}%`,
              boxShadow: isComplete
                ? "0 0 15px rgba(155,135,245,0.9)"
                : "0 0 8px rgba(255,255,255,0.8)",
            }}
            transition={{
              left: { duration: 0.8, ease: "easeOut" },
              boxShadow: { duration: 0.5 },
            }}
          />
        </div>

        {/* DONE! Text and Checkmark - Inline */}
        <div className="flex items-center gap-2">
          <motion.span
            className={`font-medium text-sm transition-all duration-500 ${
              isComplete
                ? "text-transparent bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] bg-clip-text"
                : "text-white/40"
            }`}
            animate={{
              textShadow: isComplete
                ? "0 0 15px rgba(155,135,245,0.8)"
                : "0 0 0px rgba(155,135,245,0)",
            }}
          >
            DONE!
          </motion.span>

          <motion.div
            className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500 ${
              isComplete
                ? "bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] shadow-[0_0_12px_rgba(155,135,245,0.8)]"
                : "bg-white/20"
            }`}
            animate={{
              scale: isComplete ? [1, 1.2, 1] : 1,
              rotate: isComplete ? [0, 360] : 0,
            }}
            transition={{
              scale: { duration: 0.6, times: [0, 0.5, 1] },
              rotate: { duration: 0.8 },
            }}
          >
            <motion.svg
              className={`w-3 h-3 transition-colors duration-500 ${
                isComplete ? "text-white" : "text-white/40"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              initial={{ opacity: 0 }}
              animate={{ opacity: isComplete ? 1 : 0.4 }}
              transition={{ duration: 0.5 }}
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default GettingStarted;
