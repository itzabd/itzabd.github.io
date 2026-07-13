export const personalInfo = {
  name: "Abdullah Hossien",
  handle: "itzabd",
  title: "AI/ML Engineer & Full-Stack Developer",
  taglines: [
    "Building Intelligent Systems",
    "EEG × LLM Research",
    "Full-Stack Development",
    "Healthcare AI Innovation",
    "Neurotechnology Pioneer",
  ],
  bio: "Passionate Computer Science student and results-driven developer with expertise in full-stack development, AI/ML applications, and system design. Early adopter of LLM technologies applied to neuroscience — bridging the gap between cutting-edge AI and real-world healthcare impact. Proven track record delivering innovative solutions across healthcare, e-commerce, and educational technology.",
  location: "Bangladesh",
  email: "abdullahhossien0@gmail.com",
  github: "https://github.com/itzabd",
  linkedin: "https://www.linkedin.com/in/abdullah-hossien-12349b225/",
  portfolio: "https://itzabd.github.io",
  availability: "Open to Opportunities",
  resumeUrl: "#",
};

export const skills = [
  {
    category: "Languages",
    icon: "Code2",
    color: "from-blue-500 to-cyan-400",
    items: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 75 },
      { name: "TypeScript", level: 70 },
      { name: "HTML/CSS", level: 88 },
    ],
  },
  {
    category: "AI / ML",
    icon: "Brain",
    color: "from-purple-500 to-pink-400",
    items: [
      { name: "LLM Integration", level: 85 },
      { name: "EEG Analysis", level: 80 },
      { name: "Prompt Engineering", level: 82 },
      { name: "Signal Processing", level: 78 },
      { name: "Model Training", level: 75 },
    ],
  },
  {
    category: "Frontend",
    icon: "Layout",
    color: "from-cyan-500 to-blue-400",
    items: [
      { name: "React", level: 82 },
      { name: "Next.js", level: 75 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 78 },
      { name: "Framer Motion", level: 70 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    color: "from-green-500 to-emerald-400",
    items: [
      { name: "Node.js", level: 78 },
      { name: "REST APIs", level: 82 },
      { name: "System Design", level: 80 },
      { name: "OOP Principles", level: 88 },
      { name: "Architecture", level: 75 },
    ],
  },
  {
    category: "Database",
    icon: "Database",
    color: "from-orange-500 to-amber-400",
    items: [
      { name: "Database Design", level: 85 },
      { name: "SQL", level: 80 },
      { name: "Schema Design", level: 78 },
      { name: "DBMS", level: 82 },
      { name: "Data Modeling", level: 75 },
    ],
  },
  {
    category: "Tools",
    icon: "Wrench",
    color: "from-rose-500 to-red-400",
    items: [
      { name: "Jupyter Notebook", level: 88 },
      { name: "Git / GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 65 },
      { name: "Postman", level: 75 },
    ],
  },
];

export const projects = [
  {
    id: "mindwaveweb",
    title: "MindWaveWeb",
    subtitle: "AI-Powered EEG Analysis Platform",
    description:
      "A pioneering web application that leverages LLM-powered classification to analyze EEG brainwave data in real-time, providing deep insights into cognitive patterns and brain activity. Represents a breakthrough at the intersection of neurotechnology and large language models.",
    tech: ["Python", "Jupyter Notebook", "LLM", "EEG Processing", "Signal Analysis"],
    github: "https://github.com/itzabd/MindWaveWeb",
    live: null,
    featured: true,
    category: "AI/ML",
    gradient: "from-purple-600/20 to-cyan-600/20",
    border: "border-purple-500/30",
    badge: "Featured",
  },
  {
    id: "glohealth",
    title: "GloHealth AI",
    subtitle: "Intelligent Healthcare System Design",
    description:
      "Comprehensive system design and analysis project for next-generation healthcare solutions. Incorporates AI integration planning, healthcare workflow optimization, and scalable architecture for patient management and clinical decision support.",
    tech: ["HTML", "System Design", "AI Integration", "Healthcare Architecture"],
    github: "https://github.com/itzabd/GloHealth_Ai",
    live: null,
    featured: true,
    category: "Healthcare",
    gradient: "from-green-600/20 to-blue-600/20",
    border: "border-green-500/30",
    badge: "Featured",
  },
  {
    id: "streetvendor",
    title: "StreetVendor",
    subtitle: "Digital Marketplace for Street Commerce",
    description:
      "Full-featured e-commerce platform that digitizes street vendor businesses, providing vendor management, product listing, inventory control, customer ordering, and payment processing — empowering informal economy entrepreneurs.",
    tech: ["JavaScript", "HTML", "CSS", "API Integration"],
    github: "https://github.com/itzabd/StreetVendor",
    live: null,
    featured: true,
    category: "E-Commerce",
    gradient: "from-orange-600/20 to-rose-600/20",
    border: "border-orange-500/30",
    badge: "Featured",
  },
  {
    id: "deshcare",
    title: "DeshCare",
    subtitle: "Vaccine & Vaccination Management System",
    description:
      "Comprehensive database-driven vaccine and vaccination management system with patient tracking, scheduling management, vaccination records, and healthcare provider coordination — built to improve public health infrastructure.",
    tech: ["HTML", "Database Management", "SQL", "System Design"],
    github: "https://github.com/itzabd/DeshCare-Vaccine-Vaccination-Management-System_Dbms_project",
    live: null,
    featured: true,
    category: "Healthcare",
    gradient: "from-blue-600/20 to-indigo-600/20",
    border: "border-blue-500/30",
    badge: "Featured",
  },
  {
    id: "foodcourt",
    title: "Food Court Management",
    subtitle: "OOP-Driven Restaurant Management System",
    description:
      "Full-featured food court management system built with object-oriented principles in Java. Features order management, dynamic menu handling, integrated payment processing, and staff coordination modules.",
    tech: ["Java", "OOP", "Design Patterns", "System Architecture"],
    github: "https://github.com/itzabd/Food-Court-Management-System-oop-project-Group59-",
    live: null,
    featured: true,
    category: "Software Engineering",
    gradient: "from-yellow-600/20 to-orange-600/20",
    border: "border-yellow-500/30",
    badge: "Featured",
  },
  {
    id: "weather",
    title: "Country & Weather API",
    subtitle: "Real-Time Data Integration Application",
    description:
      "Interactive web application combining live country and weather data APIs with a responsive Bootstrap UI. Demonstrates best practices in REST API integration, asynchronous JavaScript, and modern frontend design.",
    tech: ["JavaScript", "Bootstrap", "CSS", "HTML", "REST APIs"],
    github: "https://github.com/itzabd/Country-and-Weather-Api-Project",
    live: null,
    featured: false,
    category: "Web App",
    gradient: "from-cyan-600/20 to-teal-600/20",
    border: "border-cyan-500/30",
    badge: null,
  },
  {
    id: "compiler",
    title: "Compiler Project II",
    subtitle: "Advanced Language Processing System",
    description:
      "Advanced compiler implementation featuring complete lexical analysis, syntax parsing with grammar rules, and semantic analysis — demonstrating deep understanding of programming language theory and implementation.",
    tech: ["Python", "Lexical Analysis", "Parsing", "Semantic Analysis"],
    github: "https://github.com/itzabd/Compiler-Project-ii",
    live: null,
    featured: false,
    category: "Systems",
    gradient: "from-rose-600/20 to-pink-600/20",
    border: "border-rose-500/30",
    badge: null,
  },
  {
    id: "ar-history",
    title: "AR BD History",
    subtitle: "Augmented Reality Educational Platform",
    description:
      "Immersive augmented reality application that brings Bangladeshi historical events to life through interactive AR visualization — making history engaging and accessible through cutting-edge educational technology.",
    tech: ["AR", "Educational Technology", "Interactive Learning"],
    github: "https://github.com/itzabd/Augmented_Reality_BD-History",
    live: null,
    featured: false,
    category: "EdTech",
    gradient: "from-violet-600/20 to-purple-600/20",
    border: "border-violet-500/30",
    badge: null,
  },
];

export const researchAreas = [
  {
    year: "2024–Present",
    title: "EEG-LLM Fusion Research",
    description:
      "Pioneering the application of Large Language Models for EEG brainwave classification. MindWaveWeb demonstrates real-time cognitive pattern analysis, bridging neuroscience and generative AI.",
    tags: ["EEG", "LLM", "Neurotechnology", "Signal Processing"],
    icon: "Brain",
    color: "text-purple-400",
  },
  {
    year: "2024",
    title: "Healthcare AI Systems",
    description:
      "Designed and implemented AI-integrated healthcare platforms including GloHealth AI and DeshCare — focusing on scalable architecture for real-world clinical and public health applications.",
    tags: ["Healthcare", "System Design", "AI Integration", "Public Health"],
    icon: "HeartPulse",
    color: "text-rose-400",
  },
  {
    year: "2024",
    title: "Machine Learning Applications",
    description:
      "Explored practical ML deployment pipelines, model evaluation strategies, and LLM experimentation through Trial LLM — contributing to understanding of language model fine-tuning and prompt engineering.",
    tags: ["Machine Learning", "LLM", "Prompt Engineering", "Model Evaluation"],
    icon: "Cpu",
    color: "text-cyan-400",
  },
  {
    year: "2023–2024",
    title: "Educational Technology & AR",
    description:
      "Developed augmented reality solutions for historical education, exploring how immersive technology can transform learning experiences in resource-limited environments.",
    tags: ["AR", "EdTech", "Immersive Learning", "Accessibility"],
    icon: "Glasses",
    color: "text-green-400",
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University — Bangladesh",
    period: "2022 – Present",
    status: "In Progress",
    description:
      "Advanced coursework in Database Management Systems, Object-Oriented Programming, System Design & Analysis, Compiler Design, Web Development, and Artificial Intelligence.",
    highlights: [
      "Database Management Systems (MIS455)",
      "Object-Oriented Programming",
      "System Design & Analysis",
      "Compiler Design & Language Processing",
      "Web Development & Full-Stack Engineering",
    ],
  },
];

export const experience = [
  {
    role: "Full-Stack Developer & AI Researcher",
    company: "Independent / Academic Projects",
    period: "2022 – Present",
    type: "Research & Development",
    description:
      "Self-directed research and development across AI/ML, healthcare systems, e-commerce, and educational technology. Delivered 15+ production-quality projects spanning diverse technical domains.",
    highlights: [
      "Built MindWaveWeb — a first-of-its-kind EEG analysis platform powered by LLMs",
      "Designed scalable healthcare systems serving complex workflow requirements",
      "Delivered full-stack e-commerce solution for informal market digitization",
      "Implemented advanced compiler with complete language processing pipeline",
    ],
  },
];

export const achievements = [
  { value: "15+", label: "Projects Delivered", icon: "FolderGit2", color: "text-blue-400" },
  { value: "13+", label: "Repositories", icon: "Github", color: "text-purple-400" },
  { value: "8+", label: "Tech Domains", icon: "Layers", color: "text-cyan-400" },
  { value: "3.8+", label: "CGPA", icon: "GraduationCap", color: "text-green-400" },
  { value: "1st", label: "EEG-LLM Pioneer", icon: "Trophy", color: "text-yellow-400" },
  { value: "∞", label: "Curiosity", icon: "Sparkles", color: "text-rose-400" },
];
