import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";

// 1. Navbar aur Footer ko Import karein
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solarica Energy - Powering the Future",
  description: "Premium Solar Solutions & Manufacturing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white cursor-none overflow-x-hidden w-full`}>
        
        <CustomCursor />
        
        <SmoothScroll>
          {/* 2. Navbar Sabse Upar */}
          <Navbar />
          
          {/* Page Content */}
          {children}
          
          {/* 3. Footer Sabse Niche */}
          <Footer />
          <FloatingWhatsApp />
        </SmoothScroll>
        
      </body>
    </html>
  );
}