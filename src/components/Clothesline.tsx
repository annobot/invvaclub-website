"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type Print = {
  src: string;
  alt: string;
  w: number;
  h: number;
  rot: number;
};

const LINE_ONE: Print[] = [
  {
    src: "/images/community-logo-sign.png",
    alt: "Invva Club family with the logo sign",
    w: 188,
    h: 141,
    rot: -7,
  },
  {
    src: "/images/poster-open-mic.png",
    alt: "Open mic poster",
    w: 118,
    h: 167,
    rot: 5,
  },
  {
    src: "/images/community-rangmanch.png",
    alt: "Community at Rangmanch",
    w: 200,
    h: 117,
    rot: -3,
  },
  {
    src: "/images/community-art-wall.png",
    alt: "Community against the art wall",
    w: 210,
    h: 76,
    rot: -4,
  },
];

const LINE_TWO: Print[] = [
  {
    src: "/images/community-studio.png",
    alt: "Studio night group",
    w: 200,
    h: 90,
    rot: 4,
  },
  {
    src: "/images/poster-open-mic-2.png",
    alt: "Invva open mic poster",
    w: 122,
    h: 152,
    rot: -6,
  },
  {
    src: "/images/community-invva-sign.png",
    alt: "Holding the Invva Club sign",
    w: 198,
    h: 81,
    rot: 3,
  },
  {
    src: "/images/community-logo-sign.png",
    alt: "Another night with the club",
    w: 168,
    h: 126,
    rot: -5,
  },
  {
    src: "/images/community-rangmanch.png",
    alt: "Rangmanch smiles",
    w: 190,
    h: 112,
    rot: 5,
  },
];

function sagOffset(index: number, total: number) {
  if (total <= 1) return 8;
  const t = index / (total - 1);
  return Math.sin(t * Math.PI) * 32 + 4;
}

function Clothespin() {
  return (
    <div className="relative z-10 -mb-[3px] h-4 w-5" aria-hidden>
      <span className="absolute inset-x-0 top-0 h-2 rounded-[2px] bg-[#d4b06a] shadow-sm" />
      <span className="absolute inset-x-[4px] top-[5px] h-[11px] rounded-[2px] bg-[#8a5a2b]" />
      <span className="absolute left-1/2 top-[6px] h-[9px] w-[2px] -translate-x-1/2 bg-[#5c3b18]/70" />
    </div>
  );
}

function Rope() {
  return (
    <svg
      className="pointer-events-none absolute left-0 right-0 top-0 h-14 w-full"
      viewBox="0 0 1200 56"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M0 18 Q 300 8 600 38 T 1200 18"
        fill="none"
        stroke="#3d2918"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M0 21 Q 300 11 600 41 T 1200 21"
        fill="none"
        stroke="#c4a574"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

function HangingPhoto({
  print,
  index,
  total,
  reduce,
}: {
  print: Print;
  index: number;
  total: number;
  reduce: boolean | null;
}) {
  return (
    <motion.div
      className="relative shrink-0"
      style={{
        originX: 0.5,
        originY: 0,
        marginTop: sagOffset(index, total),
      }}
      initial={reduce ? false : { y: -24, opacity: 0 }}
      animate={
        reduce
          ? { rotate: print.rot, opacity: 1 }
          : {
              opacity: 1,
              y: 0,
              rotate: [print.rot - 3.2, print.rot + 4.2, print.rot - 2.4, print.rot + 3.4, print.rot - 3.2],
            }
      }
      transition={
        reduce
          ? { duration: 0.4 }
          : {
              opacity: { duration: 0.5, delay: 0.12 * index },
              y: { duration: 0.5, delay: 0.12 * index },
              rotate: {
                duration: 4.2 + (index % 5) * 0.55,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.35,
              },
            }
      }
      whileHover={reduce ? undefined : { scale: 1.08, rotate: print.rot, zIndex: 20 }}
    >
      <div className="flex flex-col items-center">
        <span className="h-5 w-[2px] bg-[#5c4033]" aria-hidden />
        <Clothespin />
        <div className="neo-light rounded-xl p-[5px] pb-5">
          <Image
            src={print.src}
            alt={print.alt}
            width={print.w}
            height={print.h}
            className="block object-cover"
            style={{ width: print.w, height: print.h }}
            sizes={`${print.w}px`}
            quality={90}
          />
        </div>
      </div>
    </motion.div>
  );
}

function Line({ prints }: { prints: Print[] }) {
  const reduce = useReducedMotion();

  return (
    <div className="relative overflow-x-auto overflow-y-visible pt-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="relative min-w-[44rem] px-4 sm:min-w-0 sm:w-full sm:px-8">
        <Rope />
        <div className="relative z-[1] flex items-start justify-around gap-3 pt-2 sm:gap-4">
          {prints.map((print, i) => (
            <HangingPhoto
              key={`${print.src}-${i}`}
              print={print}
              index={i}
              total={prints.length}
              reduce={reduce}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Cloud({
  className,
  duration,
}: {
  className: string;
  duration: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full bg-white/75 blur-[0.5px] ${className}`}
      animate={{ x: [0, 36, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    />
  );
}

export function SunnySky() {
  const reduce = useReducedMotion();

  return (
    <div className="sunny-sky absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="sun-disc absolute top-6 right-[7%] h-24 w-24 rounded-full sm:top-10 sm:h-32 sm:w-32"
        animate={reduce ? undefined : { scale: [1, 1.07, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <Cloud className="top-16 left-[8%] h-10 w-28 sm:h-14 sm:w-40" duration={14} />
      <Cloud className="top-28 left-[28%] h-8 w-24 opacity-80" duration={18} />
      <Cloud className="top-12 right-[28%] h-12 w-36 opacity-70" duration={16} />
      <Cloud className="top-36 right-[12%] h-9 w-28" duration={20} />
    </div>
  );
}

export function Clothesline({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`relative z-[1] flex flex-col gap-1 sm:gap-3 pt-2 ${
        compact ? "origin-top md:scale-[0.86] lg:scale-100" : ""
      }`}
    >
      <Line prints={LINE_ONE} />
      <Line prints={LINE_TWO} />
    </div>
  );
}
