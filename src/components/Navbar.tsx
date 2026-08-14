"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Magnetic } from "./Motion";
import { Logo } from "./Logo";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#what-we-do", label: "What We Do" },
  { href: "/#founders", label: "Founders" },
  { href: "/#stage", label: "On Stage" },
  { href: "/perform", label: "Perform" },
  { href: "/audience", label: "Audience" },
  { href: "/sponsors", label: "Sponsors" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 ${
        scrolled || open ? "neo-nav" : "bg-bg/70 backdrop-blur-sm md:bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-narrow flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4 md:px-8">
        <Link href="/" className="flex items-center gap-2.5 group min-w-0">
          <motion.div
            whileHover={{ rotate: 8, scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 300, damping: 16 }}
          >
            <Logo className="h-11 w-11" priority />
          </motion.div>
          <div className="leading-tight min-w-0">
            <span className="font-display block text-sm font-bold tracking-wide sm:text-lg">
              INVVA CLUB
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-cream/80 drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]">
              Ahmedabad
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm text-cream/90 hover:text-cream transition-colors group drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]"
            >
              {link.label}
              <motion.span
                className="absolute -bottom-1 left-0 h-px w-0 bg-teal-bright group-hover:w-full transition-[width] duration-300"
                layout
              />
            </Link>
          ))}
          <Magnetic>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link href="/sponsors" className="btn-primary text-sm py-2.5 px-4">
                Book Corporate
              </Link>
            </motion.div>
          </Magnetic>
        </nav>

        <motion.button
          type="button"
          className="neo-icon lg:hidden text-cream !w-10 !h-10"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.9, rotate: 12 }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden neo-nav"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className="block rounded-xl py-3 px-2 text-cream hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link href="/sponsors" className="btn-primary mt-3 text-center">
                Book Corporate
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
