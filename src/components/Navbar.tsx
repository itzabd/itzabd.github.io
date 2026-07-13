"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "bg-[#030712]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#hero"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <span className="gradient-text">itzabd</span>
              </span>
            </motion.a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-white/[0.07] rounded-lg border border-white/[0.08]"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="mailto:abdullahhossien0@gmail.com"
                className="btn-primary text-sm px-5 py-2.5"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-lg bg-white/[0.05] border border-white/[0.08]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-[#050c1a]/95 backdrop-blur-xl border-b border-white/[0.06]"
            >
              <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="mailto:abdullahhossien0@gmail.com"
                  className="btn-primary mt-2 justify-center"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
