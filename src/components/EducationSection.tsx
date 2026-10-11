"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, CheckCircle2, Mail, Users } from "lucide-react";
import { education, academicReferences } from "@/lib/data";
import { ease } from "@/lib/motion";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 max-w-4xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3">
          <GraduationCap size={13} />
          <span>Academic Background</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
          Education & Core Coursework
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2">
          Demonstrated academic consistency from secondary education to undergraduate studies.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-7 ml-3 md:ml-4">
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree + index}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: index * 0.08, ease: ease.out }}
            className="surface-card p-6 md:p-7 relative group"
          >
            {/* Timeline node dot */}
            <div className="absolute -left-[31px] md:-left-[39px] top-6 w-3.5 h-3.5 rounded-full bg-teal-500 border-2 border-slate-900 shadow-md group-hover:bg-amber-400 transition-colors" />

            <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
              <div>
                <span className="text-xs font-mono font-semibold text-teal-300 block mb-1">
                  {edu.period}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white font-['Space_Grotesk'] group-hover:text-amber-200 transition-colors">
                  {edu.degree}
                </h3>
                <h4 className="text-sm font-medium text-slate-300 mt-0.5 flex items-center gap-1.5">
                  <MapPin size={13} className="text-slate-400" />
                  {edu.institution}
                </h4>
              </div>

              <div className="flex flex-col items-end gap-1.5">
                <span
                  className={`badge-tag ${
                    edu.status === "In Progress" ? "badge-academic" : "badge-tech"
                  } !text-[10px]`}
                >
                  {edu.status}
                </span>
                <span className="text-xs font-mono font-bold text-white bg-white/[0.05] px-2.5 py-1 rounded-md border border-white/[0.08]">
                  CGPA: {edu.cgpa}
                </span>
              </div>
            </div>

            {edu.highlights.length > 0 && (
              <div className="pt-4 mt-3 border-t border-white/[0.06]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Key Advanced Coursework:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {edu.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/[0.03] border border-white/[0.06] text-slate-300"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Academic References */}
      <div className="mt-16 pt-10 border-t border-white/[0.08]">
        <div className="flex items-center gap-2 mb-2">
          <Users size={16} className="text-teal-400" />
          <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
            Academic References & Faculty Mentors
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 mb-6">
          Faculty references from Independent University, Bangladesh who supervise and collaborate on my research and coursework.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {academicReferences.map((ref, idx) => (
            <motion.div
              key={ref.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: ease.out }}
              className="surface-card p-5 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-base font-bold text-white font-['Space_Grotesk']">
                  {ref.name}
                </h4>
                <p className="text-xs font-mono text-teal-300 font-medium mt-0.5">
                  {ref.role}
                </p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {ref.department}
                </p>
                <p className="text-[11px] text-slate-400">
                  {ref.school} · {ref.institution}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <a
                  href={`mailto:${ref.email}`}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 transition-colors font-mono"
                >
                  <Mail size={13} />
                  <span>{ref.email}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
