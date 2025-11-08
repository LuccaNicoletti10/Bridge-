"use client";
import React, { useEffect, useMemo, useState } from "react";
import { animate, motion } from "framer-motion";

export function IllustrationCardNew() {
  useEffect(() => {
    const controls = animate(
      ".orb-glow",
      {
        scale: [1, 1.05, 1],
        opacity: [0.6, 1, 0.6],
      },
      {
        duration: 3,
        repeat: Infinity,
        repeatDelay: 0.5,
      }
    );
    
    return () => controls.stop();
  }, []);

  return (
    <div className="p-4 overflow-hidden h-full relative flex flex-col items-center justify-center gap-6" style={{ background: '#211F1F' }}>
      {/* Animated glow background */}
      <div className="w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <Sparkles />
      </div>

      {/* Main Orb Container */}
      <div className="relative flex items-center justify-center z-10">
        <OrbContainer />
      </div>

      {/* Chat Bubble */}
      <ChatBubble />
    </div>
  );
}

const OrbContainer = () => {
  return (
    <div className="relative flex items-center justify-center orb-glow">
      {/* Outer glow layers */}
      <div 
        className="absolute w-[200px] h-[200px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.02) 60%, transparent 100%)',
          filter: 'blur(30px)',
        }}
      ></div>
      <div 
        className="absolute w-[160px] h-[160px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0.03) 70%, transparent 100%)',
          filter: 'blur(20px)',
        }}
      ></div>
      <div 
        className="absolute w-[120px] h-[120px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
          filter: 'blur(15px)',
        }}
      ></div>
      
      {/* Main Orb */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[120px] w-[120px] rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.02)] border border-white/10"
        style={{
          background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.03) 70%, rgba(255,255,255,0.01) 100%)',
          boxShadow: '0px 0px 12px 0px rgba(248,248,248,0.3) inset, 0px 32px 24px -16px rgba(0,0,0,0.5)'
        }}
      >
        <ChatbotIcon />
      </motion.div>
    </div>
  );
};

const ChatbotIcon = () => {
  return (
    <motion.svg 
      width="55" 
      height="55" 
      viewBox="0 0 90 90" 
      fill="none"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 0.9, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Chat bubble body */}
      <rect 
        x="20" 
        y="27" 
        width="50" 
        height="40" 
        rx="7" 
        stroke="white" 
        strokeWidth="2.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Chat bubble tail */}
      <path 
        d="M 45 67 L 41 74 L 50 67 Z" 
        fill="white"
      />
      
      {/* Antenna */}
      <line 
        x1="45" 
        y1="27" 
        x2="45" 
        y2="18" 
        stroke="white" 
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <circle 
        cx="45" 
        cy="15" 
        r="3" 
        fill="white"
      />
      
      {/* Eyes */}
      <motion.circle 
        cx="34" 
        cy="41" 
        r="2.8" 
        fill="white"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      />
      <motion.circle 
        cx="56" 
        cy="41" 
        r="2.8" 
        fill="white"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      />
      
      {/* Smile */}
      <path 
        d="M 33 51 Q 45 58 57 51" 
        stroke="white" 
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />
    </motion.svg>
  );
};

const ChatBubble = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="relative px-6 py-3 rounded-full"
      style={{
        backgroundColor: '#373131',
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.4)'
      }}
    >
      <p 
        style={{ 
          fontFamily: 'ui-monospace, "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
          fontSize: '14px',
          letterSpacing: '0.015em',
          fontWeight: '400',
          color: '#E0DFDF'
        }}
      >
        I don&apos;t know what he&apos;s doing
      </p>
    </motion.div>
  );
};

const Sparkles = () => {
  const [stars, setStars] = useState<Array<{
    id: number;
    top: number;
    left: number;
    moveX: number;
    moveY: number;
    opacity: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    setStars([...Array(20)].map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      moveX: Math.random() * 4 - 2,
      moveY: Math.random() * 4 - 2,
      opacity: Math.random() * 0.6 + 0.4,
      duration: Math.random() * 3 + 3,
    })));
  }, []);
  
  return (
    <div className="absolute inset-0">
      {stars.map((star) => (
        <motion.span
          key={`star-${star.id}`}
          animate={{
            top: `calc(${star.top}% + ${star.moveY}px)`,
            left: `calc(${star.left}% + ${star.moveX}px)`,
            opacity: star.opacity,
            scale: [1, 1.5, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-white"
        ></motion.span>
      ))}
    </div>
  );
};
