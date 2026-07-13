"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

const TYPING_WORDS = personalInfo.taglines;

function TypingAnimation() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPING_WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % TYPING_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <span className="gradient-text font-bold">
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "1em",
          background: "var(--accent-light)",
          marginLeft: "2px",
          verticalAlign: "text-bottom",
          animation: "pulse-dot 1s infinite",
        }}
      />
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-20 overflow-hidden"
    >
      {/* Dot grid overlay */}
      <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto w-full"
      >
        {/* Availability badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="availability-badge">
            <span className="availability-dot" />
            Available for new opportunities
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 280 }}
          >
            <div
              className="absolute -inset-2 rounded-full opacity-50"
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--cyan))",
                filter: "blur(12px)",
              }}
            />
            <div
              className="relative w-32 h-32 rounded-full glass flex items-center justify-center"
              style={{ borderColor: "rgba(124,58,237,0.3)", borderWidth: "2px" }}
            >
              <span
                className="text-4xl font-black gradient-text"
                style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
              >
                AH
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="flex justify-center mb-4">
          <span className="eyebrow">BSc Computer Science · IUB Bangladesh</span>
        </motion.div>

        {/* Name */}
        <motion.div variants={itemVariants} className="mb-3">
          <h1
            className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]"
            style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
          >
            <span className="text-white">Abdullah </span>
            <span className="gradient-text">Hossien</span>
          </h1>
        </motion.div>

        {/* Title */}
        <motion.div variants={itemVariants} className="mb-4">
          <p className="text-xl" style={{ color: "var(--accent-light)" }}>
            AI/ML Researcher & Full-Stack Developer
          </p>
        </motion.div>

        {/* Typing tagline */}
        <motion.div variants={itemVariants} className="mb-6 h-8">
          <p className="text-lg md:text-xl font-medium" style={{ color: "var(--text-secondary)" }}>
            <TypingAnimation />
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div variants={itemVariants} className="mb-10">
          <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Research Assistant & Teaching Assistant at IUB with{" "}
            <strong className="text-white">2 published papers</strong> at HCII 2026 (Springer) & IEEE.
            Building AI-powered platforms in healthcare, neurotechnology, and civic tech.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center mb-12">
          <motion.a href="#projects" className="btn-primary" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            View Projects
          </motion.a>
          <motion.a href="#contact" className="btn-ghost" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Mail size={16} />
            Contact Me
          </motion.a>
          <motion.a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-ghost" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <GithubIcon size={16} />
            GitHub
          </motion.a>
          <motion.a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <LinkedinIcon size={16} />
            LinkedIn
          </motion.a>
        </motion.div>

        {/* Stats pills */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-14">
          {[
            { label: "CGPA", value: "3.66" },
            { label: "Published Papers", value: "2" },
            { label: "Projects", value: "4+" },
            { label: "Location", value: "Dhaka, BD" },
          ].map((s) => (
            <div key={s.label} className="glass px-6 py-3 rounded-full text-center min-w-[100px]">
              <span className="text-lg font-bold text-white block">{s.value}</span>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-2" style={{ color: "var(--text-muted)" }}>
          <span className="text-xs uppercase tracking-widest font-semibold">Scroll to explore</span>
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
