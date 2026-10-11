"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Layout,
  Database,
  Wrench,
  Sparkles,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { skills } from "@/lib/data";
import { ease } from "@/lib/motion";

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
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-3">
          <Layers size={13} />
          <span>Technical Stack</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
          Engineering & Research Toolkit
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2">
          Technologies and tools utilized across empirical research experiments and scalable production environments.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, catIndex) => {
          const Icon = iconMap[category.icon] ?? Code2;
          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: catIndex * 0.07, ease: ease.out }}
              className="surface-card p-6 relative group"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/[0.06]">
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-teal-300 shrink-0">
                  <Icon size={18} />
                </div>
                <h3 className="text-base font-bold text-white font-['Space_Grotesk']">
                  {category.category}
                </h3>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-medium text-slate-200 hover:border-teal-400/40 hover:bg-teal-500/[0.05] transition-all"
                  >
                    <span>{skill.name}</span>
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
