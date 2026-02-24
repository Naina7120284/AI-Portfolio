"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const skillsData = [
    { category: "Frontend", items: ["HTML","CSS", "React","TypeScript", "Tailwind"] },
    { category: "Backend", items: ["Node.js", "REST API", "WebSockets", "JWT"] },
    { category: "Database", items: ["MongoDB",  "PostgreSQL"] },
    { category: "DevOps", items: ["Docker", "Render"] },
    { category: "Gen AI", items: ["OpenAI", "Gemini", "Google Copilot"] },
];

export default function Skills() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const springConfig = { stiffness: 50, damping: 20 };
    const x1 = useSpring(useTransform(scrollYProgress, [0, 1], [-150, 150]), springConfig);
    const x2 = useSpring(useTransform(scrollYProgress, [0, 1], [150, -150]), springConfig);
    const x3 = useSpring(useTransform(scrollYProgress, [0, 1], [-200, 200]), springConfig);

    return (
        <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-[#f3f4f6] py-24 px-6" id="skills">
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d1f24d]/30 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-[120px]" />
            </div>
            <div/>
            <div className="absolute inset-0 flex flex-col justify-around py-20 pointer-events-none opacity-20"> {/* Increased opacity slightly to see colors better */}
              {[x1, x2, x3].map((scrollValue, i) => (
                <motion.div key={i} style={{ x: scrollValue }} className="flex gap-20 whitespace-nowrap">
                 {["react", "ts", "tailwind", "nextjs", "mongodb", "docker", "python", "figma", "aws", "postman", "git", "github"].map((icon) => (
                <img 
                    key={icon} 
                    src={`https://cdn.simpleicons.org/${icon}`}
                    alt={icon}
                    className="h-24 w-24 drop-shadow-xl" 
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
               ))}
            </motion.div>
         ))}
        </div>
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-6xl md:text-6xl font-bold tracking-tighter text-slate-900"
                    >
                        Technical <span className="text-slate-500">Skills</span>
                    </motion.h2>
                    <div className="h-2 w-32 bg-[#d1f24d] mt-4 rounded-full shadow-[0_0_20px_rgba(209,242,77,0.5)]" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillsData.map((section, idx) => (
                        <motion.div
                            key={section.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative overflow-hidden rounded-[40px] border border-lime-500/60 bg-white/30 backdrop-blur-2xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
                        >
                         
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-[#d1f24d] rounded-full" />
                                {section.category}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {section.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 rounded-2xl bg-white/50 border border-white text-sm font-semibold text-slate-600 hover:bg-[#d1f24d] hover:text-black hover:border-[#d1f24d] transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}