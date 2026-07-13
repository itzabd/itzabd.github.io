"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FolderGit2, Layers, GraduationCap, Trophy, Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { achievements } from "@/lib/data";

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  FolderGit2, Github: GithubIcon, Layers, GraduationCap, Trophy, Sparkles,
};

function AnimatedStat({ value, delay }: { value: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="text-4xl md:text-5xl font-black gradient-text block"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {value}
    </motion.span>
  );
}

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tag-pill mb-4 inline-block">Achievements</span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            By The{" "}
            <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Milestones that reflect my dedication to engineering excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {achievements.map((ach, i) => {
            const Icon = iconMap[ach.icon] || Trophy;
            return (
              <motion.div
                key={ach.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <motion.div
                  className="gradient-border p-7 text-center group h-full"
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={22} className={ach.color} />
                    </div>
                  </div>
                  <AnimatedStat value={ach.value} delay={i * 0.1 + 0.3} />
                  <p className="text-slate-400 text-sm mt-2 font-medium">{ach.label}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
