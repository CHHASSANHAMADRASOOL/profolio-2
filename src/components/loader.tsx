"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] bg-[#0c001a] flex flex-col items-center justify-center"
    >
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-16 h-16 border-4 border-t-blue-500 border-r-purple-500 border-b-transparent border-l-transparent rounded-full mb-6"
      />
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-blue-400 font-mono tracking-[0.5em] text-xs uppercase animate-pulse"
      >
        Initializing AI Systems...
      </motion.p>
    </motion.div>
  );
}