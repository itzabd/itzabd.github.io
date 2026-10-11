"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Mail, 
  Briefcase, 
  GraduationCap, 
  Award, 
  FileText, 
  Sparkles,
  CheckCircle2 
} from "lucide-react";
import { personalInfo } from "@/lib/data";
import { ease } from "@/lib/motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-3">
          <Sparkles size={12} />
          <span>Profile & Aspirations</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
          Bridging Research Rigor with Real-World Engineering
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Credential Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: ease.out }}
          className="lg:col-span-5 surface-card p-6 md:p-8 flex flex-col justify-between"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/20 bg-slate-900 shrink-0">
              <img
                src="/profile.jpg"
                alt="Md Abdullah Hossien"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
                {personalInfo.displayName}
              </h3>
              <p className="text-xs font-mono text-teal-300">
                {personalInfo.targetAspiration}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                {personalInfo.location}
              </p>
            </div>
          </div>

          <div className="space-y-3 py-4 border-y border-white/[0.08] text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Undergraduate Degree</span>
              <span className="text-white font-medium text-right">B.Sc. in Computer Science</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Institution</span>
              <span className="text-white font-medium text-right">Independent University, Bangladesh</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Cumulative GPA</span>
              <span className="text-amber-300 font-bold font-mono">3.64 / 4.00 (Dean&apos;s List)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">SSC & HSC Results</span>
              <span className="text-teal-300 font-bold font-mono">GPA 5.00 / 5.00 (Both)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Research Affiliation</span>
              <span className="text-white font-medium text-right">Faculty RA · CSE Dept.</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Teaching Experience</span>
              <span className="text-white font-medium text-right">TA (100+ students/term)</span>
            </div>
          </div>

          <div className="pt-6 flex flex-col gap-2.5">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center !w-full !text-xs !py-2.5"
            >
              <FileText size={15} />
              <span>Download Academic CV (PDF)</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-secondary justify-center !w-full !text-xs !py-2.5"
            >
              <Mail size={15} />
              <span>Contact Directly</span>
            </a>
          </div>
        </motion.div>

        {/* Right Side: Detailed Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: ease.out, delay: 0.1 }}
          className="lg:col-span-7 surface-card p-6 md:p-8 space-y-6"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-3 font-['Space_Grotesk']">
              About My Research & Engineering Vision
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              I am a final-year Computer Science student at Independent University, Bangladesh with a passion for developing machine learning systems that address real-world health and accessibility challenges in developing and global environments.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center gap-2 mb-1.5 text-amber-300 font-semibold text-xs tracking-wide uppercase font-mono">
                <GraduationCap size={15} />
                <span>Graduate School Aspirations (Master&apos;s)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                I am preparing applications for Master&apos;s programs in Computer Science and Artificial Intelligence. My research interests center on <strong>clinical healthcare AI, medical biosignal processing (EEG / Cardiotocography), explainable machine learning</strong>, and <strong>low-cost assistive robotics</strong>. I am enthusiastic about contributing to faculty research labs as a Graduate Research or Teaching Assistant.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center gap-2 mb-1.5 text-teal-300 font-semibold text-xs tracking-wide uppercase font-mono">
                <Briefcase size={15} />
                <span>Production & Systems Engineering</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Beyond academic publications, I believe impactful software requires robust engineering. I architect full-stack production platforms using <strong>React, TypeScript, Flask, PostgreSQL/Supabase, Docker, and REST APIs</strong>. My deployed systems include civic mapping tools for urban street vendors and high-traffic e-commerce infrastructure with automated payments.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3">
              Core Competency Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-teal-400 shrink-0" />
                <span>4 Papers (Springer LNCS, IEEE, CCE, ICSIE)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-teal-400 shrink-0" />
                <span>Undergraduate TA for 100+ CS students</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-teal-400 shrink-0" />
                <span>End-to-End full-stack web & API development</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-teal-400 shrink-0" />
                <span>FIDE International standard chess coordinator</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
