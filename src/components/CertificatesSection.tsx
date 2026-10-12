"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, X, ZoomIn, Calendar, Building2, CheckCircle2 } from "lucide-react";
import { certificates, CertificateItem } from "@/lib/data";
import { ease } from "@/lib/motion";

const categories = ["All", "Conference", "Academic", "Leadership", "Volunteering"] as const;

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };

    if (selectedCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  const filteredCertificates =
    activeCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeCategory);

  return (
    <section id="certificates" className="py-20 px-4 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3">
          <Award size={13} />
          <span>Accreditations & Honors</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
          Certificates & Recognitions
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
          Official credentials across academic Dean&apos;s List merit, IEEE & Springer conference presentations, startup mentoring, campus leadership, and volunteer service.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? certificates.length
                : certificates.filter((c) => c.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer border ${
                  isActive
                    ? "bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm"
                    : "bg-white/[0.03] text-slate-400 border-white/[0.08] hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <span>{cat}</span>
                <span className="ml-1.5 text-[10px] opacity-75 font-mono">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Responsive Grid */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        <AnimatePresence mode="popLayout">
          {filteredCertificates.map((cert, index) => (
            <motion.div
              layout
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, delay: index * 0.04, ease: ease.out }}
              onClick={() => setSelectedCert(cert)}
              className="surface-card rounded-2xl overflow-hidden border border-white/[0.08] hover:border-amber-400/40 transition-all duration-200 cursor-pointer flex flex-col group hover:-translate-y-1 shadow-md hover:shadow-amber-500/5"
            >
              {/* Image Preview Thumbnail */}
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-900 border-b border-white/[0.06]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-300 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />

                {/* Inspect Overlay Hint on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[1px]">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/80 text-white text-xs border border-white/20 font-medium shadow-lg">
                    <ZoomIn size={13} className="text-amber-300" />
                    <span>Inspect</span>
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span
                    className={`inline-block text-[10px] font-mono font-medium px-2 py-0.5 rounded border mb-2 ${cert.badgeColor}`}
                  >
                    {cert.badge}
                  </span>

                  <h3 className="text-sm font-bold text-white font-['Space_Grotesk'] leading-snug group-hover:text-amber-200 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-1.5 flex items-center gap-1.5 truncate">
                    <Building2 size={12} className="text-teal-400 shrink-0" />
                    <span className="truncate">{cert.issuer}</span>
                  </p>

                  <p className="text-[11px] text-slate-400/90 mt-2 line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 truncate max-w-[170px]">
                    <Calendar size={11} className="text-amber-400/80 shrink-0" />
                    <span className="truncate">{cert.date}</span>
                  </span>
                  <span className="text-amber-300/90 group-hover:text-amber-300 text-[10px] shrink-0 font-medium">
                    View →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal (Portalled directly to document.body with z-[9999]) */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedCert && (
              <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5">
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedCert(null)}
                  className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
                />

                {/* Modal Window Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                  className="relative z-10 max-w-3xl w-full rounded-2xl border border-white/20 bg-[#0c1017] p-5 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] overflow-hidden max-h-[92vh] flex flex-col"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedCert(null)}
                    aria-label="Close"
                    className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/10 cursor-pointer"
                  >
                    <X size={16} />
                  </button>

                  {/* Certificate Image Frame */}
                  <div className="rounded-xl overflow-hidden bg-black/80 border border-white/10 max-h-[60vh] flex items-center justify-center p-1">
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="w-full h-auto max-h-[58vh] object-contain rounded-lg"
                    />
                  </div>

                  {/* Metadata and Description */}
                  <div className="mt-4 pt-2 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className={`inline-block text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${selectedCert.badgeColor}`}
                        >
                          {selectedCert.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {selectedCert.date}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white font-['Space_Grotesk']">
                        {selectedCert.title}
                      </h3>
                      <p className="text-xs text-teal-300 font-medium mt-0.5 flex items-center gap-1.5">
                        <Building2 size={13} className="shrink-0" />
                        <span>{selectedCert.issuer}</span>
                      </p>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                        {selectedCert.description}
                      </p>
                    </div>

                    <div className="shrink-0 self-start sm:self-end">
                      <a
                        href={selectedCert.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary !text-xs !py-2 !px-3.5 inline-flex items-center gap-1.5"
                      >
                        <span>Open Original</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
