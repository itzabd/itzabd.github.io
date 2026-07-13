"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, FileText, ChevronDown } from "lucide-react";
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
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % TYPING_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <span className="text-accent font-semibold">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 gradient-mesh">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Availability badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="availability-badge shadow-sm">
            <span className="availability-dot" />
            Available for new opportunities
          </div>
        </motion.div>

        {/* Profile avatar */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <div className="relative">
            <motion.div
              className="w-24 h-24 rounded-full relative overflow-hidden shadow-card border border-border"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-full bg-background-alt flex items-center justify-center">
                <span
                  className="text-3xl font-bold text-accent"
                  style={{ fontFamily: "'Geist', 'Inter', sans-serif" }}
                >
                  AH
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="mb-4">
          <p className="text-sm md:text-base text-accent font-medium tracking-wide uppercase">
            Full-Stack & AI/ML Engineer
          </p>
        </motion.div>

        {/* Name */}
        <motion.div variants={itemVariants}>
          <h1
            className="text-5xl md:text-7xl font-black tracking-tight mb-4 leading-tight text-text-primary"
            style={{ fontFamily: "'Geist', 'Inter', sans-serif" }}
          >
            Abdullah Hossien
          </h1>
        </motion.div>

        {/* Bio */}
        <motion.div variants={itemVariants} className="mb-10">
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Results-driven developer with expertise in full-stack development, AI/ML applications, and system design. Proven track record of delivering innovative solutions across multiple domains including healthcare, e-commerce, and educational technology.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center mb-16">
          <motion.a
            href="#projects"
            className="btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-ghost"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail size={16} />
            Contact
          </motion.a>
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <GithubIcon size={16} />
          </motion.a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-2 text-text-muted"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 border-t border-border bg-background-alt backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-6 md:gap-12">
          {[
            { label: "Projects", value: "15+" },
            { label: "Repos", value: "16+" },
            { label: "Location", value: "Bangladesh" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2 text-sm">
              <span className="font-bold text-text-primary">{stat.value}</span>
              <span className="text-text-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
