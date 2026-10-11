"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  BookOpen, 
  GraduationCap, 
  ArrowDown, 
  Mail, 
  Sparkles,
  Award,
  Layers
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, ScholarIcon } from "@/components/icons";
import { personalInfo, achievements } from "@/lib/data";
import { ease, spring } from "@/lib/motion";
import Tooltip from "@/components/Tooltip";

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
  hidden: { opacity: 0, y: 16 },
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
      className="relative min-h-[92vh] flex items-center justify-center px-4 pt-28 pb-16 overflow-hidden dot-grid"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto w-full"
      >
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative, Positioning, Actions & Key Stats */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Availability Pill */}
            <motion.div variants={itemVariants} className="mb-4">
              <div className="availability-pill">
                <span className="availability-dot" />
                <span>{personalInfo.availability}</span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants} className="mb-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Space_Grotesk'] leading-[1.1]">
                Hi, I&apos;m <span className="gradient-gold">Md. Abdullah Hossien</span>
              </h1>
            </motion.div>

            {/* Title & Affiliation */}
            <motion.div variants={itemVariants} className="mb-5">
              <p className="text-lg sm:text-xl font-medium text-slate-200">
                AI/ML Researcher & Full-Stack Developer
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
                B.Sc. in Computer Science · Independent University, Bangladesh ·{" "}
                <span className="text-amber-300 font-semibold">CGPA 3.64</span>
              </p>
            </motion.div>

            {/* Bio Summary */}
            <motion.div variants={itemVariants} className="mb-7 max-w-xl">
              <p className="text-sm sm:text-base leading-relaxed text-slate-300/90">
                Undergraduate Research Assistant & Teaching Assistant with{" "}
                <strong className="text-white font-semibold">
                  4 papers (2 Published at Springer LNCS & IEEE, 2 Accepted)
                </strong>
                . Investigating trustworthy ML for clinical healthcare & computer vision, while engineering scalable full-stack production platforms.
              </p>
            </motion.div>

            {/* Action Buttons & Socials */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-9"
            >
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                whileTap={{ scale: 0.98 }}
              >
                <FileText size={16} />
                <span>Download CV</span>
              </motion.a>

              <motion.a
                href="#research"
                className="btn-secondary"
                whileTap={{ scale: 0.98 }}
              >
                <BookOpen size={16} className="text-amber-400" />
                <span>Publications (4)</span>
              </motion.a>

              <motion.a
                href="#journey"
                className="btn-secondary hidden sm:inline-flex"
                whileTap={{ scale: 0.98 }}
              >
                <span>The Journey</span>
              </motion.a>

              {/* Grouped Social Icons with Tooltips */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <Tooltip content="Google Scholar Profile" position="top">
                  <a
                    href={personalInfo.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-300 hover:text-amber-400 hover:bg-white/[0.06] transition-colors"
                    aria-label="Google Scholar"
                  >
                    <ScholarIcon size={16} />
                  </a>
                </Tooltip>

                <Tooltip content="GitHub Profile (@itzabd)" position="top">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={16} />
                  </a>
                </Tooltip>

                <Tooltip content="LinkedIn Profile" position="top">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon size={16} />
                  </a>
                </Tooltip>

                <Tooltip content="Instagram (@itz_abd_)" position="top">
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-300 hover:text-pink-400 hover:bg-white/[0.06] transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={16} />
                  </a>
                </Tooltip>

                <Tooltip content="Send Email" position="top">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={16} />
                  </a>
                </Tooltip>
              </div>
            </motion.div>

            {/* Quick High-Signal Stats Row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl pt-5 border-t border-white/[0.08]"
            >
              <div className="surface-card !p-3 text-center lg:text-left">
                <span className="text-xl lg:text-2xl font-bold font-['JetBrains_Mono'] text-white block">
                  4
                </span>
                <span className="text-[11px] font-medium text-slate-400 leading-tight">
                  Papers (2 Pub, 2 Acc)
                </span>
              </div>

              <div className="surface-card !p-3 text-center lg:text-left">
                <span className="text-xl lg:text-2xl font-bold font-['JetBrains_Mono'] text-amber-300 block">
                  3.64
                </span>
                <span className="text-[11px] font-medium text-slate-400 leading-tight">
                  CGPA (Dean&apos;s List)
                </span>
              </div>

              <div className="surface-card !p-3 text-center lg:text-left">
                <span className="text-xl lg:text-2xl font-bold font-['JetBrains_Mono'] text-teal-300 block">
                  100+
                </span>
                <span className="text-[11px] font-medium text-slate-400 leading-tight">
                  Students Taught (TA)
                </span>
              </div>

              <div className="surface-card !p-3 text-center lg:text-left">
                <span className="text-xl lg:text-2xl font-bold font-['JetBrains_Mono'] text-purple-300 block">
                  FIDE
                </span>
                <span className="text-[11px] font-medium text-slate-400 leading-tight">
                  Rated Chess Player
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Academic Portrait Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center"
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={spring.subtle}
              className="relative max-w-sm w-full"
            >
              {/* Backlight Ambient Glow */}
              <div
                className="absolute -inset-3 rounded-3xl opacity-30 blur-2xl pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--teal), var(--amber))",
                }}
              />

              {/* Main Portrait Card */}
              <div className="relative rounded-3xl p-3 surface-card border border-white/15 bg-gradient-to-b from-white/[0.05] to-black/60 shadow-2xl overflow-hidden">
                <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-900 relative">
                  <img
                    src="/profile.jpg"
                    alt="Md. Abdullah Hossien"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Badges on Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-2">
                    <div className="p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <GraduationCap size={16} className="text-amber-400 shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-white font-['Space_Grotesk'] leading-tight">
                            Independent University, Bangladesh
                          </p>
                          <p className="text-[10px] font-mono text-teal-300">
                            Faculty Research Assistant & TA
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        2022–2026
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-2 text-slate-300 text-xs">
                      <Sparkles size={14} className="text-teal-400 shrink-0" />
                      <span className="text-[11px] leading-tight">
                        Springer LNCS · IEEE · CCE & ICSIE 2026
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Hint */}
        <motion.div
          variants={itemVariants}
          className="mt-14 flex flex-col items-center gap-2 text-slate-500 text-xs font-mono"
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
