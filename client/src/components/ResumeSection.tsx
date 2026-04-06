import SectionHeader from "./SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink } from "lucide-react";

export default function ResumeSection() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section id="resume" className="py-20 md:py-24 lg:pl-24 xl:pl-28">
      <div className="container">
        <SectionHeader
          number="05"
          title="Resume"
          subtitle="My professional background"
        />

        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-6 flex justify-end">
            <a
              href="https://docs.google.com/document/d/1MIz-MyWE1DsTKitifpAL8TqaoCK19QkA/edit?usp=sharing&ouid=106479069730812075451&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-amber transition-colors font-mono tracking-wider uppercase"
            >
              <span>View Original</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="w-full aspect-[8.5/11] max-w-4xl mx-auto bg-card border border-border/30 rounded-sm overflow-hidden">
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vRh8Cmb4m_GuXGYhKCdOmvOu7ewLa1OL213590iIzvSLlDgVIU-CKXkEIHAiL2Rbw/pub?embedded=true"
              className="w-full h-full border-none"
              title="Resume"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
