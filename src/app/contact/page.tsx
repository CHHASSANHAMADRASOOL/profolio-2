"use client";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const playSound = (type: 'success' | 'error') => {
    new Audio(type === 'success' ? '/success.mp3' : '/error.mp3').play();
  };

  const send = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Add your API fetch logic here (Jo maine pehle provide kiya tha)
    setTimeout(() => { 
      playSound('success'); 
      setLoading(false); 
      alert("Sent!");
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center py-20 px-6">
      <div className="w-full max-w-xl bg-white/5 border border-white/10 backdrop-blur-3xl p-12 rounded-[3rem]">
        <h2 className="text-4xl font-black mb-8 text-center uppercase tracking-tighter italic">Get In Touch</h2>
        <form onSubmit={send} className="space-y-6">
          <input type="text" placeholder="Name" className="w-full p-5 bg-black/50 border border-white/10 rounded-2xl outline-none focus:border-purple-500 transition-all" />
          <input type="email" placeholder="Email" className="w-full p-5 bg-black/50 border border-white/10 rounded-2xl outline-none focus:border-blue-500 transition-all" />
          <textarea placeholder="Message" rows={5} className="w-full p-5 bg-black/50 border border-white/10 rounded-2xl outline-none focus:border-purple-500 transition-all"></textarea>
          <button className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 font-black rounded-2xl hover:brightness-125 transition-all">
            {loading ? "PROCESSING..." : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </div>
  );
}