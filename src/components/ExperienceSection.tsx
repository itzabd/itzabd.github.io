"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, GraduationCap, CheckCircle2 } from "lucide-react";
import { experience } from "@/lib/data";
import { ease } from "@/lib/motion";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 max-w-4xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-3">
          <Briefcase size={13} />
          <span>Academic & Campus Roles</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
          Research & Teaching Experience
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2">
          Hands-on faculty research, undergraduate course mentorship, and campus leadership.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-7 ml-3 md:ml-4">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.role + index}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: index * 0.08, ease: ease.out }}
            className="surface-card p-6 md:p-7 relative group"
          >
            {/* Timeline node dot */}
            <div className="absolute -left-[31px] md:-left-[39px] top-6 w-3.5 h-3.5 rounded-full bg-indigo-500 border-2 border-slate-900 shadow-md group-hover:bg-amber-400 transition-colors" />

            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono font-semibold text-amber-300">
                {exp.period}
              </span>
              <span className="badge-tag badge-subtle !text-[10px]">
                {exp.type}
              </span>
            </div>

            <h3 className="text-lg md:text-xl font-bold text-white font-['Space_Grotesk'] group-hover:text-amber-200 transition-colors">
              {exp.role}
            </h3>
            <h4 className="text-sm font-medium text-slate-300 mt-0.5 mb-4">
              {exp.company}
            </h4>
            
            <ul className="space-y-2 mt-3 pt-3 border-t border-white/[0.06]">
              {exp.highlights.map((highlight, hIndex) => (
                <li key={hIndex} className="text-slate-300 text-xs md:text-sm flex items-start gap-2.5 leading-relaxed">
                  <CheckCircle2 size={15} className="text-teal-400 mt-0.5 shrink-0" />
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
