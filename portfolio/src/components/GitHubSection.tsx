"use client";

import { motion } from "framer-motion";
import { GitBranch, Star, Activity } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

const GITHUB_USERNAME = "itzabd";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const stats = [
  {
    label: "Repositories",
    value: "13+",
    icon: GitBranch,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/25",
  },
  {
    label: "Projects",
    value: "15+",
    icon: Star,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/25",
  },
  {
    label: "Followers",
    value: "1",
    icon: GithubIcon,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/25",
  },
  {
    label: "Streak",
    value: "Active",
    icon: Activity,
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/25",
  },
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
    <section id="github" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="tag-pill mb-4 inline-block">GitHub</span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Open Source{" "}
            <span className="gradient-text">Activity</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Consistent contributor with a diverse portfolio across multiple languages and domains.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeInUp}>
              <div
                className={`glass p-5 flex flex-col items-center text-center rounded-2xl border ${stat.bg}`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${stat.bg}`}>
                  <stat.icon size={18} className={stat.color} />
                </div>
                <span
                  className={`text-2xl font-black ${stat.color}`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {stat.value}
                </span>
                <span className="text-slate-500 text-xs mt-1">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* GitHub Stats Card via badges */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            className="gradient-border p-6 rounded-2xl"
          >
            <h3 className="font-bold text-white mb-5 flex items-center gap-2">
              <GithubIcon size={18} className="text-blue-400" />
              GitHub Stats
            </h3>
            <div className="space-y-4">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=tokyonight&bg_color=00000000&hide_border=true&text_color=94a3b8&title_color=60a5fa&icon_color=8b5cf6&count_private=true`}
                alt="GitHub Stats"
                className="w-full rounded-xl"
                loading="lazy"
              />
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=tokyonight&background=00000000&border=ffffff15&ring=2563EB&fire=8B5CF6&currStreakLabel=60a5fa&sideLabels=94a3b8&dates=64748b&stroke=ffffff10`}
                alt="GitHub Streak"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Language chart */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            className="gradient-border p-6 rounded-2xl flex flex-col"
          >
            <h3 className="font-bold text-white mb-5 flex items-center gap-2">
              <Activity size={18} className="text-purple-400" />
              Language Distribution
            </h3>

            {/* Stacked bar */}
            <div className="flex h-3 rounded-full overflow-hidden mb-6 gap-0.5">
              {languageStats.map((lang) => (
                <motion.div
                  key={lang.name}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                  style={{ background: lang.color }}
                  className="h-full first:rounded-l-full last:rounded-r-full"
                />
              ))}
            </div>

            <div className="space-y-3 flex-1">
              {languageStats.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: lang.color }}
                    />
                    <span className="text-sm text-slate-300">{lang.name}</span>
                  </div>
                  <span className="text-sm text-slate-500 font-medium">{lang.percent}%</span>
                </div>
              ))}
            </div>

            {/* Top Languages Image */}
            <div className="mt-6">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=tokyonight&bg_color=00000000&hide_border=true&text_color=94a3b8&title_color=60a5fa`}
                alt="Top Languages"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Contribution graph */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          className="mt-8 gradient-border p-6 rounded-2xl"
        >
          <h3 className="font-bold text-white mb-5 flex items-center gap-2">
            <Activity size={18} className="text-cyan-400" />
            Contribution Activity
          </h3>
          <img
            src={`https://ghchart.rshah.org/2563EB/${GITHUB_USERNAME}`}
            alt="GitHub contribution chart"
            className="w-full rounded-xl opacity-80"
            loading="lazy"
          />
          <p className="text-center mt-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm transition-colors animated-underline"
            >
              View full profile on GitHub →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
