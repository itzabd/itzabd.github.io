"use client";

import { Mail, ArrowUp } from "lucide-react";
import { LinkedinIcon, GithubIcon, ScholarIcon, InstagramIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";
import Tooltip from "@/components/Tooltip";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full mt-24 py-6 px-4 border-t border-white/[0.08] bg-black/40 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
        {/* Left: Copyright */}
        <p className="text-slate-400">
          © {new Date().getFullYear()} {personalInfo.name} · All rights reserved.
        </p>


        {/* Right: Social Icons with Tooltips + Back to Top */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <Tooltip content="Google Scholar" position="top">
              <a
                href={personalInfo.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-400/30 transition-all"
                aria-label="Google Scholar"
              >
                <ScholarIcon size={14} />
              </a>
            </Tooltip>

            <Tooltip content="GitHub" position="top">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon size={14} />
              </a>
            </Tooltip>

            <Tooltip content="LinkedIn" position="top">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={14} />
              </a>
            </Tooltip>

            <Tooltip content="Instagram" position="top">
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-400/30 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon size={14} />
              </a>
            </Tooltip>

            <Tooltip content="Email" position="top">
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-teal-300 hover:border-teal-400/30 transition-all"
                aria-label="Email"
              >
                <Mail size={14} />
              </a>
            </Tooltip>
          </div>

          <span className="text-white/10 hidden sm:inline">|</span>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer text-xs"
          >
            <span>Top</span>
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
