"use client";
import { HeroSection } from "@/sections/home/hero";
import { Features } from "@/sections/home/features";
import { Pricing } from "@/sections/home/pricing";
import { CTA } from "@/sections/home/cta";
import { Footer } from "@/layouts/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
