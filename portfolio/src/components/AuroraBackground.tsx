"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(37,99,235,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Floating blob 1 */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: "-15%",
          left: "-10%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, 25, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating blob 2 */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: "30%",
          right: "-8%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 35, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Floating blob 3 */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          bottom: "10%",
          left: "25%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />

      {/* Mesh grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37,99,235,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
