"use client";

import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Sun, Star, Zap, ArrowUpRight, CheckCircle, ChevronLeft, ChevronRight, ShoppingBag, Factory, Building2, TrendingUp, Globe, Fan } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; 
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// GSAP Imports
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // ==========================================
  // PM SURYA GHAR SLIDESHOW LOGIC
  // ==========================================
  const [currentSuryaImage, setCurrentSuryaImage] = useState(0);
  const suryaImages = [
    "/Suryaghar.png",
    "/modi.png",
    "/modi1.png",
    "/modi2.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSuryaImage((prev) => (prev + 1) % suryaImages.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, [suryaImages.length]);


  // ==========================================
  // GSAP MARQUEE LOGIC (FIXED)
  // ==========================================
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let animationFrameId: number;

    const animate = () => {
        if (xPercent < -100) xPercent = 0;
        else if (xPercent > 0) xPercent = -100;
        
        if(firstText.current && secondText.current){
            gsap.set(firstText.current, { xPercent: xPercent });
            gsap.set(secondText.current, { xPercent: xPercent });
        }
        
        xPercent += 0.1 * direction; 
        animationFrameId = requestAnimationFrame(animate);
    };

    const ctx = gsap.context(() => {
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,
          onUpdate: e => {
            direction = e.direction * -1; 
          }
        },
        x: "-=300px", 
      });
    }, slider);

    // Start animation loop
    animationFrameId = requestAnimationFrame(animate);

    return () => {
        ctx.revert();
        cancelAnimationFrame(animationFrameId); // ✅ Fix: Stop loop on unmount
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yVideo = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // ==========================================
  // PRODUCT AUTO SCROLL LOGIC
  // ==========================================
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const itemWidth = container.children[0]?.clientWidth || 320;
        const gap = 32; 
        const scrollAmount = itemWidth + gap;
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScroll - 10) {
           container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
           container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 3000); 

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const itemWidth = scrollContainerRef.current.children[0]?.clientWidth || 320;
      scrollContainerRef.current.scrollBy({ left: -(itemWidth + 32), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const itemWidth = scrollContainerRef.current.children[0]?.clientWidth || 320;
      scrollContainerRef.current.scrollBy({ left: (itemWidth + 32), behavior: 'smooth' });
    }
  };

  // Data Objects
  const featuredProducts = [
    { id: "solar-street-light", name: "Solar Street Lights", image: "/StreetLights.avif", tag: "Best Seller", color: "bg-orange-500" },
    { id: "solar-water-pump", name: "Solar Water Pumps", image: "/waterpumps.webp", tag: "High Efficiency", color: "bg-blue-500" },
    { id: "solar-water-heater", name: "Solar Water Heater", image: "/Suryaghar.webp", tag: "Eco Friendly", color: "bg-red-500" },
    { id: "solar-garden-light", name: "Solar Garden Lights", image: "/SolarGardenLight.webp", tag: "Decorative", color: "bg-green-500" },
    { id: "solar-decorative", name: "Solar Decorative Lights", image: "/SolarGardenLight.webp", tag: "New Arrival", color: "bg-purple-500" },
    { id: "solar-flood-light", name: "Solar Flood Lights", image: "/StreetLights.avif", tag: "High Power", color: "bg-yellow-500" },
    { id: "solar-inverter", name: "Solar Inverter", image: "/solarinverter.webp", tag: "Hybrid Tech", color: "bg-cyan-500" },
    { id: "solar-panels", name: "Solar Panels", image: "/panels.jpg", tag: "High Output", color: "bg-indigo-500" },
    { id: "ac-lights", name: "AC Lights", image: "/StreetLights.avif", tag: "Commercial", color: "bg-teal-500" },
    { id: "home-lights", name: "Home Lights", image: "/SolarGardenLight.webp", tag: "Indoor", color: "bg-rose-500" }
  ];

  // Updated Companies Data for Shutter Effect
  const companies = [
     { id: 1, name: "Solarica Energy India", desc: "Solar product manufacturing & high-efficiency components.", icon: <Sun size={40}/>, color: "from-orange-500 to-red-500" },
     { id: 2, name: "Solarica Systems", desc: "EPC execution & turnkey solar project development.", icon: <Zap size={40}/>, color: "from-blue-500 to-cyan-500" },
     { id: 3, name: "Solarica Industries", desc: "Large-scale solar production & industrial components.", icon: <Factory size={40}/>, color: "from-slate-700 to-black" },
     { id: 4, name: "Solarica Greenwheels", desc: "Sustainable mobility & EV solutions.", icon: <TrendingUp size={40}/>, color: "from-green-500 to-emerald-500" },
     { id: 5, name: "Solarica Fabtech", desc: "Structure fabrication & mounting systems.", icon: <Building2 size={40}/>, color: "from-purple-500 to-indigo-500" }
  ];

  const [activeCompany, setActiveCompany] = useState(0);

  return (
    <main ref={containerRef} className="bg-white text-slate-900 min-h-screen font-sans selection:bg-orange-100 selection:text-orange-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-slate-900">
        <motion.div style={{ y: yVideo }} className="absolute inset-0 w-full h-[120%] z-0">
           <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-60 scale-110">
             <source src="/vid2.mp4" type="video/mp4" />
           </video>
           <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-fill z-10">
             <source src="/vid2.mp4" type="video/mp4" />
           </video>
           <div className="absolute inset-0 bg-black/20 z-20" /> 
        </motion.div>

        <motion.div style={{ opacity: opacityText }} className="relative z-30 text-center container mx-auto px-4 mt-20">
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}>
             <h1 className="text-[12vw] leading-[0.8] font-bold text-white tracking-tighter drop-shadow-2xl">SOLARICA</h1>
             <h2 className="text-3xl md:text-6xl font-light text-white mt-6 tracking-tight drop-shadow-lg">Everyday Energy — <span className="font-serif italic text-green-400">Reimagined.</span></h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-col md:flex-row gap-4 justify-center mt-12">
            <Link href="/products" className="group relative overflow-hidden bg-[#a3e635] hover:bg-[#84cc16] text-slate-900 px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 shadow-xl hover:shadow-green-400/40 hover:scale-105">
               Explore Products <ArrowRight size={20} className="group-hover:-rotate-45 transition-transform duration-300"/>
            </Link>
            <Link href="/contact" className="group relative overflow-hidden bg-white hover:bg-slate-100 text-slate-900 px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 shadow-xl hover:scale-105">
               Get in Touch <span className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse"></span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. MARQUEE STRIP */}
      <div className="py-10 bg-white border-y border-slate-100 overflow-hidden relative z-20">
        <div ref={slider} className="relative whitespace-nowrap flex w-full">
           <div ref={firstText} className="relative flex items-center flex-shrink-0 pr-16">
             <span className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mr-16">Solar Street Lights</span><Sun size={60} className="text-yellow-400 animate-spin-slow mr-16" />
             <span className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 mr-16">Solar Water Pumps</span><Zap size={60} className="text-blue-500 fill-current mr-16" />
             <span className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-700 mr-16">EPC Projects</span><Sun size={60} className="text-orange-400 animate-spin-slow mr-16" />
             <span className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 mr-16">Hybrid Inverters</span><Zap size={60} className="text-yellow-500 fill-current mr-16" />
             <span className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mr-16">PM Surya Ghar</span><Sun size={60} className="text-orange-500 animate-spin-slow mr-16" />
           </div>
           <div ref={secondText} className="relative flex items-center flex-shrink-0 pr-16">
             <span className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mr-16">Solar Street Lights</span><Sun size={60} className="text-yellow-400 animate-spin-slow mr-16" />
             <span className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 mr-16">Solar Water Pumps</span><Zap size={60} className="text-blue-500 fill-current mr-16" />
             <span className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-700 mr-16">EPC Projects</span><Sun size={60} className="text-orange-400 animate-spin-slow mr-16" />
             <span className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 mr-16">Hybrid Inverters</span><Zap size={60} className="text-yellow-500 fill-current mr-16" />
             <span className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mr-16">PM Surya Ghar</span><Sun size={60} className="text-orange-500 animate-spin-slow mr-16" />
           </div>
        </div>
      </div>

      {/* 3. FEATURED PRODUCTS (SLIDER) */}
      <section 
        className="py-32 relative overflow-hidden bg-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50/50 via-white to-white"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute inset-0 pointer-events-none z-0">
           <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-10 right-[-10%] opacity-20 text-orange-400"><Sun size={400} strokeWidth={1} /></motion.div>
           <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-400 rounded-full blur-sm animate-pulse"></div>
        </div>

        <div className="container mx-auto relative z-10 px-0 md:px-6">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-6 md:px-6">
             <div>
               <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block flex items-center gap-2"><Sun size={14} className="animate-spin-slow"/>Our Collection</motion.span>
               <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter">
                 Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 font-serif italic">Innovations</span>
               </motion.h2>
             </div>
             <div className="flex gap-3 mt-6 md:mt-0">
               <button onClick={scrollLeft} className="w-12 h-12 rounded-full border border-orange-200 text-orange-500 hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center shadow-lg active:scale-95"><ChevronLeft size={24} /></button>
               <button onClick={scrollRight} className="w-12 h-12 rounded-full border border-orange-200 text-orange-500 hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center shadow-lg active:scale-95"><ChevronRight size={24} /></button>
             </div>
           </div>

           <style jsx>{` .hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; } `}</style>
           
           <div ref={scrollContainerRef} className="flex overflow-x-auto gap-8 px-6 md:px-6 pb-12 snap-x snap-mandatory hide-scrollbar scroll-smooth">
             {featuredProducts.map((product, index) => (
               <Link href={`/products/${product.id}`} key={product.id} className="snap-center">
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} whileHover="hover"
                    className="group relative h-[450px] w-[320px] md:w-[380px] bg-white rounded-[2.5rem] border border-orange-100 shadow-[0_10px_40px_-15px_rgba(249,115,22,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(249,115,22,0.2)] overflow-hidden cursor-pointer transition-all duration-500 flex-shrink-0"
                  >
                      <div className="absolute inset-0 flex z-0">
                         {[1, 2, 3, 4, 5].map((strip) => (
                            <motion.div key={strip} variants={{ hover: { height: "100%" } }} initial={{ height: "0%" }} transition={{ duration: 0.4, delay: strip * 0.05, ease: "circOut" }} className={`w-1/5 bg-gradient-to-b from-orange-50/80 to-yellow-50/80 border-r border-orange-100/50 backdrop-blur-sm last:border-none`} />
                         ))}
                      </div>
                      <div className="relative z-10 h-full flex flex-col p-6">
                         <div className="flex justify-between items-start">
                            <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white ${product.color} shadow-md`}>{product.tag}</span>
                         </div>
                         <div className="flex-grow flex items-center justify-center relative">
                            <motion.div variants={{ hover: { opacity: 0.8, scale: 1.5 } }} className={`absolute w-40 h-40 rounded-full blur-[60px] opacity-30 transition-all duration-500 ${product.color.replace('bg-', 'bg-')}/40`} />
                            <motion.div variants={{ hover: { y: -20, scale: 1.1, rotate: 2, zIndex: 20 } }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="relative w-72 h-60 filter drop-shadow-2xl">
                               <Image src={product.image} alt={product.name} fill className="object-contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                            </motion.div>
                         </div>
                         <div><h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-orange-500 transition-colors leading-tight text-center">{product.name}</h3></div>
                      </div>
                   </motion.div>
               </Link>
             ))}
           </div>
        </div>
      </section>

      {/* 4. PM SURYA GHAR */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
             <div className="lg:col-span-5">
                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">Government Initiative</span>
                <h2 className="text-6xl md:text-8xl font-bold text-slate-900 mb-8 leading-[0.9] tracking-tighter">PM Surya <br/><span className="text-orange-500 font-serif italic">Ghar Yojana</span></h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-10 font-light">Authorized Vendor: <strong className="text-slate-900">Solarica Energy India Pvt. Ltd.</strong><br/>Get up to 300 units free electricity monthly.</p>
                <div className="flex flex-wrap gap-4">
                   <div className="bg-orange-50 px-8 py-5 rounded-2xl border border-orange-100 flex items-center gap-3"><Sun className="text-orange-500 w-6 h-6"/><span className="font-bold text-slate-900 text-lg">Subsidy</span></div>
                   <div className="bg-blue-50 px-8 py-5 rounded-2xl border border-blue-100 flex items-center gap-3"><Zap className="text-blue-500 w-6 h-6"/><span className="font-bold text-slate-900 text-lg">Free Power</span></div>
                </div>
             </div>
             <div className="lg:col-span-7">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-100 h-[600px] w-full">
                   <AnimatePresence mode="wait">
                     <motion.div
                       key={currentSuryaImage}
                       initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}
                       className="absolute inset-0 w-full h-full"
                     >
                       <Image src={suryaImages[currentSuryaImage]} alt="PM Surya Ghar" fill className="object-fill hover:scale-105 transition-transform duration-700"/>
                     </motion.div>
                   </AnimatePresence>
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                   <div className="absolute bottom-10 left-10 right-10 text-white">
                      <h3 className="text-3xl font-bold mb-4">How to Apply</h3>
                      <ul className="space-y-4 text-lg">
                         <li className="flex items-center gap-4"><CheckCircle className="text-green-400"/> Register at pmsuryaghar.gov.in</li>
                         <li className="flex items-center gap-4"><CheckCircle className="text-green-400"/> Select <strong>Solarica Energy</strong> as vendor.</li>
                      </ul>
                      <div className="mt-6"><Link href="/pmsuryaghar" className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold transition-all">Register Now</Link></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* =========================================================================================
          5. MANUFACTURING / SUBSIDIARIES (UPDATED: White Solar Theme + 3D Slider)
      ========================================================================================= */}
      <section className="py-32 relative overflow-hidden bg-white min-h-screen flex flex-col justify-center">
         
         {/* === SOLAR FARM BACKGROUND ANIMATION (WHITE THEME) === */}
         <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Animated Sky Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white opacity-80"></div>

            {/* Animated Sun */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 right-10 text-orange-400 opacity-20"
            >
               <Sun size={200} />
            </motion.div>

            {/* Windmills on Horizon */}
            <div className="absolute bottom-0 w-full flex justify-between items-end opacity-10 px-10 pointer-events-none">
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="origin-center text-slate-800">
                  <Fan size={180} strokeWidth={1} />
               </motion.div>
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="origin-center text-slate-800 mb-10">
                  <Fan size={120} strokeWidth={1} />
               </motion.div>
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="origin-center text-slate-800">
                  <Fan size={220} strokeWidth={1} />
               </motion.div>
            </div>

            {/* Solar Panel Array (Stylized) */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-[linear-gradient(45deg,transparent_48%,#cbd5e1_49%,#cbd5e1_51%,transparent_52%),linear-gradient(-45deg,transparent_48%,#cbd5e1_49%,#cbd5e1_51%,transparent_52%)] bg-[size:40px_40px] opacity-10 perspective-1000 transform rotate-x-60"></div>
         </div>

         <div className="container mx-auto px-4 relative z-10">
            
            {/* Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
               <span className="inline-flex items-center gap-2 py-2 px-6 rounded-full border border-orange-200 bg-orange-50 text-xs font-bold uppercase tracking-widest text-orange-600 mb-6 shadow-sm">
                 <Sun size={14} className="animate-spin-slow"/> Our Ecosystem
               </span>
               <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-slate-900">
                 Solarica <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500 font-serif italic">Group</span>
               </h2>
               <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                 One Group, Complete Solutions: Seamlessly integrating manufacturing, EPC, and sustainable mobility.
               </p>
            </motion.div>

            {/* 3D EXPANDING SLIDER (VIRYA STYLE - White Theme Adapted) */}
            <div className="flex flex-col lg:flex-row h-[70vh] min-h-[600px] gap-4 w-full max-w-[1400px] mx-auto perspective-1000">
               {companies.map((company, index) => (
                 <motion.div 
                   key={company.id}
                   layout
                   onMouseEnter={() => setActiveCompany(index)}
                   className={`relative overflow-hidden rounded-[3rem] cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-2xl border border-slate-100 group
                     ${activeCompany === index ? 'flex-[5] lg:flex-[3.5] ring-4 ring-orange-500/10' : 'flex-[1] grayscale hover:grayscale-0 bg-slate-50'}
                   `}
                 >
                    {/* Dynamic Background Gradient (Active State Only) */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${company.color} transition-opacity duration-500 ${activeCompany === index ? 'opacity-90' : 'opacity-0'}`}></div>
                    
                    {/* Inactive Background (White/Gray) */}
                    <div className={`absolute inset-0 bg-white transition-opacity duration-500 ${activeCompany === index ? 'opacity-0' : 'opacity-100'}`}></div>

                    {/* Texture Overlay (Only on active) */}
                    <div className={`absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay ${activeCompany === index ? 'block' : 'hidden'}`}></div>
                    
                    {/* Content Wrapper */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                       
                       {/* Icon (Floating Effect) */}
                       <div className="mb-auto">
                          <motion.div 
                            className={`w-16 h-16 rounded-2xl flex items-center justify-center border shadow-lg transition-all duration-500
                              ${activeCompany === index ? 'bg-white/20 backdrop-blur-xl text-white border-white/30 scale-110' : 'bg-slate-100 text-slate-400 border-slate-200 scale-100'}
                            `}
                            layout
                          >
                             {company.icon}
                          </motion.div>
                       </div>

                       {/* Title & Description Container */}
                       <div className="relative overflow-hidden">
                          {/* Vertical Text for Inactive State */}
                          <h3 
                            className={`font-black whitespace-nowrap transition-all duration-500 absolute bottom-0 left-0 origin-bottom-left -rotate-90 text-4xl tracking-widest text-slate-300
                              ${activeCompany === index ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                            `}
                          >
                            {company.name.split(" ")[1]} 
                          </h3>

                          {/* Full Content for Active State */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ 
                              opacity: activeCompany === index ? 1 : 0, 
                              y: activeCompany === index ? 0 : 20 
                            }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className={`${activeCompany === index ? 'block' : 'hidden'}`}
                          >
                             <h3 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[0.9] drop-shadow-lg">
                               {company.name}
                             </h3>
                             <div className="h-1 w-24 bg-white/50 rounded-full mb-6"></div>
                             <p className="text-white/90 text-xl font-light leading-relaxed mb-8 max-w-lg drop-shadow-md">
                               {company.desc}
                             </p>
                             <Link href="/about" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-slate-200 transition-all shadow-xl hover:scale-105">
                                Explore <ArrowRight size={18} className="text-orange-600"/>
                             </Link>
                          </motion.div>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>

         </div>
      </section>

      {/* 6. GIANT CTA */}
      <section className="h-[80vh] flex items-center justify-center bg-slate-900 text-white rounded-t-[4rem] relative overflow-hidden mx-2 md:mx-6 mb-4 group cursor-pointer">
         <div className="absolute inset-0 z-0">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700 filter grayscale group-hover:grayscale-0">
              <source src="/WhatsApp%20Video%202025-12-17%20at%2010.57.48.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-700"></div>
         </div>
         <div className="absolute inset-0 flex z-10 pointer-events-none">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((strip) => (
               <motion.div key={strip} variants={{ hover: { height: "100%" } }} initial={{ height: "0%" }} transition={{ duration: 0.5, delay: strip * 0.03, ease: "circOut" }} className="w-full bg-gradient-to-b from-orange-600/30 to-yellow-500/20 backdrop-blur-[2px] border-r border-white/5 last:border-none" />
            ))}
         </div>
         <div className="text-center z-20 container mx-auto px-4 relative">
            <h2 className="text-7xl md:text-[10rem] font-bold tracking-tighter mb-12 leading-[0.8] drop-shadow-2xl">READY TO <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 font-serif italic group-hover:from-orange-400 group-hover:to-yellow-400 transition-all duration-500">SWITCH?</span></h2>
            <Link href="/contact" className="inline-flex items-center gap-4 bg-white text-slate-900 rounded-full px-16 py-8 text-2xl font-bold hover:bg-orange-400 hover:text-white hover:scale-105 transition-all duration-300 shadow-[0_0_50px_rgba(255,255,255,0.3)]">Get Your Free Quote <ArrowRight size={28}/></Link>
         </div>
      </section>
      
    </main>
  );
}