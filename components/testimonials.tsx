"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Stratifi's anticipatory AI represents exactly the kind of innovation The Graph was designed to support! Stratifi's AI swarms are not only fast and cutting-edge, but this is a team committed to driving real innovation.",
      name: "Nick Hansen",
      title: "Team Lead at The Graph Foundation",
      avatar: "/testimonials/nickhassen.png",
    },
    {
      quote:
        "Excited on what Stratifi is working on addressing... it could be something that people could use on a daily basis instead of spending hours to do your own research.",
      name: "0xJeff",
      title: "Crypto Advisor & Analyst",
      avatar: "/testimonials/jeff.png",
    },
    {
      quote:
        "Stratifi is building the infrastructure for a new paradigm of collaborative AI. By solving the coordination problem for specialized agents, they're unlocking capabilities that would be impossible for individual AI systems to achieve.",
      name: "The Crypto Professor",
      title: "Crypto Educator & Content Creator",
      avatar: "/testimonials/cryptoprofessor.png",
    },
    {
      quote:
        "The deeper promise of agent systems like AlphaSwarm isn't just automation, it's coherence. A way for fragmented actors in crypto: users, teams, code to interact without manual overhead or brittle integrations.",
      name: "Stacy Muur",
      title: "Crypto Research and Green Dots Founder",
      avatar: "/testimonials/Stacy Muur.png",
    },
    {
      quote:
        "DeFi is still clunky. Most users can't navigate the complexity, and even experienced traders leave money on the table. Stratifi's AI swarms could automate the heavy lifting, making DeFi actually usable for regular people while maximizing returns.",
      name: "Tim Haldorsson",
      title: "Lunar Strategy Founder",
      avatar: "/testimonials/tim.png",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white font-light text-black antialiased py-12 sm:py-16 md:py-20 lg:py-24 scroll-smooth scroll-optimized no-scroll-jank">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-b from-[#c479fe]/10 to-transparent blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-12 sm:mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tighter text-center mb-6 sm:mb-8 text-black"
          >
            What Builders and Innovators Are Saying
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-black/70 font-light leading-relaxed tracking-normal max-w-4xl mx-auto px-4"
          >
            From developers to protocol teams, Stratifi is reshaping how
            autonomous agents interact onchain. Hear from those already building
            the future with us.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden mask-fade-x"
        >
          <div className="flex animate-scroll space-x-4 sm:space-x-6 md:space-x-8">
            {/* First set of testimonials */}
            <div className="flex space-x-4 sm:space-x-6 md:space-x-8 flex-shrink-0">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`first-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative rounded-xl sm:rounded-2xl border border-black/10 bg-white transition-all duration-300 hover:bg-[#f2f2f2] shadow-sm hover:shadow-lg w-72 sm:w-80 md:w-96 lg:w-[400px] flex-shrink-0 hover:scale-[1.02]"
                >
                  <div className="p-4 sm:p-5 md:p-6 lg:p-7 h-full flex flex-col min-h-[280px] sm:min-h-[300px] md:min-h-[320px]">
                    <div className="flex-1 mb-4 sm:mb-5 md:mb-6">
                      <blockquote className="text-black/80 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg italic font-light">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                    </div>

                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white shadow-sm overflow-hidden ring-1 ring-black/5">
                          <Image
                            src={testimonial.avatar}
                            alt={`${testimonial.name} avatar`}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover object-center scale-110"
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-black text-xs sm:text-sm md:text-base leading-tight truncate">
                          {testimonial.name}
                        </div>
                        <div className="text-black/60 text-xs sm:text-xs md:text-sm leading-tight mt-0.5 truncate">
                          {testimonial.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex space-x-4 sm:space-x-6 md:space-x-8 flex-shrink-0">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`second-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative rounded-xl sm:rounded-2xl border border-black/10 bg-white transition-all duration-300 hover:bg-[#f2f2f2] shadow-sm hover:shadow-lg w-72 sm:w-80 md:w-96 lg:w-[400px] flex-shrink-0 hover:scale-[1.02]"
                >
                  <div className="p-4 sm:p-5 md:p-6 lg:p-7 h-full flex flex-col min-h-[280px] sm:min-h-[300px] md:min-h-[320px]">
                    <div className="flex-1 mb-4 sm:mb-5 md:mb-6">
                      <blockquote className="text-black/80 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg italic font-light">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                    </div>

                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white shadow-sm overflow-hidden ring-1 ring-black/5">
                          <Image
                            src={testimonial.avatar}
                            alt={`${testimonial.name} avatar`}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover object-center scale-110"
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-black text-xs sm:text-sm md:text-base leading-tight truncate">
                          {testimonial.name}
                        </div>
                        <div className="text-black/60 text-xs sm:text-xs md:text-sm leading-tight mt-0.5 truncate">
                          {testimonial.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
