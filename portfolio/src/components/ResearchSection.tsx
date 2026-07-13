"use client";

import { motion } from "framer-motion";
import { Brain, HeartPulse, Cpu, Glasses, Calendar, Tag } from "lucide-react";
import { researchAreas } from "@/lib/data";

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Brain, HeartPulse, Cpu, Glasses,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function ResearchSection() {
  return (
    <section id="research" className="section-padding relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="tag-pill mb-4 inline-block">Research</span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Research &{" "}
            <span className="gradient-text">Innovation</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Pushing boundaries at the frontier of AI, neurotechnology, and healthcare systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px z-0"
            style={{
              background: "linear-gradient(to bottom, rgba(37,99,235,0.5), rgba(139,92,246,0.3), rgba(6,182,212,0.1), transparent)",
              transform: "translateX(-50%)",
            }}
          />

          <div className="space-y-10">
            {researchAreas.map((area, i) => {
              const Icon = iconMap[area.icon] || Brain;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={area.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={{
                    hidden: { opacity: 0, x: isLeft ? -40 : 40 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.1 },
                    },
                  }}
                  className={`relative flex items-start gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-20 flex-shrink-0">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#030712]`}
                      style={{
                        background: "linear-gradient(135deg, #2563EB, #8B5CF6)",
                        boxShadow: "0 0 20px rgba(37,99,235,0.5)",
                      }}
                    >
                      <Icon size={16} className="text-white" />
                    </div>
                  </div>

                  {/* Spacer for desktop centering */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <motion.div
                      className="gradient-border p-6 rounded-2xl group"
                      whileHover={{ y: -4, transition: { duration: 0.3 } }}
                    >
                      {/* Year */}
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar size={13} className="text-slate-500" />
                        <span className="text-xs text-slate-500 font-medium">{area.year}</span>
                      </div>

                      <h3
                        className="font-bold text-lg text-white mb-2 group-hover:gradient-text transition-all"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {area.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {area.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {area.tags.map((tag) => (
                          <span key={tag} className="tag-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
