"use client";

import HeroSection from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import APRComparison from "@/components/apr-comparison";
import { UserSegments } from "@/components/user-segments";
import { Footer } from "@/components/footer";
import FAQ from "@/components/faq";
import { ContentWrapper } from "@/components/animations/page-transition";
import Navigation from "@/components/navigation";

export default function StratifiLanding() {
  return (
    <div className="min-h-screen bg-white text-black relative overflow-x-hidden scroll-smooth scroll-optimized no-scroll-jank">
      <ContentWrapper>
        <HeroSection />
      </ContentWrapper>

      <ContentWrapper delay={0.2}>
        <APRComparison />
      </ContentWrapper>

      <ContentWrapper delay={0.1}>
        <HowItWorks />
      </ContentWrapper>

      <ContentWrapper delay={0.2}>
        <UserSegments />
      </ContentWrapper>

      <ContentWrapper delay={0.3}>
        <FAQ />
      </ContentWrapper>

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
