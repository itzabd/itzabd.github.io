"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Layout,
  Database,
  Wrench,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { skills } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Brain,
  Layout,
  Database,
  Wrench,
  Sparkles,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h2
          className="text-3xl font-bold text-white"
          style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
        >
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-sm text-gray-400 mt-3 max-w-xl mx-auto">
          A snapshot of the tools and technologies I work with, grouped by discipline.
        </p>
      </motion.div>

      {/* Category grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, catIndex) => {
          const Icon = iconMap[category.icon] ?? Code2;
          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              className="glass p-6 rounded-2xl relative overflow-hidden group"
            >
              <div className="card-accent-bar" />

              {/* Category title */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shrink-0`}
                >
                  <Icon size={18} />
                </div>
                <h3
                  className="text-base font-bold text-white"
                  style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
                >
                  {category.category}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {category.items.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-xs text-gray-500 font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
