"use client";

import { motion } from "framer-motion";
import { GitBranch, Star, Activity, Award } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const GITHUB_USERNAME = "itzabd";

const stats = [
  { label: "Repositories", value: "16+", icon: GitBranch },
  { label: "Projects", value: "15+", icon: Star },
  { label: "Followers", value: "Active", icon: GithubIcon },
  { label: "Status", value: "Open", icon: Activity },
];

const languageStats = [
  { name: "Python", percent: 35, color: "#3776AB" },
  { name: "JavaScript", percent: 28, color: "#F7DF1E" },
  { name: "Java", percent: 18, color: "#ED8B00" },
  { name: "HTML/CSS", percent: 15, color: "#E34F26" },
  { name: "Other", percent: 4, color: "#8B5CF6" },
];

export default function GitHubSection() {
  return (
    <section id="github" className="py-20 px-4 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}>
          Open Source <span className="gradient-text">Contributions</span>
        </h2>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass p-4 rounded-xl text-center flex flex-col items-center relative overflow-hidden"
            >
              <div className="card-accent-bar" />
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 mb-3 text-cyan-400">
                <Icon size={18} />
              </div>
              <span className="text-2xl font-bold text-white block" style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}>
                {stat.value}
              </span>
              <span className="text-sm text-gray-400 mt-1 block">
                {stat.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Chart & Stats Container */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* GitHub Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between"
        >
          <div className="card-accent-bar" />
          <h3 className="font-bold text-white mb-5 flex items-center gap-2" style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}>
            <GithubIcon size={18} className="text-cyan-400" />
            GitHub Repository Stats
          </h3>
          <div className="space-y-4">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=dark&bg_color=00000000&hide_border=true&title_color=a78bfa&icon_color=06b6d4&text_color=e2e8f0`}
              alt="GitHub Stats"
              className="w-full rounded-xl"
              loading="lazy"
            />
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=dark&background=00000000&border=00000000&ring=a78bfa&fire=06b6d4&currStreakLabel=e2e8f0&sideLabels=e2e8f0&dates=94a3b8&stroke=00000000`}
              alt="GitHub Streak"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Language chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-6 rounded-2xl flex flex-col relative overflow-hidden"
        >
          <div className="card-accent-bar" />
          <h3 className="font-bold text-white mb-5 flex items-center gap-2" style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}>
            <Activity size={18} className="text-cyan-400" />
            Language Distribution
          </h3>

          {/* Stacked bar */}
          <div className="flex h-2 rounded-full overflow-hidden mt-4 bg-white/5">
            {languageStats.map((lang) => (
              <div
                key={lang.name}
                style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                className="h-full first:rounded-l-full last:rounded-r-full"
                title={`${lang.name}: ${lang.percent}%`}
              />
            ))}
          </div>

          <div className="space-y-3 flex-1 mt-6">
            {languageStats.map((lang) => (
              <div key={lang.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className="text-sm text-gray-300">{lang.name}</span>
                </div>
                <span className="text-sm text-gray-400 font-medium">{lang.percent}%</span>
              </div>
            ))}
          </div>

          {/* Top Languages Image */}
          <div className="mt-6 border-t border-white/5 pt-6">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=dark&bg_color=00000000&hide_border=true&text_color=e2e8f0&title_color=a78bfa`}
              alt="Top Languages"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      {/* Contribution Activity Graph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 glass p-6 rounded-2xl relative overflow-hidden"
      >
        <div className="card-accent-bar" />
        <h3 className="font-bold text-white mb-5 flex items-center gap-2" style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}>
          <Activity size={18} className="text-cyan-400" />
          Contribution Activity
        </h3>
        <div className="overflow-x-auto w-full pt-2">
          <img
            src={`https://ghchart.rshah.org/7C3AED/${GITHUB_USERNAME}`}
            alt="GitHub contribution chart"
            className="w-full min-w-[700px] h-auto rounded-xl opacity-90 filter invert dark:invert-0"
            loading="lazy"
          />
        </div>
        <p className="text-center mt-6">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors font-semibold"
          >
            View full profile on GitHub →
          </a>
        </p>
      </motion.div>
    </section>
  );
}
