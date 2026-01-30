"use client";

import { useState } from "react";
import { X, ChevronRight } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";

// ✅ 1. WHATSAPP ICON COMPONENT
const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ UPDATED NUMBERS FROM YOUR IMAGE
  const whatsappNumbers = [
    { num: "9665389150", label: "Director" },
    { num: "9272177947", label: "Director" },
    { num: "8956759167", label: "Sales" },
    { num: "9021370907", label: "Executive" },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-4">
      
      {/* Numbers List (Pop-up) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden w-64 mb-2"
          >
            <div className="bg-[#075e54] p-4 text-white">
              <h3 className="font-bold text-lg">Start a Conversation</h3>
              <p className="text-xs opacity-80">Click a number to chat</p>
            </div>
            <div className="flex flex-col">
              {whatsappNumbers.map((item, i) => (
                <a
                  key={i}
                  href={`https://wa.me/91${item.num}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-4 hover:bg-green-50 border-b border-slate-100 last:border-none group transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                        <WhatsAppIcon size={16} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{item.label}</span>
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-green-700">{item.num}</span>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-green-500" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center justify-center w-16 h-16 bg-[#25d366] rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300"
      >
        <AnimatePresence mode="wait">
            {isOpen ? (
                <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                >
                    <X className="text-white" size={32} />
                </motion.div>
            ) : (
                <motion.div
                    key="chat"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                >
                    <WhatsAppIcon size={32} className="text-white" />
                </motion.div>
            )}
        </AnimatePresence>
        
        {/* Pulse Animation Ring */}
        {!isOpen && (
            <span className="absolute inset-0 rounded-full border border-[#25d366] animate-ping opacity-75"></span>
        )}
      </button>
    </div>
  );
};

export default FloatingWhatsApp;