/*
 * Design: Technical Monograph — Swiss Typographic Rationalism
 * Education: Two prominent cards for Harvard and Princeton
 */
import SectionHeader from "./SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    school: "Harvard University",
    degrees: ["MBA — Harvard Business School", "MS Engineering Sciences — SEAS"],
    period: "2025 — 2027",
    location: "Boston, MA",
    details: [
      "Joint MBA and Master of Science in Engineering Sciences program",
      "Bridging technical systems expertise with business strategy",
    ],
    icon: GraduationCap,
  },
  {
    school: "Princeton University",
    degrees: ["B.S. Chemical and Biological Engineering"],
    period: "2017 — 2021",
    location: "Princeton, NJ",
    details: [
      "GPA: 3.92 — Summa Cum Laude (Highest Honors)",
      "Minors in Computer Science and Health Policy",
      "Tau Beta Pi · Phi Beta Kappa · Sigma Xi",
    ],
    icon: Award,
    courses: [
      "Algorithms & Data Structures",
      "Computer Graphics",
      "Programming Systems",
      "Mathematics for Numerical Computing",
      "Genomics & Computational Molecular Biology",
      "Biochemistry",
      "Chemical Reaction Engineering",
    ],
  },
];

export default function EducationSection() {
  const { ref: ref1, isVisible: vis1 } = useScrollAnimation(0.15);
  const { ref: ref2, isVisible: vis2 } = useScrollAnimation(0.15);
  const refs = [ref1, ref2];
  const visibles = [vis1, vis2];

  return (
    <section id="education" className="py-20 md:py-24 lg:pl-24 xl:pl-28 bg-card/30">
      <div className="container">
        <SectionHeader
          number="03"
          title="Education"
          subtitle="Princeton to Harvard"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu, i) => {
            const Icon = edu.icon;
            return (
              <div
                key={edu.school}
                ref={refs[i]}
                className={`group relative bg-card/60 border border-border/50 rounded-sm p-6 md:p-8 hover:border-amber/30 transition-all duration-700 ${
                  visibles[i]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Icon */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 flex items-center justify-center bg-amber/10 rounded-sm">
                    <Icon size={20} className="text-amber" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground tracking-wider">
                    {edu.period}
                  </span>
                </div>

                {/* School name */}
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                  {edu.school}
                </h3>
                <p className="text-xs text-muted-foreground/70 mb-4">
                  {edu.location}
                </p>

                {/* Degrees */}
                <div className="space-y-1 mb-5">
                  {edu.degrees.map((d) => (
                    <p key={d} className="text-sm text-amber font-medium">
                      {d}
                    </p>
                  ))}
                </div>

                {/* Details */}
                <ul className="space-y-2 mb-5">
                  {edu.details.map((d, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-amber/50 mt-0.5">—</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                {/* Courses (Princeton only) */}
                {edu.courses && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen size={12} className="text-amber/60" />
                      <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
                        Notable Coursework
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((c) => (
                        <span
                          key={c}
                          className="font-mono text-[10px] px-2 py-1 bg-secondary text-muted-foreground rounded-sm tracking-wider"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute top-0 right-0 w-px h-8 bg-amber/20 group-hover:bg-amber/40 transition-colors" />
                  <div className="absolute top-0 right-0 h-px w-8 bg-amber/20 group-hover:bg-amber/40 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
