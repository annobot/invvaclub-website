"use client";

import { ExternalLink, Play } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "./Motion";

const reels = [
  {
    title: "Badal's show — Rameshwaram",
    href: "https://www.instagram.com/reel/DZut1LMI-wz/",
    embed: "https://www.instagram.com/reel/DZut1LMI-wz/embed",
    caption: "Poetry & storytelling on the Invva stage",
  },
  {
    title: "Invva stage moments",
    href: "https://www.instagram.com/reel/DZJzmCAq0JX/",
    embed: "https://www.instagram.com/reel/DZJzmCAq0JX/embed",
    caption: "The room, the mic, the night",
  },
  {
    title: "More stage energy",
    href: "https://www.instagram.com/reel/DWoi9YKx7jz/",
    embed: "https://www.instagram.com/reel/DWoi9YKx7jz/embed",
    caption: "Weekend vibes from Ahmedabad",
  },
];

export function StageMoments() {
  return (
    <section id="stage" className="section-pad bg-bg-elevated">
      <div className="container-narrow">
        <FadeIn className="max-w-2xl mb-12">
          <p className="text-teal-bright text-xs uppercase tracking-[0.25em] mb-3">
            On stage
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Moments from the mic
          </h2>
          <p className="text-muted text-lg">
            Catch reels from Badal&apos;s show and live Invva nights — then come
            feel it in the room.
          </p>
        </FadeIn>

        <Stagger className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {reels.map((reel) => (
            <StaggerItem
              key={reel.href}
              className="min-w-[220px] max-w-[260px] snap-center sm:min-w-[240px] md:min-w-0 md:max-w-none"
            >
              <motion.div
                className="group"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
              >
                <div className="neo p-1.5">
                  <div className="relative aspect-[9/16] overflow-hidden rounded-[1.1rem] bg-surface">
                    <iframe
                      src={reel.embed}
                      title={reel.title}
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="font-display font-semibold">{reel.title}</p>
                    <p className="text-sm text-muted mt-1">{reel.caption}</p>
                  </div>
                  <motion.a
                    href={reel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-teal-bright"
                    aria-label={`Open ${reel.title} on Instagram`}
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.15} className="mt-10">
          <motion.a
            href="https://www.instagram.com/invvaclub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-bright"
            whileHover={{ x: 6, color: "#f2f7f8" }}
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              <Play size={18} />
            </motion.span>
            Follow @invvaclub for more
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
}
