"use client";

import HeroSection from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import APRComparison from "@/components/apr-comparison";
import { Footer } from "@/components/footer";
import FAQ from "@/components/faq";
import { ContentWrapper } from "@/components/animations/page-transition";
import Navigation from "@/components/navigation";

export default function StratiFiLanding() {
  return (
    <div className="min-h-screen bg-white text-black relative overflow-x-hidden scroll-smooth scroll-optimized no-scroll-jank">
      <ContentWrapper>
        <HeroSection />
      </ContentWrapper>

      <ContentWrapper delay={0.1}>
        <HowItWorks />
      </ContentWrapper>

      <ContentWrapper delay={0.2}>
        <APRComparison />
      </ContentWrapper>

      <ContentWrapper delay={0.3}>
        <FAQ />
      </ContentWrapper>

      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <ContentWrapper delay={0.4}>
          <Footer />
        </ContentWrapper>
      </main>
    </div>
  );
}
