"use client";
import Navbar from "@/components/Navbar";
import LuxuryBackground from "@/components/luxuryBackground";
import { motion } from "framer-motion";

const stats = [
  { label: "Automations Deployed", value: "150+" },
  { label: "Hours Saved / Year", value: "2000+" },
  { label: "AI Models Integrated", value: "25+" },
  { label: "Client Satisfaction", value: "100%" },
];

export default function About() {
  return (
    <main className="relative min-h-screen text-white pb-20">
      <LuxuryBackground />
      <Navbar />

      <section className="pt-32 px-6 max-w-6xl mx-auto">
        {/* --- Top Section: Profile & Vision --- */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-blue-500 font-mono tracking-widest uppercase mb-4 text-sm">THE ARCHITECT</h2>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
              FUSING HUMAN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 italic">
                CURIOSITY
              </span> WITH AI.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              CH HASSAN HAMAD RASOOL
AI Automation Specialist & Full-Stack Developer

I am an AI Automation Specialist driven by the passion to transform repetitive tasks into intelligent, seamless workflows. My approach goes beyond traditional coding; I architect systems that think, adapt, and perform autonomously.

Leveraging the power of Next.js, TypeScript, and Advanced LLMs, I empower businesses to achieve futuristic scalability. I donot just build software—I build the engine for the next generation of business efficiency.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
             Bridging the gap between manual effort and intelligent automation. Specializing in Next.js and Advanced LLMs to build self-evolving systems that scale businesses to the future.
            </p>
          </motion.div>

          {/* Interactive Profile Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-black border border-white/10 rounded-[2rem] overflow-hidden aspect-square flex items-center justify-center">
               <img 
                 src="/image1.jpg" 
                 alt="image1" 
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
               />
               <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl">
                  <p className="text-xs text-blue-400 font-mono mb-1">CURRENT STATUS</p>
                  <p className="text-sm font-bold uppercase tracking-widest">Available for Enterprise Automation</p>
               </div>
            </div>
          </motion.div>
        </div>

        {/* --- Stats Section (Luxury Style) --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 bg-white/5 border border-white/5 rounded-3xl backdrop-blur-sm"
            >
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</h3>
              <p className="text-gray-500 text-xs uppercase tracking-widest font-mono">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* --- Methodology (Why me?) --- */}
        <div className="bg-gradient-to-b from-white/5 to-transparent p-12 rounded-[3rem] border border-white/10">
          <h2 className="text-3xl font-bold mb-12 text-center">My Automation Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="text-blue-500 text-3xl font-black italic underline">01.</div>
              <h4 className="text-xl font-bold">Data Precision</h4>
              <p className="text-gray-500 text-sm">Ghalat data par AI kabhi kaam nahi karti. Main clean data architecture ko priority deta hoon.</p>
            </div>
            <div className="space-y-4">
              <div className="text-purple-500 text-3xl font-black italic underline">02.</div>
              <h4 className="text-xl font-bold">Seamless Sync</h4>
              <p className="text-gray-500 text-sm">Aapki existing apps (Slack, Gmail, CRM) ko AI ke saath aise jorta hoon ke sab kuch magic lage.</p>
            </div>
            <div className="space-y-4">
              <div className="text-blue-400 text-3xl font-black italic underline">03.</div>
              <h4 className="text-xl font-bold">Ethical AI</h4>
              <p className="text-gray-500 text-sm">Safety aur privacy pehle. Aapka data mehfooz rakhte hue automation implement karta hoon.</p>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}