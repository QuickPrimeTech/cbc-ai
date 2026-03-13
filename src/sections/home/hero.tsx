import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="max-w-7xl mt-16 mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      {/* Badge - uses primary color with muted background */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 font-medium text-sm">
        <Sparkles className="w-4 h-4" />
        Powered by AI
      </div>

      {/* Heading - uses foreground color */}
      <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
        Create CBC Lesson Plans in{" "}
        <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Seconds, Not Hours
        </span>
      </h1>

      {/* Description - uses muted foreground */}
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
        Generate comprehensive, curriculum-aligned lesson plans powered by AI.
        Perfect for Canadian educators following CBC standards.
      </p>

      {/* Buttons - use default shadcn variants (already themed) */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <Button
          size="lg"
          nativeButton={false}
          render={
            <Link href="/auth/create-account">
              Start Free Trial
              <ArrowRight />
            </Link>
          }
        />
        <Button size="lg" variant="outline">
          Watch Demo
        </Button>
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-primary/10 rounded-2xl blur-3xl" />
    </section>
  );
};
