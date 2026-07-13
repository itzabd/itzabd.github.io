"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const recognitionItems = [
  "Merit-based Undergraduate Scholarship — Independent University, Bangladesh",
  "Dean's Merit List recognition",
  "International FIDE Rapid Chess Rating",
  "Volunteer — Independence Day Chess Competition 2024 (IUB)",
  "Event Coordinator — July Memorial FIDE Chess Championship 2025 (IUB)"
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-4 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}>
          Key <span className="gradient-text">Achievements</span>
        </h2>
      </motion.div>

      {/* Stats Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {achievements.map((ach, index) => (
          <motion.div
            key={ach.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="text-center min-w-[120px]"
          >
            <span
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent block"
              style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
            >
              {ach.value}
            </span>
            <span className="text-sm text-gray-400 mt-1 block">
              {ach.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Recognition panel */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="glass p-6 rounded-2xl mt-12 max-w-3xl mx-auto relative overflow-hidden"
      >
        <div className="card-accent-bar" />
        <h3 className="text-lg font-bold text-white mb-4" style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}>
          Honors & Extracurricular Roles
        </h3>
        
        <div className="divide-y divide-white/5">
          {recognitionItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-gray-300 py-3 last:pb-0 first:pt-0">
              <span className="w-2 h-2 rounded-full bg-violet-400 shrink-0" />
              <span className="text-sm leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
