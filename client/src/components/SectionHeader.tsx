/*
 * Design: Technical Monograph — Swiss Typographic Rationalism
 * Section headers with oversized monospaced numbers and thin horizontal rules
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`mb-12 md:mb-16 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="flex items-end gap-4 md:gap-6 mb-4">
        <span className="font-mono text-5xl md:text-7xl font-bold text-amber/20 leading-none select-none">
          {number}
        </span>
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1 tracking-wide">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-amber/40 via-border to-transparent" />
    </div>
  );
}
