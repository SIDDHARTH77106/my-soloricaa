"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Globe, Send, Sun, Fan, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans relative overflow-hidden">
      
      {/* 1. BACKGROUND ANIMATIONS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Giant Rotating Windmill (Left - Subtle Grey) */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[15%] -left-[10%] text-slate-200 opacity-60"
          >
            <Fan size={600} strokeWidth={0.5} />
          </motion.div>

          {/* Glowing Sun (Right - Bright Orange) */}
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

          {/* Floating Particles/Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* 2. MAIN CONTENT */}
      <main className="flex-grow pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-orange-50 border border-orange-200 text-orange-600 rounded-full text-xs font-bold tracking-widest mb-6 shadow-sm">
             <MessageSquare size={14} className="animate-bounce"/> GET IN TOUCH
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Power Up?</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
            Whether you have a question about features, pricing, need a demo, or anything else, our team is ready to answer all your questions.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-12 items-start">
          
          {/* LEFT COLUMN: CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-8 lg:p-12 border border-white/60 overflow-hidden"
          >
            {/* Shutter Overlay (Visible on Hover) */}
            <div className="absolute inset-0 flex z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
               {[1, 2, 3, 4, 5].map((strip) => (
                  <motion.div 
                    key={strip}
                    initial={{ height: "0%" }}
                    whileHover={{ height: "100%" }}
                    className="w-1/5 bg-gradient-to-b from-orange-50/50 to-transparent border-r border-white/20 last:border-none h-full"
                  />
               ))}
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8 relative z-10">Send us a Message</h2>
            
            <form className="space-y-6 relative z-10">
              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ml-1">First Name</label>
                  <input type="text" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white text-slate-900 outline-none transition placeholder:text-slate-400 shadow-sm" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ml-1">Last Name</label>
                  <input type="text" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white text-slate-900 outline-none transition placeholder:text-slate-400 shadow-sm" placeholder="Doe" />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ml-1">Email</label>
                  <input type="email" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white text-slate-900 outline-none transition placeholder:text-slate-400 shadow-sm" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ml-1">Phone</label>
                  <input type="tel" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white text-slate-900 outline-none transition placeholder:text-slate-400 shadow-sm" placeholder="+91..." />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ml-1">Subject</label>
                <div className="relative">
                  <select required defaultValue="" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white text-slate-900 outline-none transition appearance-none shadow-sm cursor-pointer">
                    <option value="" disabled>Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Quotation</option>
                    <option value="export">Export Business</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ml-1">Message</label>
                <textarea required rows={4} className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white text-slate-900 outline-none transition resize-none placeholder:text-slate-400 shadow-sm" placeholder="Tell us about your project..."></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-500/30"
              >
                <Send size={20} /> Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT COLUMN: CONTACT INFO (Floating Cards) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-start space-y-8 pt-4"
          >
            
            {/* Main Office Card */}
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl hover:border-orange-200 transition-all group">
               <div className="flex items-start gap-6">
                  <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                     <MapPin size={28} />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">Headquarters</h3>
                     <p className="text-slate-500 leading-relaxed font-medium">
                        Audumbar Nivya Complex, Office No 203,<br />
                        Shree Control Chowk, Narhe-Ambegaon Road,<br />
                        Pune-411041
                     </p>
                  </div>
               </div>
            </motion.div>

            {/* Email Card */}
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl hover:border-orange-200 transition-all group">
               <div className="flex items-start gap-6">
                  <div className="p-4 bg-orange-50 rounded-2xl text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                     <Mail size={28} />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
                     <ul className="space-y-2 text-slate-500 font-medium text-sm">
                        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-300"></span> General: <span className="text-slate-900">eresh@solarica.in</span></li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-300"></span> Sales: <span className="text-slate-900">business@solarica.in</span></li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-300"></span> Export: <span className="text-slate-900">kiran@solarica.in</span></li>
                     </ul>
                  </div>
               </div>
            </motion.div>

            {/* Phone Card (UPDATED with correct numbers) */}
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl hover:border-orange-200 transition-all group">
               <div className="flex items-start gap-6">
                  <div className="p-4 bg-green-50 rounded-2xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                     <Phone size={28} />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
                     <ul className="space-y-2 text-slate-500 font-medium text-sm">
                        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-300"></span> Sales: <span className="text-slate-900">+91 89567 59167</span></li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-300"></span> Directors: <span className="text-slate-900">+91 92721 77947 / +91 96653 89150</span></li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-300"></span> Executive: <span className="text-slate-900">+91 90213 70907</span></li>
                     </ul>
                  </div>
               </div>
            </motion.div>

            {/* Websites Card */}
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl hover:border-orange-200 transition-all group">
               <div className="flex items-start gap-6">
                  <div className="p-4 bg-purple-50 rounded-2xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                     <Globe size={28} />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">Our Digital Presence</h3>
                     <ul className="space-y-2 text-blue-600 font-bold">
                        <li><a href="https://www.solarica.in" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">www.solarica.in ↗</a></li>
                        <li><a href="https://solaricaenergy.in" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">solaricaenergy.in ↗</a></li>
                     </ul>
                  </div>
               </div>
            </motion.div>

            {/* Map (Fixed Embed Link) */}
            <div className="mt-8 rounded-3xl overflow-hidden shadow-lg h-64 border-4 border-white relative group cursor-pointer">
               {/* Updated valid Google Maps Embed for Narhe-Ambegaon Road, Pune */}
               <iframe 
                 src="https://maps.google.com/maps?q=Shree%20Control%20Chowk%2C%20Narhe%2C%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, filter: "grayscale(100%)" }} 
                 allowFullScreen={true} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="group-hover:filter-none transition-all duration-700"
               ></iframe>
               <div className="absolute inset-0 bg-orange-500/20 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
               <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-md text-xs font-bold text-slate-900 pointer-events-none">
                  <MapPin size={14} className="inline mr-1 text-orange-500"/> View on Google Maps
               </div>
            </div>

          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;