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

// Clean light mode doesn't need heavy canvas backgrounds

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">

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
