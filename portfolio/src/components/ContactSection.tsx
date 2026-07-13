"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, Loader } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
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
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/25",
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "@itzabd",
      href: personalInfo.github,
      color: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/25",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "Abdullah Hossien",
      href: personalInfo.linkedin,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/25",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
      color: "text-green-400",
      bg: "bg-green-500/10 border-green-500/25",
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
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Let&apos;s{" "}
            <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
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
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${link.bg}`}>
                        <link.icon size={18} className={link.color} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-0.5">{link.label}</p>
                        <p className="text-sm text-slate-200 font-medium group-hover:text-white transition-colors">
                          {link.value}
                        </p>
                      </div>
                    </motion.div>
                  </a>
                ) : (
                  <motion.div
                    className={`glass border ${link.bg} p-5 rounded-2xl flex items-center gap-4`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${link.bg}`}>
                      <link.icon size={18} className={link.color} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">{link.label}</p>
                      <p className="text-sm text-slate-200 font-medium">{link.value}</p>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}

            {/* Availability callout */}
            <div
              className="glass border border-green-500/20 p-5 rounded-2xl bg-green-500/5"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-semibold">Available Now</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
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
            <div className="gradient-border p-7 rounded-2xl">
              <h3 className="font-bold text-white text-lg mb-6">Send a Message</h3>

              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle size={48} className="text-green-400 mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-slate-400 text-sm">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium" htmlFor="contact-name">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium" htmlFor="contact-email">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium" htmlFor="contact-subject">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Collaboration opportunity / Job offer / Question"
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium" htmlFor="contact-message">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project, opportunity, or question..."
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all resize-none"
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
