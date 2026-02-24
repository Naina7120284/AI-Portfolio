import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutPage from './components/About'; // Import it here
import Skills from './components/Skills';
import ChatBot from './components/ChatBot';
import Contact from './components/Contact';
import Work from './components/Work'; 

function App() {
  return (
    <main className="bg-[#b0b3b8]">
      <Navbar />
      
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <AboutPage />
      </section>

      <section id="skills">
        <ChatBot />
        <Skills />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}

export default App;
