"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000"
];
export default function LuxuryBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Har 5 seconds baad picture change hogi
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 bg-[#0c001a] overflow-hidden">
      {/* Dynamic Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }} // Opacity 0.4 taake text nazar aaye
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${images[index]})` }}
        />
      </AnimatePresence>

      {/* --- The VIP Overlays (Do NOT remove these) --- */}
      
      {/* 1. Purple/Blue Gradient Blur (Signature Look) */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-purple-600/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/20 blur-[120px] rounded-full" />

      {/* 2. Glassmorphism Tint (Darkens the image for readability) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c001a]/80 via-transparent to-[#0c001a]" />
      
      {/* 3. Subtle Technical Grid */}
      <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* 4. Noise/Grain Texture for Premium Feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
 
    </div>
 
);
}