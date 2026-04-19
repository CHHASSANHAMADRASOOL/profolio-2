"use client";
import { hr } from 'framer-motion/client';
import Link from 'next/link';

export default function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "SkILLS", href: "/skill" },
    { name: "Services", href: "/Services" },
    { name: "Testimonials", href: "/Testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-black/20 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-black italic tracking-tighter">
          AI  AUTOMATION <span className="text-blue-500"> EXPERT</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
          <Link href="/hire-me" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xs font-bold uppercase hover:scale-105 transition-all">
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
}