"use client";

import React, { useState, useEffect, useRef } from 'react';

// Message Interface for TypeScript Safety
interface Message {
  role: 'user' | 'ai';
  content: string;
}

export default function AIChat() {
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', content: "Welcome, I am the AI Assistant of CH HASSAN. How can I assist your VIP inquiry today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fix for Hydration Errors
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-scroll to latest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulated AI Response (Yahan aap apni OpenAI API integrate kar sakte hain)
    setTimeout(() => {
      const aiResponse: Message = { 
        role: 'ai', 
        content: `CH HASSAN is an AI Automation Expert. I have logged your request: "${input}". Would you like to schedule a VIP consultation?` 
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col h-[500px] w-full max-w-md bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[40px] shadow-2xl overflow-hidden">
      
      {/* AI Header */}
      <div className="p-6 border-b border-white/5 bg-white/5 flex items-center gap-4">
        <div className="relative">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-black italic text-xs">CH</div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-black rounded-full animate-pulse"></div>
        </div>
        <div>
          <h3 className="text-xs font-black tracking-widest uppercase">System Intelligence</h3>
          <p className="text-[8px] text-blue-400 font-bold tracking-[3px] uppercase">Online & Ready</p>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-3xl text-[11px] leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-white/5 border border-white/10 text-gray-300 rounded-tl-none'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white/5 border border-white/10 p-4 rounded-3xl rounded-tl-none">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-blue-600 rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-blue-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1 h-1 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Field */}
      <form onSubmit={handleSendMessage} className="p-6 bg-white/5 border-t border-white/5">
        <div className="relative flex items-center">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Command the AI..."
            className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-6 pr-16 text-[10px] text-white tracking-widest focus:outline-none focus:border-blue-600 transition-all uppercase"
          />
          <button 
            type="submit" 
            className="absolute right-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-[10px] font-black transition-all active:scale-95"
          >
            SEND
          </button>
        </div>
      </form>

      {/* Footer Branding */}
      <div className="pb-4 text-center">
        <span className="text-[7px] text-gray-600 tracking-[5px] uppercase font-bold italic">
          AI AGENT BY CH HASSAN
        </span>
      </div>
    </div>
  );
}