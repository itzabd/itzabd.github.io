"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import AchievementsSection from "@/components/AchievementsSection";
import GitHubSection from "@/components/GitHubSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Client-only dynamic imports (canvas, mouse events)
const AuroraBackground = dynamic(() => import("@/components/AuroraBackground"), { ssr: false });
const ParticleField = dynamic(() => import("@/components/ParticleField"), { ssr: false });
const CursorGlow = dynamic(() => import("@/components/CursorGlow"), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030712] overflow-x-hidden">
      {/* Background layers */}
      <AuroraBackground />
      <ParticleField />
      <CursorGlow />

      {/* Noise texture */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ResearchSection />
      <AchievementsSection />
      <GitHubSection />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
