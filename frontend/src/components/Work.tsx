"use client";
import React, { useRef, useState } from 'react';
import slateBg from "../assets/slate-texture.jpg";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useMotionTemplate, 
  useMotionValue 
} from 'framer-motion';

import echoBeatsImg from "../assets/echobeats.png"; 
import jobBoardImg from "../assets/jobboard.png";
import parkinsonImg from "../assets/parkinson.png";
import quizBoardImg from "../assets/quizboard.png";

interface Project {
  id: number;
  title: string;
  tech: string[];
  image: any;
  description: string;
  github: string;
  live: string;
}

const projects = [
  { 
    id: 1, 
    title: "Echo-Beats", 
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: echoBeatsImg, 
    description: "A collaborative music streaming platform built with the MERN stack. I architected the database design and implemented secure frontend authentication. It features a seamless user experience for discovering and playing music with real-time sync capabilities.", 
    github: "https://github.com/Naina7120284/echobeats-project", 
    live: "https://echobeats-music-app.onrender.com/",
  },
  { 
    id: 2, 
    title: "Job-Board", 
    tech: ["Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    image: jobBoardImg,
    description: "A comprehensive recruitment platform enabling job posting and application tracking through RESTful APIs. It features role-based access control for recruiters and seekers, advanced filtering, and full database integration for a robust full-cycle hiring experience.", 
    github: "https://github.com/Naina7120284/CODESOFT-TASK-1", 
    live: "https://job-board-fojg.onrender.com/" 
  },
  { 
    id: 3, 
    title: "Quiz-Maker", 
    tech: ["JavaScript", "HTML5", "TailwindCSS", "Node.js", "MongoDB", "Express"], 
    image: quizBoardImg, 
    description: "An interactive assessment tool designed for creating and managing real-time quizzes. I developed dynamic forms for quiz creation and implemented logic for real-time score tracking, providing a clean and intuitive user interface for personalized assessments.", 
    github: "https://github.com/Naina7120284/CODSOFT-TASK-2-Online-Quiz-Maker-", 
    live: "https://quiz-maker-tcrm.onrender.com" 
  },
  { 
    id: 4, 
    title: "Parkinson Prediction", 
    tech: ["Python", "ML", "Streamlit"], 
    image: parkinsonImg, 
    description: "A machine learning model that predicts Parkinson’s disease using voice-based biomedical features. I utilized Scikit-learn for model training, SMOTE for handling imbalanced data, and deployed the final result as a real-time diagnostic tool on Streamlit.", 
    github: "https://github.com/Naina7120284/parkinsons-disease-ml", 
    live: "https://parkinson-prediction.onrender.com" 
  },
];
export default function WorkSection() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);
  const bgTextX = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const badgeX1 = useTransform(scrollYProgress, [0, 1], ["100%", "-20%"]);
  const badgeX2 = useTransform(scrollYProgress, [0, 1], ["80%", "-50%"]);
  const badgeRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section id="work" className="text-white">
      <div ref={targetRef} className="relative h-[250vh] md:h-[250vh] bg-[#b0b3b8] mobile-scroll-fix">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div 
            style={{ 
            x: bgTextX,
            backgroundImage: `url('https://www.google.com/imgres?q=light%20aesthetic%20images%20bg&imgurl=https%3A%2F%2Fmarketplace.canva.com%2FEAGVI0bTFss%2F1%2F0%2F1131w%2Fcanva-cream-and-pink-minimalist-aesthetic-background-document-a4-kspvLvbS_mA.jpg&imgrefurl=https%3A%2F%2Fwww.canva.com%2Ftemplates%2Fs%2Faesthetic-background%2F&docid=CurwsyZZCB3VHM&tbnid=sUF9xyCzAubv0M&vet=12ahUKEwjBg9DhhvCSAxXeVmwGHdEwE0Y4ChCc8A56BAg6EAE..i&w=1131&h=1600&hcb=2&ved=2ahUKEwjBg9DhhvCSAxXeVmwGHdEwE0Y4ChCc8A56BAg6EAE')`, // Replace with your URL
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} 
           className="absolute inset-0 opacity-20 select-none pointer-events-none w-[120%]" 
           >
          </motion.div>

          <motion.div style={{ x: badgeX1, y: -180, rotate: -15 }} className="absolute z-20 left-[10%] top-[30%] opacity-40">
            <div className="w-32 h-32 bg-[#d1f24d] rounded-full blur-3xl" />
          </motion.div>

          <motion.div style={{ x: badgeX2, y: 200, rotate: badgeRotate }} className="absolute z-20 left-[60%] opacity-30">
             <div className="w-40 h-40 bg-white rounded-full blur-[80px]" />
          </motion.div>

          <motion.div style={{ x }} className="relative z-10 flex gap-8 md:gap-16 px-10 md:px-32">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative h-[300px] w-[80vw] md:h-[450px] md:w-[700px] mobile-card-fix shrink-0 overflow-hidden rounded-[40px] border-2 border-[#d1f24d]/50 shadow-[0_0_40px_rgba(209,242,77,0.3)] bg-transparent"
              >
                <img src={project.image} alt="" className="h-full w-full object-cover" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    <div className="relative z-50 py-24 border-t border-white/5 overflow-hidden">
         <div 
  className="absolute inset-0 z-0 opacity-80 pointer-events-none" 
  style={{
    backgroundImage:`url(${slateBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}
/>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-20 text-left border-l-4 border-[#d1f24d] pl-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Selected Works</h2>
            <p className="mt-4 text-white/70 text-lg">Detailed technical breakdown of my recent builds.</p>
          </div>

          <div className="grid grid-cols-1 gap-15 md:grid-cols-2 lg:px-24">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function ProjectCard({ project, index }: { project: Project; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
     className="group relative flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10 max-w-lg mx-auto"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(209, 242, 77, 0.1), transparent 80%)`,
        }}
      />
      <div className="relative h-56 w-full overflow-hidden rounded-2xl mb-6">
        <img src={project.image} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <h3 className="text-[#d1f24d] text-2xl font-bold mb-3">{project.title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((skill) => (
          <span 
            key={skill} 
            className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/10 border border-white/10 text-[#d1f24d] rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
     <p className="text-white/500 text-base mb-4 flex-1">{project.description}</p>
      <div className="flex gap-4">
       <a 
    href={project.live} 
    target="_blank" 
    rel="noopener noreferrer"
    className="px-6 py-2.5 bg-[#d1f24d] text-black text-sm font-bold rounded-full transition-all duration-300 hover:bg-[#b8d642] hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(209,242,77,0.3)]"
  >
    Live Demo
  </a>
        <a 
    href={project.github} 
    target="_blank" 
    rel="noopener noreferrer"
    className="px-6 py-2.5 bg-white/10 border border-white/20 text-white text-sm font-bold rounded-full backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 flex items-center gap-2"
  >
    <span>GitHub</span>
  </a>
      </div>
    </motion.div>
  );
}