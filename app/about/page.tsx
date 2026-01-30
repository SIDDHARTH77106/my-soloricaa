"use client";

import { Suspense, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; 
import { Target, Zap, Award, CheckCircle, TrendingUp, Users, ArrowLeft, Building2, Factory, Sun, Fan, Phone, Mail, ShieldCheck, Flag, ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

// ---- UTILS & ANIMATIONS ----
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

// Reusable Shutter Image Component
const ShutterImage = ({ src, alt }: { src: string, alt: string }) => {
  return (
    <div className="group relative w-full h-full overflow-hidden rounded-[2.5rem] border-4 border-white/10 shadow-2xl">
      <Image src={src} alt={alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 flex z-10 pointer-events-none">
        {[1, 2, 3, 4, 5].map((strip) => (
          <motion.div 
            key={strip}
            variants={{ hover: { height: "100%" } }}
            initial={{ height: "0%" }}
            transition={{ duration: 0.4, delay: strip * 0.05, ease: "circOut" }}
            className="w-1/5 bg-gradient-to-b from-orange-500/30 to-yellow-500/20 backdrop-blur-[2px] border-r border-white/10 last:border-none"
          />
        ))}
      </div>
    </div>
  );
};

// ---- HERO SECTION (Overview) ----
const HeroSection = () => (
  <section className="relative min-h-[90vh] flex flex-col justify-center items-center bg-slate-900 text-white overflow-hidden rounded-b-[4rem] pt-40 pb-20">
    <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute top-[-10%] left-[-10%] text-slate-800 opacity-40">
          <Fan size={800} strokeWidth={0.5} />
        </motion.div>
        <motion.div animate={{ rotate: -360, scale: [1, 1.2, 1] }} transition={{ rotate: { duration: 100, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }} className="absolute top-[10%] right-[-5%] text-orange-500/20 blur-3xl">
          <Sun size={500} />
        </motion.div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
    </div>

    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
      <span className="inline-flex items-center gap-2 py-2 px-6 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-md text-sm font-bold uppercase tracking-widest mb-8 text-orange-400">
        <Sun size={14} className="animate-spin-slow"/> About Solarica
      </span>
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
        Powering a Brighter Future Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 font-serif italic">Solar Innovation.</span>
      </h1>
      <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
        At Solarica, we're redefining clean energy with advanced solar technologies and sustainable manufacturing excellence. Leading Solar Solutions Provider - Transforming India's Energy Future.
      </p>
    </motion.div>
  </section>
);

// ---- WE SOLARICA SECTION ----
const WeSolarica = () => (
  <motion.div variants={fadeIn} initial="hidden" animate="visible" exit="exit" className="pt-40 pb-20 bg-white relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
       <div className="absolute top-20 left-10 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
       <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
    </div>

    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          <h3 className="text-orange-500 font-bold uppercase tracking-[0.2em] mb-4 text-sm flex items-center gap-2"><Zap size={16} /> Who We Are</h3>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">Solarica Systems Pvt. Ltd.</h2>
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed text-justify">
            <p><strong>Solarica Systems Pvt. Ltd.</strong> is the foremost Solar Technology and Manufacturing Company dedicated to the growth and development of Renewable Energy (RE) capacity in India. To realize India's ambitious RE targets, we specialize in solar panel modifications, large-scale solar projects, and custom energy solutions backed by state-of-the-art facilities and advanced research.</p>
            <p>Looking at the huge success of our performance over the years, we have been spearheading innovation in the RE sector since its inception through various innovative solutions. We are committed to working towards the common goal of RE expansion and contributing to a cleaner and brighter future through sustainable manufacturing excellence.</p>
          </div>
        </motion.div>
        
        <motion.div className="h-[600px] w-full" initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} whileHover="hover">
           <ShutterImage src="/solarManufacturing.avif" alt="Solarica Manufacturing" />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32" style={{ perspective: "1000px" }}>
         {[
           { title: "OUR CONCEPT", text: "To empower a sustainable future through innovation in solar energy.", icon: <Zap size={40} className="text-blue-500"/>, color: "border-blue-200 bg-blue-50/50" },
           { title: "OUR VISION", text: "To enrich daily life and society by contributing to technological development that provides energy for life.", icon: <Target size={40} className="text-orange-500"/>, color: "border-orange-200 bg-orange-50/50" },
           { title: "OUR PROMISE", text: "To uphold the trust and expectations of our customers and society, staying true to our pioneering spirit.", icon: <ShieldCheck size={40} className="text-green-500"/>, color: "border-green-200 bg-green-50/50" }
         ].map((card, idx) => (
           <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.2 }} whileHover={{ y: -15, rotateX: 5, scale: 1.05 }} className={`p-10 rounded-[2.5rem] border ${card.color} backdrop-blur-md shadow-lg hover:shadow-2xl transition-all cursor-pointer`}>
             <div className="mb-6 bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-md">{card.icon}</div>
             <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{card.title}</h3>
             <p className="text-slate-600 leading-relaxed font-medium">{card.text}</p>
           </motion.div>
         ))}
      </div>

      <div className="bg-[#0a192f] text-white rounded-[4rem] p-10 md:p-24 relative overflow-hidden shadow-2xl">
         <div className="absolute -right-20 -top-20 text-white/5 animate-spin-slow"><Sun size={400} /></div>
         <div className="relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16">
               <h2 className="text-4xl md:text-6xl font-bold mb-6">Why Choose Us?</h2>
               <p className="text-slate-400 text-lg">We deliver excellence through innovation and reliability.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
               {["Leading Solar Manufacturers", "Govt.-Approved Quality", "Complete Solar Solutions", "Innovative R&D", "Sustainable & Reliable Energy", "After-Sales & AMC Support"].map((item, i) => (
                 <motion.div key={i} whileHover={{ x: 10 }} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center shadow-lg shadow-orange-500/30"><CheckCircle className="text-white" size={20} /></div>
                    <span className="font-bold text-lg tracking-wide">{item}</span>
                 </motion.div>
               ))}
            </div>
            <div className="mt-20 pt-10 border-t border-white/10 text-center">
               <h3 className="text-3xl font-bold mb-4">Ready to Go Solar?</h3>
               <p className="text-slate-400 mb-10 text-lg">Get expert consultation and customized solar solutions for your needs. Contact us today.</p>
               <div className="flex flex-wrap justify-center gap-6">
                  <button className="flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full font-bold text-lg shadow-lg hover:shadow-orange-500/40 transition-all transform hover:-translate-y-1"><Phone size={20}/> Call Now</button>
                  <button className="flex items-center gap-3 px-10 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-full font-bold text-lg shadow-lg hover:shadow-white/20 transition-all transform hover:-translate-y-1"><Mail size={20}/> Email Us</button>
               </div>
            </div>
         </div>
      </div>
    </div>
  </motion.div>
);

// ---- OUR JOURNEY (UPDATED FROM SCREENSHOTS) ----
const OurJourney = () => {
  const milestones = [
    { year: "2020", title: "Foundation", text: "Incorporated in 2020 with the name 'Priya Renewable Energy India Pvt Ltd' as a Trader and Distributor." },
    { year: "2021", title: "Registration", text: "Registered trademark of 'SOLARICA' with Manufacturing License for Solar Lights and Pumps." },
    { year: "2022", title: "Manufacturing", text: "Started own manufacturing for Lights (100 lights/day). Became dealer of Solar Panels & Inverters for reputed brands." },
    { year: "2023", title: "Expansion", text: "Increased capacity to 300 lights/day manufacturing and supply. Added Solar Pole Manufacturing." },
    { year: "2024", title: "Growth & Projects", text: "Incorporated 'Solarica Systems Pvt Ltd' for Solar power projects with Central Govt. Increased capacity for lights/pumps & added Solar BOS material." },
    { year: "2025", title: "Group Formation", text: "Formed 'SOLARICA GROUP OF COMPANIES'. Entered EV (Greenwheels), Fabrication (Fabtech), and Retail/Agri (Industries)." }
  ];

  return (
    <motion.section variants={fadeIn} initial="hidden" animate="visible" exit="exit" className="pt-40 pb-24 bg-slate-50 relative overflow-hidden">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute -left-[10%] top-[20%] text-slate-200 opacity-50 pointer-events-none"><Fan size={500} /></motion.div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-slate-900">Our <span className="text-orange-500 font-serif italic">Journey</span></h2>
          <p className="text-slate-500 text-lg">A timeline of innovation, growth, and excellence.</p>
        </div>
        <div className="hidden lg:block relative h-[500px]">
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" preserveAspectRatio="none" style={{ filter: 'drop-shadow(0px 4px 6px rgba(249, 115, 22, 0.15))' }}>
            <path d="M0,250 C150,450 350,50 600,250 C850,450 1050,50 1200,250" fill="none" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="12 8" className="opacity-60" />
            <motion.path d="M0,250 C150,450 350,50 600,250 C850,450 1050,50 1200,250" fill="none" stroke="url(#orangeGradient)" strokeWidth="5" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2.5, ease: "easeInOut" }} />
             <defs><linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#fb923c" /><stop offset="100%" stopColor="#ea580c" /></linearGradient></defs>
          </svg>
          <div className="absolute inset-0 flex justify-between items-center w-full h-full px-16">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              const positionClass = isEven ? "translate-y-[130px]" : "-translate-y-[130px]";
              return (
                <motion.div key={index} initial={{ opacity: 0, y: isEven ? 60 : -60, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }} whileHover={{ scale: 1.1 }} className={`relative flex flex-col items-center group w-[220px] ${positionClass}`}>
                  <div className={`w-20 h-20 rounded-full bg-white border-[6px] border-orange-100 shadow-xl flex items-center justify-center z-20 group-hover:border-orange-300 transition-all duration-300 absolute ${isEven ? "-top-24" : "-bottom-24"}`}>
                      <div className="w-full h-full rounded-full border-[3px] border-orange-500 flex items-center justify-center bg-orange-50"><span className="font-black text-slate-800 text-lg">{item.year}</span></div>
                  </div>
                   <div className={`absolute w-0.5 h-16 bg-gradient-to-b from-orange-400 to-transparent z-0 ${isEven ? "-top-16" : "-bottom-16 left-1/2 -translate-x-1/2 origin-bottom"}`}></div>
                  <div className="bg-white/80 backdrop-blur-xl p-6 rounded-[2rem] border border-white shadow-lg text-center w-full hover:shadow-2xl transition-all relative z-10 group-hover:-translate-y-2">
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 font-medium">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="lg:hidden relative pl-8 space-y-12 before:absolute before:left-[11px] before:top-2 before:h-[95%] before:w-1 before:bg-slate-200">
          {milestones.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="relative">
              <div className="absolute -left-[35px] top-1 w-7 h-7 rounded-full bg-orange-500 border-[3px] border-white shadow-md"></div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg">
                <span className="inline-block px-4 py-1 bg-orange-100 text-orange-700 text-sm font-bold rounded-full mb-3">{item.year}</span>
                <h3 className="font-bold text-xl text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// ---- LEADERSHIP SECTION ----
const Leadership = () => (
  <motion.section variants={fadeIn} initial="hidden" animate="visible" exit="exit" className="pt-40 pb-24 bg-white min-h-[80vh] relative overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="mb-20 text-center max-w-4xl mx-auto">
         <h2 className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-4 flex items-center justify-center gap-2"><Users size={16}/> Board of Directors</h2>
         <h3 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">Meet our experienced <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Leadership</span></h3>
      </div>
      <div className="flex flex-col gap-16">
          {[
            { name: "Mr. Kiran Jagtap", role: "CEO & Founder", image: "/hero.png", msg: "Welcome to Solarica Energy! As the CEO and founder, I'm thrilled to have you join our mission of creating sustainable energy solutions. With over 15 years in renewable energy, we've built a company that prioritizes innovation, quality, and environmental responsibility." },
            { name: "Mr. Eresh Inde", role: "Chief Technology Officer", image: "/MR eresh.png", msg: "As Chief Technology Officer at Solarica, I ensure that every solar solution we deliver meets the highest technical standards. Our R&D team continuously innovates to bring you cutting-edge technology that maximizes efficiency and reliability." }
          ].map((leader, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-100 hover:border-orange-100 transition-colors`}>
              <div className="w-full lg:w-1/3 h-[400px] cursor-pointer group" >
                 <ShutterImage src={leader.image} alt={leader.name} />
              </div>
              <div className="w-full lg:w-2/3">
                 <div className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full font-bold text-sm mb-4">{leader.role}</div>
                 <h3 className="text-4xl font-bold text-slate-900 mb-6">{leader.name}</h3>
                 <div className="relative pl-8 border-l-4 border-orange-400"><p className="text-lg text-slate-600 leading-relaxed italic">"{leader.msg}"</p></div>
                 <div className="mt-6 flex items-center gap-2 text-slate-400 font-medium"><div className="h-px w-10 bg-slate-300"></div> Best Regards</div>
              </div>
            </motion.div>
          ))}
      </div>
      <div className="mt-32 relative">
         <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">A Journey of Vision, Energy & Change</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div whileHover={{ y: -5 }} className="bg-orange-50 p-8 rounded-[2rem] border border-orange-100 shadow-sm"><div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-500 font-bold text-xl shadow mb-4">1</div><p className="text-slate-800 font-medium">Completed Engineering in Electrical & Electronics with specialization in renewable energy systems, laying the groundwork for future innovations.</p></motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm"><div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xl shadow mb-4">2</div><p className="text-slate-700 font-medium">Established Solarica Energy India Pvt. Ltd. with a mission to revolutionize solar street lighting and renewable energy solutions across India.</p></motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm"><div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xl shadow mb-4">3</div><p className="text-slate-700 font-medium">Successfully installed 1000+ solar street lights across Maharashtra, establishing Solarica as a trusted name in solar solutions.</p></motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-orange-50 p-8 rounded-[2rem] border border-orange-100 shadow-sm"><div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-500 font-bold text-xl shadow mb-4">4</div><p className="text-slate-800 font-medium">Received ISO certification and "Best Solar Company Award" for innovation in solar street lighting technology and quality standards.</p></motion.div>
         </div>
      </div>
    </div>
  </motion.section>
);

// ---- OUR COMPANIES SECTION (With Professional Hierarchy) ----
const OurCompanies = () => (
  <motion.section variants={fadeIn} initial="hidden" animate="visible" exit="exit" className="pt-40 pb-24 relative bg-slate-900 overflow-hidden min-h-[80vh]">
    <motion.div animate={{ x: ["0%", "-100%"] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute top-1/4 left-0 whitespace-nowrap opacity-[0.03] select-none pointer-events-none"><h2 className="text-[15vw] font-black text-white leading-none">SOLARICA GROUP OF COMPANIES</h2></motion.div>
    <div className="container mx-auto px-6 md:px-12 relative z-10">
       <div className="text-center mb-16">
         <span className="inline-block py-1 px-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">Our Ecosystem</span>
         <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Solarica <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 font-serif italic">Group</span></h2>
       </div>

       {/* COMPANY CARDS GRID */}
       <div className="flex flex-wrap justify-center gap-8 mb-20" style={{ perspective: "1000px" }}>
         {[
           { name: "Solarica Energy India Pvt Ltd", desc: "Leading manufacturer of solar street lights, decorative lights, panels, and inverters.", link: "https://www.solarica.in/", icon: <Sun size={32}/> },
           { name: "Solarica Systems Pvt Ltd", desc: "Specializes in comprehensive solar system integration, Govt projects and smart energy solutions.", link: "https://www.solaricasystems.in/", icon: <Zap size={32}/> },
           { name: "Solarica Industries Pvt Ltd", desc: "Retailer and distributor for solar material and other sectors beyond solar.", link: "https://www.solaricaindustries.in/", icon: <Factory size={32}/> },
           { name: "Solarica Greenwheels Pvt Ltd", desc: "Sustainable mobility, EV solutions, and renewable transport innovation.", link: "https://www.solaricaventures.in/", icon: <TrendingUp size={32}/> },
           { name: "Solarica Fabtech Pvt Ltd", desc: "Specialized fabrication unit for solar structures and heavy engineering.", link: "https://www.solaricaventures.in/", icon: <Building2 size={32}/> },
         ].map((company, idx) => (
           <motion.div key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -10, rotateX: 5 }} className={`bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 shadow-2xl flex flex-col items-center text-center w-full md:w-[350px] group cursor-pointer hover:bg-white/15 transition-all`}>
             <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">{company.icon}</div>
             <h3 className="font-bold text-xl text-white mb-4 border-b border-white/10 pb-4 w-full">{company.name}</h3>
             <p className="text-slate-300 text-sm leading-relaxed mb-6 h-20 overflow-hidden">{company.desc}</p>
             <Link href={company.link} target="_blank" className="text-orange-400 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1">Visit Website <ArrowUpRight size={12}/></Link>
           </motion.div>
         ))}
       </div>

       {/* --- PROFESSIONAL ORGANIZATIONAL HIERARCHY (From Chart) --- */}
       <div className="mt-24 w-full">
         <div className="text-center mb-10">
             <h3 className="text-3xl font-bold text-white">Organizational Hierarchy</h3>
             <p className="text-slate-400 text-sm mt-2">Structure & Leadership</p>
         </div>
         
         <div className="w-full overflow-x-auto pb-12 custom-scrollbar">
             <div className="min-w-[1000px] flex flex-col items-center">
               
               {/* LEVEL 1: GROUP HEAD */}
               <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-2xl shadow-xl border border-blue-400/30 text-center w-[400px] relative z-20">
                  <h3 className="font-black text-xl tracking-wide uppercase">Solarica Group of Companies</h3>
                  <div className="mt-2 bg-white/20 py-1 px-4 rounded-full text-xs font-bold inline-block">50-50 Stake: Kiran & Priyanka</div>
               </motion.div>

               {/* CONNECTOR LINE VERTICAL */}
               <div className="h-10 w-1 bg-slate-500"></div>
               {/* CONNECTOR LINE HORIZONTAL */}
               <div className="h-1 w-[90%] bg-slate-500 mb-10 relative">
                  {/* Vertical Drop Lines */}
                  <div className="absolute top-0 left-0 h-10 w-1 bg-slate-500"></div>
                  <div className="absolute top-0 left-[25%] h-10 w-1 bg-slate-500"></div>
                  <div className="absolute top-0 left-[50%] h-10 w-1 bg-slate-500"></div>
                  <div className="absolute top-0 left-[75%] h-10 w-1 bg-slate-500"></div>
                  <div className="absolute top-0 right-0 h-10 w-1 bg-slate-500"></div>
               </div>

               {/* LEVEL 2: SUBSIDIARIES GRID */}
               <div className="grid grid-cols-5 gap-4 w-full">
                   
                   {/* 1. ENERGY INDIA */}
                   <div className="flex flex-col items-center">
                      <div className="bg-gradient-to-b from-slate-700 to-slate-800 p-4 rounded-xl border border-slate-600 text-center w-full shadow-lg relative group hover:-translate-y-2 transition-transform">
                         <h4 className="font-bold text-white text-sm mb-2">Solarica Energy India Pvt Ltd</h4>
                         <div className="bg-blue-500/20 text-blue-200 text-[10px] font-bold py-1 px-2 rounded mb-3">Stake: Kiran + Priyanka</div>
                         <div className="space-y-2">
                            <div className="bg-white/10 p-2 rounded text-xs text-slate-300"><strong className="text-white block">Kiran Jagtap</strong>CEO & CFO</div>
                            <div className="bg-white/10 p-2 rounded text-xs text-slate-300"><strong className="text-white block">Priyanka Jagtap</strong>Managing Director</div>
                         </div>
                         {/* Manager Link */}
                         <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 hidden group-hover:block z-50">
                            <div className="bg-orange-600 text-white text-[10px] p-2 rounded shadow-lg">Operations Manager Linked</div>
                         </div>
                      </div>
                   </div>

                   {/* 2. SYSTEMS */}
                   <div className="flex flex-col items-center">
                      <div className="bg-gradient-to-b from-slate-700 to-slate-800 p-4 rounded-xl border border-slate-600 text-center w-full shadow-lg hover:-translate-y-2 transition-transform">
                         <h4 className="font-bold text-white text-sm mb-2">Solarica Systems Pvt Ltd</h4>
                         <div className="bg-blue-500/20 text-blue-200 text-[10px] font-bold py-1 px-2 rounded mb-3">Stake: Kiran + Eresh</div>
                         <div className="space-y-2">
                            <div className="bg-white/10 p-2 rounded text-xs text-slate-300"><strong className="text-white block">Kiran Jagtap</strong>CFO</div>
                            <div className="bg-white/10 p-2 rounded text-xs text-slate-300"><strong className="text-white block">Eresh Inde</strong>CEO</div>
                         </div>
                      </div>
                   </div>

                   {/* 3. FABTECH */}
                   <div className="flex flex-col items-center">
                      <div className="bg-gradient-to-b from-slate-700 to-slate-800 p-4 rounded-xl border border-slate-600 text-center w-full shadow-lg hover:-translate-y-2 transition-transform">
                         <h4 className="font-bold text-white text-sm mb-2">Solarica Fabtech Pvt Ltd</h4>
                         <div className="bg-blue-500/20 text-blue-200 text-[10px] font-bold py-1 px-2 rounded mb-3">Stake: Kiran + Eresh</div>
                         <div className="space-y-2">
                            <div className="bg-white/10 p-2 rounded text-xs text-slate-300"><strong className="text-white block">Kiran Jagtap</strong>CFO</div>
                            <div className="bg-white/10 p-2 rounded text-xs text-slate-300"><strong className="text-white block">Eresh Inde</strong>CEO</div>
                         </div>
                      </div>
                   </div>

                   {/* 4. INDUSTRIES */}
                   <div className="flex flex-col items-center">
                      <div className="bg-gradient-to-b from-slate-700 to-slate-800 p-4 rounded-xl border border-slate-600 text-center w-full shadow-lg hover:-translate-y-2 transition-transform">
                         <h4 className="font-bold text-white text-sm mb-2">Solarica Industries Pvt Ltd</h4>
                         <div className="bg-blue-500/20 text-blue-200 text-[10px] font-bold py-1 px-2 rounded mb-3 leading-tight">Stake: Kiran, Priyanka, Eresh, Megha</div>
                         <div className="space-y-2">
                            <div className="bg-white/10 p-2 rounded text-xs text-slate-300"><strong className="text-white block">Kiran Jagtap</strong>CFO</div>
                            <div className="bg-white/10 p-2 rounded text-xs text-slate-300"><strong className="text-white block">Eresh Inde</strong>CEO</div>
                            <div className="bg-white/10 p-2 rounded text-xs text-slate-300"><strong className="text-white block">Priyanka Jagtap</strong>MD & Woman Dir.</div>
                            <div className="bg-white/10 p-2 rounded text-xs text-slate-300"><strong className="text-white block">Megha Inde</strong>ED & Small Share</div>
                         </div>
                      </div>
                   </div>

                   {/* 5. GREENWHEELS */}
                   <div className="flex flex-col items-center">
                      <div className="bg-gradient-to-b from-slate-700 to-slate-800 p-4 rounded-xl border border-slate-600 text-center w-full shadow-lg hover:-translate-y-2 transition-transform">
                         <h4 className="font-bold text-white text-sm mb-2">Solarica Greenwheels Pvt Ltd</h4>
                         <div className="bg-blue-500/20 text-blue-200 text-[10px] font-bold py-1 px-2 rounded mb-3">Stake: Kiran + Priyanka</div>
                         <div className="space-y-2">
                            <div className="bg-white/10 p-2 rounded text-xs text-slate-300"><strong className="text-white block">Kiran Jagtap</strong>CEO</div>
                            <div className="bg-white/10 p-2 rounded text-xs text-slate-300"><strong className="text-white block">Priyanka Jagtap</strong>CFO</div>
                            <div className="bg-white/10 p-2 rounded text-xs text-slate-300"><strong className="text-white block">Eresh Inde</strong>ED</div>
                         </div>
                      </div>
                   </div>

               </div>
             </div>
         </div>
       </div>

    </div>
  </motion.section>
);

// ---- AWARDS SECTION (NEW: SOLAR FARM BACKGROUND) ----
const Awards = () => {
  const [selectedAward, setSelectedAward] = useState(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const awardsList = [
    { 
      title: "Sustainable Energy Excellence Award", 
      date: "26 February 2022", 
      desc: "Recognized for outstanding contribution to sustainable energy development.",
      img: "/Sustainable energy.jpg" 
    },
    { 
      title: "Green Technology Innovation Award", 
      date: "14 July 2022", 
      desc: "Awarded for breakthrough innovations in green technology and significant advancement in renewable energy sector.",
      img: "/Green Technology.jpg" 
    },
    { 
      title: "Future Energy Leadership Award", 
      date: "26 February 2025", 
      desc: "Prestigious recognition for visionary leadership in future energy solutions and pioneering role in solar tech.",
      img: "/Future Energy.jpg" 
    }
  ];

  const scroll = (direction: "left" | "right") => {
    if(scrollRef.current){
      const { current } = scrollRef;
      const scrollAmount = 400;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <motion.section variants={fadeIn} initial="hidden" animate="visible" exit="exit" className="pt-40 pb-24 bg-white relative overflow-hidden min-h-[90vh]">
       
       {/* === SOLAR FARM BACKGROUND ANIMATION === */}
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
         <div className="absolute bottom-0 w-full flex justify-between items-end opacity-10 px-10">
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
  
       <div className="container mx-auto px-6 relative z-10">
         
         {/* Header */}
         <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <div className="text-left max-w-2xl">
             <h2 className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-4 flex items-center gap-2"><Award size={16}/> Recognition</h2>
             <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">Certifications</span></h3>
             <p className="text-slate-500 text-lg">Our commitment to excellence recognized globally.</p>
           </div>
           
           {/* Slider Controls */}
           <div className="flex gap-4 mt-8 md:mt-0">
              <button onClick={() => scroll("left")} className="p-4 rounded-full border border-slate-200 hover:bg-orange-500 hover:text-white transition-all shadow-sm"><ChevronLeft size={24}/></button>
              <button onClick={() => scroll("right")} className="p-4 rounded-full border border-slate-200 hover:bg-orange-500 hover:text-white transition-all shadow-sm"><ChevronRight size={24}/></button>
           </div>
         </div>
  
         {/* Horizontal Slider */}
         <div ref={scrollRef} className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {awardsList.map((award, i) => (
               <motion.div 
                 key={i} 
                 layoutId={`card-${i}`}
                 onClick={() => setSelectedAward({...award, id: i} as any)}
                 whileHover={{ y: -10, scale: 1.02 }} 
                 className="min-w-[350px] md:min-w-[400px] bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-10px_rgba(34,197,94,0.15)] transition-all group cursor-pointer snap-center relative"
               >
                   <div className="relative h-64 w-full bg-slate-50 overflow-hidden flex items-center justify-center p-6">
                     {/* Full Certificate Contain */}
                     <Image src={award.img} alt={award.title} fill className="object-contain p-2 transition-transform duration-700 group-hover:scale-105" />
                     
                     <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm z-20 flex items-center gap-1">
                       <Award size={12} className="text-green-500"/> {award.date}
                     </div>
                   </div>
  
                   <div className="p-8">
                      <h4 className="font-bold text-2xl text-slate-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">{award.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">{award.desc}</p>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-orange-500 transition-colors flex items-center gap-2">
                          Tap to Expand <ArrowUpRight size={14}/>
                      </span>
                   </div>
               </motion.div>
            ))}
         </div>
       </div>

       {/* POP-UP MODAL */}
       <AnimatePresence>
         {selectedAward && (
           <motion.div 
             initial={{ opacity: 0 }} 
             animate={{ opacity: 1 }} 
             exit={{ opacity: 0 }} 
             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
             onClick={() => setSelectedAward(null)}
           >
             <motion.div 
               layoutId={`card-${(selectedAward as any).id}`}
               className="bg-white w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
               onClick={(e) => e.stopPropagation()}
             >
                <button onClick={() => setSelectedAward(null)} className="absolute top-4 right-4 z-50 p-3 bg-white/20 backdrop-blur-md rounded-full text-slate-900 hover:bg-slate-900 hover:text-white transition-colors">
                   <X size={24} />
                </button>

                <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-slate-50 flex items-center justify-center">
                   <Image src={(selectedAward as any).img} alt={(selectedAward as any).title} fill className="object-contain p-6" />
                </div>

                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white overflow-y-auto">
                   <div className="mb-6">
                     <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">{(selectedAward as any).date}</span>
                     <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6">{(selectedAward as any).title}</h3>
                     <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full mb-6"></div>
                     <p className="text-lg text-slate-600 leading-relaxed">{(selectedAward as any).desc}</p>
                   </div>
                   <div className="mt-auto pt-8 border-t border-slate-100">
                     <p className="text-sm text-slate-400">Solarica Energy India Pvt. Ltd.</p>
                   </div>
                </div>
             </motion.div>
           </motion.div>
         )}
       </AnimatePresence>

    </motion.section>
  );
};

// ---- MAIN CONTENT CONTROLLER ----
function AboutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const section = searchParams.get("section");
  const showBackButton = !!section;

  return (
    <main className="bg-white text-slate-900 min-h-screen font-sans overflow-x-hidden">
      
      {showBackButton && (
        <div className="fixed top-28 left-6 z-50 animate-in fade-in slide-in-from-left-4">
          <button onClick={() => router.push('/about')} className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-md border border-slate-200 hover:border-orange-400 hover:text-orange-600 rounded-full text-slate-700 font-semibold transition-all shadow-lg">
            <ArrowLeft size={18} /> Back to Overview
          </button>
        </div>
      )}

      <AnimatePresence mode="wait">
        {!section && (
          <motion.div key="overview" exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <HeroSection />
            <div className="container mx-auto px-6 py-20 text-center">
               <h2 className="text-3xl font-bold mb-12 text-slate-900">Explore Our Story</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { id: "we-solarica", title: "Who We Are", icon: <Target size={32}/>, desc: "Vision, Mission & Promise" },
                    { id: "our-journey", title: "Our Journey", icon: <Flag size={32}/>, desc: "Timeline of Success" },
                    { id: "leadership", title: "Leadership", icon: <Users size={32}/>, desc: "Board of Directors" },
                    { id: "our-companies", title: "Our Companies", icon: <Building2 size={32}/>, desc: "The Solarica Group" },
                    { id: "awards", title: "Awards", icon: <Award size={32}/>, desc: "Recognition & Certificates" },
                  ].map((item) => (
                    <Link key={item.id} href={`/about?section=${item.id}`} className="group p-10 rounded-[2.5rem] bg-white hover:bg-orange-500 hover:text-white transition-all shadow-xl hover:shadow-orange-500/30 flex flex-col items-center gap-4 border border-slate-100 hover:border-transparent">
                       <div className="p-5 bg-orange-50 rounded-full text-orange-500 group-hover:bg-white/20 group-hover:text-white shadow-sm transition-colors">{item.icon}</div>
                       <h3 className="text-2xl font-bold">{item.title}</h3>
                       <p className="text-sm opacity-70 group-hover:opacity-100 font-medium">{item.desc}</p>
                       <span className="mt-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">Click to Explore</span>
                    </Link>
                  ))}
               </div>
            </div>
          </motion.div>
        )}

        {section === "we-solarica" && <WeSolarica key="we-solarica" />}
        {section === "our-journey" && <OurJourney key="our-journey" />}
        {section === "leadership" && <Leadership key="leadership" />}
        {section === "our-companies" && <OurCompanies key="our-companies" />}
        {section === "awards" && <Awards key="awards" />}

      </AnimatePresence>
    </main>
  );
}

export default function AboutPage() {
  return (
    <Suspense fallback={
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <AboutContent />
    </Suspense>
  );
}