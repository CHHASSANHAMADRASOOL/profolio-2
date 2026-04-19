"use client";
import { motion } from "framer-motion";
import LuxuryBackground from "@/components/luxuryBackground";
import Navbar from "@/components/Navbar";

const clientFeedback = [
  {
    name: "Alex Sterling",
    role: "CTO, FutureScale AI",
    text: "Hamad Rasool's AI automation architecture is pure art. He redefined our entire operational speed. 10/10 recommendation.",
    image: "https://i.pravatar.cc/150?u=9",
    verified: true,
  },
  {
    name: "Sarah Chen",
    role: "Founder, InnovateHQ",
    text: "The Agentic workflows Hamad Rasool built for us are flawless. It's like having a 24/7 digital team that never makes mistakes. High-end professional work.",
    image: "https://i.pravatar.cc/150?u=5",
    verified: true,
  },
  {
    name: "Marcus Thorne",
    role: "Operations Director",
    text: "Umeed se kahin zyada behtar! Integration itni smooth thi ke hamara system down hue bina automate ho gaya. Truly a VIP experience with Ch Hassan Hamad Rasool.",
    image: "https://i.pravatar.cc/150?u=12",
    verified: true,
  },
];

export default function Testimonials() {
  return (
    <main className="relative min-h-screen text-white pb-20 overflow-hidden">
      <LuxuryBackground />
      <Navbar />

      <section className="pt-32 px-6 max-w-7xl mx-auto relative z-10">
        {/* --- Modern Header --- */}
        <div className="text-center mb-24 relative">
          {/* Subtle Background Glow */}
          <div className="absolute inset-x-0 -top-10 h-32 bg-purple-600/10 blur-[100px] rounded-full" />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-purple-400 font-mono tracking-[0.4em] uppercase text-xs mb-4"
          >
            Proof of Excellence
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic"
          >
            GLOBAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500 font-black">
              TESTIMONIALS
            </span>
          </motion.h1>
        </div>

        {/* --- VIP Testimonial Grid with 3D Interaction --- */}
        <div className="grid lg:grid-cols-3 gap-8">
          {clientFeedback.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ rotateY: 5, rotateX: 2, scale: 1.02 }}
              className="relative p-10 bg-[#0a001a] border border-white/5 backdrop-blur-3xl rounded-[3.5rem] group transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.05)] hover:shadow-[0_0_80px_rgba(79,70,229,0.15)] hover:border-purple-500/20"
            >
              {/* Decorative Corner Light */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 blur-3xl opacity-10 group-hover:opacity-30" />
              
              {/* VIP Verification Badge */}
              {client.verified && (
                <div className="absolute top-6 right-8 text-[10px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full uppercase tracking-widest group-hover:bg-blue-500 group-hover:text-white transition-all">
                  ✓ VERIFIED CLIENT
                </div>
              )}

              {/* High-End Feedback text */}
              <div className="relative z-10 pt-8">
                <p className="text-xl md:text-2xl font-light text-gray-200 leading-snug italic tracking-tight mb-12">
                  {client.text}
                </p>
              </div>

              {/* Client Profile Section with Neon Glow */}
              <div className="flex items-center gap-5 relative z-10 pt-6 border-t border-white/5">
                <div className="relative group">
                  {/* Neon Glow Circle Behind Image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 blur-xl opacity-30 rounded-full group-hover:opacity-100 transition-opacity" />
                  
                  <img
                    src={client.image}
                    alt={client.name}
                    className="relative w-16 h-16 rounded-full border-2 border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500 shadow-xl"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg tracking-tight group-hover:text-blue-400 transition-colors">
                    {client.name}
                  
                  </h4>
                  <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">
                    {client.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- VIP Bottom Tech Stack & Brand Trust Bar --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-12 bg-white/[0.02] border-y border-white/5 backdrop-blur-sm text-center"
        >
          <p className="text-gray-600 font-mono text-[10px] tracking-[0.5em] uppercase mb-12">Trusted Technology Partners</p>
          <div className="flex flex-wrap justify-center gap-16 text-3xl font-black text-gray-500/40 italic uppercase tracking-tighter">
            <span className="hover:text-white transition-colors cursor-default">OPENAI</span>
            <span className="hover:text-blue-500 transition-colors cursor-default">MAKE</span>
            <span className="hover:text-purple-500 transition-colors cursor-default">NEXTJS</span>
            <span className="hover:text-emerald-500 transition-colors cursor-default">PYTHON</span>
            <span className="hover:text-pink-500 transition-colors cursor-default">TYPESCRIPT</span>
          </div>
        </motion.div>
      </section>
    </main>
  );
}