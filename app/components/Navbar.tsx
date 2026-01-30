"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Menu, X, ChevronDown, Phone, Mail, Facebook, Instagram, Linkedin, Twitter, 
  ArrowUpRight, Sun, ArrowRight 
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- HOVER HANDLERS ---
  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleMenuEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  // --- DATA CONFIGURATION ---

  // Product Data
  const productMenu = [
    {
      company: "Solarica Energy India",
      link: "https://www.solarica.in/",
      color: "text-orange-600",
      products: ["Solar Street Lights", "Solar Water Heater", "Solar Garden Lights", "Home Lights"]
    },
    {
      company: "Solarica Systems",
      link: "https://www.solaricasystems.in/",
      color: "text-blue-600",
      products: ["Solar Water Pumps", "Rooftop Solar", "On-Grid Systems", "Off-Grid Systems"]
    },
    {
      company: "Solarica Industries",
      link: "https://www.solaricaindustries.in/",
      color: "text-slate-800",
      products: ["Solar Panels", "Solar Inverter", "Industrial Batteries", "High Bay Lights"]
    },
    {
      company: "Solarica Greenwheels",
      link: "https://www.solaricaventures.in/",
      color: "text-green-600",
      products: ["EV Chargers", "Solar Carports", "Electric Cycles", "Charging Stations"]
    },
    {
      company: "Solarica Fabtech",
      link: "https://www.solaricaventures.in/",
      color: "text-purple-600",
      products: ["Mounting Structures", "High Mast Poles", "Module Mounting", "Galvanized Structures"]
    }
  ];

  // Navigation Links - Updated "About Us" Dropdown structure
  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "About Us", 
      href: "/about", 
      dropdown: [
        "We Solarica", 
        "Our Journey", 
        "Our Companies", 
        "Board of Directors", 
        "Awards and Certifications"
      ] 
    },
    { name: "Products", href: "/products", isMegaMenu: true },
    { name: "Projects", href: "/projects", dropdown: ["Residential", "Commercial", "Government"] },
    { name: "Finance", href: "/finance" },
    { name: "Careers", href: "/careers" },
  ];

  // Helper for Link Logic
  const getDropdownLink = (parentName: string, itemName: string) => {
    // Logic for About Us sections to open "Separate Pages" (Sections)
    if (parentName === "About Us") {
      if (itemName === "We Solarica") return "/about?section=we-solarica";
      if (itemName === "Our Journey") return "/about?section=our-journey";
      if (itemName === "Our Companies") return "/about?section=our-companies";
      if (itemName === "Board of Directors") return "/about?section=leadership";
      if (itemName === "Awards and Certifications") return "/about?section=awards";
      return "/about";
    }

    const slug = itemName.toLowerCase().replace(/ /g, "-");
    if (parentName === "Products") return `/products?category=${encodeURIComponent(itemName)}`;
    if (parentName === "Projects") return `/projects?type=${slug}`;
    
    return `/${parentName.toLowerCase().replace(/ /g, "-")}/${slug}`;
  };

  return (
    <div className="w-full z-[100] fixed top-0 left-0 font-sans">
      
      {/* TOP BAR */}
      <div className={`bg-[#0f1712] text-white/90 text-[10px] md:text-[11px] uppercase tracking-widest border-b border-white/10 overflow-hidden transition-all duration-500 ease-in-out ${isScrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100 py-3"}`}>
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <a href="mailto:Solaricaindia@gmail.com" className="flex items-center gap-2 hover:text-orange-400 transition-colors duration-300"><Mail size={12} /> Solaricaindia@gmail.com</a>
            <span className="hidden md:inline text-white/20">|</span>
            <a href="tel:8530214079" className="flex items-center gap-2 hover:text-orange-400 transition-colors duration-300"><Phone size={12} /> +91 85302 14079</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">Follow us:</span>
            <div className="flex gap-3 text-white/60">
               <a href="#" className="hover:text-[#1877F2] hover:scale-110 transition-all"><Facebook size={12}/></a>
               <a href="#" className="hover:text-[#1DA1F2] hover:scale-110 transition-all"><Twitter size={12}/></a>
               <a href="#" className="hover:text-[#E4405F] hover:scale-110 transition-all"><Instagram size={12}/></a>
               <a href="#" className="hover:text-[#0A66C2] hover:scale-110 transition-all"><Linkedin size={12}/></a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className={`container mx-auto px-6 md:px-12 transition-all duration-500 ease-in-out ${isScrolled ? "pt-2" : "pt-6"}`}>
        <div className="relative flex items-center justify-between h-24"> 
          
          {/* LOGO */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className={`flex items-center z-20 transition-all duration-500 origin-left ${isScrolled ? "scale-90" : "scale-100"}`}>
             <Link href="/" className="relative h-20 w-64 md:h-24 md:w-80 block transition-transform duration-300 hover:scale-105">
               <Image src="/logoo.png" alt="Solarica Logo" fill className="object-contain object-left" priority sizes="(max-width: 768px) 250px, 320px" />
             </Link>
          </motion.div>

          {/* DESKTOP NAVIGATION */}
          <motion.nav 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className={`hidden lg:flex items-center backdrop-blur-xl rounded-full px-6 py-3 border z-10 absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${isScrolled ? "bg-white/90 border-orange-200/50 shadow-lg" : "bg-white/80 border-white/50 shadow-md"}`}
          >
            {navLinks.map((link) => (
              <div key={link.name} className="relative group px-1" onMouseEnter={() => handleMouseEnter(link.name)} onMouseLeave={handleMouseLeave}>
                <Link href={link.href} className={`relative px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 flex items-center gap-1.5 ${activeDropdown === link.name ? "text-orange-600 bg-orange-50" : "text-slate-600 hover:text-orange-600 hover:bg-slate-50"}`}>
                  {activeDropdown === link.name && (<Sun size={14} className="text-orange-500 animate-spin-slow" />)}
                  {link.name}
                  {(link.dropdown || link.isMegaMenu) && (<ChevronDown size={10} className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`} />)}
                </Link>
                
                {/* MEGA MENU (PRODUCTS ONLY NOW) */}
                {link.isMegaMenu && activeDropdown === link.name && (
                   <motion.div 
                     initial={{ opacity: 0, y: 15, scale: 0.98 }} 
                     animate={{ opacity: 1, y: 0, scale: 1 }} 
                     exit={{ opacity: 0, y: 15, scale: 0.98 }} 
                     transition={{ duration: 0.2 }}
                     onMouseEnter={handleMenuEnter}
                     onMouseLeave={handleMouseLeave}
                     className="fixed top-28 left-1/2 -translate-x-1/2 w-[95vw] max-w-7xl bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 overflow-hidden z-[999] p-8 ring-1 ring-black/5"
                   >
                     {/* Background Animations */}
                     <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem] z-0">
                         <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute -top-32 -right-32 text-orange-100 opacity-40">
                            <Sun size={500} strokeWidth={0.5} />
                         </motion.div>
                         <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#cbd5e1_49%,#cbd5e1_51%,transparent_52%)] bg-[size:30px_30px] opacity-[0.05]"></div>
                     </div>

                     <div className="relative z-10 grid grid-cols-5 gap-8">
                        {productMenu.map((company, idx) => (
                           <div key={idx} className="flex flex-col border-r border-slate-100 last:border-none pr-4">
                              <Link href={company.link} target="_blank" className="group/header mb-6 block">
                                 <h3 className={`font-black text-xl leading-tight mb-1 transition-colors ${company.color} group-hover/header:opacity-80`}>
                                   {company.company}
                                 </h3>
                                 <div className="h-1 w-12 bg-slate-200 rounded-full group-hover/header:bg-orange-400 transition-colors mt-2"></div>
                              </Link>
                              <div className="flex flex-col gap-3">
                                 {company.products.map((prod, pIdx) => (
                                    <Link 
                                       key={pIdx} 
                                       href={getDropdownLink("Products", prod)} 
                                       onClick={closeMenu}
                                       className="group/item flex items-center justify-between text-sm font-medium text-slate-600 hover:text-slate-900 transition-all pl-2 border-l-2 border-transparent hover:border-orange-400"
                                    >
                                       <span>{prod}</span>
                                       <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-orange-500" />
                                    </Link>
                                 ))}
                              </div>
                           </div>
                        ))}
                     </div>
                   </motion.div>
                )}

                {/* STANDARD DROPDOWN (ABOUT US & PROJECTS) */}
                {link.dropdown && !link.isMegaMenu && activeDropdown === link.name && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.2 }}
                    onMouseEnter={handleMenuEnter} onMouseLeave={handleMouseLeave}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-3 z-50"
                  >
                    {link.dropdown.map((item, idx) => (
                      <Link key={idx} href={getDropdownLink(link.name, item)} onClick={closeMenu} className="block px-4 py-3 text-sm text-slate-600 font-medium hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-colors border-b border-slate-50 last:border-0">
                        {item}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </motion.nav>

          {/* CONTACT & MOBILE TOGGLE */}
          <div className="flex items-center gap-4">
             <Link href="/contact" onClick={closeMenu} className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#d1f366] to-[#c2e840] hover:to-[#b0d630] text-slate-900 px-6 py-3 rounded-full text-sm font-bold shadow-md hover:scale-105 transition-all">
                Contact Us <ArrowUpRight size={16} />
             </Link>
             <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-3 text-slate-800 bg-white shadow-md rounded-full">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </div>
      
      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl lg:hidden z-50 p-6 h-[90vh] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-slate-100 pb-2">
                <div className="flex justify-between items-center py-3" onClick={() => (link.dropdown || link.isMegaMenu) && setActiveDropdown(activeDropdown === link.name ? null : link.name)}>
                  <Link href={link.href} className="text-lg font-bold text-slate-800">{link.name}</Link>
                  {(link.dropdown || link.isMegaMenu) && <ChevronDown size={20} />}
                </div>
                
                {/* Mobile Dropdown Logic */}
                {(link.dropdown || link.isMegaMenu) && activeDropdown === link.name && (
                  <div className="bg-slate-50 rounded-xl p-4 space-y-4">
                    {/* Products Mega Menu in Mobile */}
                    {link.name === "Products" && productMenu.map((co, i) => (
                        <div key={i}>
                           <Link href={co.link} target="_blank" className="text-xs font-bold text-orange-600 uppercase mb-2 block">{co.company}</Link>
                           {co.products.map((p, j) => <Link key={j} href={getDropdownLink("Products", p)} onClick={closeMenu} className="block text-sm text-slate-600 py-1 pl-2 border-l border-slate-200">{p}</Link>)}
                        </div>
                    ))}
                    
                    {/* Standard Dropdown (About Us included) */}
                    {link.dropdown && !link.isMegaMenu && link.dropdown.map((item, i) => (
                        <Link key={i} href={getDropdownLink(link.name, item)} onClick={closeMenu} className="block text-sm text-slate-600 py-2 pl-2 border-l-2 border-transparent hover:border-orange-400">{item}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;