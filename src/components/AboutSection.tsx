"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Briefcase, GraduationCap } from "lucide-react";
import { personalInfo } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}>
          About <span className="gradient-text">Me</span>
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left Side: Avatar/Visual Mockup */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="glass p-6 rounded-2xl flex justify-center items-center relative overflow-hidden group"
        >
          <div className="card-accent-bar" />
          <div className="relative w-64 h-64 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center border border-white/10 group-hover:scale-102 transition-transform duration-500 overflow-hidden">
            <img 
              src="/profile.jpg" 
              alt="Abdullah Hossien" 
              className="w-full h-full object-cover relative z-10"
            />
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/20 pointer-events-none z-20" />
          </div>
        </motion.div>

        {/* Right Side: Bio and details */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="glass p-6 rounded-2xl space-y-5 relative overflow-hidden"
        >
          <div className="card-accent-bar" />
          <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}>
            My Background
          </h3>
          <p className="text-gray-300 leading-relaxed text-sm">
            {personalInfo.bio}
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <MapPin size={16} className="text-cyan-400 shrink-0" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <Mail size={16} className="text-cyan-400 shrink-0" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-violet-400 transition-colors">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <Phone size={16} className="text-cyan-400 shrink-0" />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <Briefcase size={16} className="text-cyan-400 shrink-0" />
              <span>{personalInfo.availability}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <GraduationCap size={16} className="text-cyan-400 shrink-0" />
              <span>{personalInfo.degree}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
