/*
 * Design: Technical Monograph — Swiss Typographic Rationalism
 * Skills: Grid of categorized skills with monospaced labels
 */
import SectionHeader from "./SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code, Cpu, Cloud, Shield, Rocket, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code,
    skills: ["Rust", "Python", "TypeScript", "React", "Node.js", "C/C++"],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      "LLM Fine-tuning",
      "LangChain / Langflow",
      "vLLM",
      "AWS SageMaker",
      "Agentic Workflows",
      "Multi-modal Inference",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: [
      "AWS (Lambda, EC2, S3)",
      "CI/CD Pipelines",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Microservices",
    ],
  },
  {
    title: "Hardware & Systems",
    icon: Cpu,
    skills: [
      "RF Signal Processing",
      "Satellite Protocols",
      "Networking Drivers",
      "Embedded Systems",
      "Over-the-Air Updates",
      "Manufacturing QA",
    ],
  },
  {
    title: "Aerospace & Defense",
    icon: Rocket,
    skills: [
      "Launch Operations",
      "Ground Support Equipment",
      "Anomaly Detection",
      "Telemetry Systems",
      "Blast Shielding Design",
      "Pad Turnover",
    ],
  },
  {
    title: "Security & Compliance",
    icon: Shield,
    skills: [
      "Classified Networks",
      "DoD Deployments",
      "On-premise Security",
      "Data Management",
      "ITAR Compliance",
      "Secure Architecture",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 lg:pl-24 xl:pl-28">
      <div className="container">
        <SectionHeader
          number="04"
          title="Skills & Expertise"
          subtitle="Technical depth across domains"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return <SkillCard key={cat.title} cat={cat} Icon={Icon} index={i} />;
          })}
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  cat,
  Icon,
  index,
}: {
  cat: (typeof skillCategories)[0];
  Icon: typeof Code;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group bg-card/40 border border-border/40 rounded-sm p-5 hover:border-amber/30 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 flex items-center justify-center bg-amber/10 rounded-sm group-hover:bg-amber/20 transition-colors">
          <Icon size={16} className="text-amber" />
        </div>
        <h3 className="font-display text-sm font-semibold text-foreground tracking-tight">
          {cat.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill) => (
          <span
            key={skill}
            className="font-mono text-[10px] px-2 py-1 bg-secondary/80 text-muted-foreground rounded-sm tracking-wider hover:bg-amber/10 hover:text-amber/80 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
