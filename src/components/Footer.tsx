"use client";

import { Mail, ArrowUp } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full mt-24 py-10 px-4 border-t border-white/[0.08] bg-black/40 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Left: Academic Copyright */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <p className="text-xs sm:text-sm text-slate-300 font-medium">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
          <p className="text-[11px] text-slate-500 font-mono mt-0.5">
            B.Sc. in Computer Science · Independent University, Bangladesh
          </p>
        </div>

        {/* Center: Social icons */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={17} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
        </div>

        {/* Right: Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <span>Top of page</span>
          <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  );
}
