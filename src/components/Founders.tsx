"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem, TiltCard } from "./Motion";

const founders = [
  {
    name: "Datt Vaidya",
    role: "Co-founder · Stand-up comedian",
    show: "Solo show: Udta Punjab",
    blurb:
      "Brings the punchlines and the pulse. Datt keeps rooms laughing and corporate nights electric.",
    accent: "Comedy",
  },
  {
    name: "Badal Mishra",
    role: "Co-founder · Poet & storyteller",
    show: "Solo show: Rameshwaram",
    blurb:
      "Words that land soft and stay long. Badal shapes evenings of poetry and story that feel like home.",
    accent: "Poetry",
  },
];

export function Founders() {
  return (
    <section id="founders" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <Image
          src="/images/community-invva-sign.png"
          alt=""
          fill
          className="object-cover blur-sm scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-bg/90" />
      </div>

      <div className="container-narrow relative z-[1]">
        <FadeIn className="max-w-2xl mb-12">
          <p className="text-teal-bright text-xs uppercase tracking-[0.25em] mb-3">
            Founders
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Two voices. One stage culture.
          </h2>
          <p className="text-muted text-lg">
            Invva Club was started by Datt Vaidya and Badal Mishra — comedy and
            poetry sharing the same mic stand.
          </p>
        </FadeIn>

        <Stagger className="grid md:grid-cols-2 gap-8">
          {founders.map((f) => (
            <StaggerItem key={f.name}>
              <TiltCard className="h-full">
                <div className="neo relative h-full p-8 overflow-hidden">
                  <motion.span
                    className="absolute -right-4 -top-2 font-display text-7xl font-bold text-teal-bright/10 select-none"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {f.accent}
                  </motion.span>
                  <h3 className="font-display text-2xl font-bold mb-1 relative">
                    {f.name}
                  </h3>
                  <p className="text-teal-bright text-sm mb-4 relative">{f.role}</p>
                  <p className="text-muted leading-relaxed mb-5 relative">
                    {f.blurb}
                  </p>
                  <motion.p
                    className="text-sm text-accent font-medium tracking-wide relative inline-block"
                    whileHover={{ x: 6 }}
                  >
                    {f.show} →
                  </motion.p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
