"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Brain, Layout, Server, Database, Wrench } from "lucide-react";
import { skills } from "@/lib/data";

const iconMap: Record<string, React.FC<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  Code2, Brain, Layout, Server, Database, Wrench,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

// Progress bars removed in favor of clean chips

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="tag-pill mb-4 inline-block">Skills & Expertise</span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-text-primary"
            style={{ fontFamily: "'Geist', 'Inter', sans-serif" }}
          >
            Technical{" "}
            <span className="text-accent">Arsenal</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
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
                      ease: [0.25, 0.46, 0.45, 0.94] as const,
                      delay: si * 0.08,
                    },
                  },
                }}
              >
                <motion.div
                  className="glass p-6 h-full flex flex-col"
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <h3 className="font-bold text-text-primary">{skill.category}</h3>
                  </div>

                  {/* Skills list (Chips) */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {skill.items.map((item) => (
                      <span
                        key={item.name}
                        className="px-3 py-1.5 bg-background border border-border rounded-lg text-sm font-medium text-text-secondary shadow-sm"
                      >
                        {item.name}
                      </span>
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
