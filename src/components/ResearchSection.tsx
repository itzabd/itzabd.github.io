"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { publications, personalInfo } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const getStatusClasses = (status: string) => {
  const s = status.toLowerCase();
  if (s.includes("published")) {
    return "bg-emerald-500/20 text-emerald-300";
  }
  if (s.includes("submitted") || s.includes("review") || s.includes("accepted")) {
    return "bg-yellow-500/20 text-yellow-300";
  }
  return "bg-blue-500/20 text-blue-300";
};

export default function ResearchSection() {
  return (
    <section id="research" className="py-20 px-4 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}>
          Research & <span className="gradient-text">Publications</span>
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {publications.map((pub, index) => (
          <motion.div
            key={pub.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass p-6 rounded-2xl relative flex flex-col justify-between overflow-hidden group"
          >
            <div className="card-accent-bar" />
            
            <div>
              {/* Status Badge */}
              <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getStatusClasses(pub.status)}`}>
                {pub.status}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold text-white pr-24 leading-snug group-hover:text-cyan-300 transition-colors" style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}>
                {pub.title}
              </h3>

              {/* Authors */}
              <p className="text-sm text-gray-400 mt-2">
                {personalInfo.name}, et al.
              </p>

              {/* Journal/Venue */}
              <p className="text-sm text-violet-300 mt-1">
                {pub.venue} ({pub.year})
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/5 border border-white/10 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Link */}
            <div className="mt-4">
              {pub.doiUrl ? (
                <a
                  href={pub.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors"
                >
                  View Publication <ExternalLink size={14} />
                </a>
              ) : (
                <span className="text-xs text-gray-500 italic">Under Review</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
