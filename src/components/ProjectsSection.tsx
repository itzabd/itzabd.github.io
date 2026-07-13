"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const displayed = showAll ? projects : featured;

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}>
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {displayed.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 flex flex-col group relative"
            >
              {/* Image Container with Gradient */}
              <div className="h-48 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 relative flex items-center justify-center overflow-hidden">
                {/* Backdrop effect */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                
                {/* Huge first letter in the background */}
                <span className="text-9xl font-black text-white/5 select-none pointer-events-none group-hover:scale-110 transition-transform duration-500">
                  {project.title.charAt(0)}
                </span>
                
                {/* Category Badge overlay */}
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold glass-sm text-cyan-300">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors" style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}>
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-3 mt-auto">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 glass-sm rounded-full text-xs text-violet-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-sm px-4 py-2 rounded-lg text-sm hover:border-violet-500 flex items-center gap-2 justify-center flex-1 text-gray-300 hover:text-white"
                    >
                      <GithubIcon size={14} />
                      Source
                    </a>
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-sm px-4 py-2 rounded-lg text-sm hover:border-violet-500 flex items-center gap-2 justify-center flex-1 text-cyan-300 hover:text-cyan-200"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    ) : (
                      <span className="glass-sm px-4 py-2 rounded-lg text-sm flex items-center gap-2 justify-center flex-1 text-gray-500 cursor-not-allowed border-white/5 bg-white/5">
                        Private
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show more/less button */}
      {rest.length > 0 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-ghost flex items-center gap-2 text-sm font-semibold"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp size={16} />
              </>
            ) : (
              <>
                Show {rest.length} More Projects <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
