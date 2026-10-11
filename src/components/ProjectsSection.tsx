"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, Sparkles, Layers } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/lib/data";
import { ease } from "@/lib/motion";

const categories = ["All", "AI/ML", "Healthcare", "Web App"] as const;

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-3">
          <Code2 size={13} />
          <span>Applied Engineering</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
          Featured Engineering & AI Platforms
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2">
          From machine learning pipelines to high-reliability production web platforms serving real end-users.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeFilter === cat
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              {cat === "All" ? "All Systems" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: ease.out }}
              className="surface-card rounded-2xl overflow-hidden flex flex-col group border-white/[0.08] hover:border-teal-500/40 transition-all"
            >
              {/* Image / Header Graphic */}
              <div className="h-44 bg-slate-900/80 relative flex items-center justify-center overflow-hidden border-b border-white/[0.06]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-950/40 to-slate-900 relative">
                    <span className="text-7xl font-extrabold text-white/5 font-mono select-none">
                      {project.title.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}

                {/* Category Badge overlay */}
                <span className="absolute top-3.5 right-3.5 badge-tag badge-subtle !text-[10px] backdrop-blur-md">
                  {project.category}
                </span>

                {project.badge && (
                  <span className="absolute top-3.5 left-3.5 badge-tag badge-academic !text-[10px] backdrop-blur-md">
                    {project.badge}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors font-['Space_Grotesk']">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-teal-300 mt-0.5 mb-2.5">
                    {project.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] mt-auto">
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] border border-white/[0.06] text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary !py-2 !px-3 !text-xs flex-1 justify-center"
                      aria-label="View Source Code on GitHub"
                    >
                      <GithubIcon size={14} />
                      <span>Code</span>
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary !py-2 !px-3 !text-xs flex-1 justify-center"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
