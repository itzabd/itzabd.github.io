"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, Loader } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
    setTimeout(() => setFormState("idle"), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-accent",
      bg: "bg-background-alt border-border",
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "@itzabd",
      href: personalInfo.github,
      color: "text-accent",
      bg: "bg-background-alt border-border",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "Abdullah Hossien",
      href: personalInfo.linkedin,
      color: "text-accent",
      bg: "bg-background-alt border-border",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
      color: "text-accent",
      bg: "bg-background-alt border-border",
    },
  ];

  return (
    <section id="contact" className="section-padding relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="tag-pill mb-4 inline-block">Contact</span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-text-primary"
            style={{ fontFamily: "'Geist', 'Inter', sans-serif" }}
          >
            Let&apos;s{" "}
            <span className="text-accent">Collaborate</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Open to full-time roles, research collaborations, and exciting projects. Let&apos;s build
            something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            className="md:col-span-2 space-y-4"
          >
            {contactLinks.map((link) => (
              <div key={link.label}>
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <motion.div
                      className={`glass border ${link.bg} p-5 rounded-2xl flex items-center gap-4 group`}
                      whileHover={{ x: 6, transition: { duration: 0.2 } }}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${link.bg} bg-background`}>
                        <link.icon size={18} className={link.color} />
                      </div>
                      <div>
                        <p className="text-xs text-text-muted mb-0.5">{link.label}</p>
                        <p className="text-sm text-text-primary font-medium group-hover:text-accent transition-colors">
                          {link.value}
                        </p>
                      </div>
                    </motion.div>
                  </a>
                ) : (
                  <motion.div
                    className={`glass border ${link.bg} p-5 rounded-2xl flex items-center gap-4`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${link.bg} bg-background`}>
                      <link.icon size={18} className={link.color} />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted mb-0.5">{link.label}</p>
                      <p className="text-sm text-text-primary font-medium">{link.value}</p>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}

            {/* Availability callout */}
            <div
              className="glass border border-green-200 p-5 rounded-2xl bg-green-50"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-700 text-sm font-semibold">Available Now</span>
              </div>
              <p className="text-text-secondary text-xs leading-relaxed">
                Currently open to full-time opportunities, research positions, and freelance projects.
                Response time: within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            className="md:col-span-3"
          >
            <div className="glass p-7 rounded-2xl">
              <h3 className="font-bold text-text-primary text-lg mb-6">Send a Message</h3>

              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle size={48} className="text-green-500 mb-4" />
                  <h4 className="text-xl font-bold text-text-primary mb-2">Message Sent!</h4>
                  <p className="text-text-secondary text-sm">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-text-secondary mb-1.5 font-medium" htmlFor="contact-name">
                          Your Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-text-secondary mb-1.5 font-medium" htmlFor="contact-email">
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-text-secondary mb-1.5 font-medium" htmlFor="contact-subject">
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        placeholder="Collaboration opportunity / Job offer / Question"
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-text-secondary mb-1.5 font-medium" htmlFor="contact-message">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell me about your project, opportunity, or question..."
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all resize-none"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={formState === "loading"}
                      className="btn-primary w-full justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {formState === "loading" ? (
                        <>
                          <Loader size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
