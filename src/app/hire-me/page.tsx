"use client";
import { motion } from "framer-motion";
import LuxuryBackground from "@/components/luxuryBackground";
import Navbar from "@/components/Navbar";

const services = [
  {
    title: "AI Automation Setup",
    price: "Custom",
    features: ["Custom Workflow Design", "Make/n8n Integration", "API Connectivity","AI AUOTOMATION EXPERT"],
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
  },
  {
    title: "AI Agent Development",
    price: "Premium",
    features: ["Custom GPTs/Agents", "RAG Implementation", "LangChain Framework","all websites","ecommerce project","BLOCKCHAIN EXPERT"],
    glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    featured: true,
  },
  {
    title: "Full-Stack AI App",
    price: "Enterprise",
    features: ["Next.js Dashboard", "AI Model Integration", "Scalable Architecture"],
    glow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
  }
];

export default function HireMe() {
  return (
    <main className="relative min-h-screen text-white pb-20">
      <LuxuryBackground />
      <Navbar />

      <section className="pt-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-400 font-mono tracking-widest text-sm mb-4"
          >
             READY TO SCALE?
          </motion.h2>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
            WORK WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 italic"> HASSAN</span>
          </h1>
        </div>

        {/* --- Service Selection Grid --- */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative group p-8 rounded-[2.5rem] border ${service.featured ? 'border-purple-500 bg-white/10' : 'border-white/10 bg-white/5'} backdrop-blur-3xl transition-all duration-500 ${service.glow}`}
            >
              {service.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-blue-400 font-mono text-xl mb-6">{service.price}</p>
              
              <ul className="space-y-4 mb-8">
                {service.features.map(f => (
                  <li key={f} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="text-blue-500">✓</span> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* --- Quick Contact Trigger --- */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 p-12 rounded-[3rem] text-center backdrop-blur-md">
          <h3 className="text-3xl font-bold mb-6">Have a specific project in mind?</h3>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Main complex enterprise problems ko AI ke zariye hal karne mein expert hoon. 
            Directly mujhse baat karein aur apne workflow ko automate karein.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="contact" className="px-10 py-4 bg-white text-black font-black rounded-full hover:scale-105 transition-all shadow-xl uppercase tracking-tighter">
              Send Email
            </a>
            <a href="/project" className="px-10 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all uppercase tracking-tighter">
              Fill Project Form
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}