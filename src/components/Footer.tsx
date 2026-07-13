"use client";

import { motion } from "framer-motion";
import { Mail, Code2, Heart, ArrowUp } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative z-10 border-t border-white/[0.05] bg-white/[0.01] backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Code2 size={14} className="text-white" />
              </div>
              <span
                className="font-bold text-lg gradient-text"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Abdullah Hossien
              </span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs">
              AI/ML Engineer & Full-Stack Developer from Bangladesh.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-400">
            {["Hero", "About", "Skills", "Projects", "Research", "GitHub", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white transition-colors animated-underline"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-blue-500/30 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-blue-500/30 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-blue-500/30 transition-all"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <motion.button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:from-blue-500/30 hover:to-purple-500/30 transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px my-8 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>
            © {new Date().getFullYear()} Abdullah Hossien. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with{" "}
            <Heart size={11} className="text-rose-400 fill-rose-400" />
            using Next.js 15, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
