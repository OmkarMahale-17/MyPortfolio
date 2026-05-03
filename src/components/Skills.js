import { useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "../MagneticButton";


// ICONS
import { FaPython, FaJava, FaJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import {
    SiDjango,
    SiFastapi,
    SiTailwindcss,
    SiPostman,
    SiHuggingface,
    SiTensorflow,
    SiPytorch,
    SiScikitlearn,
} from "react-icons/si";

const categories = {
    all: "All",
    languages: "Languages",
    web: "Frameworks",
    ai: "AI / LLM",
    tools: "Tools",
};

const skills = [
    // 💻 Languages
    { name: "Python", level: "Expert", category: "languages", icon: <FaPython /> },
    { name: "Java", level: "Intermediate", category: "languages", icon: <FaJava /> },
    { name: "JavaScript", level: "Intermediate", category: "languages", icon: <FaJs /> },

    // ⚙️ Frameworks
    { name: "React", level: "Advanced", category: "web", icon: <FaReact /> },
    { name: "Django", level: "Advanced", category: "web", icon: <SiDjango /> },
    { name: "FastAPI", level: "Advanced", category: "web", icon: <SiFastapi /> },
    { name: "Tailwind CSS", level: "Advanced", category: "web", icon: <SiTailwindcss /> },

    // 🤖 AI / LLM + Libraries
    { name: "TensorFlow", level: "Advanced", category: "ai", icon: <SiTensorflow /> },
    { name: "PyTorch", level: "Advanced", category: "ai", icon: <SiPytorch /> },
    { name: "Scikit-learn", level: "Advanced", category: "ai", icon: <SiScikitlearn /> },
    { name: "Hugging Face", level: "Advanced", category: "ai", icon: <SiHuggingface /> },
    { name: "RAG", level: "Advanced", category: "ai", icon: "⚡" },
    { name: "Prompt Engineering", level: "Expert", category: "ai", icon: "💬" },
    { name: "Generative AI", level: "Advanced", category: "ai", icon: "✨" },

    // 🛠 Tools
    { name: "Git", level: "Expert", category: "tools", icon: <FaGitAlt /> },
    { name: "GitHub", level: "Expert", category: "tools", icon: <FaGithub /> },
    { name: "Postman", level: "Advanced", category: "tools", icon: <SiPostman /> },
    { name: "Cursor", level: "Advanced", category: "tools", icon: "🖱️" },
    { name: "Antigravity", level: "Intermediate", category: "tools", icon: "🌌" },

];

export default function Skills() {
    const [filter, setFilter] = useState("all");

    const filtered =
        filter === "all"
            ? skills
            : skills.filter((s) => s.category === filter);

    return (
        <section id="skills" className="py-24 px-6 text-center">

            {/* 🔥 Heading */}
            <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                ⚡ Technical Skills
            </h2>

            {/* 🧲 Filters */}
            <div className="flex justify-center gap-3 mb-10 flex-wrap">
                {Object.entries(categories).map(([key, value]) => (
                    <MagneticButton key={key}>
                        <button
                            onClick={() => setFilter(key)}
                            className={`px-5 py-1.5 text-sm rounded-full border transition ${filter === key
                                ? "bg-blue-500 text-white shadow-md scale-105"
                                : "bg-black/40 border-white/20 hover:bg-blue-500/20"
                                }`}
                        >
                            {value}
                        </button>
                    </MagneticButton>
                ))}
            </div>

            {/* 🎮 Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

                {filtered.map((skill, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 shadow-lg group"
                    >
                        {/* Icon */}
                        <div className="text-2xl mb-2 text-blue-400 group-hover:scale-110 transition">
                            {skill.icon}
                        </div>

                        {/* Name */}
                        <h3 className="text-sm font-semibold mb-1 group-hover:text-blue-400">
                            {skill.name}
                        </h3>

                        {/* Level */}
                        <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
                            {skill.level}
                        </span>

                    </motion.div>
                ))}

            </div>
        </section>
    );
}