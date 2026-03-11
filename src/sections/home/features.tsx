import { Card } from "@/components/ui/card";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Save Hours Each Week",
    description:
      "Generate lesson plans instantly instead of spending hours planning.",
  },
  {
    icon: CheckCircle2,
    title: "CBC Compliant",
    description:
      "Every lesson aligns with Kenyan Competency-Based Curriculum standards automatically.",
  },
  {
    icon: Zap,
    title: "Fully Customizable",
    description: "Edit and personalize every lesson for your classroom needs.",
  },
  {
    icon: Users,
    title: "Inclusive by Default",
    description:
      "Built-in differentiation strategies for all learning styles and abilities.",
  },
  {
    icon: BookOpen,
    title: "All Grade Levels",
    description:
      "From Pre-Primary to Senior Secondary, we support every CBC grade level.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description:
      "Advanced AI ensures quality, creativity, and curriculum alignment every time.",
  },
] as const;

export const Features = () => {
  return (
    <section className="bg-background py-20 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Teachers Love LessonAI
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to teach better, faster
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="group relative p-6 bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
