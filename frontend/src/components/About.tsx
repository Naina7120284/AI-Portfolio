"use client";
import React, { forwardRef } from 'react';
import myPic from "../assets/naina-profile.png";
import BgImage from '../assets/ab.jpg';
import { motion, useInView } from 'framer-motion';

const TypewriterText = ({ text, delay = 0, trigger }: { text: string; delay?: number; trigger: boolean }) => {
  const letters = Array.from(text);
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: delay },
    },
  };
  
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, damping: 12, stiffness: 200 },
    },
    hidden: { opacity: 0, y: 5 },
  };

  return (
    <motion.span variants={container} initial="hidden" animate={trigger ? "visible" : "hidden"}>
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const AboutPage = forwardRef<HTMLDivElement>((props, ref) => {
const internalRef = React.useRef<HTMLDivElement>(null);
const isInView = useInView(internalRef, { amount: 0.2, once: false });
  
const highlights: { label: string; val: string }[] = [
  { label: "Full Stack Development", val: "" },
  { label: "React & Frontend", val: "" },
  { label: "FastAPI & Backend", val: "" },
  { label: "UI / UX ", val: "" },
];

  return (
    <div 
      ref={(node) => {
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
        internalRef.current = node;
      }} 
      id="about" 
      className="relative min-h-screen w-full flex items-center justify-center font-sans overflow-hidden bg-[#b0b3b8]"
    >
      
     <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{ 

          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), transparent), radial-gradient(circle, #4d4d4d 1px, transparent 1px), url(${BgImage})`, 
          backgroundRepeat: 'repeat, no-repeat, no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <style>{`
          #about .absolute.inset-0.z-0 {
            /* Mobile Settings */
            background-size: 100% 100%, 40px 40px, cover;
            background-position: center;
            background-attachment: fixed; /* Moves image to bottom on mobile */
          }
          @media (min-width: 1024px) {
            #about .absolute.inset-0.z-0 {
              /* Your Perfect Desktop Settings */
              background-size: 100% 100%, 40px 40px, auto 100%;
              background-position: center;
            }
          }
        `}</style>
      </div>

      <motion.div 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 }
     }}
      className="relative z-10 w-full max-w-6xl"
   >
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <h1 className="text-[#FFFFFF] text-4xl md:text-5xl font-light tracking-tight font-medium">The Story So Far...</h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-[3px] bg-[#d1f24d]/40 mx-auto mt-4" 
          />
        </motion.div>
        <div className="relative overflow-hidden rounded-[55px] border border-lime-500/40 border-2 border-[#d1f24d]/50 shadow-[0_0_40px_rgba(209,242,77,0.3)] hadow-6xl flex flex-col lg:flex-row items-center p-10 md:p-20 gap-12 min-h-[500px] backdrop-blur-xl bg-white/5" >
          <div className="flex-[1.2] space-y-6 z-10">
            <p className="text-gray-300 text-xl md:text-2xl leading-relaxed">
              <TypewriterText text="I'm " delay={0.8} trigger={isInView} />
    <motion.span 
      initial={{ opacity: 0 }} 
      animate={isInView ? { opacity: 1 } : { opacity: 0 }} 
      transition={{ delay: 1 }}
      className="font-bold text-white px-2 rounded-md"
    >
      Naina
    </motion.span>
    </p>
    <p className="text-gray-100/90 text-lg md:text-xl leading-relaxed">
    <TypewriterText 
      text="A Computer Science student and Full Stack Developer passionate about building intelligent digital experiences." 
      delay={1.2} 
      trigger={isInView} 
    />
    </p>

  <p className="text-gray-200/80 text-lg md:text-xl leading-relaxed italic border-l-2 border-[#d1f24d] pl-4">
    <TypewriterText 
      text="My curiosity drives me to explore how systems work beneath the surface, whether it’s structuring databases, designing APIs, or experimenting with data-driven solutions." 
      delay={3.5} 
      trigger={isInView} 
    />
  </p>
  
  <p className="text-gray-100/90 text-lg md:text-xl leading-relaxed">
    <TypewriterText 
      text="I believe great software is not just functional — it should be thoughtful, efficient, and impactful." 
      delay={6.5} 
      trigger={isInView} 
    />
  </p>
</div>
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 40, damping: 15, delay: 0.2 }}
            className="flex-1 relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative z-10 w-full md:w-[420px] h-[350px] rounded-[40px] border border-lime-500/20 bg-gray/10 backdrop-blur-2xl shadow-xl overflow-hidden group">
              
              <div className="relative z-30 p-6 md:p-10 h-full flex flex-col justify-start md:justify-center">
               <motion.h3 
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }} 
                  transition={{ delay: 0.5 }}
                   className="text-white text-[22px] md:text-[19px] font-extrabold uppercase tracking-[0.15em] mb-6 font-sans drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]"
                >Quick Highlights</motion.h3>

                <div className="space-y-3 md:space-y-4">
                  {highlights.map((item, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.5 + (i * 0.1) }}
                      className="border-b border-white/20 pb-1 w-fit min-w-[120px] mb-3"
                    >
                      <span className="text-[14px] md:text-[18px] text-[#d1f24d] font-medium">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.img 
                src={myPic} 
                initial={{ y: 200 }}
                animate={isInView ? { y: 20 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute right-0 bottom-0 w-[280px] object-contain"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, white 50%, transparent 100%)'
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
});

AboutPage.displayName = "AboutPage";
export default AboutPage;
