"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter, Sun, Fan, Leaf, BatteryCharging, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const links = {
    Product: ['Solar Street Lights', 'Water Pumps', 'Solar Panels', 'Inverters', 'Home Systems'],
    Explore: ['Projects', 'Finance Options', 'Latest News', 'Government Schemes'],
    Support: ['Contact Us', 'Warranty Policy', 'Installation Guide', 'Service Request'],
    Company: ['About Solarica', 'Our Journey', 'Careers', 'Partners']
  };

  // --- ANIMATIONS ---
  const floatSlow = {
    animate: {
      y: [0, -40, 0],
      x: [0, 20, 0],
      rotate: [0, 10, 0],
      // ✅ FIX: Added 'as const'
      transition: { duration: 15, repeat: Infinity, ease: "easeInOut" as const }
    }
  };
  
  const floatLeaf = {
    animate: {
      y: [0, 100, 200],
      x: [0, 50, -50, 20],
      rotate: [0, 180, 360],
      opacity: [0, 1, 0],
      // ✅ FIX: Added 'as const'
      transition: { duration: 20, repeat: Infinity, ease: "linear" as const }
    }
  };

  const rotateWindmill = {
    animate: {
      rotate: 360,
      // ✅ FIX: Added 'as const'
      transition: { duration: 6, repeat: Infinity, ease: "linear" as const }
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-white via-blue-50/30 to-green-50/30 pt-32 pb-0 overflow-hidden font-sans w-full rounded-t-[4rem]">
      
      {/* =======================
          BACKGROUND ANIMATIONS
      ======================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        
        {/* 1. BIG ORANGE SUN (Top Right) */}
        <motion.div variants={floatSlow} animate="animate" className="absolute -top-20 -right-20 opacity-60 z-0">
           <div className="relative">
             <div className="absolute inset-0 bg-orange-200 blur-[80px] opacity-40 rounded-full scale-150"></div>
             <Sun size={250} className="text-orange-400" strokeWidth={1} fill="#fb923c" fillOpacity={0.2} />
           </div>
        </motion.div>

        {/* 2. FLOATING LEAVES (Eco Friendly Feel) */}
        <motion.div variants={floatLeaf} animate="animate" className="absolute top-20 left-10 text-green-400 opacity-60">
            <Leaf size={24} fill="currentColor" />
        </motion.div>
        <motion.div variants={floatLeaf} animate="animate" transition={{ delay: 5, duration: 18, repeat: Infinity, ease: "linear" as const }} className="absolute top-40 right-40 text-green-500 opacity-40">
            <Leaf size={32} fill="currentColor" />
        </motion.div>

        {/* 3. 🌀 WINDMILLS ON HORIZON */}
        <div className="absolute bottom-0 w-full">
            {/* Green Horizon Curve */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-emerald-100 to-transparent opacity-60 rounded-t-[50%] scale-150 translate-y-10"></div>

            {/* Big Windmill Left */}
            <div className="absolute bottom-[-20px] left-[-10px] opacity-30 z-0">
                <div className="relative flex flex-col items-center">
                    <motion.div variants={rotateWindmill} animate="animate" className="origin-center z-10">
                        <Fan size={240} className="text-slate-500" fill="currentColor" fillOpacity={0.1} />
                    </motion.div>
                    <div className="w-4 h-56 bg-slate-400 -mt-10 rounded-full"></div>
                </div>
            </div>

            {/* Medium Windmill Right */}
            <div className="absolute bottom-[-10px] right-[-10px] lg:right-20 opacity-20 z-0 scale-75">
                <div className="relative flex flex-col items-center">
                    <motion.div variants={rotateWindmill} animate="animate" className="origin-center z-10">
                        <Fan size={200} className="text-slate-500" fill="currentColor" fillOpacity={0.1} />
                    </motion.div>
                    <div className="w-3 h-48 bg-slate-400 -mt-10 rounded-full"></div>
                </div>
            </div>
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-multiply"></div>
      </div>


      {/* =======================
          MAIN CONTENT
      ======================== */}
      <div className="container mx-auto px-6 lg:px-16 relative z-10 pb-12">
        
        {/* NEWSLETTER: SOLAR PANEL LOOK */}
        <div className="bg-[#0f294d] rounded-[2.5rem] p-8 lg:p-12 mb-20 shadow-2xl shadow-blue-200/50 relative overflow-hidden text-white flex flex-col lg:flex-row items-center justify-between gap-8 mx-auto transform hover:-translate-y-2 transition-transform duration-500 border border-blue-800">
           
           {/* Solar Panel Grid Texture */}
           <div className="absolute inset-0 opacity-20 pointer-events-none" 
                style={{ 
                   backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                   backgroundSize: '40px 40px'
                }}>
           </div>
           {/* Glass Shine */}
           <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

           <div className="relative z-10 text-center lg:text-left">
             <h3 className="text-3xl font-bold mb-3 flex flex-col md:flex-row items-center gap-3 tracking-tight font-serif">
                <span className="bg-white/10 p-3 rounded-full backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(251,146,60,0.5)]">
                    <Sun className="text-orange-400 animate-spin-slow" size={28} fill="#fb923c" />
                </span>
                Switch to Solar Today
             </h3>
             <p className="text-blue-100 font-medium text-lg tracking-wide flex items-center gap-2 justify-center lg:justify-start">
                <BatteryCharging size={18} className="text-green-400" /> Save Money. Save Earth.
             </p>
           </div>
           
           <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3 relative z-10">
             <input type="email" placeholder="Enter your email" className="px-6 py-4 rounded-full text-slate-900 bg-white focus:outline-none focus:ring-4 focus:ring-orange-400/30 w-full sm:w-80 shadow-lg text-base placeholder:text-slate-400" />
             <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/40 whitespace-nowrap tracking-wide border border-orange-400/20">
                Get Quote
             </motion.button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-12 border-b border-slate-200 pb-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-8 pr-0 lg:pr-8">
            <Link href="/" className="block relative h-16 w-56 transition-transform hover:scale-105 origin-left">
               <Image src="/logoo.png" alt="Solarica" fill className="object-contain object-left" />
            </Link>
            <p className="text-slate-600 text-base leading-relaxed font-medium">
              India's leading solar manufacturer. We provide complete renewable energy solutions to power a sustainable future.
            </p>
            
            <div className="space-y-5 pt-4">
               <a href="https://maps.google.com" target="_blank" className="flex items-start gap-4 text-slate-600 group hover:text-blue-700 transition-colors">
                 <div className="mt-1 p-2 bg-white rounded-lg shadow-sm border border-slate-200 group-hover:border-blue-500 group-hover:bg-blue-50 transition-all">
                   <MapPin size={18} className="text-blue-600"/>
                 </div>
                 <span className="text-sm font-semibold leading-relaxed group-hover:translate-x-1 transition-transform">Audumbar Nivya Complex, Office 203,<br/>Narhe-Ambegaon Road, Pune-411041</span>
               </a>
               <a href="tel:+918530214079" className="flex items-center gap-4 text-slate-600 group hover:text-blue-700 transition-colors">
                 <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-200 group-hover:border-green-500 group-hover:bg-green-50 transition-all">
                   <Phone size={18} className="text-green-600"/>
                 </div>
                 <span className="text-sm font-bold tracking-wider group-hover:translate-x-1 transition-transform font-mono">+91 85302 14079</span>
               </a>
               <a href="mailto:Solaricaindia@gmail.com" className="flex items-center gap-4 text-slate-600 group hover:text-blue-700 transition-colors">
                 <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-200 group-hover:border-orange-500 group-hover:bg-orange-50 transition-all">
                   <Mail size={18} className="text-orange-600"/>
                 </div>
                 <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">Solaricaindia@gmail.com</span>
               </a>
            </div>
          </div>

          {/* Columns 2-5: Links */}
          {Object.entries(links).map(([title, items], index) => (
            <div key={title} className="lg:col-span-1">
               <h4 className="font-bold text-[#0f294d] mb-8 uppercase tracking-[0.2em] text-xs border-b-2 border-green-500 inline-block pb-2">{title}</h4>
               <ul className="space-y-4">
                 {items.map((item) => (
                   <li key={item}>
                     <Link href="#" className="text-slate-500 text-sm font-medium hover:text-green-700 transition-colors flex items-center gap-2 group">
                       <ArrowRight size={14} className="text-green-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                       <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                     </Link>
                   </li>
                 ))}
               </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium text-center md:text-left">
              © {new Date().getFullYear()} <span className="font-extrabold text-[#0f294d]">Solarica Energy India Pvt. Ltd.</span> All Rights Reserved.
          </p>
          
          <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                 <motion.a 
                   key={i} 
                   href="#" 
                   whileHover={{ y: -5, scale: 1.1 }}
                   whileTap={{ scale: 0.9 }}
                   className={`w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center transition-all shadow-md text-slate-400 ${
                      i === 0 ? 'hover:bg-blue-600 hover:text-white hover:border-blue-600' :
                      i === 1 ? 'hover:bg-sky-500 hover:text-white hover:border-sky-500' :
                      i === 2 ? 'hover:bg-pink-600 hover:text-white hover:border-pink-600' :
                                'hover:bg-blue-700 hover:text-white hover:border-blue-700'
                   }`}
                 >
                    <Icon size={18} />
                 </motion.a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;