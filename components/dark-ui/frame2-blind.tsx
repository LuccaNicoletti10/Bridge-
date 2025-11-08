"use client";
import { motion } from "framer-motion";

export function Frame2BlindToContext() {
  return (
    <div className="relative w-full h-full bg-[#211F1F] rounded-lg border border-[#3B3A3A] overflow-hidden flex flex-col items-center justify-center gap-8">
      {/* Glowing Orb */}
      <motion.div 
        className="relative flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Outer glow layers */}
        <div 
          className="absolute w-48 h-48 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0.02) 70%, transparent 100%)',
            filter: 'blur(20px)'
          }}
        ></div>
        <div 
          className="absolute w-40 h-40 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
            filter: 'blur(12px)'
          }}
        ></div>
        
        {/* Main orb */}
        <div 
          className="relative w-32 h-32 rounded-full border border-[#3B3A3A] flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 100%)',
            boxShadow: '0 0 40px rgba(255,255,255,0.1), inset 0 2px 4px rgba(255,255,255,0.05)'
          }}
        >
          {/* Chatbot Icon */}
          <svg 
            width="48" 
            height="48" 
            viewBox="0 0 48 48" 
            fill="none" 
            className="opacity-80"
          >
            {/* Head */}
            <rect 
              x="12" 
              y="14" 
              width="24" 
              height="20" 
              rx="4" 
              stroke="#FFFFFFCC" 
              strokeWidth="1.5"
              fill="none"
            />
            {/* Antenna */}
            <line 
              x1="24" 
              y1="14" 
              x2="24" 
              y2="10" 
              stroke="#FFFFFFCC" 
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle 
              cx="24" 
              cy="9" 
              r="1.5" 
              fill="#FFFFFFCC"
            />
            {/* Eyes - happy */}
            <circle 
              cx="19" 
              cy="22" 
              r="1.5" 
              fill="#FFFFFFCC"
            />
            <circle 
              cx="29" 
              cy="22" 
              r="1.5" 
              fill="#FFFFFFCC"
            />
            {/* Smile */}
            <path 
              d="M 18 27 Q 24 30 30 27" 
              stroke="#FFFFFFCC" 
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      </motion.div>

      {/* Chat Bubble */}
      <motion.div 
        className="relative px-5 py-3 bg-[#373131] rounded-full border border-[#3B3A3A]"
        style={{
          boxShadow: '0 8px 24px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.02)'
        }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="text-[#E0DFDF] text-[13px] tracking-wide" style={{ fontFamily: 'ui-monospace, monospace' }}>
          I don&apos;t know what he&apos;s doing
        </p>
      </motion.div>
    </div>
  );
}
