import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LuxuryBackground from "@/components/luxuryBackground";
import Loader from "@/components/loader";
import AIChat from "@/components/AiChat"; // 1. Yahan Import karein
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0c001a] text-white antialiased">
        {/* Loader sabse pehle load hoga */}
        <Loader />
        
        {/* Global Background */}
        <LuxuryBackground />
        
        <Navbar />
        
        {/* Main Content Area */}
        <div className="relative z-10 pt-20 min-h-screen">
          {children}
        </div>

        {/* 2. Chatbox ko Footer ke pass add karein */}
        <AIChat />
        
        <Footer />
      </body>
    </html>
  );
}