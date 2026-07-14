"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const statusStyles: Record<string, string> = {
  "In Progress": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  Completed: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
};

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 max-w-5xl mx-auto relative z-10">
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
          Education & <span className="gradient-text">Background</span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative pl-8 border-l-2 border-cyan-500/30 space-y-8 ml-4">
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree + index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass p-6 rounded-2xl relative"
          >
            {/* Timeline node dot */}
            <div className="absolute -left-[41px] top-7 w-4 h-4 rounded-full bg-cyan-500 timeline-dot-glow" />

            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <span className="text-sm text-cyan-300 font-semibold block mb-1">
                  {edu.period}
                </span>
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
                >
                  {edu.degree}
                </h3>
                <h4 className="text-gray-300 font-medium text-sm mt-0.5 mb-3 flex items-center gap-1.5">
                  <MapPin size={14} className="text-cyan-400 shrink-0" />
                  {edu.institution}
                </h4>
              </div>

              <div className="flex flex-col items-end gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                    statusStyles[edu.status] ?? "bg-gray-500/20 text-gray-300 border-gray-500/30"
                  }`}
                >
                  {edu.status}
                </span>
                <span className="text-sm font-bold text-white">CGPA: {edu.cgpa}</span>
              </div>
            </div>

            {edu.highlights.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {edu.highlights.map((h) => (
                  <span key={h} className="tech-pill">
                    {h}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
