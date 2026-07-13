"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

// Map skill names to beautiful emojis to act as rich 3D-like icons
const skillEmojiMap: Record<string, string> = {
  // Languages
  "Python": "🐍",
  "C/C++": "💻",
  "Java": "☕",
  "JavaScript": "🟨",
  "HTML/CSS": "🎨",
  // ML
  "Scikit-learn": "🤖",
  "PyTorch": "🔥",
  "Pandas / NumPy": "🐼",
  "Matplotlib / Seaborn": "📊",
  "XGBoost": "⚡",
  "OpenCV": "👁️",
  // Web
  "Flask": "🌶️",
  "React": "⚛️",
  "Bootstrap": "🥾",
  "REST APIs": "🔌",
  "Express.js": "🚄",
  // DB
  "Supabase": "⚡",
  "PostgreSQL": "🐘",
  "SQL": "🗄️",
  "Docker": "🐳",
  "Render": "☁️",
  // Tools
  "Git / GitHub": "🐙",
  "Jupyter / Colab": "📓",
  "VS Code": "📝",
  "PyCharm": "💎",
  "IntelliJ": "🚀",
  // Design/Docs
  "Overleaf (LaTeX)": "📄",
  "Draw.io": "✏️",
  "Canva": "🎨",
  "Joblib": "📦"
};

export default function SkillsSection() {
  // Flatten all skills into a single array
  const allSkills = skills.flatMap(category => 
    category.items.map(item => ({
      name: item.name,
      emoji: skillEmojiMap[item.name] || "💡",
      category: category.category
    }))
  );

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}>
          Technical <span className="gradient-text">Skills</span>
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="glass p-4 rounded-xl text-center hover:border-violet-500/50 transition-all cursor-default relative overflow-hidden"
          >
            <div className="text-3xl mb-2 block">{skill.emoji}</div>
            <h3 className="text-sm font-medium text-gray-200">
              {skill.name}
            </h3>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest block mt-1">
              {skill.category}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
