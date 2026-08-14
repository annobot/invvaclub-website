"use client";

import { motion, useReducedMotion } from "framer-motion";

const items = [
  "Poetry",
  "Standup",
  "Music",
  "Stories",
  "Singing",
  "Kids nights",
  "Cafe takeovers",
  "Corporate shows",
  "Solo shows",
  "Open mic",
];

export function Marquee({ reverse = false }: { reverse?: boolean }) {
  const reduce = useReducedMotion();
  const row = [...items, ...items];

  return (
    <div className="marquee-mask neo-inset mx-4 my-3 overflow-hidden py-4 sm:mx-6">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap px-5"
        animate={
          reduce
            ? undefined
            : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }
        }
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-sm sm:text-base uppercase tracking-[0.28em] text-cream/80"
          >
            <span className="text-teal-bright mr-10">◆</span>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
