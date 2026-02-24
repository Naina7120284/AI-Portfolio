"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import myPic from '../assets/img.png';
import myBgImage from '../assets/img.jpg';

const Hero = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 30, mass: 0.1, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 30, mass: 0.1, stiffness: 300 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#050505]">
    <section className="relative w-full min-h-screen bg-[#050505] flex items-center overflow-hidden pt-28 md:pt-32">
      
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{ 
            backgroundImage: `radial-gradient(circle, #4d4d4d 1px, transparent 1px), url(${myBgImage})`, 
            backgroundSize: '40px 40px,auto 100%',
            backgroundPosition: 'center right',
            backgroundRepeat: 'repeat, no-repeat',
          }}
        />

        <motion.div 
          style={{
            left: smoothX,
            top: smoothY,
          }}
          className="absolute w-[400px] h-[400px] bg-lime-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />

        <motion.div 
          animate={{ y: ["0%", "100%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-[25vh] bg-gradient-to-b from-transparent via-lime-500/5 to-transparent"
        />
      </div>

      <div className="absolute 
        top-24 md:top-28      
        bottom-6 md:bottom-12 
        left-6 md:left-12 
        right-6 md:right-12 
        z-10 rounded-[40px] border border-white/10 bg-white/[0.01] backdrop-blur-[35px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 z-30 relative flex flex-col md:flex-row items-center justify-between h-full">
        <div className="max-w-2xl text-center md:text-left pt-10 md:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center md:justify-start gap-3 mb-6"
          >
            <div className="w-10 h-[1px] bg-lime-500"></div>
            <span className="text-sm uppercase tracking-[0.2em] text-lime-500">Welcome to my Portfolio</span>
          </motion.div>

          <motion.h1 
             className="text-white text-5xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-6"
              >
          <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               >
               Hi, I'm
         </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-transparent bg-clip-text bg-gradient-to-r from-[#bef264] via-lime-400 to-lime-600 drop-shadow-[0_0_20px_rgba(190,242,100,0.3)]"
           >
           Naina Shukla
         </motion.div>
      </motion.h1>

          <p className="text-gray-400 text-lg max-w-md mb-12 leading-relaxed font-light">
          <span className="text-white">A Computer Science student</span> & <span className="text-white">Full Stack Developer</span> dedicated to building scalable web applications and optimizing system performance.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-6">
               <a 
                href="#about"
                className="px-7 py-4 bg-lime-500 text-black font-bold uppercase text-[10px] tracking-[0.2em] shadow-[0_10px_30px_rgba(163,230,53,0.3)] hover:bg-white transition-all active:scale-95 inline-block text-center"
                >
               View more about me 
              </a>
            <a 
              href="#contact" 
              className="px-7 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-gray-300 font-medium rounded-full hover:scale-105 hover:bg-lime-500 hover:text-black transition-all duration-300"
            >
             Contact Me
            </a>
          </div>
        </div>

        <div 
          className="relative w-full md:w-[40%] h-[50vh] md:h-[80vh] flex justify-center md:justify-end items-end mt-10 md:mt-0"
          style={{ perspective: "1200px" }}
        >
          <motion.div
            className="relative cursor-pointer pointer-events-auto"
            initial={{ z: 0, rotateY: 0, scale: 1 }}
            whileHover={{ 
              z: 100,    
              scale: 1.05, 
              rotateY: -5,
              transition: { type: "spring", stiffness: 200, damping: 15 }
            }}
            whileTap={{ scale: 1.1, z: 150 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.img 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              src={myPic} 
              alt="Profile" 
              className="h-full w-auto object-contain object-bottom contrast-[1.05] brightness-[1.1] drop-shadow-[0_20px_50px_rgba(163,230,53,0.4)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Hero;