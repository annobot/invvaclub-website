"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-bg-elevated">
      <div className="container-narrow px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                whileHover={{ rotate: -6, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 260, damping: 16 }}
              >
                <Logo className="h-12 w-12" />
              </motion.div>
              <div>
                <p className="font-display font-bold text-lg tracking-wide">
                  INVVA CLUB
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Own the mic, own the moment
                </p>
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-sm">
              The pulse of Ahmedabad&apos;s artist youth. Open mics, solo shows,
              cafe takeovers, kids events & corporate entertainment — for the
              love of art.
            </p>
          </div>

          <div>
            <p className="font-display font-semibold mb-4 text-teal-bright">
              Join Us
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/perform" className="hover:text-cream transition">
                  Perform with us
                </Link>
              </li>
              <li>
                <Link href="/audience" className="hover:text-cream transition">
                  Join as audience
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="hover:text-cream transition">
                  Sponsor / Corporate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display font-semibold mb-4 text-teal-bright">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a
                  href="tel:7002472946"
                  className="inline-flex items-center gap-2 hover:text-cream transition"
                >
                  <Phone size={16} className="text-teal-bright" />
                  7002472946
                </a>
              </li>
              <li>
                <a
                  href="mailto:badalmishr7035@gmail.com"
                  className="inline-flex items-center gap-2 hover:text-cream transition"
                >
                  <Mail size={16} className="text-teal-bright" />
                  badalmishr7035@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/invvaclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cream transition"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-teal-bright"
                    aria-hidden
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                  </svg>
                  @invvaclub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="neo-inset mt-12 flex flex-col sm:flex-row gap-3 justify-between px-5 py-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Invva Club · Ahmedabad</p>
          <p>Founded by Datt Vaidya & Badal Mishra</p>
        </div>
      </div>
    </footer>
  );
}
