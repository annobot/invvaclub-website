"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Palette, X } from "lucide-react";
import { THEME_LABELS, THEMES, useTheme, type Theme } from "./ThemeProvider";

const swatches: Record<Theme, string[]> = {
  neo: ["#0e1f26", "#2bb8c9", "#16343d"],
  glass: ["#0a1c24", "#7ecff5", "#ffffff"],
  brutal: ["#111111", "#e8c547", "#2bb8c9"],
  clay: ["#1a3d46", "#5fd4e0", "#f4c96b"],
};

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-[60] sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className="neo mb-3 w-[min(calc(100vw-2rem),17rem)] overflow-hidden p-2"
          >
            <p className="px-2 pb-2 pt-1 text-[10px] uppercase tracking-[0.22em] text-muted">
              Theme
            </p>
            <div className="flex flex-col gap-1.5">
              {THEMES.map((id) => {
                const active = theme === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => {
                      setTheme(id);
                      setOpen(false);
                    }}
                    className={`flex items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition ${
                      active ? "bg-white/8" : "hover:bg-white/5"
                    }`}
                    style={
                      theme === "brutal"
                        ? {
                            borderRadius: 0,
                            border: active ? "3px solid #0a0a0a" : "3px solid transparent",
                            boxShadow: active ? "3px 3px 0 #0a0a0a" : "none",
                          }
                        : undefined
                    }
                  >
                    <span className="flex -space-x-1.5" aria-hidden>
                      {swatches[id].map((color) => (
                        <span
                          key={color}
                          className="h-5 w-5 rounded-full ring-2 ring-[var(--bg)]"
                          style={{ background: color }}
                        />
                      ))}
                    </span>
                    <span className="flex-1 text-sm font-medium">{THEME_LABELS[id]}</span>
                    {active && (
                      <span className="text-[10px] uppercase tracking-wider text-teal-bright">
                        On
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        className="neo-icon h-14 w-14 text-cream"
        aria-label={open ? "Close theme switcher" : "Open theme switcher"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.92 }}
      >
        {open ? <X size={22} /> : <Palette size={22} />}
      </motion.button>
    </div>
  );
}
