"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LuxuryBackground from "@/components/luxuryBackground";
import Navbar from "@/components/Navbar";

export default function ProjectForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Yahan aap apna API call add kar sakte hain (Nodemailer wala)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      new Audio('/success.mp3').play().catch(() => {});
    }, 2500);
  };

  return (
    <main className="relative min-h-screen text-white pb-20 overflow-hidden">
      <LuxuryBackground />
      <Navbar />

      <section className="pt-32 px-6 max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="text-blue-400 font-mono tracking-[0.4em] uppercase text-[10px] mb-4"
          >
             Initialization Portal
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic">
            START A <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 font-black uppercase">Project</span>
          </h1>
          <p className="mt-6 text-gray-500 font-light">
            Tell us about your automation needs. **Ch Hassan Hamad Rasool** will personally review your technical requirements.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onSubmit={handleSubmit}
              className="bg-white/[0.03] border border-white/10 backdrop-blur-3xl p-8 md:p-12 rounded-[3rem] shadow-2xl space-y-8"
            >
              {/* Row 1: Name & Company */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                  <input required type="text" placeholder="e.g. Elon Musk" className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all text-white placeholder:text-gray-700" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-2">Company Name</label>
                  <input type="text" placeholder="e.g. SpaceX" className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all text-white placeholder:text-gray-700" />
                </div>
              </div>

              {/* Row 2: Automation Type */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-2">Service Required</label>
                <select className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500/50 transition-all text-gray-300 appearance-none">
                  <option>AI Agent Development</option>
                  <option>Workflow Automation (Make/n8n)</option>
                  <option>Custom SaaS Dashboard</option>
                  <option>Consultation & Strategy</option>
                </select>
              </div>

              {/* Row 3: Budget Range */}
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-2">Estimated Budget Range</label>
                <div className="flex flex-wrap gap-3">
                  {["$1k - $3k", "$3k - $10k", "$10k+", "Custom"].map((budget) => (
                    <label key={budget} className="relative cursor-pointer">
                      <input type="radio" name="budget" className="peer hidden" />
                      <span className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 peer-checked:bg-blue-600 peer-checked:text-white peer-checked:border-blue-500 transition-all inline-block">
                        {budget}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Row 4: Project Brief */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-2">Project Brief</label>
                <textarea required rows={5} placeholder="Describe the workflows you want to automate..." className="w-full bg-black/40 border border-white/10 rounded-3xl p-6 outline-none focus:border-purple-500/50 transition-all text-white placeholder:text-gray-700"></textarea>
              </div>

              {/* Submit Button */}
              <button 
                disabled={loading}
                type="submit" 
                className="w-full py-6 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:brightness-125 transition-all shadow-xl active:scale-95 disabled:opacity-50"
              >
                {loading ? "Transmitting Data..." : "Deploy Inquiry"}
              </button>
            </motion.form>
          ) : (
            /* Success Message */
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center bg-white/[0.03] border border-green-500/20 p-20 rounded-[4rem] backdrop-blur-3xl"
            >
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-8 animate-bounce">
                ✓
              </div>
              <h2 className="text-3xl font-bold mb-4 italic">Transmission Successful</h2>
              <p className="text-gray-400 max-w-sm mx-auto leading-relaxed">
                Thank you. Your project brief has been encrypted and sent to **Ch Hassan Hamad Rasool**. 
                Expect a response within 24 standard earth hours.
              </p>
              <button onClick={() => setSubmitted(false)} className="mt-10 text-blue-400 font-mono text-xs uppercase tracking-widest hover:underline">
                Send another brief?
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}