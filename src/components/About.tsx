import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
            <span className="font-mono text-primary text-base">01.</span>
            About Me
            <span className="h-px bg-border flex-1 ml-4" />
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-5 text-text-secondary leading-relaxed">
            <ScrollReveal delay={0.1}>
              <p>
                I work at{" "}
                <span className="text-foreground font-medium">Global Hotel Alliance</span>{" "}
                in Dubai, where I own the ML stack on Azure Databricks. Everything from
                feature pipelines to model deployment and post-production monitoring. The loyalty
                program serves millions of members across 800+ hotels, so the systems have to
                actually work at scale.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>
                Day-to-day that means building classification models for member activation,
                LLM pipelines that score properties from unstructured text, behavioral segmentation
                engines, fraud detection, and forecasting models for the finance team's liability books.
                I collaborate directly with Marketing and Finance, not just shipping models but making
                sure they solve the actual business problem.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p>
                I'm wrapping up an MSc in Data Science & AI at Middlesex University Dubai
                (4.0 GPA) and I'm always looking for harder problems to work on.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} direction="right">
            <div className="space-y-4">
              <div className="bg-surface border border-border rounded-lg p-5">
                <p className="font-mono text-xs text-primary/70 mb-3">~ quick facts</p>
                <ul className="space-y-2.5 text-sm text-text-secondary">
                  <li className="flex gap-2">
                    <span className="text-primary/60">•</span>
                    Based in Dubai, UAE
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary/60">•</span>
                    MSc Data Science & AI (4.0)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary/60">•</span>
                    Production ML on Databricks
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary/60">•</span>
                    Cross-team (Marketing + Finance)
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
