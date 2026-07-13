"use client";

import { motion } from "framer-motion";
import { GitBranch, Star, Activity } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

const GITHUB_USERNAME = "itzabd";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const stats = [
  {
    label: "Repositories",
    value: "16+",
    icon: GitBranch,
    color: "text-accent",
    bg: "bg-background-alt border-border",
  },
  {
    label: "Projects",
    value: "15+",
    icon: Star,
    color: "text-accent",
    bg: "bg-background-alt border-border",
  },
  {
    label: "Followers",
    value: "Active",
    icon: GithubIcon,
    color: "text-accent",
    bg: "bg-background-alt border-border",
  },
  {
    label: "Status",
    value: "Open",
    icon: Activity,
    color: "text-accent",
    bg: "bg-background-alt border-border",
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
    <section id="github" className="section-padding relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="tag-pill mb-4 inline-block">GitHub</span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-text-primary"
            style={{ fontFamily: "'Geist', 'Inter', sans-serif" }}
          >
            Open Source{" "}
            <span className="text-accent">Activity</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
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
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 border border-border bg-background`}>
                  <stat.icon size={18} className={stat.color} />
                </div>
                <span
                  className={`text-2xl font-black ${stat.color}`}
                  style={{ fontFamily: "'Geist', 'Inter', sans-serif" }}
                >
                  {stat.value}
                </span>
                <span className="text-text-muted text-xs mt-1">{stat.label}</span>
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
            className="glass p-6 rounded-2xl"
          >
            <h3 className="font-bold text-text-primary mb-5 flex items-center gap-2">
              <GithubIcon size={18} className="text-accent" />
              GitHub Stats
            </h3>
            <div className="space-y-4">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=default&bg_color=FBFBFD00&hide_border=true&title_color=4F46E5&icon_color=4F46E5&text_color=334155`}
                alt="GitHub Stats"
                className="w-full rounded-xl"
                loading="lazy"
              />
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=default&background=FBFBFD00&border=0F172A0F&ring=4F46E5&fire=4338CA&currStreakLabel=4F46E5&sideLabels=334155&dates=64748b&stroke=0F172A0F`}
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
            className="glass p-6 rounded-2xl flex flex-col"
          >
            <h3 className="font-bold text-text-primary mb-5 flex items-center gap-2">
              <Activity size={18} className="text-accent" />
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
                    <span className="text-sm text-text-secondary">{lang.name}</span>
                  </div>
                  <span className="text-sm text-text-muted font-medium">{lang.percent}%</span>
                </div>
              ))}
            </div>

            {/* Top Languages Image */}
            <div className="mt-6">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=default&bg_color=FBFBFD00&hide_border=true&text_color=334155&title_color=4F46E5`}
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
          className="mt-8 glass p-6 rounded-2xl"
        >
          <h3 className="font-bold text-text-primary mb-5 flex items-center gap-2">
            <Activity size={18} className="text-accent" />
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
              className="text-accent hover:text-accent-hover text-sm transition-colors font-medium"
            >
              View full profile on GitHub →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
