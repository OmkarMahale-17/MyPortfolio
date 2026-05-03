import { useState, useRef } from "react";
import { motion } from "framer-motion";

import ParticlesBg from "./ParticlesBg";
import TypingText from "./TypingText";
import Section from "./Section";
import Projects from "./Projects";
import MagneticButton from "./MagneticButton";
import Skills from "./components/Skills";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import profile from "./assets/profile.png"; // ✅ make sure this exists
function App() {
  useEffect(() => {
    document.title = "Omkar Portfolio";
  }, [])

  const [open, setOpen] = useState(false);

  // 🎮 3D Tilt Logic
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 15;
    const rotateY = (x - rect.width / 2) / 15;

    cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = () => {
    cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div className="text-white font-sans">

      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-slate-900 to-black"></div>

      <ParticlesBg />

      {/* 🔥 NAVBAR */}
      <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            My Portfolio
          </h1>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#resume">Resume</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

            <img
              src={profile}
              alt="profile"
              className="w-10 h-10 rounded-full border-2 border-blue-400"
            />
          </div>

          <div className="md:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
            ☰
          </div>
        </div>
      </nav>

      {/* 🔥 HERO */}
      <section className="h-screen pt-20 flex flex-col justify-center items-center text-center px-6">

        {/* 💎 PREMIUM PROFILE */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
          className="relative w-44 h-44 flex items-center justify-center transition-transform duration-200 mb-6"
          style={{ transformStyle: "preserve-3d" }}
        >

          {/* 🌈 Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-60 animate-pulse"></div>

          {/* 🧊 Glass */}
          <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-xl border border-white/20"></div>

          {/* 🖼 Image */}
          <motion.img
            src={profile}
            alt="profile"
            className="w-40 h-40 rounded-full object-cover z-10 border-4 border-white/20 shadow-[0_0_40px_rgba(99,102,241,0.8)]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>

        {/* NAME */}
        <h1 className="text-6xl font-bold">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Omkar Mahale
          </span>
        </h1>

        <TypingText />

        <MagneticButton>View My Work</MagneticButton>

      </section>

      {/* ABOUT */}
      <Section title="About" id="about">
        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-xl border border-white/10 max-w-4xl mx-auto">

          <p className="text-lg text-gray-300 leading-relaxed">
            I am a <span className="text-blue-400 font-semibold">Full Stack Developer</span> and
            <span className="text-purple-400 font-semibold"> AI Engineer</span> passionate about building scalable, intelligent, and user-centric applications.

            <br /><br />

            I specialize in developing end-to-end solutions, from designing modern and responsive user interfaces using React and Tailwind CSS
            to building powerful backend systems with Django and FastAPI. I focus on writing clean, efficient, and maintainable code while ensuring seamless user experiences.

            <br /><br />

            As an <span className="text-purple-400 font-semibold">AI Engineer</span>, I work with cutting-edge technologies such as Generative AI,
            Retrieval-Augmented Generation (RAG), and Prompt Engineering to create intelligent systems. I enjoy solving real-world problems using AI and automation.

            <br /><br />

            With a strong foundation in both development and artificial intelligence, my goal is to bridge the gap between software engineering and intelligent systems by building innovative, scalable, and future-ready applications that deliver real-world impact.
          </p>

        </div>
      </Section>

      {/* SKILLS */}
      <Skills />

      <div id="resume" className="hidden target:block">
        <Section title="Resume">
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-xl border border-white/10 max-w-3xl mx-auto">

            <a
              href="https://drive.google.com/file/d/15Uf-S8oZTwDFdyHrHdYA-LTOlYxQCE0a/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>

            <iframe
              src="https://drive.google.com/file/d/15Uf-S8oZTwDFdyHrHdYA-LTOlYxQCE0a/preview"
              className="w-full h-[600px]"
              title="Resume"
            />

          </div>
        </Section>
      </div>

      {/* PROJECTS */}
      <Section title="Projects" id="projects">
        <Projects />
      </Section>

      {/* CONTACT */}


      <Section title="Connect With Me" id="contact">
        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-xl border border-white/10 max-w-xl mx-auto flex flex-col items-center gap-6">

          {/* 🔗 Social Icons */}
          <div className="flex gap-8 text-3xl">

            {/* GitHub */}
            <a
              href="https://github.com/OmkarMahale-17"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-blue-400 hover:scale-125 transition duration-300" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/omkar-mahale-013716243"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-500 hover:scale-125 transition duration-300" />
            </a>

            {/* Email */}
            <a href="mailto:omkarmahale62@gmail.com">
              <MdEmail className="hover:text-purple-400 hover:scale-125 transition duration-300" />
            </a>

            {/* Phone */}
            <a href="tel:9845941429">
              <FiPhone className="hover:text-green-400 hover:scale-125 transition duration-300" />
            </a>

          </div>

          {/* ✨ Text */}
          <p className="text-gray-400 text-sm text-center">
            Let’s connect and build something amazing 🚀
          </p>

        </div>

      </Section>

    </div>
  );
}