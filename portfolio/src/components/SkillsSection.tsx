"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Brain, Layout, Server, Database, Wrench } from "lucide-react";
import { skills } from "@/lib/data";

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Code2, Brain, Layout, Server, Database, Wrench,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function ProficiencyBar({ level, color }: { level: number; color: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="proficiency-bar">
      <motion.div
        className="proficiency-fill"
        style={{ backgroundImage: `linear-gradient(90deg, #2563EB, #8B5CF6, #06B6D4)` }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="tag-pill mb-4 inline-block">Skills & Expertise</span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Technical{" "}
            <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A versatile toolkit spanning AI/ML, full-stack development, and system design.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, si) => {
            const Icon = iconMap[skill.icon] || Code2;
            return (
              <motion.div
                key={skill.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: si * 0.08,
                    },
                  },
                }}
              >
                <motion.div
                  className="gradient-border p-6 h-full group cursor-default"
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-15 flex items-center justify-center`}
                      style={{
                        background: `linear-gradient(135deg, rgba(37,99,235,0.15), rgba(139,92,246,0.15))`,
                      }}
                    >
                      <Icon
                        size={18}
                        className={`bg-gradient-to-r ${skill.color} bg-clip-text`}
                        style={{ color: "#60a5fa" }}
                      />
                    </div>
                    <h3 className="font-bold text-white">{skill.category}</h3>
                  </div>

                  {/* Skills list */}
                  <div className="space-y-4">
                    {skill.items.map((item) => (
                      <div key={item.name}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm text-slate-300 font-medium">{item.name}</span>
                          <span className="text-xs text-slate-500">{item.level}%</span>
                        </div>
                        <ProficiencyBar level={item.level} color={skill.color} />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
