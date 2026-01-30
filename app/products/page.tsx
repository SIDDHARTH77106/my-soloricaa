"use client";

import { useState, useEffect, Suspense } from "react";
import { Filter, SlidersHorizontal, ShoppingCart, Loader2, ArrowRight, Zap } from "lucide-react"; 
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image"; 
import { motion, AnimatePresence } from "framer-motion"; // 👈 Animation Library

// --- 1. DATA CONFIGURATION (DATA IS EXACTLY SAME AS BEFORE) ---

const categories = [
  { id: "street-lights", name: "Solar Street Lights" },
  { id: "water-pumps", name: "Solar Water Pumps" },
  { id: "water-heaters", name: "Solar Water Heater" },
  { id: "garden-lights", name: "Solar Garden Lights" },
  { id: "decorative-lights", name: "Solar Decorative Lights" },
  { id: "flood-lights", name: "Solar Flood Lights" },
  { id: "inverters", name: "Solar Inverter" },
  { id: "panels", name: "Solar Panels" },
  { id: "ac-lights", name: "AC Lights" },
  { id: "home-lights", name: "Home Lights" },
];

// Helper to get Premium Images based on Category (You can replace URLs with local paths)
const getImageForCategory = (category: string) => {
  switch(category) {
    case "Solar Street Lights": return "https://images.unsplash.com/photo-1617144788876-4767d2836262?auto=format&fit=crop&q=80&w=800";
    case "Solar Water Pumps": return "https://images.unsplash.com/photo-1563950708942-db5d9dcca7a7?auto=format&fit=crop&q=80&w=800";
    case "Solar Water Heater": return "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800";
    case "Solar Garden Lights": return "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=800";
    case "Solar Decorative Lights": return "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=800";
    case "Solar Flood Lights": return "https://images.unsplash.com/photo-1596436735532-3492026ae449?auto=format&fit=crop&q=80&w=800";
    case "Solar Inverter": return "https://plus.unsplash.com/premium_photo-1679917152960-b9e6456fa366?auto=format&fit=crop&q=80&w=800";
    case "Solar Panels": return "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800";
    case "AC Lights": return "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=800";
    case "Home Lights": return "https://images.unsplash.com/photo-1513506003013-680c8099e96e?auto=format&fit=crop&q=80&w=800";
    default: return "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800";
  }
};

const filtersByCategory: any = {
  "Solar Street Lights": { power: ["10-20W", "20-40W", "40-60W", "60-100W", "100W+"], type: ["LED", "Smart LED", "Motion Sensor"], install: ["Pole Mounted", "Wall Mounted", "All-in-One"] },
  "Solar Water Pumps": { power: ["1-3 HP", "3-5 HP", "5-10 HP", "10 HP+"], type: ["Submersible", "Surface", "Borewell"], install: ["Agriculture", "Domestic", "Industrial"] },
  "Solar Water Heater": { power: ["100-200 Liters", "200-300 Liters", "300-500 Liters", "500+ Liters"], type: ["Flat Plate Collector", "Evacuated Tube", "Thermosiphon"], install: ["Rooftop", "Ground Mount", "Wall Mount"] },
  "Solar Garden Lights": { power: ["5-10W", "10-15W", "15-20W", "20W+"], type: ["LED", "Decorative", "Bollard", "Lantern"], install: ["Ground Stake", "Ground Mount", "Hanging", "Post Mount"] },
  "Solar Decorative Lights": { power: ["5-15W", "15-25W", "25W+"], type: ["String Lights", "Fairy Lights", "Curtain Lights", "Net Lights", "Icicle Lights"], install: ["Hanging", "Flexible", "Draping", "Wall Mount"] },
  "Solar Flood Lights": { power: ["30-50W", "50-100W", "100-150W", "150W+"], type: ["Standard Flood", "Security", "Stadium", "RGB Color", "Emergency"], install: ["Ground Mount", "Wall Mount", "Pole Mount", "Portable"] },
  "Solar Inverter": { power: ["1-3 KW", "3-5 KW", "5-10 KW", "10 KW+"], type: ["String Inverter", "Hybrid Inverter", "Micro Inverter"], install: ["Residential", "Commercial", "Industrial"] },
  "Solar Panels": { power: ["100-300W", "300-500W", "500-700W", "700W+"], type: ["Monocrystalline", "Polycrystalline", "Bifacial"], install: ["Residential", "Commercial", "Utility Scale"] },
  "AC Lights": { power: ["5-15W", "15-30W", "30-50W", "50W+"], type: ["LED", "CFL", "Tube Light"], install: ["Indoor", "Outdoor", "Commercial"] },
  "Home Lights": { power: ["3-9W", "9-15W", "15-25W", "25W+"], type: ["Ceiling Light", "Pendant Light", "Wall Light", "Table Lamp"], install: ["Living Room", "Bedroom", "Kitchen", "Bathroom"] }
};

