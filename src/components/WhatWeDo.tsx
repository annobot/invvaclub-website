"use client";

import {
  Building2,
  Coffee,
  Mic2,
  Sparkles,
  Theater,
  Baby,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, Magnetic, Stagger, StaggerItem } from "./Motion";

const offerings = [
  {
    icon: Mic2,
    title: "Open Mics",
    text: "Poetry, comedy, singing, music & storytelling every weekend. Best thing you can do with your Saturday or Sunday.",
  },
  {
    icon: Theater,
    title: "Solo Shows",
    text: "Full-length evenings for artists ready to go deep — including founder shows Udta Punjab and Rameshwaram.",
  },
  {
    icon: Coffee,
    title: "Cafe & Restaurant Nights",
    text: "We bring performers and footfall to cafes and restaurants — culture that fills seats.",
  },
  {
    icon: Building2,
    title: "Corporate Games & Shows",
    text: "Team games, entertainment and stage energy for companies. Actively looking for more corporate gigs.",
  },
  {
    icon: Baby,
    title: "Kids Events",
    text: "Creative, age-friendly sessions that introduce young voices to the joy of performing.",
  },
  {
    icon: Sparkles,
    title: "A Supportive Room",
    text: "Come perform or come listen — you'll leave knowing people. That's the Invva promise.",
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="section-pad bg-bg-elevated">
      <div className="container-narrow">
        <FadeIn className="max-w-2xl mb-14">
          <p className="text-teal-bright text-xs uppercase tracking-[0.25em] mb-3">
            What we do
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Stages for every kind of night
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            From intimate studio open mics to cafe takeovers and corporate
            floors — Invva moves wherever the art needs to land.
          </p>
        </FadeIn>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {offerings.map((item) => (
            <StaggerItem key={item.title}>
              <motion.article
                className="neo h-full p-6 cursor-default"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
              >
                <motion.div
                  className="neo-icon mb-4 text-teal-bright"
                  whileHover={{ rotate: [0, -12, 12, 0], scale: 1.08 }}
                  transition={{ duration: 0.45 }}
                >
                  <item.icon size={22} strokeWidth={1.5} />
                </motion.div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{item.text}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.2} className="mt-14 flex flex-wrap gap-3">
          <Magnetic>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link href="/sponsors" className="btn-primary">
                Book us for corporate
              </Link>
            </motion.div>
          </Magnetic>
          <Magnetic>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link href="/sponsors" className="btn-ghost">
                Partner your cafe
              </Link>
            </motion.div>
          </Magnetic>
        </FadeIn>
      </div>
    </section>
  );
}
