"use client";

import { motion } from "framer-motion";
import { Mail, Code2, Heart, ArrowUp } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative z-10 border-t border-border bg-background-alt">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center shadow-card">
                <Code2 size={14} className="text-white" />
              </div>
              <span
                className="font-bold text-lg text-text-primary"
                style={{ fontFamily: "'Geist', 'Inter', sans-serif" }}
              >
                Abdullah Hossien
              </span>
            </div>
            <p className="text-text-secondary text-sm max-w-xs">
              AI/ML Engineer & Full-Stack Developer from Bangladesh.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-text-secondary">
            {["Hero", "About", "Skills", "Projects", "Research", "GitHub", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-accent transition-colors"
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
              className="w-9 h-9 rounded-xl bg-background border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:bg-background-alt transition-all shadow-sm"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-background border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:bg-background-alt transition-all shadow-sm"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 rounded-xl bg-background border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:bg-background-alt transition-all shadow-sm"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <motion.button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-accent text-white flex items-center justify-center shadow-card hover:bg-accent-hover transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px my-8 bg-border" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <p>
            © {new Date().getFullYear()} Abdullah Hossien. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with{" "}
            <Heart size={11} className="text-rose-500 fill-rose-500" />
            using Next.js 15, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
