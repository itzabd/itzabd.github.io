"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  ExternalLink, 
  ChevronDown, 
  Sparkles, 
  Award,
  HeartPulse,
  Brain,
  Cpu,
  Car
} from "lucide-react";
import { publications, researchAreas, personalInfo } from "@/lib/data";
import { ease } from "@/lib/motion";

const researchAreaIcons: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse size={18} className="text-rose-400" />,
  Cpu: <Cpu size={18} className="text-cyan-400" />,
  Brain: <Brain size={18} className="text-indigo-400" />,
  Glasses: <Sparkles size={18} className="text-amber-400" />,
};

export default function ResearchSection() {
  const [expandedPub, setExpandedPub] = useState<number | null>(null);

  const toggleAbstract = (index: number) => {
    setExpandedPub(expandedPub === index ? null : index);
  };

  return (
    <section id="research" className="py-24 px-4 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-3">
          <BookOpen size={13} />
          <span>Scholarly Output</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
          Research & Peer-Reviewed Publications
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
          Peer-reviewed conference proceedings and accepted manuscripts focusing on safe machine learning, healthcare biosignals, and assistive edge robotics.
        </p>
      </div>

      {/* Publications Grid */}
      <div className="space-y-5 mb-20">
        {publications.map((pub, index) => {
          const isExpanded = expandedPub === index;
          const isPublished = pub.status.toLowerCase().includes("published");

          return (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: ease.out }}
              className="surface-card p-6 md:p-7 relative overflow-hidden group border-white/[0.08] hover:border-indigo-500/30 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  {/* Status & Venue Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className={`badge-tag ${
                        isPublished ? "badge-academic" : "badge-tech"
                      } !text-[11px]`}
                    >
                      {pub.status}
                    </span>
                    <span className="text-xs font-mono font-medium text-slate-400">
                      {pub.venue}
                    </span>
                    {pub.publisher && (
                      <span className="badge-tag badge-subtle !text-[10px]">
                        {pub.publisher}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white leading-snug group-hover:text-amber-200 transition-colors font-['Space_Grotesk']">
                    {pub.title}
                  </h3>

                  {/* Authors */}
                  <p className="text-xs font-mono text-slate-400 mt-2">
                    <span className="text-indigo-300 font-semibold">{personalInfo.displayName}</span> (Co-Author) · Independent University, Bangladesh
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white/[0.04] border border-white/[0.06] text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions & DOI Link */}
                <div className="flex flex-row md:flex-col items-center md:items-end gap-2.5 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/[0.06]">
                  {pub.doiUrl ? (
                    <a
                      href={pub.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !py-2 !px-3.5 !text-xs !rounded-xl"
                    >
                      <span>Read Paper</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-400 font-mono">
                      Proceedings In Press
                    </span>
                  )}

                  {pub.abstract && (
                    <button
                      onClick={() => toggleAbstract(index)}
                      className="btn-secondary !py-2 !px-3 !text-xs !rounded-xl text-slate-300 flex items-center gap-1.5"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? "Hide Abstract" : "Abstract"}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
              </div>

              {/* Abstract Collapsible */}
              <AnimatePresence>
                {isExpanded && pub.abstract && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: ease.out }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-white/[0.06] bg-black/20 p-4 rounded-xl text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
                      <strong className="text-white block mb-1 font-mono text-[11px] tracking-wider uppercase text-indigo-300">
                        Research Abstract:
                      </strong>
                      {pub.abstract}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Focus Areas Showcase */}
      <div className="mt-16">
        <div className="text-center mb-10">
          <span className="text-xs uppercase font-mono tracking-widest text-teal-400">
            Core Research Domains
          </span>
          <h3 className="text-2xl font-bold text-white mt-1 font-['Space_Grotesk']">
            Research Investigations & Interests
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {researchAreas.map((area, idx) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: ease.out }}
              className="surface-card p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                  {researchAreaIcons[area.icon] || <Brain size={18} />}
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">
                    {area.year}
                  </span>
                  <h4 className="text-base font-bold text-white">
                    {area.title}
                  </h4>
                </div>
              </div>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-4">
                {area.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {area.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-slate-400"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
