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
    <footer className="w-full mt-24 border-t border-white/[0.08] bg-black/40 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Identity & Status */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/15 bg-black shrink-0 shadow-md">
              <img src="/icon.jpg" alt="Logo" className="w-full h-full object-cover" />
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                <h3 className="text-sm font-bold text-white font-['Space_Grotesk']">
                  {personalInfo.name}
                </h3>
                <div className="availability-pill !text-[11px] !py-0.5 !px-2.5">
                  <span className="availability-dot" />
                  <span>{personalInfo.availability}</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                AI/ML Researcher & Full-Stack Developer · Independent University, Bangladesh
              </p>
            </div>
          </div>

          {/* Social Icons with Tooltips */}
          <div className="flex items-center gap-2">
            <Tooltip content="Google Scholar Profile" position="top">
              <a
                href={personalInfo.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-400/30 hover:bg-white/[0.08] transition-all"
                aria-label="Google Scholar"
              >
                <ScholarIcon size={16} />
              </a>
            </Tooltip>

            <Tooltip content="GitHub Profile (@itzabd)" position="top">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
            </Tooltip>

            <Tooltip content="LinkedIn Profile" position="top">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
            </Tooltip>

            <Tooltip content="Instagram (@itz_abd_)" position="top">
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-400/30 hover:bg-white/[0.08] transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
            </Tooltip>

            <Tooltip content="Send Direct Email" position="top">
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-teal-300 hover:border-teal-400/30 hover:bg-white/[0.08] transition-all"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </Tooltip>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
