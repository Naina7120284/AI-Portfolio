"use client";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  // --- 1. LOGIC START ---
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

   const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault(); 
   setStatus('sending');

  try {
    // 1. Send the REAL message to YOU (Admin Notification)
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID, 
      form.current!,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current!,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setStatus('success');
    form.current?.reset(); 
  } catch (error) {
    console.error('EmailJS Error:', error);
    setStatus('error');
  }
};

  return (
    <section id="contact" className="relative bg-white py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full rotate-180 leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-16 w-full">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#0f0f0f"></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/5"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#a8c72a] uppercase bg-[#d1f24d]/10 px-3 py-1 rounded-full">
              Get in touch
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Let's <br /> <span className="text-lime-400">Connect...</span>
            </h2>
             <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              I'm currently looking for new opportunities. My inbox is always open!
            </p>

            <div className="mt-10 space-y-4">
             <a href="mailto:shuklanaina638@gmail.com" className="flex items-center gap-4 text-xl font-medium hover:text-gray-600 transition-colors group">
                <div className="p-4 bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors">
                    <Mail className="w-6 h-6" />
                </div>
                <span>shuklanaina638@gmail.com</span>
            </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-3/5 w-full bg-slate-50/50 p-8 rounded-[40px] border border-slate-100 shadow-sm"
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="user_name" className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                    placeholder="Emma Watson"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="user_email" className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                    placeholder="emma@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              
              <button 
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-slate-900 text-[#d1f24d] rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
              >
                {status === 'idle' && <>Send Inquiry <Send size={14} /></>}
                {status === 'sending' && <>Sending... <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}><Send size={14} /></motion.div></>}
                {status === 'success' && <>Message Sent! <CheckCircle size={14} /></>}
                {status === 'error' && <>Try Again</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}