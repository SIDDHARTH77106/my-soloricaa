"use client";

import { useState } from "react";
import { Briefcase, UploadCloud, CheckCircle, ArrowRight, Loader2, User, Mail, FileText, Fan, Sun, Zap, Award, Globe, Heart } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CareersPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  // Job Positions List
  const positions = [
    "Accounts Executive",
    "Sales Manager",
    "Marketing Specialist",
    "Solar Installation Engineer",
    "Operations Manager",
    "Customer Support Executive"
  ];

  // Perks Data for 3D Shutter Cards
  const perks = [
    { title: "Global Impact", desc: "Work on projects that power the world sustainably.", icon: <Globe size={32} />, color: "bg-blue-500", glow: "shadow-blue-500/50" },
    { title: "Innovation Hub", desc: "Access to cutting-edge solar & wind technology.", icon: <Zap size={32} />, color: "bg-yellow-500", glow: "shadow-yellow-500/50" },
    { title: "Career Growth", desc: "Rapid advancement and skill development paths.", icon: <Award size={32} />, color: "bg-orange-500", glow: "shadow-orange-500/50" },
    { title: "Health & Wellness", desc: "Comprehensive benefits for you and your family.", icon: <Heart size={32} />, color: "bg-green-500", glow: "shadow-green-500/50" },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-orange-200 selection:text-orange-900">
      
      {/* 1. CINEMATIC HERO SECTION (Wind & Solar) */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-slate-900 pt-40 pb-20">
        
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
           
           {/* Animated Windmills (Using Icons) */}
           <motion.div 
             animate={{ rotate: 360 }} 
             transition={{ duration: 8, repeat: Infinity, ease: "linear" }} 
             className="absolute top-[20%] right-[10%] text-slate-700 opacity-20"
           >
              <Fan size={300} strokeWidth={1} /> {/* Giant Turbine */}
           </motion.div>
           <motion.div 
             animate={{ rotate: 360 }} 
             transition={{ duration: 6, repeat: Infinity, ease: "linear" }} 
             className="absolute bottom-[10%] left-[5%] text-slate-700 opacity-10"
           >
              <Fan size={200} strokeWidth={1} /> {/* Smaller Turbine */}
           </motion.div>

           {/* Solar Particles */}
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
             <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                <Sun size={14} className="animate-spin-slow" /> We Are Hiring
             </span>
             <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-6 leading-tight">
               POWER <br /> YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-green-400 font-serif italic">FUTURE</span>
             </h1>
             <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
               Join the revolution. Build the grid of tomorrow with <strong className="text-white">Solarica Energy</strong>. Where innovation meets sustainability.
             </p>
          </motion.div>
        </div>
      </section>

      {/* 2. WHY JOIN US (3D SHUTTER CARDS) */}
      <section className="py-24 bg-white relative overflow-hidden">
         {/* Background Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

         <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter">Perks & <span className="text-orange-500 font-serif italic">Benefits</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {perks.map((perk, index) => (
                 <motion.div 
                   key={index}
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1 }}
                   whileHover="hover"
                   className="group relative h-[320px] w-full bg-slate-50 rounded-[2rem] border border-slate-200 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                 >
                   {/* SHUTTER EFFECT BACKGROUND */}
                   <div className="absolute inset-0 flex z-0">
                      {[1, 2, 3, 4, 5].map((strip) => (
                         <motion.div 
                           key={strip}
                           variants={{ hover: { height: "100%" } }}
                           initial={{ height: "0%" }}
                           transition={{ duration: 0.4, delay: strip * 0.05, ease: "circOut" }}
                           className={`w-1/5 bg-gradient-to-b from-slate-900 to-slate-800 border-r border-white/5 last:border-none`}
                         />
                      ))}
                   </div>

                   {/* CONTENT POP EFFECT */}
                   <div className="relative z-10 h-full flex flex-col justify-between p-8">
                      <motion.div 
                        variants={{ hover: { scale: 1.1, rotate: -5 } }}
                        className={`w-16 h-16 rounded-2xl ${perk.color} text-white flex items-center justify-center shadow-lg ${perk.glow}`}
                      >
                         {perk.icon}
                      </motion.div>
                      
                      <motion.div variants={{ hover: { y: -10 } }} transition={{ type: "spring" }}>
                         <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white transition-colors mb-2">{perk.title}</h3>
                         <p className="text-slate-500 group-hover:text-slate-300 transition-colors text-sm font-medium leading-relaxed">{perk.desc}</p>
                      </motion.div>
                   </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. APPLICATION FORM & OPENINGS */}
      <section className="py-24 bg-slate-900 text-white relative">
         <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
            
            {/* LEFT: OPEN POSITIONS */}
            <div className="lg:w-1/2">
               <h3 className="text-orange-400 font-bold tracking-widest uppercase text-sm mb-4">Open Roles</h3>
               <h2 className="text-5xl font-bold mb-10">Current <span className="font-serif italic">Opportunities</span></h2>
               
               <div className="space-y-4">
                  {positions.map((pos, idx) => (
                     <motion.div 
                       key={idx}
                       initial={{ x: -20, opacity: 0 }}
                       whileInView={{ x: 0, opacity: 1 }}
                       transition={{ delay: idx * 0.1 }}
                       whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                       className="p-6 border-b border-white/10 flex justify-between items-center cursor-pointer group"
                     >
                       <div>
                          <h4 className="text-xl font-bold group-hover:text-orange-400 transition-colors">{pos}</h4>
                          <p className="text-sm text-slate-500">Full Time • Pune/Remote</p>
                       </div>
                       <ArrowRight className="text-slate-600 group-hover:text-orange-400 transition-colors opacity-0 group-hover:opacity-100" />
                     </motion.div>
                  ))}
               </div>
            </div>

            {/* RIGHT: APPLICATION FORM (Glassmorphism) */}
            <div className="lg:w-1/2">
               <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                  
                  {/* Decorative Elements on Form */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>

                  <h3 className="text-3xl font-bold mb-2">Apply Now</h3>
                  <p className="text-slate-400 mb-8 text-sm">Become a part of the green energy revolution.</p>

                  {submitted ? (
                    <div className="bg-green-500/20 border border-green-500/50 rounded-2xl p-10 text-center animate-in fade-in zoom-in duration-300">
                      <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30">
                        <CheckCircle size={32} />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-2">Application Sent!</h4>
                      <p className="text-slate-300 mb-6 text-sm">We will review your profile and contact you shortly.</p>
                      <button onClick={() => {setSubmitted(false); setFileName(null);}} className="text-xs text-green-400 font-bold uppercase tracking-widest hover:text-white transition">
                        Submit another
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                      
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-4 text-slate-500" size={18} />
                          <input type="text" required placeholder="Ex. John Sharma" className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 focus:bg-white/10 text-white outline-none transition placeholder:text-slate-600" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-4 text-slate-500" size={18} />
                          <input type="email" required placeholder="john@example.com" className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 focus:bg-white/10 text-white outline-none transition placeholder:text-slate-600" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Position</label>
                        <div className="relative">
                          <Briefcase className="absolute left-4 top-4 text-slate-500" size={18} />
                          <select required className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500 focus:bg-white/10 text-white outline-none transition appearance-none cursor-pointer">
                            <option value="" className="bg-slate-900 text-slate-500">Select Role</option>
                            {positions.map((pos, idx) => <option key={idx} value={pos} className="bg-slate-900">{pos}</option>)}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Resume</label>
                        <div className="border-2 border-dashed border-white/10 rounded-xl p-6 text-center hover:bg-white/5 transition cursor-pointer relative group">
                          <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" required />
                          <div className="flex flex-col items-center gap-2">
                            {fileName ? (
                              <>
                                <FileText className="text-orange-500" size={28} />
                                <span className="text-orange-400 font-medium text-sm">{fileName}</span>
                              </>
                            ) : (
                              <>
                                <UploadCloud className="text-slate-500 group-hover:text-white transition-colors" size={28} />
                                <span className="text-slate-500 text-sm group-hover:text-white transition-colors">Click to upload PDF/DOC</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2 transform active:scale-95 transition-all">
                        {loading ? <><Loader2 className="animate-spin" size={20} /> Processing</> : <>Submit Application <ArrowRight size={20} /></>}
                      </button>

                    </form>
                  )}
               </div>
            </div>
         </div>
      </section>

    </main>
  );
}