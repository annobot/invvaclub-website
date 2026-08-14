import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Founders } from "@/components/Founders";
import { StageMoments } from "@/components/StageMoments";
import { Gallery } from "@/components/Gallery";
import { JoinCTA } from "@/components/JoinCTA";
import { Marquee } from "@/components/Marquee";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <WhatWeDo />
      <Founders />
      <StageMoments />
      <Gallery />
      <Marquee reverse />
      <JoinCTA />
    </>
  );
}
