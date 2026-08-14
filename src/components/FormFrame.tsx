"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { FloatingOrbs } from "./Motion";

export function FormFrame({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden gradient-mesh px-4 pb-14 pt-24 sm:px-8 sm:pb-20 sm:pt-28">
      <FloatingOrbs />
      <div className="container-narrow max-w-2xl relative z-[1] neo p-6 sm:p-8">
        <motion.p
          className="text-teal-bright text-xs uppercase tracking-[0.25em] mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {kicker}
        </motion.p>
        <motion.h1
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 22, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.08, type: "spring", stiffness: 180, damping: 16 }}
        >
          {title}
        </motion.h1>
        {children}
      </div>
    </div>
  );
}
