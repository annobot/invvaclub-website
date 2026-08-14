"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeIn, Magnetic, Stagger, StaggerItem } from "./Motion";

const paths = [
  {
    href: "/perform",
    title: "Performers",
    text: "Poetry, comedy, music, stories — claim your 6 minutes (or a full solo).",
    cta: "Apply to perform",
  },
  {
    href: "/audience",
    title: "Audience",
    text: "Best weekend plan in Ahmedabad. Supportive crowd. New people. Great nights.",
    cta: "Join as audience",
  },
  {
    href: "/sponsors",
    title: "Sponsors & Corporate",
    text: "Cafe footfall, brand nights, team games & shows. Let's build something loud.",
    cta: "Partner with us",
  },
];

export function JoinCTA() {
  return (
    <section className="section-pad bg-bg-elevated overflow-hidden">
      <div className="container-narrow">
        <FadeIn className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4"
            animate={{ scale: [1, 1.015, 1] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            How do you want in?
          </motion.h2>
          <p className="text-muted text-lg">
            Three doors. Same stage energy. Pick yours.
          </p>
        </FadeIn>

        <Stagger className="grid md:grid-cols-3 gap-6">
          {paths.map((p, i) => (
            <StaggerItem key={p.href}>
              <motion.div
                className="neo flex flex-col h-full p-7"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
              >
                <span className="text-teal-bright/50 font-display text-sm mb-2">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl font-bold mb-3">
                  {p.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed flex-1 mb-6">
                  {p.text}
                </p>
                <Magnetic className="w-full">
                  <Link
                    href={p.href}
                    className="btn-primary w-full text-center group"
                  >
                    {p.cta}
                    <motion.span
                      className="inline-flex"
                      whileHover={{ x: 4 }}
                    >
                      <ArrowRight size={16} />
                    </motion.span>
                  </Link>
                </Magnetic>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
