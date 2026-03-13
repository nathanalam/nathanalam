/*
 * Design: Technical Monograph — Swiss Typographic Rationalism
 * About: Asymmetric two-column layout with abstract visual on right
 */
import SectionHeader from "./SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ABOUT_IMG = `${import.meta.env.BASE_URL}me.png`;

const stats = [
  { value: "6+", label: "Years Engineering" },
  { value: "$10M+", label: "Contracts Won" },
  { value: "1000+", label: "Government Users Served" },
];

export default function AboutSection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.15);
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.15);

  return (
    <section id="about" className="py-20 md:py-24 lg:pl-24 xl:pl-28">
      <div className="container">
        <SectionHeader
          number="01"
          title="About"
          subtitle="Engineer, builder, strategist"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Text content */}
          <div
            ref={contentRef}
            className={`lg:col-span-7 transition-all duration-700 delay-200 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              I'm a software engineer and MBA candidate at Harvard Business School
              with a track record of building high-impact systems across aerospace,
              satellite communications, and AI for national security.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">
              My career has taken me from directing launchpad operations at SpaceX's
              Vandenberg facility, to designing satellite networking protocols at
              Amazon's Project Kuiper, to leading the overhaul of the Pentagon's
              primary AI platform at Scale AI. I bring a rare combination of
              hardware intuition and software craftsmanship to every problem I tackle.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground mb-10">
              At Princeton, I graduated Summa Cum Laude in Chemical and Biological
              Engineering with minors in Computer Science and Health Policy. I'm
              now pursuing my MBA and MS in Engineering Sciences at Harvard, where
              I'm formalizing the intersection of technical systems and business
              strategy.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`transition-all duration-500 ${contentVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                    }`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-amber mb-1">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Abstract image */}
          <div
            ref={imageRef}
            className={`lg:col-span-5 transition-all duration-700 delay-400 ${imageVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-amber/5 rounded-sm -z-10" />
              <img
                src={ABOUT_IMG}
                alt="Abstract engineering visualization"
                className="w-full rounded-sm opacity-80"
              />
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber/40" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber/40" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber/40" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
