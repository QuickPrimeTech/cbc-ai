import { Clock, FileDown, Printer, Sparkles } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 bg-muted/30 rounded-t-3xl" id="about">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          Built for Kenyan Teachers
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          What is CBC AI ?
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
          CBC is an AI helper that enables you to create complete,
          curriculum-aligned lesson plans instantly. No more late nights or
          weekend prep. Just type your topic and AI will generate a lesson plan
          that is completely aligned to the KICD standard.
        </p>

        <div className="grid sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Create in Seconds</h3>
            <p className="text-sm text-muted-foreground">
              AI generates your full lesson plan instantly
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <FileDown className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Save as PDF</h3>
            <p className="text-sm text-muted-foreground">
              Download your lessons for offline access
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Printer className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Print & Go</h3>
            <p className="text-sm text-muted-foreground">
              Take it straight to the classroom
            </p>
          </div>
        </div>

        <p className="mt-12 text-lg text-muted-foreground font-medium">
          Stop wasting time creating lessons. Let AI do the work for you.
        </p>
      </div>
    </section>
  );
};
