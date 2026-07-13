"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 max-w-4xl mx-auto relative z-10">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}>
          Work <span className="gradient-text">Experience</span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative pl-8 border-l-2 border-violet-500/30 space-y-8 ml-4">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.role + index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass p-6 rounded-2xl relative"
          >
            {/* Timeline node dot */}
            <div className="absolute -left-[41px] top-7 w-4 h-4 rounded-full bg-violet-500 timeline-dot-glow" />

            {/* Content */}
            <span className="text-sm text-violet-300 font-semibold block mb-1">
              {exp.period}
            </span>
            <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}>
              {exp.role}
            </h3>
            <h4 className="text-cyan-300 font-medium text-sm mt-0.5 mb-3">
              {exp.company} • <span className="text-gray-400 text-xs">{exp.type}</span>
            </h4>
            
            <ul className="space-y-2 mt-2">
              {exp.highlights.map((highlight, hIndex) => (
                <li key={hIndex} className="text-gray-300 text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
