"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Magnetic, SplitText } from "./Motion";
import { Logo } from "./Logo";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-bg px-4 pb-10 pt-24 sm:px-8 sm:pb-14 sm:pt-28 md:pb-16">
      <div className="container-narrow">
        <Magnetic strength={0.1} className="mb-3 w-fit sm:mb-4">
          <motion.div
            initial={reduce ? false : { scale: 0.85, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <Logo className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20" priority />
          </motion.div>
        </Magnetic>

        <h1 className="font-display mb-2 text-[2.15rem] font-bold leading-[1.05] tracking-tight sm:mb-3 sm:text-5xl md:text-7xl lg:text-8xl [perspective:600px]">
          <SplitText text="INVVA CLUB" />
        </h1>

        <motion.p
          className="mb-3 text-[11px] uppercase tracking-[0.2em] text-teal-bright sm:mb-4 sm:text-sm sm:tracking-[0.28em]"
          initial={reduce ? false : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          Own the mic, own the moment
        </motion.p>

        <motion.p
          className="mb-3 max-w-2xl font-display text-lg font-semibold leading-snug text-cream/95 sm:mb-4 sm:text-3xl md:text-4xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          The pulse of Ahmedabad&apos;s artist youth
        </motion.p>

        <motion.p
          className="mb-6 max-w-xl text-sm leading-relaxed text-muted sm:mb-8 sm:text-lg"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
        >
          Weekend open mics for poetry, comedy, music & stories — a supportive
          stage where you meet people and own the moment.
        </motion.p>

        <motion.div
          className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.45 }}
        >
          <Magnetic className="w-full sm:w-auto">
            <motion.div className="w-full" whileTap={{ scale: 0.96 }}>
              <Link href="/perform" className="btn-primary w-full sm:w-auto">
                Take the stage
              </Link>
            </motion.div>
          </Magnetic>
          <Magnetic className="w-full sm:w-auto">
            <motion.div className="w-full" whileTap={{ scale: 0.96 }}>
              <Link href="/audience" className="btn-ghost w-full sm:w-auto">
                Join the audience
              </Link>
            </motion.div>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
