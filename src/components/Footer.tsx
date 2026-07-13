"use client";

import { Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full mt-20 py-8 px-4 border-t border-white/10 bg-white/5 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-6">
        {/* Left: Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Abdullah Hossien. All rights reserved.
        </p>

        {/* Right: Social icons */}
        <div className="flex gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
