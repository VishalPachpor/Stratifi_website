"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <section className="relative w-full overflow-hidden bg-white font-light text-black antialiased py-20 scroll-smooth scroll-optimized no-scroll-jank">
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-light mb-12 text-center text-black"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <Accordion
              type="single"
              collapsible
              className="w-full divide-y  rounded-2xl"
            >
              <AccordionItem value="q1" className="px-4">
                <AccordionTrigger className="text-left text-xl md:text-2xl font-medium text-black py-6">
                  What is Stratifi AI Agent, and how is it different from a
                  traditional savings account?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-black/80 text-sm md:text-base leading-relaxed">
                    Stratifi AI Agent is your smart assistant for DeFi yield
                    optimization. Instead of parking funds in a single account,
                    it actively scans multiple money market protocols like
                    Morpho, Compound, Moonwell, and Seamless to find the best
                    yield based on your risk preferences. You can choose to let
                    the agent run fully autonomously or just get research
                    suggestions before making decisions. Your funds remain in
                    your non-custodial smart account, with no lock-ups and the
                    ability to withdraw anytime.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2" className="px-4">
                <AccordionTrigger className="text-left text-xl md:text-2xl font-medium text-black py-6">
                  Can I use Stratifi AI Agent if I’m new to crypto or don’t have
                  a wallet?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-black/80 text-sm md:text-base leading-relaxed">
                    Yes. Stratifi is designed for both beginners and advanced
                    DeFi users. If you don’t already have a wallet, we guide you
                    through secure wallet creation so you can get started
                    quickly.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3" className="px-4">
                <AccordionTrigger className="text-left text-xl md:text-2xl font-medium text-black py-6">
                  How is the yield (APY) generated?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-black/80 text-sm md:text-base leading-relaxed">
                    The AI Agent allocates your assets into vetted DeFi lending
                    protocols where borrowers must overcollateralize—reducing
                    default risk. It constantly monitors rates, liquidity, and
                    market conditions, and rotates funds to higher-yield pools
                    when beneficial. All strategies are executed through secure,
                    pre-approved smart contracts.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q4" className="px-4">
                <AccordionTrigger className="text-left text-xl md:text-2xl font-medium text-black py-6">
                  Why can these returns be higher than what banks offer?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-black/80 text-sm md:text-base leading-relaxed">
                    In traditional banking, middlemen take a large cut between
                    what borrowers pay and what depositors earn. DeFi removes
                    those intermediaries, meaning more yield flows directly to
                    you. On top of that, some protocols offer short-term rewards
                    to attract liquidity, which Stratifi can capture for you
                    while keeping positions balanced and secure.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q5" className="px-4">
                <AccordionTrigger className="text-left text-xl md:text-2xl font-medium text-black py-6">
                  What does Stratifi do to mitigate risks?
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2 text-black/80 text-sm md:text-base leading-relaxed">
                    <li>Uses only well-known, audited protocols</li>
                    <li>
                      Operates fully non-custodially — you keep full control of
                      your assets
                    </li>
                    <li>
                      Employs a validator service to approve all agent actions
                    </li>
                    <li>
                      Monitors multiple price feeds and key metrics (liquidity
                      shifts, whale movements, rate changes)
                    </li>
                    <li>
                      Auto-rotates out of risky pools if warning signs appear
                    </li>
                    <li>
                      Supports primarily stablecoins and major assets to reduce
                      volatility risk
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q6" className="px-4">
                <AccordionTrigger className="text-left text-xl md:text-2xl font-medium text-black py-6">
                  Is the yield fixed or variable?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-black/80 text-sm md:text-base leading-relaxed">
                    Yields are variable and depend on market conditions and
                    protocol performance.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q7" className="px-4">
                <AccordionTrigger className="text-left text-xl md:text-2xl font-medium text-black py-6">
                  Are there fees for using Stratifi AI Agent?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-black/80 text-sm md:text-base leading-relaxed">
                    Stratifi charges a <strong>10% performance fee</strong>
                    —only on yield earned, never on your principal. No deposit
                    or withdrawal fees.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q8" className="px-4">
                <AccordionTrigger className="text-left text-xl md:text-2xl font-medium text-black py-6">
                  Can I control how much the AI automates?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2 text-black/80 text-sm md:text-base leading-relaxed">
                    Yes. You can choose:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black/80 text-sm md:text-base leading-relaxed">
                    <li>
                      <strong>Full Autonomy:</strong> AI executes strategies for
                      you after one approval.
                    </li>
                    <li>
                      <strong>Research Mode:</strong> AI provides
                      recommendations, but you confirm each move.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
