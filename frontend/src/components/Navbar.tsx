import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, FileText, Globe, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-[100] bg-[#0f0f0f]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex-shrink-0 flex items-center gap-1">
          <span className="text-2xl font-bold tracking-tighter text-white">
            Naina
         </span>
         <Heart 
           size={20} 
           className="text-rose-400 fill-rose-400 animate-pulse"
           strokeWidth={3}
         />
      </div>
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {['Home', 'About', 'Skills', 'Work', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.2em] text-gray-200 hover:text-lime-500 transition-all duration-300 hover:scale-110"
            >
              {item}
            </a>
          ))}
        </div>

       <div className="hidden md:flex items-center gap-5">
  <a 
    href="https://github.com/Naina7120284" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-300 hover:text-white transition-all hover:-translate-y-1.5 hover:scale-110"
  >
    <Github size={22} />
  </a>
  <a 
    href="https://www.linkedin.com/in/naina-shukla-15406a260/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-300 hover:text-white transition-all hover:-translate-y-1.5 hover:scale-110"
  >
    <Linkedin size={22} />
  </a>

  <a 
    href="/Naina_Shukla_Resume.pdf" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-300 hover:text-white transition-all hover:-translate-y-1.5 hover:scale-110"
    title="View Resume"
  >
    <FileText size={22} />
  </a>
  <div className="h-4 w-[1px] bg-white/10 mx-2"></div>
</div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-b border-white/5 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top">
          {['Home', 'About', 'Skills', 'Work', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm uppercase tracking-widest text-white">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;