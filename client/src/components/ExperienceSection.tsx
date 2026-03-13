/*
 * Design: Technical Monograph — Swiss Typographic Rationalism
 * Experience: Vertical timeline with expandable cards, each with an image accent
 */
import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AI_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663434085805/biVnaHciSgqmctxVnfgAu7/experience-ai-EgACGtQB3oZEwpCiq5SEP2.webp";
const SAT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663434085805/biVnaHciSgqmctxVnfgAu7/experience-satellite-e3nDP34Jsfo56yLBSBkyQu.webp";
const SPACEX_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663434085805/biVnaHciSgqmctxVnfgAu7/experience-spacex-d9utSdUzAgA32dAXsch7sS.webp";

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  image: string;
  highlights: string[];
  tags: string[];
}

const experiences: Experience[] = [
  {
    id: "scale",
    company: "Scale AI",
    role: "Software Engineer",
    period: "2024 — 2025",
    location: "Washington, D.C.",
    image: AI_IMG,
    highlights: [
      "Led the overhaul of the Donovan AI platform — the Pentagon's primary generative AI tool — rewriting it from an Open WebUI clone into a production-grade agentic system",
      "Built custom AI agent workflows enabling image analysis, geospatial interactions, wargaming, and multi-modal inference for defense use cases",
      "Achieved 300+ weekly active users at the Pentagon and won a $10M+ contract for defense mission planning and war simulation",
      "Conducted build-vs-buy analysis on agent frameworks, ultimately selecting Langflow (MIT license) for on-premise classified deployments",
    ],
    tags: ["AI/ML", "Python", "React", "LangChain", "National Security"],
  },
  {
    id: "amazon",
    company: "Amazon — Project Kuiper",
    role: "Software Development Engineer II",
    period: "2021 — 2024",
    location: "Redmond, Washington",
    image: SAT_IMG,
    highlights: [
      "Designed high-performance networking drivers in Rust for interfacing proprietary over-the-air RF signals from LEO satellites to Level 2 Ethernet protocols",
      "Built the over-the-air update mechanisms for consumer satellite terminals and deployed validation software to assembly lines in Taiwan",
      "Created automated CI/CD pipelines with end-to-end integration tests for the first 1,000 consumer prototypes",
      "Developed React and TypeScript UI for a cleared data management system transmitting terabytes of data daily",
    ],
    tags: ["Rust", "TypeScript", "React", "Satellite", "RF Engineering"],
  },
  {
    id: "spacex",
    company: "SpaceX",
    role: "Automation & Controls Engineer",
    period: "2021",
    location: "Lompoc, California",
    image: SPACEX_IMG,
    highlights: [
      "Directed daily launchpad operations as a ground controller, testing piping, electrical wiring, and ML-augmented data reporting to double pad turnover rate",
      "Coordinated electrical panel builds for Starship's launch mount, enabling the first Starship launch from Boca Chica",
      "Revamped core calibration equipment across SLC-4E in preparation for weekly launches of hundreds of Starlink satellites from Vandenberg",
      "Engineered blast shielding modules for the Starship launch tower capable of absorbing the output of 37 Raptor engines",
    ],
    tags: ["Aerospace", "Automation", "Python", "Hardware", "Launch Ops"],
  },
  {
    id: "ginkgo",
    company: "Ginkgo Bioworks",
    role: "Software Engineering Intern",
    period: "2020",
    location: "Boston, Massachusetts",
    image: "",
    highlights: [
      "Constructed a cloud infrastructure solution where scientist-generated code would automatically deploy to AWS Lambda functions to store experimental results",
      "Ran in-silico validation and helped bring online COVID testing for Concentric",
    ],
    tags: ["AWS", "Python", "Biotech", "Cloud Infrastructure"],
  },
  {
    id: "capitalone",
    company: "Capital One",
    role: "Software Engineering Intern",
    period: "2019",
    location: "McLean, Virginia",
    image: "",
    highlights: [
      "Built a tool for development teams to forecast future time series data using deep neural networks on AWS SageMaker",
      "Presented the ML forecasting platform to 200+ members of the company",
    ],
    tags: ["ML", "AWS SageMaker", "Python", "Time Series"],
  },
];

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const [expanded, setExpanded] = useState(index < 3);
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />
      <div className="absolute left-[-4px] top-6 w-[9px] h-[9px] rounded-full border-2 border-amber bg-background hidden md:block" />

      <div className="md:pl-8">
        {/* Card */}
        <div className="group bg-card/50 border border-border/50 rounded-sm overflow-hidden hover:border-amber/30 transition-all duration-300">
          {/* Header with optional image */}
          {exp.image && (
            <div className="relative h-40 md:h-48 overflow-hidden">
              <img
                src={exp.image}
                alt={exp.company}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-[1.02] transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-amber font-medium">{exp.role}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs text-muted-foreground">
                      {exp.period}
                    </span>
                    <p className="text-xs text-muted-foreground/70">
                      {exp.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Text-only header for roles without images */}
          {!exp.image && (
            <div className="px-5 pt-5 pb-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-amber font-medium">{exp.role}</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs text-muted-foreground">
                    {exp.period}
                  </span>
                  <p className="text-xs text-muted-foreground/70">
                    {exp.location}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Expandable content */}
          <div className="px-5 pb-4">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-amber transition-colors mb-3 font-mono tracking-wider uppercase"
            >
              <ChevronDown
                size={12}
                className={`transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
              {expanded ? "Collapse" : "Details"}
            </button>

            {expanded && (
              <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                <ul className="space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="text-amber/60 mt-1.5 shrink-0">—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-1 bg-amber/10 text-amber/80 rounded-sm tracking-wider uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-24 lg:pl-24 xl:pl-28">
      <div className="container">
        <SectionHeader
          number="02"
          title="Experience"
          subtitle="From launch pads to classified networks"
        />

        <div className="relative md:ml-4 space-y-6">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
