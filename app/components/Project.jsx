import { motion } from "framer-motion";
import { useState } from "react";
import Image from 'next/image';
import { assets } from '@/assets/assets';
const projects = [
  {
    title: "Fit-Buddy - Fitness Tracker & Diet Planner",
    desc: "Track your workouts, calories, and gym diet with a modern fitness tracker.",
    img: "/images/fit_buddy.png",
    tech: ["React", "TailwindCSS", "Firebase"],
    live: "#",
    code: "#",
  },
  {
    title: "Delivro - Food Delivery App",
    desc: "A responsive food delivery platform with real-time order tracking.",
    img: "/images/deli_vro.png",
    tech: ["Next.js", "MongoDB", "Express"],
    live: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    desc: "A modern personal portfolio with smooth animations and responsive design using Next.js.",
    img: "/images/portfolio.jpg",
    tech: ["HTML5", "CSS3", "JavaScript"],
    live: "https://premshankartripathiworkfolio.netlify.app/",
    code: "https://github.com/premshankartripathi96/portfolio_website",
  },
  {
    title: "E-commerce Website",
    desc: "A fully responsive e-commerce platform with filtering and secure checkout.",
    img: "/images/e_commerce.png",
    tech: ["React", "Node.js", "MongoDB"],
    live: "#",
    code: "#",
  },
  {
    title: "Task Management App",
    desc: "A productivity app to organize tasks, set priorities, and track progress.",
    img: "/images/task.jpg",
    tech: ["Vue.js", "Firebase", "TailwindCSS"],
    live: "#",
    code: "#",
  },
  {
    title: "Random Password Generator",
    desc: "Generate secure and customizable random passwords instantly.",
    img: "/images/random.webp",
    tech: ["JavaScript", "HTML5", "CSS3"],
    live: "https://premshankartripathi96.github.io/OTP-generator/",
    code: "https://github.com/premshankartripathi96/OTP-generator",
  },
  {
    title: "Text-to-Speech Converter",
    desc: "Convert written text into natural-sounding speech.",
    img: "/images/tts.jpg",
    tech: ["React", "Web Speech API"],
    live: " https://premshankartripathi96.github.io/Text-to-speech/",
    code: "https://github.com/premshankartripathi96/Text-to-speech",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section
      className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50 bg-white"
      id="projects"
    >
      <div className="text-center mb-12">
        <h4 className="text-center mb-2 text-lg font-Ovo">Turning Ideas into Interactive Experiences</h4>
        <h2 className="text-center text-5xl font-Ovo">My Projects</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          Here are some of my recent projects that showcase my skills and
          expertise.
        </p>
        <br />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {(showAll ? projects : projects.slice(0, 3)).map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
          >
            
            <div
              className="h-40 bg-cover bg-center"
              style={{ backgroundImage: `url(${p.img})` }}
            ></div>

            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">{p.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4 text-sm">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-600 font-medium hover:underline"
                >
                  View Project
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-600 hover:underline"
                >
                  Source Code 
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className=" flex justify-center text-center mt-12">
        <button
          onClick={() => setShowAll(!showAll)}
          className=" flex items-center gap-2 px-6 py-3 bg-black/80 text-white rounded-full shadow-md hover:bg-black transition"
        > 
          {showAll ? "Hide Projects" : "View All Projects"}<Image src={assets.right_arrow_white} alt='' className='w-4' />
        </button>
      </div>
    </section>
  );
}
