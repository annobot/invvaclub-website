"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export const THEMES = ["neo", "glass", "brutal", "clay"] as const;
export type Theme = (typeof THEMES)[number];

export const THEME_LABELS: Record<Theme, string> = {
  neo: "Neomorphic",
  glass: "Glassmorphism",
  brutal: "Neo brutal",
  clay: "Claymorphism",
};

const STORAGE_KEY = "invva-theme";

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
} | null>(null);

function isTheme(value: string | null): value is Theme {
  return value === "neo" || value === "glass" || value === "brutal" || value === "clay";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("neo");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const next = isTheme(stored)
      ? stored
      : isTheme(document.documentElement.getAttribute("data-theme"))
        ? (document.documentElement.getAttribute("data-theme") as Theme)
        : "neo";
    setThemeState(next);
    document.documentElement.setAttribute("data-theme", next);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
