import React, { useState, useRef, useEffect } from "react";
import { SendHorizontal, Minus, MessageSquare, X, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

type Message = { text: string; isBot: boolean };
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: "Hi! I'm **Naina's AI Assistant**. I can help you with her projects, internships or her tech stack. How can I assist you?", 
      isBot: true 
    },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async (customMessage?: string) => {
    const textToSend = customMessage || input;
    if (!textToSend.trim() || loading) return;

    setMessages((prev) => [...prev, { text: textToSend, isBot: false }]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.reply, isBot: true }]);
    } catch (error) {
      setMessages((prev) => [...prev, { text: "**Error:** I couldn't reach the server. Please ensure the Python backend is running.", isBot: true }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-[#121212] border border-white/10 w-[380px] h-[550px] mb-4 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            <div className="p-4 bg-gray-500 flex justify-between items-center shadow-md">
              <div className="flex items-center gap-2">
                <Bot size={20} className="text-black" />
                <span className="font-bold text-black uppercase tracking-wider text-xs">My AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-black/60 hover:text-black transition-colors">
                <Minus size={20} />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-6 bg-[#0a0a0a] scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}>
                  <div className={`max-w-[85%] p-3 px-4 rounded-2xl text-[13.5px] leading-relaxed shadow-sm ${
                    msg.isBot 
                      ? "bg-[#1a1a1a] text-gray-300 rounded-tl-none border border-white/5" 
                      : "bg-lime-500 text-black font-semibold rounded-tr-none shadow-lime-500/10"
                  }`}>

                    <div className="markdown-content">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-[#1a1a1a] p-3 px-4 rounded-2xl rounded-tl-none border border-white/5">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-lime-500 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-lime-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-lime-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar bg-[#0a0a0a] border-t border-white/5">
              {["Internships", "Projects", "Contact Info"].map((q) => (
                <button 
                  key={q} 
                  onClick={() => handleSend(q)} 
                  className="whitespace-nowrap px-3 py-1 rounded-full border border-white/10 text-[11px] text-gray-400 hover:border-lime-500/50 hover:text-lime-500 transition-all"
                >
                  {q}
                </button>
              ))}
            </div>

            <div className="p-4 bg-[#121212] border-t border-white/5 flex items-center gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about Naina Shukla..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-lime-500/40 transition-all placeholder:text-gray-600"
              />
              <button 
                onClick={() => handleSend()} 
                className="bg-lime-500 p-2.5 rounded-xl text-black hover:scale-105 active:scale-95 transition-transform"
              >
                <SendHorizontal size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-lime-500 p-4 rounded-full shadow-[0_0_25px_rgba(163,230,53,0.3)] hover:scale-110 active:scale-90 transition-all"
      >
        {isOpen ? <X className="text-black" size={24} /> : <MessageSquare className="text-black" size={28} />}
      </button>
      <style>{`
        .markdown-content p { margin: 0; }
        .markdown-content strong { color:slate; } /* Lime-500 color for bold text */
        .markdown-content ul { margin-top: 4px; padding-left: 18px; list-style-type: disc; }
        .markdown-content li { margin-bottom: 2px; }
      `}</style>
    </div>
  );
};

export default ChatBot;