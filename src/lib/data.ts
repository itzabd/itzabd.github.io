export const personalInfo = {
  name: "Md Abdullah Hossien Molla",
  displayName: "Abdullah Hossien",
  handle: "itzabd",
  title: "AI/ML Researcher & Full-Stack Developer",
  targetAspiration: "Aspiring M.S. in Computer Science / AI & ML",
  degree: "BSc Computer Science, Independent University, Bangladesh",
  cgpa: "3.64",
  taglines: [
    "Published AI/ML Researcher",
    "Aspiring Master's Candidate",
    "ML for Healthcare & Neurotechnology",
    "Full-Stack Production Engineer",
    "Teaching Assistant & Mentor",
  ],
  bio: "Final-year Computer Science student at Independent University, Bangladesh with a CGPA of 3.64. Research Assistant and Teaching Assistant with published papers at HCII 2026 (Springer LNCS) and IEEE. Aspiring to pursue a Master's in Computer Science / AI while building production AI and civic tech platforms.",
  location: "Dhaka, Bangladesh",
  email: "abdullahhossien0@gmail.com",
  phone: "+880-1628658775",
  github: "https://github.com/itzabd",
  linkedin: "https://www.linkedin.com/in/abdullah-hossien-12349b225/",
  scholar: "https://scholar.google.com/citations?user=x3nL2q4AAAAJ",
  instagram: "https://www.instagram.com/itz_abd_",
  portfolio: "https://itzabd.github.io",
  availability: "Open to Research & Engineering Opportunities",
  resumeUrl: "/resume.pdf",
};

export const skills = [
  {
    category: "Languages",
    icon: "Code2",
    color: "from-blue-500 to-cyan-400",
    items: [
      { name: "Python", level: 92 },
      { name: "C/C++", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 85 },
      { name: "Java", level: 78 },
      { name: "HTML/CSS", level: 88 },
    ],
  },
  {
    category: "Machine Learning & CV",
    icon: "Brain",
    color: "from-purple-500 to-pink-400",
    items: [
      { name: "PyTorch", level: 80 },
      { name: "Ultralytics YOLO", level: 85 },
      { name: "Scikit-learn", level: 88 },
      { name: "XGBoost", level: 82 },
      { name: "OpenCV", level: 75 },
      { name: "Pandas / NumPy", level: 90 },
      { name: "Matplotlib / Seaborn", level: 85 },
    ],
  },
  {
    category: "Web & Production",
    icon: "Layout",
    color: "from-cyan-500 to-blue-400",
    items: [
      { name: "Flask", level: 85 },
      { name: "React / Next.js", level: 80 },
      { name: "REST APIs", level: 88 },
      { name: "Supabase / PostgreSQL", level: 85 },
      { name: "Docker", level: 75 },
    ],
  },
  {
    category: "Research & Tools",
    icon: "Wrench",
    color: "from-orange-500 to-amber-400",
    items: [
      { name: "Git / GitHub", level: 90 },
      { name: "LaTeX / Overleaf", level: 85 },
      { name: "Google Colab / Jupyter", level: 92 },
      { name: "Experimental Design", level: 82 },
      { name: "Academic Writing", level: 88 },
      { name: "Field Data Collection", level: 85 },
    ],
  },
];

