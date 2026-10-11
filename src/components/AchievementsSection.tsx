"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2, Sparkles, Trophy } from "lucide-react";
import { ease } from "@/lib/motion";

const recognitionItems = [
  {
    title: "Merit-Based Undergraduate Scholarship",
    subtitle: "Independent University, Bangladesh",
    desc: "Awarded for exceptional academic performance throughout undergraduate semesters.",
  },
  {
    title: "Dean's Honor List Recognition",
    subtitle: "School of Engineering, Technology & Sciences (SETS)",
    desc: "Recognized multiple semesters for maintaining top percentile cumulative GPA.",
  },
  {
    title: "International FIDE Rapid Chess Rating",
    subtitle: "Fédération Internationale des Échecs (FIDE)",
    desc: "Official competitive chess rating adhering to international tournament regulations.",
  },
  {
    title: "Event Coordinator — FIDE July Memorial Championship",
    subtitle: "IUB Chess Club",
    desc: "Directing tournament operations, player registration, and arbiter standards.",
  },
];

export default function AchievementsSection() {
  return (
    <section id="honors" className="py-20 px-4 max-w-5xl mx-auto relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3">
          <Trophy size={13} />
          <span>Recognition</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
          Honors & Academic Distinctions
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {recognitionItems.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.07, ease: ease.out }}
            className="surface-card p-5 flex items-start gap-3.5 group hover:border-amber-400/30 transition-all"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5 group-hover:bg-amber-500/20 transition-colors">
              <Award size={18} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors font-['Space_Grotesk']">
                {item.title}
              </h3>
              <p className="text-[11px] font-mono text-teal-300 mt-0.5">
                {item.subtitle}
              </p>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
