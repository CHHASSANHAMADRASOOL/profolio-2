"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
const skillGroups = [
  {
    category: "AI & Neural Architecture",
    icon: "🧠",
    skills: [
      { name: "OpenAI / Anthropic / DeepSeek", level: 95 },
      { name: "RAG & Vector DBs (Pinecone, Weaviate)", level: 90 },
      { name: "LangChain & LangGraph", level: 88 },
      { name: "Custom LLM Fine-tuning", level: 82 }
    ],
    gradient: "from-blue-600/20 to-indigo-600/20"
  },
  {
    category: "Autonomous Systems",
    icon: "⚙️",
    skills: [
      { name: "Advanced n8n & Make.com", level: 98 },
      { name: "Python Scripting & Selenium", level: 92 },
      { name: "API Architecture & Webhooks", level: 95 },
      { name: "Zapier Central / AI Actions", level: 85 }
    ],
    gradient: "from-purple-600/20 to-fuchsia-600/20"
  },
  {
    category: "Full-Stack Intelligence",
    icon: "🚀",
    skills: [
      { name: "Next.js 15 & React Server Components", level: 94 },
      { name: "TypeScript / Node.js", level: 90 },
      { name: "Tailwind CSS & Framer Motion", level: 96 },
      { name: "Supabase & PostgreSQL", level: 85 }
    ],
    gradient: "from-emerald-600/20 to-teal-600/20"
  }
];

export default function Skills() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 mb-6 border border-blue-500/30 bg-blue-500/10 rounded-full"
          >
            <span className="text-[10px] font-mono tracking-[0.3em] text-blue-400 uppercase">Technical Arsenal v2.0</span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white">
            ELITE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500 italic">CAPABILITIES</span>
          </h1>
        </div>

        {/* Skill Category Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 rounded-[3.5rem] bg-gradient-to-br ${group.gradient} border border-white/10 backdrop-blur-3xl group hover:border-white/20 transition-all duration-500 relative overflow-hidden`}
            >
              {/* Decorative Background Glow */}
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
              
              <div className="text-5xl mb-8">{group.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-10 tracking-tight">{group.category}</h3>

              <div className="space-y-8">
                {group.skills.map((skill, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    {/* Animated Skill Bar */}
                    <div className="h-[4px] w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- VIP Bottom Tech Stack Bar --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-12 bg-white/[0.02] border-y border-white/5 backdrop-blur-sm text-center"
        >
          <p className="text-gray-600 font-mono text-[10px] tracking-[0.5em] uppercase mb-12">Core Technology Ecosystem</p>
          <div className="flex flex-wrap justify-center gap-12 text-2xl font-black text-gray-500/40 italic">
            <span className="hover:text-white transition-colors cursor-default">OPENAI</span>
            <span className="hover:text-blue-500 transition-colors cursor-default">MAKE</span>
            <span className="hover:text-purple-500 transition-colors cursor-default">NEXTJS</span>
            <span className="hover:text-emerald-500 transition-colors cursor-default">PYTHON</span>
            <span className="hover:text-pink-500 transition-colors cursor-default">TYPESCRIPT</span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}