"use client";

import { Mail, ArrowUp, Sparkles, MapPin, ExternalLink, FileText, BookOpen, GraduationCap } from "lucide-react";
import { LinkedinIcon, GithubIcon, ScholarIcon, InstagramIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";
import Tooltip from "@/components/Tooltip";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About Me", href: "#about" },
    { name: "The Journey", href: "#journey" },
    { name: "Publications (4)", href: "#research" },
    { name: "Featured Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education & Coursework", href: "#education" },
  ];

  const academicLinks = [
    { name: "Google Scholar Profile", href: personalInfo.scholar, external: true, icon: ScholarIcon },
    { name: "Download Curriculum Vitae (PDF)", href: "/resume.pdf", external: true, icon: FileText },
    { name: "Independent University, Bangladesh", href: "https://www.iub.edu.bd", external: true, icon: GraduationCap },
    { name: "Get in Touch", href: "#contact", external: false, icon: Mail },
  ];

  return (
    <footer className="w-full mt-32 border-t border-white/[0.08] bg-gradient-to-b from-black/20 via-black/60 to-black/90 backdrop-blur-2xl relative overflow-hidden">
      {/* Subtle top ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 opacity-20 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top, var(--accent), var(--teal), transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Main 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/[0.06]">
          {/* Column 1: Identity & Research Positioning */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-teal-400 to-amber-400 p-[1px] flex items-center justify-center shadow-lg">
                <div className="w-full h-full bg-[#080b12] rounded-[11px] flex items-center justify-center font-bold text-xs tracking-wider text-white font-['Space_Grotesk']">
                  AH
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-['Space_Grotesk'] tracking-tight">
                  {personalInfo.name}
                </h3>
                <p className="text-xs font-mono text-teal-300">
                  AI/ML Researcher & Full-Stack Developer
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Investigating trustworthy clinical AI, computer vision, and deployable software architectures. Seeking graduate Master&apos;s research opportunities while engineering production systems.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-teal-400 shrink-0" />
                <span>Dhaka, Bangladesh · Independent University, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-emerald-300">
                  Open for Master&apos;s Admissions & ML Opportunities
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
              <Sparkles size={12} className="text-amber-400" />
              <span>Navigation</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-amber-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="text-slate-600 font-mono">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academic & Research Hub */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
              <BookOpen size={12} className="text-teal-400" />
              <span>Research & Verification</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {academicLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="hover:text-teal-300 transition-colors inline-flex items-center gap-2 group"
                  >
                    <link.icon size={14} className="text-slate-400 group-hover:text-teal-400 transition-colors" />
                    <span>{link.name}</span>
                    {link.external && (
                      <ExternalLink size={10} className="text-slate-500 opacity-70 group-hover:opacity-100" />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Icons Bar with Tooltips */}
            <div className="mt-6 pt-5 border-t border-white/[0.06]">
              <span className="text-[11px] font-mono text-slate-400 block mb-2.5">
                Connect Directly
              </span>
              <div className="flex items-center gap-2">
                <Tooltip content="Google Scholar Profile" position="top">
                  <a
                    href={personalInfo.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-400/30 hover:bg-white/[0.08] transition-all"
                    aria-label="Google Scholar"
                  >
                    <ScholarIcon size={15} />
                  </a>
                </Tooltip>

                <Tooltip content="GitHub Profile (@itzabd)" position="top">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={15} />
                  </a>
                </Tooltip>

                <Tooltip content="LinkedIn Profile" position="top">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon size={15} />
                  </a>
                </Tooltip>

                <Tooltip content="Instagram (@itz_abd_)" position="top">
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-400/30 hover:bg-white/[0.08] transition-all"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={15} />
                  </a>
                </Tooltip>

                <Tooltip content="Send Direct Email" position="top">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-teal-300 hover:border-teal-400/30 hover:bg-white/[0.08] transition-all"
                    aria-label="Email"
                  >
                    <Mail size={15} />
                  </a>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {personalInfo.name}</span>
            <span className="hidden sm:inline text-slate-700">·</span>
            <span className="text-slate-500 text-[11px]">
              Built with Next.js Turbopack, TypeScript & Framer Motion
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.06] text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
