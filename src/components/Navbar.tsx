"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
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
              ? "glass"
              : "bg-transparent"
          }`}
          style={scrolled ? { borderRadius: 0, border: "none", borderBottom: "1px solid var(--border)" } : {}}
        >
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#hero"
              className="flex items-center gap-2.5 group"
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, var(--accent), var(--cyan))" }}
              >
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                itzabd
              </span>
            </motion.a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                  style={{
                    color: activeSection === link.href.slice(1) ? "var(--accent-light)" : "var(--text-secondary)",
                  }}
                >
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                      style={{ background: "linear-gradient(90deg, var(--accent), var(--cyan))" }}
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Right: GitHub + CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://github.com/itzabd"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-sm w-9 h-9 flex items-center justify-center"
                style={{ borderRadius: "10px" }}
              >
                <GithubIcon size={16} className="text-gray-300" />
              </a>
              <a
                href="#contact"
                className="glass-sm px-4 py-2 text-sm font-semibold"
                style={{ color: "var(--accent-light)", borderColor: "rgba(124,58,237,0.3)" }}
              >
                Contact
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden glass-sm p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{ color: "var(--text-primary)" }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden fixed top-16 right-0 bottom-0 w-72 glass"
              style={{ borderRadius: "0 0 0 20px", borderRight: "none", borderTop: "none" }}
            >
              <div className="px-6 py-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 rounded-lg text-sm font-medium transition-all"
                    style={{
                      color: activeSection === link.href.slice(1) ? "var(--accent-light)" : "var(--text-secondary)",
                      background: activeSection === link.href.slice(1) ? "var(--accent-subtle)" : "transparent",
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="btn-primary mt-4 justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
