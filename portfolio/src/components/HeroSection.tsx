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
    <span className="gradient-text">
      {displayed}
      <span className="animate-pulse text-blue-400">|</span>
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
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Availability badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="availability-badge">
            <span className="availability-dot" />
            {personalInfo.availability}
          </div>
        </motion.div>

        {/* Profile avatar */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="relative">
            <motion.div
              className="w-28 h-28 rounded-full relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Gradient ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #2563EB, #8B5CF6, #06B6D4)",
                  padding: "2px",
                }}
              >
                <div className="w-full h-full rounded-full bg-[#030712] flex items-center justify-center">
                  <span
                    className="text-4xl font-bold gradient-text"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    AH
                  </span>
                </div>
              </div>
            </motion.div>
            {/* Floating glow */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)",
                filter: "blur(20px)",
                transform: "scale(1.3)",
              }}
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.div variants={itemVariants}>
          <h1
            className="text-5xl md:text-7xl font-black tracking-tight mb-3 leading-none"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="text-white">Abdullah</span>{" "}
            <span className="gradient-text">Hossien</span>
          </h1>
        </motion.div>

        {/* Title */}
        <motion.div variants={itemVariants} className="mb-6">
          <p className="text-xl md:text-2xl text-slate-300 font-medium">
            AI/ML Engineer & Full-Stack Developer
          </p>
        </motion.div>

        {/* Typing animation */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-2xl md:text-3xl font-semibold min-h-[1.5em]">
            <TypingAnimation />
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div variants={itemVariants} className="mb-10">
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Passionate CS student from Bangladesh, pioneering the application of{" "}
            <span className="text-blue-400 font-medium">Large Language Models</span> to EEG
            neuroscience data. Building elegant solutions at the intersection of AI, healthcare, and
            human potential.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center mb-16">
          <motion.a
            href="#contact"
            className="btn-primary"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail size={16} />
            Get in Touch
          </motion.a>
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <GithubIcon size={16} />
            GitHub
          </motion.a>
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </motion.a>
          <motion.a
            href="#"
            className="btn-ghost"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <FileText size={16} />
            Resume
          </motion.a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
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
        className="absolute bottom-0 left-0 right-0 border-t border-white/[0.05] bg-white/[0.02] backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-6 md:gap-12">
          {[
            { label: "Projects", value: "15+" },
            { label: "Repos", value: "13+" },
            { label: "Domains", value: "8+" },
            { label: "Location", value: "Bangladesh" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2 text-sm">
              <span className="font-bold text-white">{stat.value}</span>
              <span className="text-slate-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
