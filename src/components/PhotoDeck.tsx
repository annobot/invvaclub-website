"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type PanInfo,
} from "framer-motion";

export type StackPhoto = {
  src: string;
  alt: string;
  rot: number;
};

const STACK: StackPhoto[] = [
  {
    src: "/images/community-logo-sign.png",
    alt: "Invva Club family with the logo sign",
    rot: -8,
  },
  {
    src: "/images/poster-open-mic.png",
    alt: "Open mic poster",
    rot: 5,
  },
  {
    src: "/images/community-rangmanch.png",
    alt: "Community at Rangmanch",
    rot: -3,
  },
  {
    src: "/images/community-art-wall.png",
    alt: "Community against the art wall",
    rot: -5,
  },
  {
    src: "/images/community-studio.png",
    alt: "Studio night group",
    rot: 4,
  },
  {
    src: "/images/poster-open-mic-2.png",
    alt: "Invva open mic poster",
    rot: -6,
  },
  {
    src: "/images/community-invva-sign.png",
    alt: "Holding the Invva Club sign",
    rot: 3,
  },
];

function Card({
  photo,
  index,
  isTop,
  stacked,
  reduce,
  compact,
  onSwipe,
}: {
  photo: StackPhoto;
  index: number;
  isTop: boolean;
  stacked: boolean;
  reduce: boolean | null;
  compact?: boolean;
  onSwipe: () => void;
}) {
  const x = useMotionValue(0);
  const rotateDrag = useTransform(x, [-180, 180], [-14, 14]);
  const dragging = isTop && stacked && !reduce;
  const restRotate = photo.rot + index * 1.8;
  const flyFrom = index % 2 === 0 ? -80 : 80;

  function handleDragEnd(_: unknown, info: PanInfo) {
    if (Math.abs(info.offset.x) > 72 || Math.abs(info.velocity.x) > 550) {
      onSwipe();
      x.set(0);
    }
  }

  return (
    <motion.div
      className={`absolute left-1/2 top-0 ${
        compact ? "w-[min(58vw,200px)]" : "w-[min(70vw,260px)]"
      } ${
        isTop ? "cursor-grab active:cursor-grabbing touch-pan-y" : "pointer-events-none"
      }`}
      style={{
        x: dragging ? x : undefined,
        rotate: dragging ? rotateDrag : undefined,
        zIndex: 40 - index,
      }}
      drag={dragging ? "x" : false}
      dragDirectionLock
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.85}
      onDragEnd={handleDragEnd}
      initial={
        reduce || stacked
          ? false
          : {
              y: compact ? -90 : -180,
              x: flyFrom,
              rotate: flyFrom / 5,
              opacity: 0,
              scale: 0.84,
            }
      }
      animate={{
        y: index * (compact ? 8 : 11),
        x: dragging ? undefined : index * 5,
        scale: 1 - Math.min(index, 4) * 0.035,
        opacity: index > 4 ? 0 : 1,
        rotate: dragging ? undefined : restRotate,
      }}
      transition={
        stacked
          ? { type: "spring", stiffness: 420, damping: 28 }
          : {
              type: "spring",
              stiffness: 420,
              damping: 20,
              delay: index * 0.05,
            }
      }
    >
      <div className="neo-light -translate-x-1/2 rounded-2xl p-[6px] pb-7">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#d7c4a3]">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover"
            sizes="280px"
            quality={90}
            priority={index < 2}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function PhotoDeck({
  waitForView = false,
  compact = false,
}: {
  waitForView?: boolean;
  compact?: boolean;
}) {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, amount: 0.2 });
  const started = !waitForView || inView;

  const [order, setOrder] = useState(() => STACK.map((_, i) => i));
  const [stacked, setStacked] = useState(!!reduce);

  useEffect(() => {
    if (!started) return;
    if (reduce) {
      setStacked(true);
      return;
    }
    setStacked(false);
    const t = setTimeout(() => setStacked(true), 70 + STACK.length * 50);
    return () => clearTimeout(t);
  }, [started, reduce]);

  function swipe() {
    setOrder((prev) => [...prev.slice(1), prev[0]]);
  }

  const widthClass = compact
    ? "w-[min(58vw,200px)]"
    : "w-[min(70vw,260px)]";
  const heightClass = compact
    ? "h-[calc(min(58vw,200px)*1.25+4.25rem)]"
    : "h-[calc(min(70vw,260px)*1.25+4.75rem)]";

  return (
    <div ref={wrapRef} className="relative mx-auto w-full px-4">
      <div className={`relative mx-auto ${heightClass} ${widthClass}`}>
        {started &&
          order.slice(0, 5).map((photoIndex, stackIndex) => (
            <Card
              key={STACK[photoIndex].src}
              photo={STACK[photoIndex]}
              index={stackIndex}
              isTop={stackIndex === 0}
              stacked={stacked}
              reduce={reduce}
              compact={compact}
              onSwipe={swipe}
            />
          ))}
      </div>
      <p className="mt-2 text-center text-[10px] uppercase tracking-[0.2em] text-[#0b4a62]/70 sm:mt-3 sm:text-xs sm:tracking-[0.22em]">
        Swipe the stack
      </p>
    </div>
  );
}
