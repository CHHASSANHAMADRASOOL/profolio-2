export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/5 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-black italic">CH HASSAN HAMAD <span className="text-blue-500"> RASOOL</span></h3>
          <p className="text-gray-500 text-sm mt-2">Next-Gen AI Automation Architect.</p>
        </div>
        
        <div className="flex gap-8 text-gray-400 text-sm font-medium">
          <a href="https://github.com/CHHASSANHAMADRASOOL" className="hover:text-blue-500 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/ch-hassan-hamad-rasool-8888a03a6/" className="hover:text-blue-500 transition-colors">LinkedIn</a>
          <a href="https://www.tiktok.com/@chhassanhamadrasool" className="hover:text-blue-500 transition-colors">TIKTOK</a>
        </div>

        <p className="text-gray-600 text-[10px] font-mono uppercase tracking-widest">
          © 2026 All Systems Operational.
        </p>
      </div>
    </footer>
  );
}