"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Plan = {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  periodMonthly?: string;
  periodYearly?: string;
  description: string;
  features: string[];
  monthlyFeatures?: string[];
  yearlyFeatures?: string[];
  cta: string;
  ctaMonthly?: string;
  ctaYearly?: string;
  highlighted: boolean;
};

const plans: Plan[] = [
  {
    name: "Free Plan",
    monthlyPrice: "KSh 0",
    yearlyPrice: "KSh 0",
    description: "Try it out first. No credit card needed.",
    features: [
      "5 lesson plans every month",
      "All CBC grade levels (PP1 to Grade 12)",
      "Basic editing tools",
      "Help via email",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro Plan",
    monthlyPrice: "KSh 200",
    yearlyPrice: "KSh 1,920",
    periodMonthly: "/month",
    periodYearly: "/year",
    description: "Best for teachers who want unlimited access.",
    features: [
      "Unlimited lesson plans",
      "Fast customer support",
      "More customization options",
      "Download & share lessons easily",
      "Share with your teaching team",
    ],
    monthlyFeatures: [
      "Unlimited lesson plans",
      "Fast customer support",
      "More customization options",
      "Download & share lessons easily",
      "Share with your teaching team",
    ],
    yearlyFeatures: [
      "Unlimited lesson plans",
      "Fast customer support",
      "More customization options",
      "Download & share lessons easily",
      "Share with your teaching team",
      "Save KSh 480 (20% off)",
    ],
    cta: "Get Pro",
    ctaMonthly: "Get Pro Monthly",
    ctaYearly: "Get Pro Yearly",
    highlighted: true,
  },
];

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section
      className="py-20 bg-linear-to-br from-muted/50 to-muted rounded-3xl"
      id="pricing"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Simple Pricing
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start free. Upgrade anytime.
          </p>

          {/* Tabs */}
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-card border border-border">
            <Button
              onClick={() => setIsYearly(false)}
              variant={!isYearly ? "default" : "secondary"}
            >
              Monthly
            </Button>
            <Button
              onClick={() => setIsYearly(true)}
              variant={isYearly ? "default" : "secondary"}
              className={"relative"}
            >
              Yearly
              <span className="absolute -top-3 -right-8 text-xs font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {plans.map((plan, idx) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const period = isYearly ? plan.periodYearly : plan.periodMonthly;
            const features =
              plan.name === "Pro Plan" && isYearly && plan.yearlyFeatures
                ? plan.yearlyFeatures
                : plan.monthlyFeatures || plan.features;
            const cta = isYearly
              ? plan.ctaYearly || plan.cta
              : plan.ctaMonthly || plan.cta;

            return (
              <Card
                key={idx}
                className={`relative overflow-visible flex flex-col p-8 transition-all duration-300 hover:shadow-xl ${
                  plan.highlighted
                    ? "border-primary bg-card shadow-lg ring-1 ring-primary/20 scale-105 md:scale-110"
                    : "border-border bg-card/50 hover:border-primary/30"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">
                      {price}
                    </span>
                    {period && (
                      <span className="text-muted-foreground">{period}</span>
                    )}
                    {plan.highlighted && isYearly && (
                      <p className="text-sm text-muted-foreground mt-1">
                        (KSh 160/month, billed yearly)
                      </p>
                    )}
                  </div>

                  <Button
                    variant={plan.highlighted ? "default" : "outline"}
                    className="w-full"
                    size="lg"
                    nativeButton={false}
                    render={
                      <Link href="/auth/create-account" className="block mb-8">
                        {cta}
                      </Link>
                    }
                  />

                  <ul className="space-y-4">
                    {features.map((feature, fidx) => (
                      <li
                        key={fidx}
                        className={`flex items-start gap-3 ${
                          feature.includes("Save")
                            ? "text-green-600 font-medium"
                            : "text-foreground"
                        }`}
                      >
                        <CheckCircle2
                          className={`w-5 h-5 shrink-0 mt-0.5 ${
                            feature.includes("Save")
                              ? "text-green-600"
                              : "text-primary"
                          }`}
                        />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-12">
          Cancel anytime. No hidden charges.
        </p>
      </div>
    </section>
  );
};
