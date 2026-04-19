"use client";
import { motion } from "framer-motion";
import LuxuryBackground from "@/components/luxuryBackground";
import Navbar from "@/components/Navbar";

const serviceExpertise = [
  {
    title: "Autonomous AI Agents",
    desc: "Deploying self-thinking neural agents that handle customer logic, lead generation, and complex decision-making 24/7.",
    icon: "🤖",
    tag: "Next-Gen AI",
    grid: "md:col-span-2",
    gradient: "from-blue-500/20 to-indigo-500/20"
  },
  {
    title: "Workflow Architect",
    desc: "Connecting 1000+ apps via n8n and Make.com to eliminate manual data entry entirely.",
    icon: "⚙️",
    tag: "Efficiency",
    grid: "md:col-span-1",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Enterprise SaaS",
    desc: "Building high-speed dashboards with Next.js 15 and real-time AI streaming capabilities.",
    icon: "🚀",
    tag: "Full-Stack",
    grid: "md:col-span-1",
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Cognitive Automation",
    desc: "Advanced RAG (Retrieval-Augmented Generation) systems that allow AI to talk directly to your company's private data.",
    icon: "🧠",
    tag: "Intelligence",
    grid: "md:col-span-2",
    gradient: "from-orange-500/20 to-red-500/20"
  }
];

export default function Services() {
  return (
    <main className="relative min-h-screen text-white pb-20 overflow-hidden">
      <LuxuryBackground />
      <Navbar />

      <section className="pt-32 px-6 max-w-7xl mx-auto relative z-10">
        {/* --- VIP Title Section --- */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-blue-500" />
            <span className="text-blue-400 font-mono text-xs tracking-[0.3em] uppercase">Service Catalog v3.0</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
            ENGINEERING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 italic">
              DIGITAL LOGIC
            </span>
          </h1>
          <p className="mt-8 text-gray-500 max-w-xl text-lg font-light leading-relaxed">
            By **Ch Hassan Hamad Rasool**. We dont just build tools; we build autonomous systems that grow your business while you sleep.
          </p>
        </div>

        {/* --- Bento Grid Layout --- */}
        <div className="grid md:grid-cols-3 gap-6">
          {serviceExpertise.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`${service.grid} relative p-10 rounded-[3rem] bg-gradient-to-br ${service.gradient} border border-white/5 backdrop-blur-3xl group overflow-hidden transition-all duration-500 hover:border-blue-500/30 shadow-2xl`}
            >
              {/* Animated Corner Glow */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-white/5 blur-[80px] group-hover:bg-blue-500/20 transition-all duration-700" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                  <span className="text-[10px] font-mono px-3 py-1 border border-white/10 rounded-full text-gray-400 group-hover:text-blue-300 group-hover:border-blue-500/30 transition-all">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-md leading-relaxed font-light">
                  {service.desc}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* --- Call to Action Footer --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Empire?</h2>
          <p className="text-gray-500 mb-10 max-w-lg mx-auto">Join the elite group of businesses powered by Ch Hassan Hamad Rasool AI systems.</p>
          <a 
            href="/hire-me" 
            className="inline-block px-12 py-5 bg-white text-black font-black rounded-full hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            INITIALIZE CONSULTATION
          </a>
        </motion.div>
      </section>
    </main>
  );
}