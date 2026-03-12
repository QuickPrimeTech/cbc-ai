import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";

const benefits = ["Free forever plan", "CBC aligned", "Cancel anytime"];

export const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-16">
      <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-primary/80" />

      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-foreground/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4">
          <Sparkles className="w-4 h-4" />
          Join 500+ Kenyan Teachers
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 leading-tight">
          Stop Struggling With Lesson Plans.
          <br />
          <span className="text-primary-foreground/90">
            Start Teaching Better.
          </span>
        </h2>

        <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Create CBC-compliant lesson plans in seconds. Join hundreds of Kenyan
          teachers who have reclaimed their weekends.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link href="/auth/create-account">
            <Button
              size="lg"
              variant="secondary"
              className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8"
            >
              Create Your First Lesson Free
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <span className="text-primary-foreground/60 text-sm">
            No credit card required
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/70 text-sm">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
