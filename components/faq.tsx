"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <section className="relative w-full overflow-hidden bg-white font-light text-black antialiased py-12 scroll-smooth scroll-optimized no-scroll-jank">
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl mb-12 text-center text-black leading-snug tracking-tight"
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
              <AccordionItem value="q2" className="px-6">
                <AccordionTrigger className="text-left font-light text-black py-6 text-lg md:text-xl">
                  Can I use Stratifi AI Agent if I&apos;m new to crypto or
                  don&apos;t have a wallet?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-black/80 text-base mb-4">
                    Yes. Stratifi is designed for both beginners and advanced
                    DeFi users. If you don&apos;t already have a wallet, we
                    guide you through secure wallet creation so you can get
                    started quickly.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3" className="px-6">
                <AccordionTrigger className="text-left font-light text-black py-6 text-lg md:text-xl">
                  How is the yield (APY) generated?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-black/80 text-base mb-4">
                    The AI Agent allocates your assets into vetted DeFi lending
                    protocols where borrowers must overcollateralize—reducing
                    default risk. It constantly monitors rates, liquidity, and
                    market conditions, and rotates funds to higher-yield pools
                    when beneficial. All strategies are executed through secure,
                    pre-approved smart contracts.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q5" className="px-6">
                <AccordionTrigger className="text-left font-light text-black py-6 text-lg md:text-xl">
                  What does Stratifi do to mitigate risks?
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-3 text-black/80 text-base mb-4">
                    <li>Uses only well-known, audited protocols</li>
                    <li>
                      Operates fully non-custodially — you keep full control of
                      your assets
                    </li>
                    <li>
                      Monitors multiple price feeds and key metrics (liquidity
                      shifts, whale movements, rate changes)
                    </li>
                    <li>
                      Auto-rotates out of risky pools if warning signs appear
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q6" className="px-6">
                <AccordionTrigger className="text-left font-light text-black py-6 text-lg md:text-xl">
                  Is the yield fixed or variable?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-black/80 text-base mb-4">
                    Yields are variable and depend on market conditions and
                    protocol performance.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q7" className="px-6">
                <AccordionTrigger className="text-left font-light text-black py-6 text-lg md:text-xl">
                  Are there fees for using Stratifi AI Agent?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-black/80 text-base mb-4">
                    Stratifi charges a <strong>15% performance fee</strong>
                    —only on yield earned, never on your principal. No deposit
                    or withdrawal fees.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* <AccordionItem value="q8" className="px-6">
                <AccordionTrigger className="text-left font-medium text-black py-6 text-lg md:text-xl">
                  Can I control how much the AI automates?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4 text-black/80 text-base">
                    Yes. You can choose:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-black/80 text-base mb-4">
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
              </AccordionItem> */}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
