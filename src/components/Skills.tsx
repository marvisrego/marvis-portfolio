import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    title: "AI / Machine Learning",
    skills: [
      "Supervised & Unsupervised Learning",
      "Deep Learning",
      "NLP",
      "LLMs & Generative AI",
      "RAG",
      "Prompt Engineering",
      "Anomaly Detection",
      "Feature Engineering",
    ],
  },
  {
    title: "Databricks & Spark",
    skills: [
      "Azure Databricks",
      "Apache Spark",
      "PySpark",
      "Spark SQL",
      "Delta Lake",
      "MLflow",
      "Unity Catalog",
      "Workflows & Jobs",
    ],
  },
  {
    title: "Languages & Libraries",
    skills: [
      "Python",
      "PySpark",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "SQL",
      "R",
    ],
  },
  {
    title: "MLOps & Data Engineering",
    skills: [
      "MLflow",
      "Delta Lake",
      "ETL/ELT Pipelines",
      "ML Observability",
      "Drift Detection",
      "CI/CD",
      "Data Quality Checks",
      "Pipeline Optimization",
    ],
  },
  {
    title: "Cloud & Tools",
    skills: ["Azure", "GCP", "AWS", "Power BI", "Git & GitHub", "Docker"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
            <span className="font-mono text-primary text-base">04.</span>
            Skills
            <span className="h-px bg-border flex-1 ml-4" />
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={0.08 * i}>
              <div className="bg-surface/50 border border-border rounded-lg p-5 h-full">
                <h3 className="font-mono text-xs text-primary mb-4 tracking-wide uppercase">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-text-secondary bg-background/80 px-2 py-1 rounded border border-border/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
