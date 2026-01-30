"use client";

import React from 'react';
import Navbar from "../components/Navbar"; 
import { motion } from "framer-motion";
import { Sun, Fan, User, AlertTriangle, CheckCircle, ArrowRight, Zap, FileText, Link as LinkIcon, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; 

export default function PMSuryaGharPage() {
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900 overflow-hidden relative">

      <Navbar />

      {/* =========================================
          BACKGROUND ANIMATIONS (Synced)
      ========================================= */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] -left-[10%] text-slate-200 opacity-60"
        >
          <Fan size={600} strokeWidth={0.5} />
        </motion.div>

        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6], rotate: 360 }}
          transition={{ 
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 100, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-[10%] -right-[5%] text-orange-400 blur-md opacity-20"
        >
          <Sun size={400} strokeWidth={1} />
        </motion.div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}
      <div className="relative z-10 pt-40 pb-20 container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* HERO HEADER */}
        <motion.div 
          initial="hidden" animate="visible" variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-orange-50 border border-orange-200 text-orange-600 rounded-full text-xs font-bold tracking-widest mb-6 shadow-sm">
             <Zap size={14} className="animate-pulse"/> GOVT. INITIATIVE
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            PM Surya Ghar: <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Muft Bijli Yojana</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed px-4">
            Empowering 1 crore households with free solar electricity — lighting homes, saving energy, and building a sustainable future for India.
          </p>
        </motion.div>

        {/* PM QUOTE & MINISTERS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 items-stretch">
          
          {/* ✅ PM Quote Card WITH PERFECT HD IMAGE FIT */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden flex flex-col-reverse md:flex-row min-h-[500px]"
          >
            {/* Text Content Side */}
            <div className="relative z-20 p-8 md:p-12 md:pr-4 flex-1 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold mb-6 opacity-90 flex items-center gap-2">
                <Sun size={24} className="text-yellow-300 animate-spin-slow" />
                Vision from the Prime Minister
              </h3>
              <blockquote className="text-lg md:text-xl font-light leading-relaxed italic mb-8 opacity-95">
                "In order to further sustainable development and people's well-being, we are launching the PM Surya Ghar: Muft Bijli Yojana. This project, with an investment of over Rs. 75,000 crores, aims to light up 1 crore households by providing up to 300 units of free electricity every month."
              </blockquote>
              <div>
                <p className="font-bold text-2xl">Shri Narendra Modi</p>
                <p className="text-sm opacity-80 uppercase tracking-wider font-medium mt-1">Hon’ble Prime Minister of India</p>
              </div>
            </div>

            {/* Image Side - Fixed to prevent cropping */}
            <div className="relative w-full md:w-[45%] h-[300px] md:h-auto flex-shrink-0">
               {/* Background Sun Pattern */}
               <div className="absolute top-0 right-0 text-white/10 z-0 pointer-events-none"><Sun size={300} strokeWidth={1.5} /></div>
               
               {/* PM Modi Image Container */}
               <div className="absolute inset-0 z-10 w-full h-full">
                 <Image 
                   src="/pm-modi-hd.png.png" // Ensure this file exists in /public
                   alt="Prime Minister Narendra Modi"
                   fill
                   className="object-contain object-bottom md:object-right-middle scale-100" // Ensures image fits and aligns bottom
                   priority
                   sizes="(max-width: 768px) 100vw, 50vw"
                 />
                 {/* Gradient Overlay for seamless blend */}
                 <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-orange-600/80 via-transparent to-transparent z-20"></div>
               </div>
            </div>
          </motion.div>

          {/* Ministers Column (Unchanged) */}
          <div className="flex flex-col gap-6 justify-center">
             <motion.div 
               initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
               className="bg-white/80 backdrop-blur-xl border border-white p-6 rounded-[2rem] shadow-lg flex items-center gap-4 hover:shadow-xl transition-all"
             >
                <div className="p-4 bg-slate-100 rounded-full text-slate-600"><User size={28} /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Shri Pralhad V. Joshi</h4>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wide mt-1">Hon’ble Cabinet Minister</p>
                </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
               className="bg-white/80 backdrop-blur-xl border border-white p-6 rounded-[2rem] shadow-lg flex items-center gap-4 hover:shadow-xl transition-all"
             >
                <div className="p-4 bg-slate-100 rounded-full text-slate-600"><User size={28} /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Shri Shripad Y. Naik</h4>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wide mt-1">Hon’ble Minister of State</p>
                </div>
             </motion.div>

             {/* Important Notice */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
               className="bg-red-50 border border-red-100 p-6 rounded-[2rem] shadow-sm flex-grow flex flex-col justify-center"
             >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-red-700 text-sm mb-2">Important Deadline</h4>
                    <p className="text-xs text-red-600 leading-relaxed font-medium">
                      Applications submitted but not installed before <strong>01.04.2025</strong> are ineligible for CFA and removed from records. Consumers may reapply in the next phase.
                    </p>
                  </div>
                </div>
             </motion.div>
          </div>
        </div>

        {/* BENEFITS & SUBSIDY TABLE (Unchanged) */}
        <motion.div 
          initial="hidden" whileInView="visible" variants={fadeIn}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Benefits & Subsidy Structure</h2>
          <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-8 py-5 text-sm font-bold text-slate-500 uppercase tracking-wider">Category</th>
                    <th className="px-8 py-5 text-sm font-bold text-slate-500 uppercase tracking-wider">Subsidy Rate</th>
                    <th className="px-8 py-5 text-sm font-bold text-slate-500 uppercase tracking-wider">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition">
                    <td className="px-8 py-6 font-bold text-slate-900">Residential households</td>
                    <td className="px-8 py-6 text-green-600 font-bold">Rs. 30,000 <span className="text-slate-500 font-normal text-sm">(up to 2 kW)</span></td>
                    <td className="px-8 py-6 text-slate-600 text-sm">First slab for rooftop solar</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition">
                    <td className="px-8 py-6 font-bold text-slate-900">Additional capacity</td>
                    <td className="px-8 py-6 text-green-600 font-bold">Rs. 18,000 <span className="text-slate-500 font-normal text-sm">(per kW)</span></td>
                    <td className="px-8 py-6 text-slate-600 text-sm">For next 1 kW (Up to 3 kW total)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition">
                    <td className="px-8 py-6 font-bold text-slate-900">Systems &gt; 3 kW</td>
                    <td className="px-8 py-6 text-green-600 font-bold">Max Rs. 78,000</td>
                    <td className="px-8 py-6 text-slate-600 text-sm">Cap for larger systems</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition">
                    <td className="px-8 py-6 font-bold text-slate-900">GHS / RWA (common)</td>
                    <td className="px-8 py-6 text-green-600 font-bold">Rs. 18,000 per kW</td>
                    <td className="px-8 py-6 text-slate-600 text-sm">Upto 500 kW (Incl. EV charging)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-orange-50 px-8 py-4 text-sm text-orange-800 font-medium border-t border-orange-100">
              * Special states receive an additional +10% subsidy incentive.
            </div>
          </div>
        </motion.div>

        {/* REGISTRATION STEPS (Unchanged) */}
        <motion.div 
          initial="hidden" whileInView="visible" variants={fadeIn}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
             <h2 className="text-3xl font-bold text-slate-900">Registration Process</h2>
             <Link href="https://pmsuryaghar.gov.in" target="_blank" className="flex items-center gap-2 text-blue-600 font-bold hover:underline mt-4 md:mt-0 bg-blue-50 px-4 py-2 rounded-full transition-colors hover:bg-blue-100">
               Visit Official Portal <ArrowRight size={18} />
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
             {[
               { step: "01", title: "Visit Portal", desc: "Go to pmsuryaghar.gov.in > Consumer Login" },
               { step: "02", title: "Enter Details", desc: "Enter mobile number & verify captcha." },
               { step: "03", title: "Verify OTP", desc: "Enter the OTP sent to your mobile to login." },
               { step: "04", title: "Complete Profile", desc: "Fill in your profile details and save." },
               { step: "05", title: "Apply", desc: "Select State/DISCOM, fetch details & submit." }
             ].map((item, index) => (
               <div key={index} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg relative group hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="text-5xl font-black text-slate-100 absolute top-4 right-4 group-hover:text-orange-100 transition-colors">{item.step}</div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white mb-4 shadow-md">
                      <CheckCircle size={20} />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-snug font-medium">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </motion.div>

        {/* CAPACITY BUILDING & UPDATES GRID (Unchanged) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left: Capacity Building */}
          <div className="lg:col-span-2 space-y-8">
             <h2 className="text-3xl font-bold text-slate-900">Capacity Building</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/60 backdrop-blur-md p-8 rounded-4xl border border-white shadow-xl hover:shadow-2xl transition-all">
                   <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2"><Zap size={20} className="text-orange-500"/> Introduction</h3>
                   <p className="text-slate-600 text-sm leading-relaxed">
                     The scheme aims for 1 crore rooftop solar installations nationwide, requiring ~1 lakh skilled teams. Proper training ensures high-quality installation & maintenance.
                   </p>
                </div>
                <div className="bg-white/60 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-xl hover:shadow-2xl transition-all">
                   <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2"><FileText size={20} className="text-blue-500"/> Training Scope</h3>
                   <p className="text-slate-600 text-sm leading-relaxed">
                     Training covers installation, O&M, and repair roles for Technicians, Engineers, and Vendors, plus skill-building for DISCOM and government staff.
                   </p>
                </div>
                <div className="bg-white/60 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-xl hover:shadow-2xl transition-all">
                   <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2"><ArrowRight size={20} className="text-green-500"/> Aims & Objectives</h3>
                   <p className="text-slate-600 text-sm leading-relaxed">
                     Train over 3 lakh professionals including 1 lakh Solar PV Technicians. Strengthen DISCOMs, REDAs, and financial bodies via knowledge-sharing.
                   </p>
                </div>
                <div className="bg-white/60 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-xl hover:shadow-2xl transition-all">
                   <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2"><CheckCircle size={20} className="text-purple-500"/> Implementation</h3>
                   <p className="text-slate-600 text-sm leading-relaxed">
                     REC Ltd. acts as National Implementing Agency (NPIA), coordinating through State Implementation Agencies (SIAs) per MNRE’s July 2024 guidelines.
                   </p>
                </div>
             </div>
          </div>

          {/* Right: What's New & Quick Links */}
          <div className="space-y-8">
             {/* What's New */}
             <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl"></div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10"><AlertTriangle size={20} className="text-yellow-400"/> What's New</h3>
                <ul className="space-y-4 relative z-10">
                   {[
                     { date: "9 Oct", text: "Amendment: Awareness & Outreach component." },
                     { date: "9 Oct", text: "Payment mechanism under Utility model." },
                     { date: "1 Oct", text: "Waiver of net metering agreement." },
                     { date: "3 Sep", text: "Update: ALMM Manufacturers List." },
                     { date: "30 Jul", text: "Clarification: Ground Mounted Structures." }
                   ].map((news, i) => (
                     <li key={i} className="flex gap-3 text-sm border-b border-white/10 pb-3 last:border-none">
                        <span className="font-bold text-orange-400 whitespace-nowrap">{news.date}</span>
                        <span className="text-slate-300">{news.text}</span>
                     </li>
                   ))}
                </ul>
             </div>

             {/* Quick Links */}
             <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2"><LinkIcon size={20}/> Quick Links</h3>
                <div className="space-y-3">
                   <Link href="https://pmsuryaghar.gov.in" target="_blank" className="block w-full py-3 px-4 bg-slate-50 hover:bg-orange-50 text-slate-700 hover:text-orange-600 rounded-xl font-medium transition-colors text-center border border-slate-100 shadow-sm">
                      Visit Official Portal
                   </Link>
                   <Link href="/contact" className="block w-full py-3 px-4 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-xl font-medium transition-colors text-center border border-slate-100 shadow-sm">
                      Contact Solarica Support
                   </Link>
                   <button className="block w-full py-3 px-4 bg-slate-50 hover:bg-green-50 text-slate-700 hover:text-green-600 rounded-xl font-medium transition-colors text-center border border-slate-100 flex items-center justify-center gap-2 shadow-sm">
                      <Download size={16}/> Download Guidelines
                   </button>
                </div>
             </div>
          </div>
        </div>

      </div>
    </main>
  );
}