"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, ChevronDown, ChevronUp } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const categoryColors: Record<string, string> = {
  "AI/ML": "text-purple-400 bg-purple-500/10 border-purple-500/25",
  Healthcare: "text-rose-400 bg-rose-500/10 border-rose-500/25",
  "E-Commerce": "text-orange-400 bg-orange-500/10 border-orange-500/25",
  "Software Engineering": "text-yellow-400 bg-yellow-500/10 border-yellow-500/25",
  "Web App": "text-cyan-400 bg-cyan-500/10 border-cyan-500/25",
  Systems: "text-pink-400 bg-pink-500/10 border-pink-500/25",
  EdTech: "text-violet-400 bg-violet-500/10 border-violet-500/25",
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
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Featured{" "}
            <span className="gradient-text">Work</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
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
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div
                  className={`gradient-border group h-full flex flex-col overflow-hidden`}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  {/* Card gradient header */}
                  <div
                    className={`h-32 relative bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                  >
                    {/* Background glow */}
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        background: `radial-gradient(circle at 50% 100%, rgba(37,99,235,0.3), transparent 70%)`,
                      }}
                    />
                    {/* Project initial */}
                    <div className="relative z-10 flex items-center justify-center">
                      <span
                        className="text-5xl font-black gradient-text opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    {/* Featured badge */}
                    {project.badge && (
                      <div className="absolute top-3 left-3 flex items-center gap-1 bg-yellow-500/20 border border-yellow-500/40 rounded-full px-2.5 py-1 text-yellow-300 text-xs font-semibold">
                        <Star size={10} fill="currentColor" />
                        {project.badge}
                      </div>
                    )}
                    {/* Category badge */}
                    <div
                      className={`absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full border ${
                        categoryColors[project.category] || "text-slate-400 bg-slate-500/10 border-slate-500/25"
                      }`}
                    >
                      {project.category}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3
                      className="font-bold text-xl text-white mb-1 group-hover:gradient-text transition-all"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs mb-3 font-medium">{project.subtitle}</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
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
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-sm font-medium text-slate-300 hover:bg-white/[0.09] hover:text-white transition-all"
                      >
                        <GithubIcon size={14} />
                        Code
                      </a>
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-sm font-medium text-blue-300 hover:from-blue-500/30 hover:to-purple-500/30 transition-all"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      ) : (
                        <div className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-sm font-medium text-slate-600 cursor-not-allowed">
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
