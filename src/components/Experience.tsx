import ScrollReveal from "./ScrollReveal";

const bullets = [
  "Architected production-grade AI/ML workflows on Azure Databricks using MLflow and Delta Lake, implementing automated model versioning, experiment tracking, and deployment pipelines that reduced manual intervention by 30%.",
  "Designed and deployed a multi-table automated fault-detection and ML observability framework with drift detection, data quality checks, and performance alerting, providing real-time health monitoring across all production models.",
  "Built end-to-end supervised classification models for member activation covering the full lifecycle: feature engineering with strict time-windowing to prevent data leakage, champion/challenger model lifecycle in Unity Catalog, and continuous post-deployment monitoring.",
  "Developed an LLM-powered smart scoring system using Meta's Llama-4-Maverick-17B served via Azure OpenAI endpoints, combined with NLP and text mining techniques, deployed in production for marketing personalization, luxury property labelling, and targeted campaign delivery.",
  "Delivered AI-driven behavioral segmentation using statistical clustering on large-scale loyalty data, categorizing members by activity level, platform profile, and funnel position, enabling precision-targeted outreach with the Marketing team.",
  "Built a URR (Ultimate Redemption Rate) forecasting model for the Finance team to predict earned points and outstanding points redemption patterns. Complex data processing on PostgreSQL, model training and registration on Azure Databricks with MLflow, enabling accurate liability calculation for redeemed loyalty points on the company's financial books.",
  "Built an anomaly and fraud detection pipeline with automated alerting integrated into the production observability stack, enabling real-time monitoring of suspicious transactional patterns across the loyalty program.",
  "Engineered scalable PySpark ETL pipelines to ingest, process, clean, and transform multi-million row datasets from enterprise data warehouses, ensuring reliable feature sets for all predictive workloads.",
  "Collaborated cross-functionally with Marketing on activation segmentation and property labelling, and with Finance on automation and liability forecasting.",
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
            <span className="font-mono text-primary text-base">02.</span>
            Experience
            <span className="h-px bg-border flex-1 ml-4" />
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-10 bg-surface/50 border border-border rounded-lg p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Machine Learning Engineer
                </h3>
                <p className="text-primary text-sm mt-1">
                  Global Hotel Alliance (GHA) · Dubai, UAE
                </p>
              </div>
              <p className="font-mono text-xs text-text-secondary mt-2 sm:mt-1 shrink-0 bg-background px-2.5 py-1 rounded border border-border">
                Jan 2026 – Present
              </p>
            </div>

            <p className="text-text-secondary text-sm leading-relaxed my-5">
              Owning the ML stack for a global loyalty program (1000+ hotels, 60+ brands). Building, deploying, and
              monitoring production AI systems on Azure Databricks. Working across Marketing and Finance
              to deliver models that directly impact revenue and reporting.
            </p>

            <ul className="space-y-4">
              {bullets.map((bullet, i) => (
                <ScrollReveal key={i} delay={0.05 * i}>
                  <li className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                    <span className="text-primary mt-0.5 shrink-0 font-mono text-xs">▸</span>
                    <span>{bullet}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
