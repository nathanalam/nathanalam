/*
 * Design: Technical Monograph — Swiss Typographic Rationalism
 * Navigation: Persistent left rail on desktop, collapsible top bar on mobile
 * Amber accent for active state, monospaced section numbers
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "hero", label: "Home", number: "00" },
  { id: "about", label: "About", number: "01" },
  { id: "experience", label: "Experience", number: "02" },
  { id: "education", label: "Education", number: "03" },
  { id: "skills", label: "Skills", number: "04" },
  { id: "resume", label: "Resume", number: "05" },
  { id: "contact", label: "Contact", number: "06" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled to bottom
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      const scrollY = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Desktop left rail */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-20 xl:w-24 flex-col items-center justify-center z-50 border-r border-border/30">
        <div className="flex flex-col gap-6">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`group flex flex-col items-center gap-1 transition-all duration-300 ${
                activeSection === s.id
                  ? "text-amber"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="font-mono text-[11px] font-medium tracking-wider">
                {s.number}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium">
                {s.label}
              </span>
              {activeSection === s.id && (
                <span className="w-4 h-[2px] bg-amber mt-0.5 transition-all duration-300" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile top bar */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="font-display font-bold text-sm tracking-wide">
            N<span className="text-amber">.</span>A
          </span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground p-1"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="px-4 pb-4 flex flex-col gap-2 bg-background/95 backdrop-blur-xl border-b border-border/30">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`flex items-center gap-3 py-2 text-left transition-colors ${
                  activeSection === s.id
                    ? "text-amber"
                    : "text-muted-foreground"
                }`}
              >
                <span className="font-mono text-xs w-6">{s.number}</span>
                <span className="text-sm uppercase tracking-[0.15em]">
                  {s.label}
                </span>
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
