import { HeroSection } from "@/sections/home/hero";
import { Features } from "@/sections/home/features";
import { Pricing } from "@/sections/home/pricing";
import { CTA } from "@/sections/home/cta";
import { Footer } from "@/layouts/footer";
import { About } from "@/sections/home/about";
import { ContactUS } from "@/sections/home/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Features />
      <Pricing />
      <ContactUS />
      <CTA />
      <Footer />
    </>
  );
}
