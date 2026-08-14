"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Building2, Dices, Guitar, Mic2, PenLine, Theater } from "lucide-react";

const items = [
  {
    id: "mic",
    title: "Open mic",
    desc: "Poetry · comedy · song",
    icon: Mic2,
    color: "#2bb8c9",
    x: "62%",
    y: "14%",
    duration: 11,
    path: {
      x: [0, 42, -24, 56, 18, -36, 0],
      y: [0, -38, 22, -12, 48, -28, 0],
    },
  },
  {
    id: "games",
    title: "Game night",
    desc: "Play · laugh · connect",
    icon: Dices,
    color: "#e8c547",
    x: "22%",
    y: "34%",
    duration: 13.5,
    path: {
      x: [0, -48, 30, -16, 52, -22, 0],
      y: [0, 36, -44, 18, -8, 40, 0],
    },
  },
  {
    id: "solo",
    title: "Solo shows",
    desc: "One artist. Full night.",
    icon: Theater,
    color: "#f2f7f8",
    x: "68%",
    y: "58%",
    duration: 10.2,
    path: {
      x: [0, 20, 54, -30, -8, 38, 0],
      y: [0, -52, 8, 34, -26, 16, 0],
    },
  },
  {
    id: "corp",
    title: "Corporate",
    desc: "Teams. Energy. Stage.",
    icon: Building2,
    color: "#7ad4e0",
    x: "18%",
    y: "78%",
    duration: 12.4,
    path: {
      x: [0, -22, 44, 12, -50, 26, 0],
      y: [0, -18, -40, 28, 10, -32, 0],
    },
  },
  {
    id: "jam",
    title: "Jamming nights",
    desc: "Bring an instrument.",
    icon: Guitar,
    color: "#f0a868",
    x: "78%",
    y: "36%",
    duration: 11.8,
    path: {
      x: [0, -34, 18, 46, -12, 28, 0],
      y: [0, 24, -36, 14, 42, -20, 0],
    },
  },
  {
    id: "workshops",
    title: "Workshops",
    desc: "Writing · comedy · poetry",
    icon: PenLine,
    color: "#c9a6ff",
    x: "46%",
    y: "88%",
    duration: 14,
    path: {
      x: [0, 32, -40, 8, -18, 36, 0],
      y: [0, -30, -8, 36, -22, 12, 0],
    },
  },
];

function ScanLine({ color, compact }: { color: string; compact?: boolean }) {
  return (
    <svg
      className={
        compact
          ? "absolute left-full top-1/2 h-8 w-14 -translate-y-1/2 overflow-visible"
          : "absolute left-full top-1/2 h-10 w-24 -translate-y-1/2 overflow-visible"
      }
      viewBox="0 0 96 40"
      fill="none"
    >
      <path
        d="M0 20 H58 L84 20"
        stroke={color}
        strokeWidth={compact ? 2.4 : 2.8}
        strokeLinecap="square"
      />
      <circle cx="88" cy="20" r={compact ? 4 : 5} fill={color} />
    </svg>
  );
}

function Field({ compact = false }: { compact?: boolean }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const pathScale = compact ? 0.42 : 1;

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % items.length);
    }, 3000);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <>
      {items.map((item, i) => {
        const Icon = item.icon;
        const isOn = active === i;

        return (
          <motion.div
            key={item.id}
            className="absolute"
            style={{ left: item.x, top: item.y }}
            animate={
              reduce
                ? undefined
                : isOn
                  ? { x: 0, y: compact ? [0, -8, 0] : [0, -16, 0] }
                  : {
                      x: item.path.x.map((n) => n * pathScale),
                      y: item.path.y.map((n) => n * pathScale),
                    }
            }
            transition={
              isOn
                ? {
                    x: { type: "spring", stiffness: 180, damping: 20 },
                    y: {
                      duration: 2.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
                : {
                    duration: item.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          >
            <motion.div
              className="relative -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: isOn ? (compact ? 2.1 : 2.8) : compact ? 1.35 : 1.64,
                zIndex: isOn ? 20 : 1,
              }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
            >
              {isOn && (
                <span
                  className="absolute -inset-3 rounded-full"
                  style={{
                    boxShadow: `0 0 0 1px ${item.color}55, 0 0 22px ${item.color}40`,
                  }}
                />
              )}
              <Icon
                size={compact ? 16 : 20}
                strokeWidth={isOn ? 1.7 : 1.4}
                style={{
                  color: isOn ? item.color : "#6b7780",
                  opacity: isOn ? 1 : 0.4,
                  filter: isOn ? `drop-shadow(0 0 10px ${item.color})` : "none",
                }}
              />
            </motion.div>

            <AnimatePresence>
              {isOn && !reduce && (
                <motion.div
                  className={`absolute top-1/2 z-30 -translate-y-1/2 ${
                    compact
                      ? "right-[118%] w-[5.4rem]"
                      : "right-[130%] w-36"
                  }`}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.28 }}
                >
                  <div className="text-right leading-tight">
                    <p
                      className={`font-display font-semibold uppercase tracking-[0.16em] ${
                        compact ? "text-[9px]" : "text-[11px] tracking-[0.2em]"
                      }`}
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </p>
                    <p
                      className={`mt-0.5 text-muted ${
                        compact ? "text-[9px]" : "text-[11px]"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                  <ScanLine color={item.color} compact={compact} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </>
  );
}

export function HeroActivities({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div
        className="pointer-events-none relative mb-6 h-40 w-full overflow-visible sm:h-44 lg:hidden"
        aria-hidden
      >
        <Field compact />
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none relative hidden h-[26rem] w-full overflow-visible lg:block"
      aria-hidden
    >
      <Field />
    </div>
  );
}
