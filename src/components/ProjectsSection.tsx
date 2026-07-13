"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, ChevronDown, ChevronUp } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const categoryColors: Record<string, string> = {
  "AI/ML": "text-purple-700 bg-purple-100 border-purple-200",
  Healthcare: "text-rose-700 bg-rose-100 border-rose-200",
  "E-Commerce": "text-orange-700 bg-orange-100 border-orange-200",
  "Software Engineering": "text-yellow-700 bg-yellow-100 border-yellow-200",
  "Web App": "text-cyan-700 bg-cyan-100 border-cyan-200",
  Systems: "text-pink-700 bg-pink-100 border-pink-200",
  EdTech: "text-violet-700 bg-violet-100 border-violet-200",
};

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const displayed = showAll ? projects : featured;

  return (
    <section id="projects" className="section-padding relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="tag-pill mb-4 inline-block">Projects</span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-text-primary"
            style={{ fontFamily: "'Geist', 'Inter', sans-serif" }}
          >
            Featured{" "}
            <span className="text-accent">Work</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Production-quality projects spanning AI, healthcare, e-commerce, and systems engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {displayed.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              >
                <motion.div
                  className={`glass group h-full flex flex-col overflow-hidden`}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                >
                  {/* Card gradient header */}
                  <div
                    className={`h-32 relative bg-background-alt border-b border-border flex items-center justify-center overflow-hidden`}
                  >
                    {/* Background glow (subtle for light mode) */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: `radial-gradient(circle at 50% 100%, var(--accent), transparent 70%)`,
                      }}
                    />
                    {/* Project initial */}
                    <div className="relative z-10 flex items-center justify-center">
                      <span
                        className="text-5xl font-black text-accent opacity-40 group-hover:opacity-80 transition-opacity duration-500"
                        style={{ fontFamily: "'Geist', 'Inter', sans-serif" }}
                      >
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    {/* Featured badge */}
                    {project.badge && (
                      <div className="absolute top-3 left-3 flex items-center gap-1 bg-yellow-100 border border-yellow-200 rounded-full px-2.5 py-1 text-yellow-700 text-xs font-semibold shadow-sm">
                        <Star size={10} fill="currentColor" />
                        {project.badge}
                      </div>
                    )}
                    {/* Category badge */}
                    <div
                      className={`absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full border shadow-sm ${
                        categoryColors[project.category] || "text-slate-600 bg-slate-100 border-slate-200"
                      }`}
                    >
                      {project.category}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3
                      className="font-bold text-xl text-text-primary mb-1 group-hover:text-accent transition-colors"
                      style={{ fontFamily: "'Geist', 'Inter', sans-serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-text-muted text-xs mb-3 font-medium">{project.subtitle}</p>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span key={t} className="tag-pill">{t}</span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-background border border-border text-sm font-medium text-text-secondary hover:bg-background-alt transition-colors shadow-sm"
                      >
                        <GithubIcon size={14} />
                        Code
                      </a>
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors shadow-sm"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      ) : (
                        <div className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-background-alt border border-border text-sm font-medium text-text-muted cursor-not-allowed">
                          <ExternalLink size={14} />
                          Private
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show more/less toggle */}
        {rest.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="btn-ghost flex items-center gap-2"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Show All {rest.length} More Projects <ChevronDown size={16} />
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
