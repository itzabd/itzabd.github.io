"use client";

import { motion } from "framer-motion";
import { GitBranch, Star, Activity, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { ease } from "@/lib/motion";

const GITHUB_USERNAME = "itzabd";

const stats = [
  { label: "Repositories", value: "16+", icon: GitBranch },
  { label: "Projects", value: "15+", icon: Star },
  { label: "Activity", value: "Continuous", icon: Activity },
  { label: "Ecosystem", value: "Open Source", icon: GithubIcon },
];

const languageStats = [
  { name: "Python", percent: 40, color: "#38bdf8" },
  { name: "JavaScript / TypeScript", percent: 30, color: "#facc15" },
  { name: "Java / C++", percent: 18, color: "#fb923c" },
  { name: "HTML / CSS / SQL", percent: 12, color: "#2dd4bf" },
];

export default function GitHubSection() {
  return (
    <section id="github" className="py-20 px-4 max-w-5xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-300 text-xs font-semibold tracking-wider uppercase mb-3">
          <GithubIcon size={13} />
          <span>Open Source</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
          Code Velocity & GitHub Activity
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: ease.out }}
              className="surface-card p-4 text-center flex flex-col items-center justify-center"
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/[0.08] mb-2 text-indigo-300">
                <Icon size={17} />
              </div>
              <span className="text-xl font-bold font-mono text-white">
                {stat.value}
              </span>
              <span className="text-xs text-slate-400 mt-0.5">
                {stat.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Language Breakdown Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: ease.out }}
        className="surface-card p-6 md:p-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
              Codebase Language Composition
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Reflecting work across scientific machine learning and full-stack software.
            </p>
          </div>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !text-xs !py-1.5 !px-3 shrink-0"
          >
            <span>Visit @{GITHUB_USERNAME}</span>
          </a>
        </div>

        {/* Multi-segmented bar */}
        <div className="h-2.5 rounded-full bg-white/[0.06] overflow-hidden flex gap-1 mb-5">
          {languageStats.map((l) => (
            <div
              key={l.name}
              style={{ width: `${l.percent}%`, backgroundColor: l.color }}
              className="h-full rounded-sm"
              title={`${l.name}: ${l.percent}%`}
            />
          ))}
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {languageStats.map((l) => (
            <div key={l.name} className="flex items-center gap-2 text-xs">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: l.color }}
              />
              <span className="text-slate-300 font-medium">{l.name}</span>
              <span className="text-slate-500 font-mono ml-auto">{l.percent}%</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
