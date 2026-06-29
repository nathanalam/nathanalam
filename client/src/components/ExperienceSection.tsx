/*
 * Design: Technical Monograph — Swiss Typographic Rationalism
 * Experience: Vertical timeline with expandable cards, each with an image accent
 */
import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const NURO_IMG = "https://upload.wikimedia.org/wikipedia/commons/b/b6/Nuro_P2_test_car_%28San_Francisco%2C_July_2025%29_-4.jpg";
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
    id: "nuro",
    company: "Nuro",
    role: "Technical Program Manager",
    period: "2026 — Present",
    location: "Mountain View, CA",
    image: NURO_IMG,
    highlights: [
      "Own the program schedule for the Perception subteam, responsible for object detection and tracking, data collection and labeling for training computer vision models, occupancy and voxel detection, and sensor fusion and integration for vehicle-specific systems on Prius and Lucid partner vehicles including LIDARs, water sensors, and IMUs",
      "Coordinated the launch of the first driverless mile in the Bay Area to unlock >$100M in funding milestones from Uber and enable full L4 autonomy",
      "Created a data curation pipeline that used AI to enable multi-modal natural language queries for a variety of scene sets to filter out misleading expert training data and improve performance of the behavior module",
    ],
    tags: ["Autonomous Vehicles", "Program Management", "AI/ML", "Sensor Fusion"],
  },
  {
    id: "scale",
    company: "Scale AI",
    role: "Software Engineer",
    period: "2024 — 2026",
    location: "Washington, D.C.",
    image: AI_IMG,
    highlights: [
      "Created a custom AI agent platform with a chat interface fine tuned for national security and deployed on classified networks for 500+ customers, winning contracts for >$10mm",
      "Developed workflows to enable image analysis, geospatial interactions, wargaming, and multi-modal inference fine tuned for defense use cases, opening up a new product line for $100mm",
      "Implemented resource based access control to enable mixed teams from engineering, delivery, and end-customers to collaborate securely over classified intelligence",
    ],
    tags: ["AI/ML", "Python", "React", "LangChain", "National Security"],
  },
  {
    id: "amazon",
    company: "Amazon",
    role: "Software Development Engineer II",
    period: "2021 — 2024",
    location: "Redmond, Washington",
    image: SAT_IMG,
    highlights: [
      "Designed high performance networking drivers in Rust for interfacing proprietary over air RF signals from low earth orbit satellites to level 2 Ethernet protocols for the first 1000 consumer prototypes",
      "Coordinated an over-the-air update system to deliver firmware updates to three different subcomponents on customer terminals, which spanned software from four teams with end-to-end encryption",
      "Created automated CI/CD pipelines with end to end integration tests, developed React and Typescript UI for a cleared data management system transmitting terabytes of data from highside to lowside networks daily",
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
      "Directed daily launchpad operations as a ground controller to test out piping, electrical wiring, and machine learning augmented data reporting of ground support equipment to double pad turnover rate.",
      "Coordinated electrical panel builds for Starship's launch mount, enabling first Starship launch from Boca Chica",
      "Revamped core calibration equipment across SLC4E in preparation for weekly launches of hundreds of Starlink satellites from Vandenberg",
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