const productsData = [
  { name: "LED Solar Street Light 30W", category: "Solar Street Lights", specs: ["30W LED", "6000K", "IP65", "12V Battery"], tag: "Featured" },
  { name: "Smart Solar Street Light 50W", category: "Solar Street Lights", specs: ["50W Smart LED", "Motion Sensor", "Remote Control", "Li-ion Battery"], tag: "New" },
  { name: "All-in-One Solar Light 40W", category: "Solar Street Lights", specs: ["40W LED", "All-in-One Design", "PIR Sensor", "LiFePO4 Battery"], tag: "Popular" },
  { name: "Motion Sensor Solar Light 25W", category: "Solar Street Lights", specs: ["25W LED", "PIR Motion Sensor", "Wall Mount", "Li-ion Battery"], tag: "" },
  { name: "High Power Solar Light 80W", category: "Solar Street Lights", specs: ["80W LED", "High Brightness", "IP67", "Lithium Battery"], tag: "High Power" },
  { name: "Solar Submersible Pump 3HP", category: "Solar Water Pumps", specs: ["3HP Motor", "Submersible", "Agriculture Use", "High Efficiency"], tag: "Popular" },
  { name: "Solar Surface Pump 5HP", category: "Solar Water Pumps", specs: ["5HP Motor", "Surface Mount", "Domestic Use", "Easy Maintenance"], tag: "Best Seller" },
  { name: "Solar Borewell Pump 7HP", category: "Solar Water Pumps", specs: ["7HP Motor", "Borewell", "Industrial Grade", "Heavy Duty"], tag: "Premium" },
  { name: "Solar Centrifugal Pump 2HP", category: "Solar Water Pumps", specs: ["2HP Motor", "Centrifugal", "Compact Design", "Energy Efficient"], tag: "" },
  { name: "Solar Deep Well Pump 10HP", category: "Solar Water Pumps", specs: ["10HP Motor", "Deep Well", "High Flow Rate", "Durable"], tag: "New" },
  { name: "Solar Pool Pump 1HP", category: "Solar Water Pumps", specs: ["1HP Motor", "Pool Circulation", "Silent Operation", "Weatherproof"], tag: "" },
  { name: "Solar Water Heater 200L", category: "Solar Water Heater", specs: ["200 Liter Capacity", "Flat Plate Collector", "Rooftop Installation", "High Efficiency"], tag: "Popular" },
  { name: "Solar Water Heater 300L", category: "Solar Water Heater", specs: ["300 Liter Capacity", "Evacuated Tube", "Premium Quality", "Weather Resistant"], tag: "Best Seller" },
  { name: "Solar Water Heater 500L", category: "Solar Water Heater", specs: ["500 Liter Capacity", "Commercial Grade", "Ground Mount", "Heavy Duty"], tag: "Premium" },
  { name: "Compact Solar Heater 150L", category: "Solar Water Heater", specs: ["150 Liter Capacity", "Thermosiphon", "Compact Design", "Easy Installation"], tag: "" },
  { name: "Solar Water Heater 400L", category: "Solar Water Heater", specs: ["400 Liter Capacity", "Evacuated Tube", "High Performance", "Long Lasting"], tag: "New" },
  { name: "Solar Water Heater 100L", category: "Solar Water Heater", specs: ["100 Liter Capacity", "Flat Plate", "Budget Friendly", "Reliable"], tag: "" },
  { name: "SOLAR GARDEN LIGHT (Fire)", category: "Solar Garden Lights", specs: ["5W LED", "Warm White 3000K", "IP65", "Rechargeable Battery"], tag: "Featured" },
  { name: "Decorative Solar Garden Light 8W", category: "Solar Garden Lights", specs: ["8W LED", "Color Changing", "Remote Control", "Li-ion Battery"], tag: "New" },
  { name: "Solar Bollard Light 10W", category: "Solar Garden Lights", specs: ["10W LED", "Modern Design", "Dusk to Dawn", "Weather Resistant"], tag: "" },
  { name: "Solar Spike Light 6W", category: "Solar Garden Lights", specs: ["6W LED", "Adjustable Angle", "Spot Light", "Easy Install"], tag: "" },
  { name: "Solar Lantern Light 12W", category: "Solar Garden Lights", specs: ["12W LED", "Vintage Design", "Hanging Mount", "Long Runtime"], tag: "" },
  { name: "Solar Post Light 15W", category: "Solar Garden Lights", specs: ["15W LED", "Classic Design", "Post Mount", "High Brightness"], tag: "" },
  { name: "Solar String Lights 10M", category: "Solar Decorative Lights", specs: ["12W LED", "10M Length", "50 LEDs", "Warm White"], tag: "Popular" },
  { name: "Solar Fairy Lights 20M", category: "Solar Decorative Lights", specs: ["8W LED", "20M Length", "200 LEDs", "Multi-Color"], tag: "New" },
  { name: "Solar Curtain Lights", category: "Solar Decorative Lights", specs: ["15W LED", "Curtain Style", "300 LEDs", "Waterproof"], tag: "" },
  { name: "Solar Net Lights", category: "Solar Decorative Lights", specs: ["10W LED", "Net Design", "150 LEDs", "Easy Install"], tag: "" },
  { name: "Solar Icicle Lights", category: "Solar Decorative Lights", specs: ["18W LED", "Icicle Effect", "Cool White", "Weather Resistant"], tag: "" },
  { name: "Solar Motif Lights", category: "Solar Decorative Lights", specs: ["25W LED", "Custom Motifs", "RGB Colors", "Remote Control"], tag: "Premium" },
  { name: "Solar Flood Light 50W", category: "Solar Flood Lights", specs: ["50W LED", "5000 Lumens", "IP66 Rating", "Remote Control"], tag: "Featured" },
  { name: "Solar Security Flood Light 100W", category: "Solar Flood Lights", specs: ["100W LED", "10000 Lumens", "Motion Sensor", "Dusk to Dawn"], tag: "" },
  { name: "Solar Stadium Light 200W", category: "Solar Flood Lights", specs: ["200W LED", "20000 Lumens", "Professional Grade", "Wide Beam"], tag: "Pro" },
  { name: "Solar RGB Flood Light 75W", category: "Solar Flood Lights", specs: ["75W RGB LED", "Color Changing", "App Control", "Weatherproof"], tag: "" },
  { name: "Solar Emergency Flood Light 30W", category: "Solar Flood Lights", specs: ["30W LED", "Portable Design", "Emergency Backup", "USB Charging"], tag: "" },
  { name: "Solar String Inverter 5KW", category: "Solar Inverter", specs: ["5KW Power", "String Inverter", "Residential Use", "High Efficiency"], tag: "Popular" },
  { name: "Solar Hybrid Inverter 10KW", category: "Solar Inverter", specs: ["10KW Power", "Hybrid Technology", "Battery Compatible", "Grid Tie"], tag: "Best Seller" },
  { name: "Solar Micro Inverter 300W", category: "Solar Inverter", specs: ["300W Power", "Micro Inverter", "Panel Level", "High Performance"], tag: "Premium" },
  { name: "Solar String Inverter 20KW", category: "Solar Inverter", specs: ["20KW Power", "Industrial Grade", "Three Phase", "Heavy Duty"], tag: "" },
  { name: "Solar Hybrid Inverter 3KW", category: "Solar Inverter", specs: ["3KW Power", "Hybrid System", "MPPT Technology", "Smart Control"], tag: "New" },
  { name: "Solar String Inverter 50KW", category: "Solar Inverter", specs: ["50KW Power", "Commercial Grade", "High Voltage", "Monitoring"], tag: "" },
  { name: "Monocrystalline Solar Panel 400W", category: "Solar Panels", specs: ["400W Power", "Monocrystalline", "22% Efficiency", "25 Year Warranty"], tag: "Popular" },
  { name: "Polycrystalline Solar Panel 320W", category: "Solar Panels", specs: ["320W Power", "Polycrystalline", "19% Efficiency", "Cost Effective"], tag: "Best Seller" },
  { name: "Bifacial Solar Panel 500W", category: "Solar Panels", specs: ["500W Power", "Bifacial Technology", "24% Efficiency", "Dual Sided"], tag: "Premium" },
  { name: "Monocrystalline Solar Panel 300W", category: "Solar Panels", specs: ["300W Power", "Compact Size", "20% Efficiency", "Residential Grade"], tag: "" },
  { name: "High Efficiency Solar Panel 600W", category: "Solar Panels", specs: ["600W Power", "High Efficiency", "23% Efficiency", "Commercial Grade"], tag: "New" },
  { name: "Flexible Solar Panel 200W", category: "Solar Panels", specs: ["200W Power", "Flexible Design", "Lightweight", "Easy Install"], tag: "Portable" },
  { name: "LED Bulb 9W", category: "AC Lights", specs: ["9W LED", "Cool White", "Energy Efficient", "Long Life"], tag: "Popular" },
  { name: "CFL Bulb 20W", category: "AC Lights", specs: ["20W CFL", "Warm White", "Compact Design", "Budget Friendly"], tag: "Best Seller" },
  { name: "LED Tube Light 18W", category: "AC Lights", specs: ["18W LED Tube", "4 Feet", "Commercial Grade", "Flicker Free"], tag: "Premium" },
  { name: "Outdoor LED Light 30W", category: "AC Lights", specs: ["30W LED", "Waterproof", "Outdoor Use", "Motion Sensor"], tag: "" },
  { name: "Smart LED Bulb 12W", category: "AC Lights", specs: ["12W Smart LED", "WiFi Control", "Color Changing", "App Control"], tag: "New" },
  { name: "High Bay LED 50W", category: "AC Lights", specs: ["50W High Bay", "Industrial Grade", "High Brightness", "Heat Resistant"], tag: "" },
  { name: "LED Ceiling Light 24W", category: "Home Lights", specs: ["24W LED", "Ceiling Mount", "Warm White", "Dimmable"], tag: "Popular" },
  { name: "Pendant Light 15W", category: "Home Lights", specs: ["15W LED", "Pendant Style", "Adjustable Height", "Modern Design"], tag: "Best Seller" },
  { name: "Wall Sconce 12W", category: "Home Lights", specs: ["12W LED", "Wall Mount", "Soft Light", "Touch Control"], tag: "Premium" },
  { name: "Table Lamp 8W", category: "Home Lights", specs: ["8W LED", "Table Lamp", "Portable", "USB Charging"], tag: "" },
  { name: "Bathroom Light 18W", category: "Home Lights", specs: ["18W LED", "Waterproof", "IP65 Rating", "Cool White"], tag: "New" },
  { name: "Chandelier 36W", category: "Home Lights", specs: ["36W LED", "Chandelier", "Crystal Design", "Remote Control"], tag: "" },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("Solar Street Lights");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl) {
      setActiveCategory(decodeURIComponent(categoryFromUrl));
    }
  }, [searchParams]);

  const displayedProducts = productsData.filter(
    (product) => product.category === activeCategory
  );

  const currentFilters = filtersByCategory[activeCategory] || {};

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans">

      {/* HEADER SECTION */}
      <section className="relative bg-slate-900 text-white pt-40 pb-20 overflow-hidden">
        {/* Background Abstract */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Products</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light"
          >
            Discover innovation powered by the sun. Browse our premium range of: <br/>
            <span className="text-white font-semibold mt-2 inline-block border-b border-blue-500">{activeCategory}</span>
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* SIDEBAR FILTERS (Sticky & Smooth) */}
        <aside className={`lg:w-1/4 ${mobileFilterOpen ? 'fixed inset-0 z-[60] bg-white p-6 overflow-y-auto' : 'hidden lg:block'}`}>
          <div className="flex justify-between items-center mb-6 lg:hidden">
            <h2 className="text-2xl font-bold text-slate-900">Filters</h2>
            <button onClick={() => setMobileFilterOpen(false)} className="text-slate-500 p-2 bg-slate-100 rounded-full"><ArrowRight size={20} className="rotate-180" /></button>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 sticky top-28">
            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
              <h3 className="font-bold text-xl text-slate-900 flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Filter size={20} /></div>
                Filters
              </h3>
              <button className="text-xs text-slate-400 hover:text-blue-600 font-semibold tracking-wide uppercase transition-colors">Reset All</button>
            </div>
            
            {/* Dynamic Filters Logic with Animation */}
            <div className="space-y-8">
              {Object.entries(currentFilters).map(([key, options]: [string, any], index) => (
                <motion.div 
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> {key}
                  </h4>
                  <div className="space-y-3">
                    {options.map((item: string, idx: number) => (
                      <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                         <div className="relative flex items-center">
                           <input type="checkbox" className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-300 transition-all checked:border-blue-500 checked:bg-blue-500 hover:border-blue-400" />
                           <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                           </div>
                         </div>
                         <span className="text-slate-600 text-sm font-medium group-hover:text-blue-600 transition-colors">{item}</span>
                      </label>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <div className="lg:w-3/4 w-full">
          
          <button 
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden w-full mb-6 bg-slate-900 text-white py-4 rounded-2xl flex items-center justify-center gap-3 font-bold shadow-lg active:scale-95 transition-transform"
          >
            <SlidersHorizontal size={20} /> Open Filters
          </button>

          {/* CATEGORY TABS (Scrollable & Smooth) */}
          <div className="mb-10 overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-3 min-w-max px-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap border ${
                    activeCategory === cat.name
                      ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200 scale-105"
                      : "bg-white text-slate-500 border-slate-200 hover:border-blue-300 hover:text-blue-600"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCTS GRID with Staggered Animation */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory} // Key change triggers re-animation
          >
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product, index) => {
                const productId = product.name.toLowerCase().replace(/ /g, "-").replace(/[^a-z0-9-]/g, "");
                const imageUrl = getImageForCategory(product.category); // Get image based on category

                return (
                  <motion.div variants={itemVariants} key={index}>
                    <Link href={`/products/${productId}`} className="block group h-full">
                      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full relative">
                        
                        {/* Shutter / Zoom Effect Image */}
                        <div className="relative h-64 overflow-hidden bg-slate-100">
                          <Image 
                            src={imageUrl} 
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          
                          {/* Glass Tag */}
                          {product.tag && (
                            <div className="absolute top-4 left-4">
                                <span className={`text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-md border border-white/20 shadow-lg ${
                                  product.tag === 'New' ? 'bg-green-500/90 text-white' : 
                                  product.tag === 'Best Seller' ? 'bg-orange-500/90 text-white' : 
                                  'bg-blue-600/90 text-white'
                                }`}>
                                  {product.tag}
                                </span>
                            </div>
                          )}

                          {/* Overlay on Hover */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                        </div>

                        <div className="p-6 flex-grow flex flex-col relative bg-white">
                          <div className="mb-6">
                             <div className="flex items-center gap-2 mb-2">
                                <Zap size={14} className="text-yellow-500 fill-yellow-500" />
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{activeCategory.split(" ")[0]} Series</span>
                             </div>
                             <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors mb-4">
                               {product.name}
                             </h3>
                             <div className="flex flex-wrap gap-2">
                               {product.specs.slice(0, 3).map((spec, i) => (
                                 <span key={i} className="text-[11px] bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1 rounded-full font-medium">
                                   {spec}
                                 </span>
                               ))}
                             </div>
                          </div>
                          
                          {/* Bottom Action Area */}
                          <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                            <span className="text-sm font-semibold text-slate-400">View Details</span>
                            <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                               <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })
            ) : (
              <div className="col-span-full py-20 text-center border-2 border-dashed border-slate-200 rounded-[2rem] bg-slate-50/50">
                <div className="inline-block p-4 bg-white rounded-full shadow-sm mb-4">
                    <Filter className="text-slate-300" size={32} />
                </div>
                <p className="text-xl text-slate-500 font-medium">No products found in <span className="font-bold text-slate-800">{activeCategory}</span> yet.</p>
                <button onClick={() => setActiveCategory("Solar Street Lights")} className="text-blue-600 font-bold mt-4 hover:underline">View All Products</button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <Loader2 className="w-12 h-12 animate-spin text-blue-600 mb-4" />
        <p className="text-slate-500 font-medium tracking-widest uppercase text-sm">Loading Catalogue...</p>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}