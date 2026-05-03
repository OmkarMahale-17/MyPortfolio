import { motion } from "framer-motion";
import pronunciation from "./assets/pronunciation.png";
import stress from "./assets/stress.png";
import jarvis from "./assets/jarvis.png";
import automation from "./assets/automation.png";
import expense from "./assets/expense.png";

const projects = [
  {
    title: "AI Pronunciation Detection",
    description:
      "Real-time speech analysis system that detects pronunciation mistakes using NLP and deep learning.",
    tech: ["Python", "TensorFlow", "Speech AI", "NLP"],
    image: pronunciation,   // ✅ updated
    github: "https://github.com/OmkarMahale-17/PronuncePro"
  },
  {
    title: "Stress Detection (Facial AI)",
    description:
      "Detects stress levels using facial expressions with CNN and real-time emotion recognition.",
    tech: ["OpenCV", "CNN", "TensorFlow", "Deep Learning"],
    image: stress,   // ✅ updated
    github: "https://github.com/OmkarMahale-17/-Stress-Detection-Using-Facial-Recognition"
  },
  {
    title: "Jarvis AI Assistant",
    description:
      "Voice-controlled AI assistant that automates tasks, fetches data, and interacts intelligently.",
    tech: ["Python", "Speech Recognition", "Automation", "APIs"],
    image: jarvis,   // ✅ updated
    github: "https://github.com/OmkarMahale-17/Jarvis"
  },
  {
    title: "Automation Agents (n8n)",
    description:
      "AI-powered workflows for weather updates, scheduling, and email automation.",
    tech: ["n8n", "Webhooks", "Node.js", "APIs"],
    image: automation,   // ✅ updated

  },
  {
    title: "AI Expense Manager",
    description:
      "Smart finance system with OCR + AI for tracking expenses and generating insights.",
    tech: ["React", "Node.js", "MongoDB", "OCR", "AI"],
    image: expense,   // ✅ updated
  },
];

export default function Projects() {
  return (
    <div className="py-20 px-6 bg-black text-white">

      {/* 🔥 Section Title */}
      <h1 className="text-4xl font-bold text-center mb-14 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        🚀 INSANE PROJECTS
      </h1>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.06,
              rotateX: 8,
              rotateY: -8,
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(0,0,255,0.2)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]"
          >

            {/* 🖼 Image */}
            <div className="h-44 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* 🌈 Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* 💡 Content */}
            <div className="p-5 relative z-10">

              {/* Title */}
              <h2 className="text-xl font-semibold mb-2 text-blue-400 group-hover:text-purple-400 transition">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              {/* ⚡ Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md hover:scale-110 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition"
              >
                GitHub
              </a>
            </div>

            {/* 🔥 Border Glow */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-500 transition duration-300"></div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}