import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
            <Link href="/auth/sign-up">
              Start Free Trial
              <ArrowRight />
            </Link>
          }
        />
        <Button size="lg" variant="outline">
          Watch Demo
        </Button>
      </div>

      {/* Floating Card - uses card, border, and background colors */}
      <div className="relative max-w-2xl mx-auto mb-16">
        <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-primary/10 rounded-2xl blur-3xl" />
        <Card className="relative border bg-card/95 backdrop-blur p-8 rounded-2xl">
          <div className="text-sm text-muted-foreground mb-4">
            Example: Grade 5 Math Lesson
          </div>
          <p className="text-foreground font-medium mb-4">
            "Create a 50-minute CBC-aligned lesson on fractions for Grade 5 with
            activities, assessment rubric, and differentiation strategies"
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            LessonAI instantly generates structured lesson plans with learning
            objectives, detailed instructions, student activities, assessment
            methods, and support strategies for diverse learners—all aligned
            with Canadian curriculum standards.
          </p>
        </Card>
      </div>
    </section>
  );
};
