"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CountUp, FadeIn, TiltCard } from "./Motion";

export function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="section-pad gradient-mesh">
      <div className="container-narrow">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <FadeIn>
            <p className="text-teal-bright text-xs uppercase tracking-[0.25em] mb-3">
              About us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              Built for the love of art
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-5">
              Invva Club is Ahmedabad&apos;s home for open mics — poetry,
              standup, singing, music, storytelling and everything in between.
              We gather in studios on weekends, surround performers with a warm
              audience, and make space for people to meet.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              One year in, we&apos;ve just celebrated our{" "}
              <span className="text-cream font-semibold">25th event</span>. Same
              energy, bigger family — still doing it for the love of art.
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="neo-inset px-2 py-3 sm:px-3 sm:py-4 text-center">
                <p className="font-display text-xl sm:text-3xl font-bold text-teal-bright">
                  <CountUp to={25} suffix="+" />
                </p>
                <p className="text-[10px] sm:text-xs text-muted mt-1 uppercase tracking-wider">
                  Events
                </p>
              </div>
              <div className="neo-inset px-2 py-3 sm:px-3 sm:py-4 text-center">
                <p className="font-display text-xl sm:text-3xl font-bold text-teal-bright">
                  <CountUp to={1} suffix=" yr" />
                </p>
                <p className="text-[10px] sm:text-xs text-muted mt-1 uppercase tracking-wider">
                  Growing
                </p>
              </div>
              <div className="neo-inset px-2 py-3 sm:px-3 sm:py-4 text-center">
                <p className="font-display text-xl sm:text-3xl font-bold text-teal-bright">
                  AMD
                </p>
                <p className="text-[10px] sm:text-xs text-muted mt-1 uppercase tracking-wider">
                  Ahmedabad
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="relative">
            <TiltCard className="neo relative p-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1rem]">
                <Image
                  src="/images/community-logo-sign.png"
                  alt="Invva Club community in the studio"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent" />
              </div>
              <motion.div
                className="absolute -bottom-4 -left-3 sm:-left-6 rounded-2xl bg-teal-bright text-bg px-4 py-3 font-display font-bold shadow-[6px_6px_14px_rgba(7,17,21,0.45),-4px_-4px_10px_rgba(80,220,235,0.25)]"
                initial={reduce ? false : { scale: 0, rotate: -8 }}
                whileInView={{ scale: 1, rotate: -3 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.3 }}
              >
                25th event ✓
              </motion.div>
            </TiltCard>
            <p className="mt-8 text-sm text-muted italic">
              We brew great evenings — usually in a studio, always with heart.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
