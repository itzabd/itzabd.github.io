"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Calendar } from "lucide-react";
import { personalInfo, education, experience } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
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
            className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-text-primary"
            style={{ fontFamily: "'Geist', 'Inter', sans-serif" }}
          >
            Passionate About{" "}
            <span className="text-accent">Innovation</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
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
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-xl font-bold mb-4 text-text-primary">Professional Summary</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Results-driven developer with expertise in full-stack development, AI/ML applications, and system design. Proven track record of delivering innovative solutions across multiple domains including healthcare, e-commerce, and educational technology. Strong background in Python, JavaScript, Java, and modern web technologies.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={15} className="text-accent shrink-0" />
                <span className="text-text-secondary">Bangladesh</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Briefcase size={15} className="text-accent shrink-0" />
                <span className="text-text-secondary">Open to Full-time & Remote Roles</span>
              </div>
            </div>
          </motion.div>

          {/* Core competencies */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="glass p-8 rounded-2xl flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold mb-5 text-text-primary">Core Competencies</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Full-Stack Development",
                "AI/ML Engineering",
                "System Architecture",
                "Database Design",
                "API Integration",
                "LLM Prompt Engineering",
                "Signal Processing (EEG)",
                "OOP Principles",
                "Scalability Planning",
                "Team Collaboration",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-background-alt border border-border rounded-full text-sm font-medium text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
