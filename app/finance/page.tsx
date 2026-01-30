"use client";

import { useState } from "react";
import { Wallet, Building2, CheckCircle, ArrowRight, Loader2, Fan, Sun, Coins, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function FinancePage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  // ✅ FIX: Added 'as const' to ease property
  const floatingVariant = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900 overflow-hidden relative">

      {/* =========================================
          BACKGROUND ANIMATIONS (Solar & Wind - Light Mode)
      ========================================= */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        
        {/* 1. Giant Rotating Windmill (Left - Subtle Grey) */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -left-[10%] text-slate-200 opacity-60"
        >
          <Fan size={500} strokeWidth={0.5} />
        </motion.div>

        {/* 2. Glowing Sun (Right - Bright Orange) */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6], rotate: 360 }}
          transition={{ 
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 100, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-[5%] -right-[5%] text-orange-400 blur-md opacity-20"
        >
          <Sun size={400} strokeWidth={1} />
        </motion.div>

        {/* 3. Floating Particles/Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>


      {/* =========================================
          CONTENT SECTION
      ========================================= */}
      {/* Added pt-40 to prevent Navbar Overlap */}
      <section className="relative z-10 container mx-auto px-6 md:px-12 pt-40 pb-20">
        
        {/* HERO TEXT */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-orange-50 border border-orange-200 text-orange-600 rounded-full text-xs font-bold tracking-widest mb-6 shadow-sm">
               <Sun size={14} className="animate-spin-slow"/> FINANCIAL FREEDOM
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-slate-900">
              Smart Solar. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500">
                Smarter Finances.
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Don't let capital hold you back. We provide <strong>Zero Upfront Cost</strong> solutions so you can switch to renewable energy today.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT: FLOATING 3D BENEFITS (Light Mode Cards) */}
          <div className="lg:w-1/2 grid gap-8 perspective-1000">
              
              {/* Benefit 1 */}
              <motion.div 
                variants={floatingVariant}
                animate="float"
                className="relative pl-8 border-l-4 border-orange-200 group"
              >
                 <div className="absolute -left-[26px] top-0 w-12 h-12 bg-white border-2 border-orange-400 rounded-full flex items-center justify-center text-orange-500 shadow-lg shadow-orange-500/20 z-10">
                    <Wallet size={20} />
                 </div>
                 {/* 3D Card Look */}
                 <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(249,115,22,0.15)] transition-all duration-300 transform hover:-translate-y-1 hover:rotate-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-orange-500 transition-colors">Zero Upfront Cost</h3>
                    <p className="text-slate-500">Pay strictly through your monthly electricity savings. No heavy initial investment required.</p>
                 </div>
              </motion.div>

              {/* Benefit 2 */}
              <motion.div 
                variants={floatingVariant}
                animate="float"
                transition={{ delay: 1 }} // Staggered float
                className="relative pl-8 border-l-4 border-blue-200 group"
              >
                 <div className="absolute -left-[26px] top-0 w-12 h-12 bg-white border-2 border-blue-400 rounded-full flex items-center justify-center text-blue-500 shadow-lg shadow-blue-500/20 z-10">
                    <TrendingUp size={20} />
                 </div>
                 <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.15)] transition-all duration-300 transform hover:-translate-y-1 hover:rotate-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-500 transition-colors">Tax Benefits</h3>
                    <p className="text-slate-500">Claim accelerated depreciation (AD) benefits of up to 40% per year for commercial projects.</p>
                 </div>
              </motion.div>

              {/* Benefit 3 */}
              <motion.div 
                variants={floatingVariant}
                animate="float"
                transition={{ delay: 2 }} // Staggered float
                className="relative pl-8 border-l-4 border-green-200 group"
              >
                 <div className="absolute -left-[26px] top-0 w-12 h-12 bg-white border-2 border-green-400 rounded-full flex items-center justify-center text-green-500 shadow-lg shadow-green-500/20 z-10">
                    <Building2 size={20} />
                 </div>
                 <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(34,197,94,0.15)] transition-all duration-300 transform hover:-translate-y-1 hover:rotate-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-green-500 transition-colors">Easy Financing</h3>
                    <p className="text-slate-500">We partner with top national banks to provide low-interest Green Loans tailored for you.</p>
                 </div>
              </motion.div>

          </div>

          {/* RIGHT: GLASSMORPHISM FORM (Light Mode) */}
          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
              
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Financial Enquiry</h3>
              <p className="text-slate-500 mb-8 text-sm">Get a custom ROI (Return on Investment) sheet.</p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/10">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-green-800 mb-2">Submitted!</h4>
                  <p className="text-green-700 mb-6 text-sm">Our finance team will contact you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="text-xs text-green-600 font-bold uppercase tracking-widest hover:text-green-800 transition">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Full Name</label>
                    <input 
                      type="text" required placeholder="Ex. Rajesh Kumar" 
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white text-slate-900 outline-none transition placeholder:text-slate-400" 
                    />
                  </div>

                  {/* Grid Inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Phone</label>
                      <input 
                        type="tel" required placeholder="+91..." 
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white text-slate-900 outline-none transition placeholder:text-slate-400" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Email</label>
                      <input 
                        type="email" required placeholder="name@company.com" 
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white text-slate-900 outline-none transition placeholder:text-slate-400" 
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Site Address</label>
                    <textarea 
                      required rows={3} placeholder="Installation location details..." 
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white text-slate-900 outline-none transition resize-none placeholder:text-slate-400"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={loading} 
                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4 transform active:scale-95 transition-all"
                  >
                    {loading ? (
                      <><Loader2 className="animate-spin" size={20} /> Processing...</>
                    ) : (
                      <>Get Financial Plan <ArrowRight size={20} /></>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-slate-400 mt-4">
                    <Coins size={10} className="inline mr-1"/> Data is encrypted and used only for financial assessment.
                  </p>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </section>

    </main>
  );
}