"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, Loader2, Phone } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    try {
      let response: Response | null = null;
      let useFallback = false;

      // Try local API first
      try {
        const localRes = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (localRes.status === 404) {
          useFallback = true;
        } else {
          response = localRes;
        }
      } catch (err) {
        useFallback = true;
      }

      // Fallback directly to Web3Forms client-side endpoint (essential for static HTML export)
      if (useFallback) {
        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "d8bd17b4-3a9d-4786-9051-419b4e1f76cf";
        response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: accessKey,
            name: form.name,
            email: form.email,
            message: form.message,
            subject: `Portfolio Contact: ${form.name}`,
          }),
        });
      }

      if (!response) {
        throw new Error("Failed to initialize communication.");
      }

      const data = await response.json();

      if (response.ok && (data.success || data.id)) {
        setFormState("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setFormState("idle"), 4000);
      } else {
        throw new Error(data.error || data.message || "Failed to send message.");
      }
    } catch (error) {
      setFormState("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message.");
      setTimeout(() => setFormState("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}>
          Get In <span className="gradient-text">Touch</span>
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Side: Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="glass p-8 rounded-2xl space-y-6 relative overflow-hidden"
        >
          <div className="card-accent-bar" />
          <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}>
            Collaboration & Inquiries
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Open to full-time roles, research collaborations, and exciting projects. Let&apos;s build something amazing together.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-300 text-sm">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-cyan-400 shrink-0">
                <Mail size={18} />
              </div>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-300 transition-colors">
                {personalInfo.email}
              </a>
            </div>

            <div className="flex items-center gap-4 text-gray-300 text-sm">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-cyan-400 shrink-0">
                <Phone size={18} />
              </div>
              <span>{personalInfo.phone}</span>
            </div>

            <div className="flex items-center gap-4 text-gray-300 text-sm">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-cyan-400 shrink-0">
                <MapPin size={18} />
              </div>
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-4 mt-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:border-violet-500 transition-all text-gray-300 hover:text-white"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:border-violet-500 transition-all text-gray-300 hover:text-white"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>

          {/* Availability */}
          <div className="pt-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personalInfo.availability}</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="glass p-8 rounded-2xl relative overflow-hidden"
        >
          <div className="card-accent-bar" />
          
          {formState === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
              <CheckCircle size={56} className="text-emerald-400" />
              <h4 className="text-xl font-bold text-white" style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}>
                Message Sent!
              </h4>
              <p className="text-gray-300 text-sm">
                Thank you for your message. I will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm text-gray-300" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none text-white transition"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm text-gray-300" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none text-white transition"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm text-gray-300" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Hi Abdullah, I'd like to collaborate..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none text-white transition resize-none"
                />
              </div>

              {formState === "error" && (
                <p className="text-red-400 text-xs font-semibold">
                  {errorMessage || "An error occurred. Please try again."}
                </p>
              )}

              <button
                type="submit"
                disabled={formState === "loading"}
                className="w-full glass px-6 py-3 rounded-xl border-violet-500 hover:shadow-glow transition font-semibold flex items-center justify-center gap-2 text-white bg-violet-600/20 hover:bg-violet-600/30"
              >
                {formState === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin text-white" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