export const projects = [
  {
    id: "streetvendor",
    title: "StreetVendor",
    subtitle: "Digital Vendor Management Platform",
    description:
      "Full-stack digital platform for street vendor registration, location management, QR-based identification, and document generation using Leaflet maps and REST APIs.",
    tech: ["React", "Express.js", "Supabase", "Leaflet", "JavaScript", "REST API"],
    github: "https://github.com/itzabd/StreetVendor",
    live: "https://streetvendor-web.onrender.com/home",
    featured: true,
    category: "Web App",
    gradient: "from-orange-600/20 to-rose-600/20",
    border: "border-orange-500/30",
    badge: "Featured",
    image: "/projects/streetvendor.png",
  },
  {
    id: "ababils-attire",
    title: "Ababil's Attire",
    subtitle: "Boutique E-Commerce Platform",
    description:
      "Full-stack boutique e-commerce for handmade children's dresses and artisanal celebration cakes. Guest-first checkout with invoice-based tracking, bKash advance reconciliation, and a complete admin operations portal. Mobile-first — optimized for the primary Bangladeshi smartphone audience.",
    tech: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "RLS", "Telegram Bot API"],
    github: "https://github.com/itzabd/E-Commerce-for-Ababils-attire",
    live: "https://e-commerce-for-ababils-attire.onrender.com/",
    featured: true,
    category: "Web App",
    gradient: "from-pink-600/20 to-rose-600/20",
    border: "border-pink-500/30",
    badge: "Featured",
    image: "/projects/ababils-attire.png",
  },
  {
    id: "glohealth",
    title: "GloHealth AI",
    subtitle: "AI-Powered Health Symptom Reporting System",
    description:
      "Full-stack AI healthcare platform for disease prediction, geospatial epidemiology analysis, and appointment management with explainable ML insights powered by XGBoost and Scikit-learn.",
    tech: ["Python", "Flask", "Scikit-learn", "XGBoost", "Supabase", "PostgreSQL", "Bootstrap"],
    github: "https://github.com/itzabd/GloHealth_Ai",
    live: "https://glohealth-ai-fw71.onrender.com/",
    featured: true,
    category: "Healthcare",
    gradient: "from-green-600/20 to-blue-600/20",
    border: "border-green-500/30",
    badge: "Featured",
    image: "/projects/glohealth-ai.png",
  },
  {
    id: "mindwaveweb",
    title: "MindWaveWeb",
    subtitle: "LLM-Powered EEG Classification App",
    description:
      "AI-powered EEG analysis platform for cognitive pattern classification using machine learning and LLM-assisted insights (TinyLlama), with interactive web dashboards and Docker deployment.",
    tech: ["Python", "Flask", "Scikit-learn", "PyTorch", "TinyLlama", "Supabase", "Docker"],
    github: "https://github.com/itzabd/MindWaveWeb",
    live: null,
    featured: true,
    category: "AI/ML",
    gradient: "from-purple-600/20 to-cyan-600/20",
    border: "border-purple-500/30",
    badge: "Featured",
  },
  {
    id: "deshcare",
    title: "DeshCare Vaccine",
    subtitle: "Vaccination Management System",
    description:
      "Role-based platform (admin, operator, patient) to streamline vaccine registration and scheduling. Built with Flask, Supabase, and PostgreSQL for end-to-end vaccination workflow management.",
    tech: ["Python", "Flask", "Supabase", "PostgreSQL", "HTML/CSS", "JavaScript"],
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
      "Full-featured food court management system built with object-oriented principles in Java. Features order management, dynamic menu handling, and integrated payment processing.",
    tech: ["Java", "OOP", "Design Patterns", "System Architecture"],
    github: "https://github.com/itzabd/Food-Court-Management-System-oop-project-Group59-",
    live: null,
    featured: false,
    category: "Software Engineering",
    gradient: "from-yellow-600/20 to-orange-600/20",
    border: "border-yellow-500/30",
    badge: null,
  },
  {
    id: "weather",
    title: "Country & Weather API",
    subtitle: "Real-Time Data Integration Application",
    description:
      "Interactive web application combining live country and weather data APIs with a responsive Bootstrap UI, demonstrating REST API integration and asynchronous JavaScript.",
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
    id: "ar-history",
    title: "AR BD History",
    subtitle: "Augmented Reality Educational Platform",
    description:
      "Immersive AR application bringing Bangladeshi historical events to life through interactive visualization — making history engaging through cutting-edge educational technology.",
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

export const publications = [
  {
    title: "Understanding Challenges of Liver Data Governance for Mobile App-Based Liver Care in Bangladesh",
    venue: "HCII 2026, Springer LNCS, pp. 120–138",
    publisher: "Springer LNCS",
    authors: "Md Abdullah Hossien Molla et al.",
    authorship: "Co-Author",
    doi: "10.1007/978-3-032-30549-7_7",
    doiUrl: "https://doi.org/10.1007/978-3-032-30549-7_7",
    year: "2026",
    status: "Published",
    statusColor: "text-emerald-300 bg-emerald-500/20 border-emerald-500/30",
    icon: "BookOpen",
    abstract:
      "Investigated data governance gaps in mobile liver-care apps in Bangladesh. Conducted stakeholder interviews to identify privacy and data-sharing challenges. Proposed governance recommendations for low-resource healthcare settings.",
    tags: ["Healthcare AI", "Mobile Health", "Data Governance", "Springer LNCS"],
  },
  {
    title: "Safety-Enhanced Machine Learning for Fetal Health Classification Using Cardiotocography Data",
    venue: "ICMLAS 2026, IEEE",
    publisher: "IEEE",
    authors: "Md Abdullah Hossien Molla et al.",
    authorship: "First Author",
    doi: "10.1109/ICMLAS67792.2026.11483766",
    doiUrl: "https://doi.org/10.1109/ICMLAS67792.2026.11483766",
    year: "2026",
    status: "Published",
    statusColor: "text-blue-300 bg-blue-500/20 border-blue-500/30",
    icon: "HeartPulse",
    abstract:
      "Developed safety-aware ML models for fetal health classification using CTG data. Applied feature engineering and evaluation metrics to reduce misclassification risk. Benchmarked multiple classifiers to identify the most reliable clinical approach.",
    tags: ["ML", "Fetal Health", "Cardiotocography", "Safety AI", "IEEE"],
  },
  {
    title: "Braille for All: A $70 AI-Powered Braille Tutoring Robot That Erases the Literacy Gap with a Touch and a Voice",
    venue: "CCE 2026, IEEE, Mexico City",
    publisher: "IEEE",
    authors: "Md Abdullah Hossien Molla et al.",
    authorship: "Co-Author",
    doi: null,
    doiUrl: null,
    year: "2026",
    status: "Accepted & In Press",
    statusColor: "text-yellow-300 bg-yellow-500/20 border-yellow-500/30",
    icon: "Cpu",
    abstract:
      "Co-designed a low-cost ($70) AI-powered Braille tutoring robot for visually impaired learners. Integrated voice and touch feedback for self-paced learning in resource-limited settings. Contributed to system design and evaluation of the assistive learning workflow.",
    tags: ["Robotics", "Assistive Tech", "AI Education", "Braille", "IEEE"],
  },
  {
    title: "Road Condition Detection on Bangladeshi Roads: A Benchmark of YOLO Architectures",
    venue: "ICSIE 2026",
    publisher: "Conference Proceedings",
    authors: "Md Abdullah Hossien Molla et al.",
    authorship: "First Author",
    doi: null,
    doiUrl: null,
    year: "2026",
    status: "Accepted, In Press",
    statusColor: "text-yellow-300 bg-yellow-500/20 border-yellow-500/30",
    icon: "Car",
    abstract:
      "Trained and benchmarked YOLOv5s, v8s, v10s, and v11s on the Bangladesh Road Dataset (11,750 annotated instances across 6 road conditions derived from 4,254 augmented images). Achieved 71.1% mAP50 with the best-performing architecture for road-condition detection. Proposed a benchmark for infrastructure monitoring in developing-country road conditions.",
    tags: ["Computer Vision", "YOLO", "Road Condition Detection", "Edge ML"],
  },
];

export const experience = [
  {
    role: "Research Assistant",
    company: "Independent University, Bangladesh",
    period: "Aug 2025 – May 2026",
    type: "On-Campus",
    icon: "Brain",
    highlights: [
      "Conducted literature reviews to identify research gaps and inform study design",
      "Designed and executed field data collection, including conducting interviews with participants to gather primary research data",
      "Contributed to research writing and manuscript preparation for peer-reviewed publications",
      "Worked alongside faculty and co-authors on multiple research projects spanning applied ML and HCI domains",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "Dept. of Computer Science & Engineering, IUB",
    period: "Nov 2024 – Jan 2026",
    type: "On-Campus",
    icon: "GraduationCap",
    highlights: [
      "Supported faculty with course delivery, grading, and student evaluation for 100+ students per term",
      "Ran office hours and review sessions to help students work through foundational CS concepts",
    ],
  },
  {
    role: "Event Coordinator",
    company: "IUB Chess Club",
    period: "Feb 2024 – 2025",
    type: "On-Campus",
    icon: "Trophy",
    highlights: [
      "Coordinated logistics and registrations for the July Memorial FIDE Chess Championship (IUB)",
      "Ensured compliance with FIDE regulations for international-standard chess events",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Independent University, Bangladesh",
    period: "2022 – Expected Dec 2026",
    cgpa: "3.64",
    status: "In Progress",
    highlights: [
      "Database Management Systems",
      "Object-Oriented Programming",
      "System Design & Analysis",
      "Compiler Design",
      "Artificial Intelligence",
      "Web Development",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Govt. Science College, Tejgaon",
    period: "2020",
    cgpa: "GPA 5.00",
    status: "Completed",
    highlights: [],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Ideal School and College, Dhaka",
    period: "2018",
    cgpa: "GPA 5.00",
    status: "Completed",
    highlights: [],
  },
];

export const researchAreas = [
  {
    year: "2025–2026",
    title: "ML for Healthcare Classification",
    description:
      "Research Assistantship focused on applying machine learning to healthcare data — including fetal health classification using Cardiotocography data and liver care data governance, resulting in two published papers.",
    tags: ["ML", "Healthcare", "Cardiotocography", "Liver Care"],
    icon: "HeartPulse",
    color: "text-rose-400",
  },
  {
    year: "2025–2026",
    title: "AI-Powered Braille Tutoring Robot",
    description:
      "Designed a low-cost ($70) AI-powered Braille tutoring robot for accessibility education, currently under review at CCE 2026 (Phase-1 Accepted).",
    tags: ["Robotics", "Assistive Tech", "AI", "Education"],
    icon: "Cpu",
    color: "text-cyan-400",
  },
  {
    year: "2024–2025",
    title: "EEG-LLM Fusion Research",
    description:
      "Pioneered the application of Large Language Models (TinyLlama) for EEG brainwave classification. MindWaveWeb demonstrates real-time cognitive pattern analysis, bridging neuroscience and generative AI.",
    tags: ["EEG", "LLM", "Neurotechnology", "Signal Processing"],
    icon: "Brain",
    color: "text-purple-400",
  },
  {
    year: "2024",
    title: "Healthcare AI Systems",
    description:
      "Designed and implemented AI-integrated healthcare platforms including GloHealth AI — focusing on explainable ML, geospatial disease analysis, and scalable architecture for real-world clinical applications.",
    tags: ["Healthcare", "Explainable AI", "XGBoost", "Geospatial"],
    icon: "Glasses",
    color: "text-green-400",
  },
];

export const achievements = [
  { value: "4", label: "Papers (2 Pub, 2 Accepted)", icon: "BookOpen", color: "text-blue-400" },
  { value: "3.64", label: "CGPA", icon: "GraduationCap", color: "text-green-400" },
  { value: "4+", label: "Featured Projects", icon: "FolderGit2", color: "text-purple-400" },
  { value: "FIDE", label: "Chess Rating", icon: "Trophy", color: "text-yellow-400" },
  { value: "100+", label: "Students Taught", icon: "Layers", color: "text-cyan-400" },
  { value: "Merit", label: "Dean's List", icon: "Sparkles", color: "text-rose-400" },
];

export const journeyMilestones = [
  {
    id: "foundations",
    period: "2018 – 2022",
    badge: "Academic Roots",
    title: "Foundations & Academic Discipline",
    tagline: "SSC & HSC (GPA 5.00) → Enrolling in Computer Science at IUB",
    description:
      "Built a solid mathematical and analytical foundation at Ideal School & College and Govt. Science College, earning perfect GPA 5.00 in both SSC and HSC examinations. Entered Independent University, Bangladesh (IUB) with a clear ambition to explore algorithmic problem solving and software engineering.",
    highlights: [
      "SSC: GPA 5.00 (Ideal School and College, Dhaka)",
      "HSC: GPA 5.00 (Govt. Science College, Tejgaon)",
      "Commenced B.Sc. in Computer Science at IUB",
    ],
    category: "Education",
  },
  {
    id: "systems-building",
    period: "2022 – 2024",
    badge: "Core Engineering",
    title: "Core CS Systems & Applied Software",
    tagline: "Object-Oriented Architecture & Relational Database Platforms",
    description:
      "Deepened foundational engineering principles through rigorous coursework and project implementations. Architected an OOP Food Court Management system in Java and developed DeshCare, a multi-role vaccination management database platform using PostgreSQL and Flask.",
    highlights: [
      "Built Java OOP Food Court Management platform",
      "Designed DeshCare Vaccination DBMS with role-based workflows",
      "Maintained consistent Dean's List academic standing",
    ],
    category: "Engineering",
  },
  {
    id: "teaching-leadership",
    period: "2024 – 2026",
    badge: "Leadership & Pedagogy",
    title: "Teaching, Mentoring & Campus Leadership",
    tagline: "Teaching Assistant for 100+ CS Students & FIDE Chess Coordinator",
    description:
      "Appointed as an Undergraduate Teaching Assistant in the Department of CSE, mentoring 100+ students per semester in foundational programming, debugging, and lab assignments. Honed the communication and instructional skills valued in graduate research. Served as Event Coordinator for the IUB Chess Club, directing the July Memorial FIDE Chess Championship under international standards.",
    highlights: [
      "Mentored 100+ undergraduate CS students per semester",
      "Coordinated international-standard FIDE chess championships",
      "FIDE rated competitive chess player",
    ],
    category: "Leadership",
  },
  {
    id: "research-breakthrough",
    period: "2024 – 2026",
    badge: "Scholarly Milestones",
    title: "AI Research & Peer-Reviewed Publications",
    tagline: "Research Assistantship → 2 Published (Springer & IEEE) + 2 Accepted",
    description:
      "Appointed faculty Research Assistant at IUB, conducting data preprocessing, statistical validation, and model design for clinical intelligence. Authored published research on liver data governance at HCII 2026 (Springer LNCS) and fetal health classification at IEEE ICMLAS 2026. Designed an affordable ($70) AI Braille tutoring robot (CCE 2026) and a road defect detection benchmark (ICSIE 2026).",
    highlights: [
      "HCII 2026, Springer LNCS 16747 (Published)",
      "ICMLAS 2026, IEEE (Published)",
      "CCE 2026 ($70 Braille Tutoring Robot Accepted)",
      "ICSIE 2026 (YOLO Road Detection Accepted)",
    ],
    category: "Research",
  },
  {
    id: "production-impact",
    period: "2025 – 2026",
    badge: "Production Shipping",
    title: "Shipping Production Software for Real People",
    tagline: "Civic Tech & E-Commerce: StreetVendor & Ababil's Attire",
    description:
      "Bridged academic research with practical software deployments. Built StreetVendor, a geospatial platform for urban vendor registration and QR-identification, and Ababil's Attire, a full-stack e-commerce engine featuring guest checkout, automated bKash reconciliation, and Telegram bot administration.",
    highlights: [
      "StreetVendor: Live civic tech with Leaflet geolocation",
      "Ababil's Attire: Live boutique e-commerce with Supabase RLS",
      "Production containerization and CI/CD on Render & Vercel",
    ],
    category: "Engineering",
  },
  {
    id: "future-aspiration",
    period: "Dec 2026 & Beyond",
    badge: "Next Chapter",
    title: "Graduation & Aspiring Master's Scholar",
    tagline: "B.Sc. in Computer Science (CGPA 3.64) → Graduate Research in AI",
    description:
      "Graduating in December 2026 with a B.Sc. in Computer Science (CGPA 3.64). Actively preparing for graduate school admissions in Computer Science / Artificial Intelligence, aiming to advance reliable, explainable machine learning in healthcare and assistive technology, while welcoming high-impact ML engineering roles.",
    highlights: [
      "Target: Master's in Computer Science / AI & ML",
      "Focus Areas: Clinical Healthcare ML, Neurotechnology & Safe AI",
      "Seeking Graduate Research Opportunities & ML Positions",
    ],
    category: "Aspiration",
  },
];

export interface ReferenceItem {
  name: string;
  role: string;
  department?: string;
  school?: string;
  institution: string;
  email: string;
  phone?: string;
  type: "academic" | "industry";
  badge: string;
  website?: string;
  address?: string;
}

export const references: ReferenceItem[] = [
  {
    name: "Mohammad Shidujaman, PhD",
    role: "Assistant Professor",
    department: "Dept. of Computer Science & Engineering",
    school: "School of Engineering, Technology and Sciences",
    institution: "Independent University, Bangladesh",
    email: "shidujaman@iub.edu.bd",
    type: "academic",
    badge: "Academic & Research Advisor",
  },
  {
    name: "Md Tarek Habib, PhD",
    role: "Associate Professor",
    department: "Dept. of Computer Science & Engineering",
    school: "School of Engineering, Technology and Sciences",
    institution: "Independent University, Bangladesh",
    email: "tarek@iub.edu.bd",
    type: "academic",
    badge: "Academic Advisor",
  },
  {
    name: "Md Abu Sayed",
    role: "Lecturer A",
    department: "Dept. of Computer Science and Engineering",
    school: "School of Engineering, Technology and Sciences",
    institution: "Independent University, Bangladesh",
    email: "asayed@iub.edu.bd",
    type: "academic",
    badge: "Faculty Reference",
  },
  {
    name: "Md. Monwar Hossain (Nibir)",
    role: "Sr. Software Engineer",
    institution: "ERP.COM.BD LTD",
    email: "nibir@erp.com.bd",
    phone: "+88 01621748486",
    website: "https://www.erp.com.bd",
    address: "985 Road-16, Avenue-2, Mirpur DOHS, Dhaka",
    type: "industry",
    badge: "Industry / Engineering Reference",
  },
];

export const academicReferences = references;

