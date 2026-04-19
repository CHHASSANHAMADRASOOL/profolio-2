"use client";
import Navbar from "@/components/Navbar";
import LuxuryBackground from "@/components/luxuryBackground";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white flex flex-col items-center pt-32 px-6">
      <LuxuryBackground />
      <Navbar />

      {/* Main Glass Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-[3rem] shadow-2xl text-center"
      >
        {/* Profile Image with Glow Ring */}
        <div className="relative w-48 h-48 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full blur-md opacity-75 animate-spin-slow" />
          <img 
            src="/image.jpg" // Apna image yahan lagayen
            className="relative w-full h-full object-cover rounded-full border-4 border-white/20 shadow-xl"
            alt="image"
          />
        </div>

        {/* VIP Name & Title */}
        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
           CH HASSAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">HAMAD RASOOL</span>
        </h1>
        
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 font-mono text-sm mb-8">
           <span className="animate-pulse">🧠</span> Agentic Systems Architect & Developer
        </div>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Pioneering next-generation digital intelligence. I build autonomous AI workflows 
          and interactive systems that combine sophisticated automation.
        </p>
      </motion.div>
    </main>
  );
}