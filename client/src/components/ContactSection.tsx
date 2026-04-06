/*
 * Design: Technical Monograph — Swiss Typographic Rationalism
 * Contact: Clean, minimal contact section with direct links
 */
import SectionHeader from "./SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Github, Linkedin, Calendar } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "nathanalam99@gmail.com",
    href: "mailto:nathanalam99@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/nathanalam",
    href: "https://github.com/nathanalam",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/nathanalam",
    href: "https://linkedin.com/in/nathanalam",
  },
  {
    icon: Calendar,
    label: "Book a Meeting",
    value: "calendar.app.google",
    href: "https://calendar.app.google/Sf9aediRwnELXNrR8",
  },
];

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section id="contact" className="py-20 md:py-24 lg:pl-24 xl:pl-28 bg-card/30">
      <div className="container">
        <SectionHeader
          number="06"
          title="Contact"
          subtitle="Let's connect"
        />

        <div
          ref={ref}
          className={`max-w-2xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            I'm always interested in discussing new opportunities in AI, defense
            technology, and engineering leadership. Whether you're building
            something ambitious or exploring a collaboration, I'd love to hear
            from you.
          </p>

          <div className="space-y-4">
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`group flex items-center gap-4 py-3 border-b border-border/30 hover:border-amber/30 transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Icon
                      size={16}
                      className="text-muted-foreground group-hover:text-amber transition-colors"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="font-mono text-[10px] text-muted-foreground/60 uppercase tracking-[0.2em] block">
                      {link.label}
                    </span>
                    <span className="text-sm text-foreground group-hover:text-amber transition-colors">
                      {link.value}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 lg:pl-24 xl:pl-28 border-t border-border/20">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-sm">
              N<span className="text-amber">.</span>A
            </span>
            <span className="h-px w-6 bg-border" />
            <span className="font-mono text-[10px] text-muted-foreground tracking-wider">
              Nathan Alam
            </span>
          </div>
          <span className="font-mono text-[10px] text-muted-foreground/50 tracking-wider">
            Built with precision
          </span>
        </div>
      </div>
    </footer>
  );
}
