import ScrollReveal from "./ScrollReveal";

const workProjects = [
  {
    title: "ML Member Activation Pipeline",
    tech: ["Databricks", "PySpark", "MLflow", "Scikit-Learn"],
    description:
      "End-to-end ML pipeline predicting member activation probability using Databricks Feature Store with strict time-windowing. Custom MLflow PyFunc wrapper for calibrated scoring, automated champion/challenger lifecycle, and decile-based offer assignment optimizing marketing ROI.",
    highlights: [
      "Reduced model runtime from 6 hours to 10 minutes via hyperparameter tuning",
      "Automated model registration in Unity Catalog",
      "Segments members into 10 deciles with differentiated promotional offers",
    ],
  },
  {
    title: "Property Labelling Pipeline",
    tech: ["Azure OpenAI", "Llama-4", "Databricks", "PySpark"],
    description:
      "Automated LLM pipeline leveraging Azure OpenAI (Llama-4-Maverick-17B) to extract luxury and interest labels from unstructured property descriptions. Features cost-optimized incremental processing and custom observability framework.",
    highlights: [
      "Robust JSON parsing with fallback mechanisms for LLM outputs",
      "Incremental scoring architecture bypassing already-scored properties",
      "Multi-signal aggregation merging probabilistic LLM outputs with deterministic signals",
    ],
  },
  {
    title: "Member Activity Segmentation",
    tech: ["Databricks", "PySpark", "Python"],
    description:
      "Feature engineering pipeline aggregating member activity data with rule-based segmentation across activity levels, platform profiles, and funnel positions. Orchestrated as scheduled Databricks Jobs.",
    highlights: [
      "Segments: Power User, Highly Active, Active, Light, Dormant",
      "Platform profiling: Multi-Platform, Web-Only, App-Only",
      "Automated observability metrics logged to Databricks catalog",
    ],
  },
  {
    title: "URR Forecasting, Finance Liability",
    tech: ["PostgreSQL", "Azure Databricks", "MLflow", "PySpark"],
    description:
      "ML forecasting model for the Finance team predicting Ultimate Redemption Rate (URR), forecasting earned points and outstanding points that will be redeemed in the loyalty program. Enables accurate liability calculation for the company's financial books.",
    highlights: [
      "Complex data processing and feature engineering on PostgreSQL",
      "Model training and registration on Azure Databricks with MLflow",
      "Direct impact on financial reporting and liability bookkeeping",
    ],
  },
];

const personalProjects = [
  {
    title: "DreamTrip, AI Travel Platform",
    tech: ["Nvidia Nemotron", "RAG", "AWS", "React"],
    description:
      "LLM-powered travel platform using GPT-4o mini with real-time RAG via Tavily API, transforming natural language into structured multi-day itineraries with geospatial visualization. Media served via AWS CloudFront CDN.",
    github: "#",
  },
  {
    title: "GraphRAG Career Advisor",
    tech: ["NetworkX", "GPT-5.4-nano", "Cohere", "Flask"],
    description:
      "Intelligent career guidance chatbot powered by a knowledge graph combining ONET and ESCO taxonomies (22,259 nodes, 235,501 edges). 6-step pipeline with semantic search, reranking, and graph traversal.",
    github: "#",
  },
  {
    title: "AI Code Review Bot",
    tech: ["Python", "GitHub Actions", "GitHub Models API"],
    description:
      "Automated code review assistant integrated with GitHub Actions providing instant AI-driven PR feedback. Smart filtering skips non-code files and handles large diffs to avoid token limits.",
    github: "#",
  },
  {
    title: "Student Dropout Risk Prediction",
    tech: ["Python", "Scikit-learn"],
    description:
      "ML models processing unstructured student data to predict dropout risk. Gradient Boosting and Logistic Regression achieving 80% accuracy, projecting 50% reduction in tuition loss.",
    github: "#",
  },
];

function ProjectCard({
  title,
  tech,
  description,
  highlights,
  github,
  type,
}: {
  title: string;
  tech: string[];
  description: string;
  highlights?: string[];
  github?: string;
  type: "work" | "personal";
}) {
  return (
    <div className="group bg-surface border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-3">
        <div className="text-primary">
          {type === "work" ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18" />
            </svg>
          )}
        </div>
        {github && github !== "#" && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-foreground">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
            </svg>
          </a>
        )}
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">
        {description}
      </p>

      {highlights && (
        <ul className="space-y-1 mb-4">
          {highlights.map((h, i) => (
            <li key={i} className="text-xs text-text-secondary flex gap-2">
              <span className="text-success mt-0.5">●</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
            <span className="font-mono text-primary text-base">03.</span>
            Projects
            <span className="h-px bg-border flex-1 ml-4" />
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h3 className="text-lg font-semibold text-foreground mt-10 mb-6">
            Production Work{" "}
            <span className="text-sm font-normal text-text-secondary">
              @ Global Hotel Alliance
            </span>
          </h3>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-5">
          {workProjects.map((p, i) => (
            <ScrollReveal key={p.title} delay={0.1 * i}>
              <ProjectCard {...p} type="work" />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <h3 className="text-lg font-semibold text-foreground mt-14 mb-6">
            Personal Projects
          </h3>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-5">
          {personalProjects.map((p, i) => (
            <ScrollReveal key={p.title} delay={0.1 * i}>
              <ProjectCard {...p} type="personal" />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
