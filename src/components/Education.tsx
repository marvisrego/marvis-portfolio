import ScrollReveal from "./ScrollReveal";

const education = [
  {
    institution: "Middlesex University Dubai",
    degree: "MSc in Data Science and Artificial Intelligence",
    period: "Sept 2025 – June 2026",
    gpa: "4.0",
    coursework: [
      "Machine Learning",
      "Generative AI",
      "Data Engineering",
      "Data Visualisation",
    ],
  },
  {
    institution: "Mangalore University",
    degree: "Bachelor's in Computer Application (BCA)",
    period: "Sept 2022 – July 2025",
    coursework: [
      "Computer Science",
      "Software Development",
      "Database Management",
    ],
  },
];

const certifications = [
  { name: "Databricks Academy Gen AI Certification", year: "2026" },
  { name: "Introduction to Data Science (Cisco)", year: "2025" },
  { name: "Data Analytics Job Simulation (Deloitte Australia)", year: "2025" },
  { name: "Career Skills in Data Analysis (LinkedIn Learning)", year: "2025" },
];

export default function Education() {
  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
            <span className="font-mono text-primary text-base">05.</span>
            Education & Certifications
            <span className="h-px bg-border flex-1 ml-4" />
          </h2>
        </ScrollReveal>

        <div className="mt-10 space-y-5">
          {education.map((edu, i) => (
            <ScrollReveal key={edu.institution} delay={0.1 * i}>
              <div className="bg-surface/50 border border-border rounded-lg p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-primary text-sm mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  <p className="font-mono text-xs text-text-secondary mt-2 sm:mt-0 bg-background px-2.5 py-1 rounded border border-border">
                    {edu.period}
                  </p>
                </div>
                {edu.gpa && (
                  <p className="text-sm text-text-secondary mt-3">
                    GPA:{" "}
                    <span className="text-success font-semibold">
                      {edu.gpa}
                    </span>
                  </p>
                )}
                {edu.coursework && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {edu.coursework.map((c) => (
                      <span
                        key={c}
                        className="text-xs font-mono text-primary/70 bg-primary/5 border border-primary/20 px-2 py-1 rounded"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <h3 className="text-lg font-semibold text-foreground mt-12 mb-5">
            Certifications
          </h3>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.name} delay={0.08 * i}>
              <div className="flex items-center gap-3 bg-surface/50 border border-border rounded-lg p-4">
                <span className="text-success text-xs shrink-0">✓</span>
                <div>
                  <p className="text-sm text-foreground">{cert.name}</p>
                  <p className="text-xs font-mono text-text-secondary">
                    {cert.year}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
