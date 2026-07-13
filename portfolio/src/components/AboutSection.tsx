"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Calendar } from "lucide-react";
import { personalInfo, education, experience } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="tag-pill mb-4 inline-block">About Me</span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Passionate About{" "}
            <span className="gradient-text">Innovation</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A developer who builds at the intersection of intelligence and impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Bio card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="gradient-border p-8 rounded-2xl"
          >
            <h3 className="text-xl font-bold mb-4 text-white">Professional Summary</h3>
            <p className="text-slate-400 leading-relaxed mb-6">{personalInfo.bio}</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={15} className="text-blue-400 shrink-0" />
                <span className="text-slate-300">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Briefcase size={15} className="text-purple-400 shrink-0" />
                <span className="text-slate-300">Open to Full-time & Remote Roles</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <GraduationCap size={15} className="text-cyan-400 shrink-0" />
                <span className="text-slate-300">B.Sc Computer Science — In Progress</span>
              </div>
            </div>
          </motion.div>

          {/* Core competencies */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="gradient-border p-8 rounded-2xl"
          >
            <h3 className="text-xl font-bold mb-5 text-white">Core Competencies</h3>
            <motion.ul variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
              {[
                { label: "Full-Stack Development", desc: "Frontend & Backend" },
                { label: "AI / ML Engineering", desc: "LLM Integration, Signal Processing" },
                { label: "EEG Neurotechnology", desc: "Brainwave Analysis, Cognitive AI" },
                { label: "Healthcare Systems", desc: "DBMS, Workflow Optimization" },
                { label: "System Architecture", desc: "Scalable Design, OOP Principles" },
                { label: "API Development", desc: "REST APIs, Integration" },
              ].map((item) => (
                <motion.li
                  key={item.label}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mt-2 shrink-0" />
                  <div>
                    <span className="text-slate-200 font-medium text-sm">{item.label}</span>
                    <span className="text-slate-500 text-xs ml-2">— {item.desc}</span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Education & Experience timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Education */}
          <motion.div variants={fadeInUp}>
            <h3 className="flex items-center gap-2 text-lg font-bold mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                <GraduationCap size={16} className="text-blue-400" />
              </div>
              Education
            </h3>
            {education.map((edu, i) => (
              <div key={i} className="relative pl-12 mb-8">
                <div className="timeline-line" />
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <GraduationCap size={16} className="text-white" />
                </div>
                <div className="glass p-5 rounded-xl ml-2">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="inline-flex items-center gap-1 text-xs bg-blue-500/15 text-blue-300 border border-blue-500/25 rounded-full px-2.5 py-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      {edu.status}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Calendar size={11} />
                      {edu.period}
                    </span>
                  </div>
                  <h4 className="font-bold text-white mb-1">{edu.degree}</h4>
                  <p className="text-slate-400 text-sm mb-3">{edu.institution}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Experience */}
          <motion.div variants={fadeInUp}>
            <h3 className="flex items-center gap-2 text-lg font-bold mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
                <Briefcase size={16} className="text-purple-400" />
              </div>
              Experience
            </h3>
            {experience.map((exp, i) => (
              <div key={i} className="relative pl-12 mb-8">
                <div className="timeline-line" />
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <Briefcase size={16} className="text-white" />
                </div>
                <div className="glass p-5 rounded-xl ml-2">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="inline-flex items-center gap-1 text-xs bg-purple-500/15 text-purple-300 border border-purple-500/25 rounded-full px-2.5 py-0.5">
                      {exp.type}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Calendar size={11} />
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="font-bold text-white mb-1">{exp.role}</h4>
                  <p className="text-slate-400 text-sm mb-3">{exp.company}</p>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-purple-400 mt-0.5 shrink-0">→</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
