/*
 * Design: Technical Monograph — Swiss Typographic Rationalism
 * Hero: Full viewport, asymmetric layout, terminal cursor blinking on tagline
 * Dark background with hero-bg image, oversized name, concise tagline
 */
import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663434085805/biVnaHciSgqmctxVnfgAu7/hero-bg-JKEBnYN54kkBdDsXDasY4U.webp";

const roles = [
  "Software Engineer",
  "AI Systems Builder",
  "Aerospace Enthusiast",
  "Aspiring Roboticist",
  "Harvard MBA Candidate",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, roleIndex]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />

      {/* Content */}
      <div className="relative z-10 w-full lg:pl-24 xl:pl-28">
        <div className="container">
          <div className="max-w-4xl pt-20 lg:pt-0">
            {/* Greeting line */}
            <div className="flex items-center gap-3 mb-6 opacity-0 animate-[fadeSlideUp_0.6s_0.2s_forwards]">
              <span className="h-px w-8 bg-amber" />
              <span className="font-mono text-xs text-amber tracking-[0.3em] uppercase">
                Portfolio
              </span>
            </div>

            {/* Name */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6 opacity-0 animate-[fadeSlideUp_0.6s_0.4s_forwards]">
              Nathan
              <br />
              <span className="text-amber">Alam</span>
            </h1>

            {/* Typing tagline */}
            <div className="flex items-center gap-1 mb-8 h-8 opacity-0 animate-[fadeSlideUp_0.6s_0.6s_forwards]">
              <span className="font-mono text-sm md:text-base text-cream-dim tracking-wider">
                {displayText}
              </span>
              <span className="w-[2px] h-5 bg-amber animate-pulse" />
            </div>

            {/* Brief description */}
            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10 opacity-0 animate-[fadeSlideUp_0.6s_0.8s_forwards]">
              Building at the intersection of software, AI, and national security.
              From SpaceX launch pads to Pentagon AI platforms — engineering systems
              that matter.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-5 mb-16 opacity-0 animate-[fadeSlideUp_0.6s_1s_forwards]">
              <a
                href="mailto:nathanalam99@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-amber transition-colors group"
              >
                <Mail size={16} className="group-hover:text-amber transition-colors" />
                <span className="hidden sm:inline">Email</span>
              </a>
              <a
                href="https://github.com/nathanalam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-amber transition-colors group"
              >
                <Github size={16} className="group-hover:text-amber transition-colors" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/nathanalam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-amber transition-colors group"
              >
                <Linkedin size={16} className="group-hover:text-amber transition-colors" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>

            {/* Scroll indicator */}
            <button
              onClick={scrollToAbout}
              className="flex items-center gap-2 text-muted-foreground hover:text-amber transition-colors opacity-0 animate-[fadeSlideUp_0.6s_1.2s_forwards]"
            >
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
                Scroll
              </span>
              <ArrowDown size={14} className="animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
