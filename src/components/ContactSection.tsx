"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, Loader2, Phone, Sparkles } from "lucide-react";
import { LinkedinIcon, GithubIcon, ScholarIcon, InstagramIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";
import { ease } from "@/lib/motion";

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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "dc243075-627a-445c-9ee0-cc2b76bf9de9",
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Academic/Job Inquiry from Portfolio: ${form.name}`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormState("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setFormState("idle"), 5000);
      } else {
        throw new Error(data.message || "Failed to send message.");
      }
    } catch (error) {
      setFormState("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message.");
      setTimeout(() => setFormState("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-3">
          <Mail size={13} />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
          Graduate Inquiries & Engineering Roles
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2">
          Seeking prospective research advisors, Master&apos;s program queries, or engineering opportunities.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: ease.out }}
          className="lg:col-span-5 surface-card p-6 md:p-8 space-y-6"
        >
          <div>
            <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
              Direct Channels
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              Feel free to reach out directly via email or connect on LinkedIn and GitHub.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
              <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-teal-300 shrink-0">
                <Mail size={16} />
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-amber-300 transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
              <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-teal-300 shrink-0">
                <Phone size={16} />
              </div>
              <span>{personalInfo.phone}</span>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
              <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-teal-300 shrink-0">
                <MapPin size={16} />
              </div>
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="pt-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-3">
              Research & Social Profiles
            </span>
            <div className="flex gap-2.5">
              <a
                href={personalInfo.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-400/30 transition-all"
                aria-label="Google Scholar"
                title="Google Scholar"
              >
                <ScholarIcon size={18} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white hover:border-white/20 transition-all"
                aria-label="GitHub"
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white hover:border-white/20 transition-all"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-400/30 transition-all"
                aria-label="Instagram"
                title="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          <div className="pt-2">
            <div className="availability-pill">
              <span className="availability-dot" />
              <span>{personalInfo.availability}</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: ease.out, delay: 0.1 }}
          className="lg:col-span-7 surface-card p-6 md:p-8"
        >
          {formState === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-3">
              <CheckCircle size={48} className="text-teal-400" />
              <h4 className="text-xl font-bold text-white font-['Space_Grotesk']">
                Message Dispatched!
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-sm">
                Thank you for getting in touch. I will review your message and reply via email promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-mono uppercase text-slate-400 block mb-1.5" htmlFor="name">
                  Full Name / Institution
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Prof. Jane Doe or Recruiter Name"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-slate-400 block mb-1.5" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@university.edu"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-slate-400 block mb-1.5" htmlFor="message">
                  Inquiry / Opportunity Details
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Graduate lab opportunities, research collaborations, or engineering role inquiries..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none transition-all resize-none"
                />
              </div>

              {formState === "error" && (
                <p className="text-xs text-rose-400">
                  {errorMessage || "Submission failed. Please email me directly."}
                </p>
              )}

              <button
                type="submit"
                disabled={formState === "loading"}
                className="btn-primary !w-full justify-center !py-3"
              >
                {formState === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Send Inquiry</span>
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
