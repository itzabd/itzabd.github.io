"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  BookOpen, 
  GraduationCap, 
  Users, 
  Trophy, 
  ArrowDown, 
  Mail, 
  Sparkles,
  ExternalLink 
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, ScholarIcon } from "@/components/icons";
import { personalInfo, achievements } from "@/lib/data";
import { ease, spring } from "@/lib/motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: ease.out },
  },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-16 overflow-hidden dot-grid"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center"
      >
        {/* Availability Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="availability-pill">
            <span className="availability-dot" />
            <span>Open for Master&apos;s Admissions (Fall 2026/Spring 2027) & ML Roles</span>
          </div>
        </motion.div>

        {/* Profile Image with Academic Glow */}
        <motion.div variants={itemVariants} className="mb-6 relative">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.04 }}
            transition={spring.subtle}
          >
            <div
              className="absolute -inset-1.5 rounded-full opacity-40 blur-md"
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--teal))",
              }}
            />
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/20 bg-slate-900 shadow-2xl">
              <img
                src="/profile.jpg"
                alt="Md Abdullah Hossien"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Aspirations Tag */}
        <motion.div variants={itemVariants} className="mb-3">
          <span className="badge-tag badge-academic text-xs">
            <Sparkles size={12} className="inline mr-1" />
            {personalInfo.targetAspiration}
          </span>
        </motion.div>

        {/* Name */}
        <motion.div variants={itemVariants} className="mb-3">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-['Space_Grotesk']"
          >
            Md. Abdullah <span className="gradient-gold">Hossien</span>
          </h1>
        </motion.div>

        {/* Primary Role & Institution */}
        <motion.div variants={itemVariants} className="mb-5 max-w-2xl">
          <p className="text-lg md:text-xl font-medium text-slate-300">
            AI/ML Researcher & Full-Stack Developer
          </p>
          <p className="text-sm text-slate-400 mt-1 font-mono">
            B.Sc. in Computer Science · Independent University, Bangladesh · <span className="text-amber-300 font-semibold">CGPA 3.64</span>
          </p>
        </motion.div>

        {/* Concise High-Signal Bio */}
        <motion.div variants={itemVariants} className="mb-8 max-w-2xl">
          <p className="text-sm md:text-base leading-relaxed text-slate-300/90">
            Undergraduate Research Assistant & Teaching Assistant with{" "}
            <strong className="text-white font-semibold">4 papers (2 Published at Springer LNCS & IEEE, 2 Accepted)</strong>. 
            Investigating trustworthy ML for clinical healthcare & neurotechnology while engineering scalable production platforms.
          </p>
        </motion.div>

        {/* Primary Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center mb-10">
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            whileTap={{ scale: 0.98 }}
          >
            <FileText size={16} />
            <span>Download Curriculum Vitae</span>
          </motion.a>

          <motion.a
            href="#research"
            className="btn-secondary"
            whileTap={{ scale: 0.98 }}
          >
            <BookOpen size={16} className="text-amber-400" />
            <span>View Publications ({achievements[0].value})</span>
          </motion.a>

          <motion.a
            href="#journey"
            className="btn-secondary"
            whileTap={{ scale: 0.98 }}
          >
            <span>The Journey</span>
          </motion.a>

          <motion.a
            href={personalInfo.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !px-3"
            aria-label="Google Scholar"
            title="Google Scholar Profile"
            whileTap={{ scale: 0.98 }}
          >
            <ScholarIcon size={16} className="text-amber-400" />
          </motion.a>

          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !px-3"
            aria-label="GitHub"
            title="GitHub Profile"
            whileTap={{ scale: 0.98 }}
          >
            <GithubIcon size={16} />
          </motion.a>

          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !px-3"
            aria-label="LinkedIn"
            title="LinkedIn Profile"
            whileTap={{ scale: 0.98 }}
          >
            <LinkedinIcon size={16} />
          </motion.a>

          <motion.a
            href={personalInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !px-3"
            aria-label="Instagram"
            title="Instagram Profile"
            whileTap={{ scale: 0.98 }}
          >
            <InstagramIcon size={16} />
          </motion.a>

          <motion.a
            href="#contact"
            className="btn-secondary !px-3"
            aria-label="Email"
            title="Contact / Email"
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={16} />
          </motion.a>
        </motion.div>

        {/* Metric Cards (Academic & Engineering Signals) */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 w-full max-w-4xl"
        >
          {achievements.map((item) => (
            <div
              key={item.label}
              className="surface-card p-3.5 flex flex-col items-center justify-center text-center group"
            >
              <span className="text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-white group-hover:text-amber-300 transition-colors">
                {item.value}
              </span>
              <span className="text-[11px] font-medium text-slate-400 mt-1 leading-snug">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll Hint */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col items-center gap-2 text-slate-500 text-xs font-mono"
        >
          <span>EXPLORE THE JOURNEY</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
