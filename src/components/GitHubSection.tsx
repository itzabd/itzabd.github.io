"use client";

import { motion } from "framer-motion";
import { GitBranch, Star, Activity, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { ease } from "@/lib/motion";

const GITHUB_USERNAME = "itzabd";

const stats = [
  { label: "Repositories", value: "16+", icon: GitBranch },
  { label: "Public Projects", value: "15+", icon: Star },
  { label: "Commit Velocity", value: "Continuous", icon: Activity },
  { label: "Ecosystem", value: "Open Source", icon: GithubIcon },
];

export default function GitHubSection() {
  return (
    <section id="github" className="py-20 px-4 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-3">
          <GithubIcon size={13} />
          <span>Live GitHub Status</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
          Code Velocity & GitHub Activity
        </h2>
        <p className="text-slate-400 text-sm mt-2">
          Real-time telemetry and contributions from public repositories.
        </p>
      </div>

      {/* Stats Summary Grid */}
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
              className="surface-card p-4 text-center flex flex-col items-center justify-center group"
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/[0.08] mb-2 text-teal-400 group-hover:border-teal-500/30 transition-colors">
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

      {/* Live GitHub Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Live Repository Stats & Streak */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: ease.out }}
          className="surface-card p-6 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-white font-['Space_Grotesk'] flex items-center gap-2">
              <GithubIcon size={16} className="text-teal-400" />
              <span>Live Repository Analytics</span>
            </h3>
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
              Live API
            </span>
          </div>

          <div className="space-y-4 flex-1 flex flex-col justify-center">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=dark&bg_color=00000000&hide_border=true&title_color=38bdf8&icon_color=14b8a6&text_color=e2e8f0`}
              alt="GitHub Stats"
              className="w-full rounded-xl"
              loading="lazy"
            />
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=dark&background=00000000&border=00000000&ring=14b8a6&fire=f59e0b&currStreakLabel=e2e8f0&sideLabels=e2e8f0&dates=94a3b8&stroke=00000000`}
              alt="GitHub Streak"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Live Language Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08, ease: ease.out }}
          className="surface-card p-6 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-white font-['Space_Grotesk'] flex items-center gap-2">
              <Activity size={16} className="text-teal-400" />
              <span>Top Languages & Velocity</span>
            </h3>
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
              Live API
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=dark&bg_color=00000000&hide_border=true&text_color=e2e8f0&title_color=38bdf8`}
              alt="Top Languages"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </div>

          <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Primary Focus</span>
            <span className="text-teal-300">Python · TypeScript · C++</span>
          </div>
        </motion.div>
      </div>

      {/* Live Contribution Activity Graph */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: ease.out }}
        className="surface-card p-6 relative overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <h3 className="text-base font-bold text-white font-['Space_Grotesk'] flex items-center gap-2">
            <Activity size={16} className="text-teal-400" />
            <span>Public Contribution Stream (Past Year)</span>
          </h3>

          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !text-xs !py-1.5 !px-3 shrink-0"
          >
            <span>Visit @{GITHUB_USERNAME} on GitHub</span>
            <ExternalLink size={12} />
          </a>
        </div>

        <div className="overflow-x-auto w-full pt-1 pb-2">
          <img
            src={`https://ghchart.rshah.org/14B8A6/${GITHUB_USERNAME}`}
            alt="GitHub contribution chart"
            className="w-full min-w-[700px] h-auto rounded-xl opacity-90"
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  );
}
