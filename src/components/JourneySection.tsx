"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Code2, 
  BookOpen, 
  Layers, 
  CheckCircle2, 
  Rocket, 
  Sparkles,
  Award 
} from "lucide-react";
import { journeyMilestones } from "@/lib/data";
import { ease } from "@/lib/motion";

const iconMap: Record<string, React.ReactNode> = {
  Education: <GraduationCap size={18} className="text-amber-400" />,
  Engineering: <Code2 size={18} className="text-indigo-400" />,
  Leadership: <Award size={18} className="text-cyan-400" />,
  Research: <BookOpen size={18} className="text-teal-400" />,
  Aspiration: <Sparkles size={18} className="text-amber-300" />,
};

export default function JourneySection() {
  return (
    <section id="journey" className="py-24 px-4 relative max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3">
          <Sparkles size={12} />
          <span>The Journey So Far</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
          From Foundations to Peer-Reviewed AI Research
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
          A progression of curiosity, academic diligence, teaching leadership, and shipping intelligent systems that bridge theory with real-world clinical and civic impact.
        </p>
      </div>

      {/* Interactive Timeline */}
      <div className="relative border-l border-white/10 ml-4 md:ml-32 pl-6 md:pl-10 space-y-12">
        {journeyMilestones.map((milestone, idx) => {
          return (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, ease: ease.out, delay: idx * 0.05 }}
              className="relative group"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border border-white/20 flex items-center justify-center shadow-lg group-hover:border-amber-400/60 transition-colors">
                {iconMap[milestone.category] || <Sparkles size={16} />}
              </div>

              {/* Period indicator (desktop left-side pill) */}
              <div className="hidden md:block absolute -left-36 top-2 text-right w-24">
                <span className="text-xs font-mono font-semibold text-slate-400 tracking-wider">
                  {milestone.period}
                </span>
              </div>

              {/* Milestone Card */}
              <div className="surface-card p-6 md:p-7 relative overflow-hidden">
                {/* Mobile period header */}
                <div className="md:hidden flex items-center gap-2 mb-2 font-mono text-xs font-semibold text-amber-400">
                  <span>{milestone.period}</span>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="badge-tag badge-subtle !text-[10px]">
                    {milestone.badge}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    · {milestone.tagline}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 font-['Space_Grotesk'] group-hover:text-amber-200 transition-colors">
                  {milestone.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {milestone.description}
                </p>

                {/* Bullet Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4 border-t border-white/[0.06]">
                  {milestone.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-teal-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
