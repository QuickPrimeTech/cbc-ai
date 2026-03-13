import type { Metadata } from "next";
import { HeroSection } from "@/sections/home/hero";
import { Features } from "@/sections/home/features";
import { Pricing } from "@/sections/home/pricing";
import { CTA } from "@/sections/home/cta";
import { Footer } from "@/layouts/footer";
import { About } from "@/sections/home/about";
import { ContactUS } from "@/sections/home/contact";

export const metadata: Metadata = {
  title:
    "CBC AI — KICD-Aligned Lesson Plans & Schemes of Work for Kenyan Teachers",
  description:
    "Generate TPAD-compliant lesson plans, schemes of work, and assessments in minutes. AI-powered tool for Kenyan teachers following KICD Competency-Based Curriculum (CBC). Save hours of paperwork, meet TSC standards effortlessly.",
  keywords: [
    "CBC lesson plans Kenya",
    "KICD aligned lesson plans",
    "TPAD compliant documents",
    "Kenyan teacher resources",
    "CBC schemes of work",
    "TSC standards",
    "Competency-Based Curriculum",
    "AI lesson planner Kenya",
    "primary school lesson plans Kenya",
    "junior secondary CBC",
    "teacher performance appraisal",
    "automated lesson plans",
    "Kenya education technology",
    "CBC assessment tools",
    "lesson plan generator",
  ],
  authors: [{ name: "CBC AI" }],
  creator: "CBC AI",
  publisher: "CBC AI",
  metadataBase: new URL("https://cbcai.co.ke"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CBC AI — Create KICD-Aligned Lesson Plans in Minutes",
    description:
      "Generate TPAD-compliant lesson plans, schemes of work & assessments fully aligned with KICD standards. Trusted by 10,000+ Kenyan teachers.",
    url: "https://cbcai.co.ke",
    siteName: "CBC AI",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CBC AI — AI-powered lesson planning for Kenyan teachers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CBC AI — KICD-Aligned Lesson Plans for Kenyan Teachers",
    description:
      "Generate TPAD-compliant lesson plans & schemes of work in minutes. Save hours, meet TSC standards.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Education",
};

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
