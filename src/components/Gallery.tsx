"use client";

import Image from "next/image";
import { FadeIn } from "./Motion";
import { Clothesline, SunnySky } from "./Clothesline";

const STRIP = [
  { src: "/images/community-logo-sign.png", alt: "Invva Club family" },
  { src: "/images/community-rangmanch.png", alt: "Rangmanch night" },
  { src: "/images/community-studio.png", alt: "Studio group" },
  { src: "/images/community-art-wall.png", alt: "Art wall" },
  { src: "/images/community-invva-sign.png", alt: "Invva sign" },
  { src: "/images/poster-open-mic.png", alt: "Open mic poster" },
  { src: "/images/poster-open-mic-2.png", alt: "Open mic poster 2" },
];

export function Gallery() {
  return (
    <section className="relative overflow-hidden">
      <SunnySky />
      <div className="relative z-[1] px-4 py-10 sm:px-8 sm:py-14 md:py-16">
        <FadeIn className="container-narrow mb-6 max-w-2xl sm:mb-8">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0b4a62] sm:mb-3 sm:text-xs sm:tracking-[0.25em]">
            Community
          </p>
          <h2 className="mb-2 font-display text-2xl font-bold leading-tight text-[#0b1a1f] sm:mb-3 sm:text-4xl md:text-5xl">
            Hung on the line. Still buzzing.
          </h2>
          <p className="text-sm text-[#1a3a44]/80 sm:text-lg">
            Real nights, real faces — swipe through on your phone, or watch them
            breeze on the line.
          </p>
        </FadeIn>

        <div className="flex gap-3 overflow-x-auto px-1 pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:hidden">
          {STRIP.map((img) => (
            <div
              key={img.src}
              className="neo-light w-[42vw] max-w-[180px] shrink-0 snap-center rounded-2xl p-1.5 pb-5"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="180px"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <Clothesline />
        </div>
      </div>
    </section>
  );
}
