"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface BridgeFilterProps {
  isActive: boolean;
}

export function BridgeFilter({ isActive }: BridgeFilterProps) {
  const [particles, setParticles] = useState<Array<{
    id: number;
    top: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    setParticles([...Array(15)].map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      duration: 2 + Math.random(),
      delay: Math.random() * 0.5,
    })));
  }, []);
  return (
    <motion.div
      initial={{ x: "-200%", opacity: 0 }}
      animate={{
        x: isActive ? "200%" : "-200%",
        opacity: isActive ? [0, 0.25, 0.25, 0] : 0,
      }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
        times: [0, 0.2, 0.8, 1],
      }}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 30 }}
    >
      {/* Main Filter Wave */}
      <div className="relative w-full h-full">
        {/* Gradient Wave */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FE8E49]/20 to-transparent">
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E7D7BA]/15 to-transparent blur-xl" />
        </div>

        {/* Leading Edge Glow */}
        <div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-orange-400/25 to-transparent blur-2xl" />

        {/* Trailing Edge Glow */}
        <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-amber-500/15 to-transparent blur-2xl" />

        {/* Scan Lines Effect */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
            }}
          />
        </div>

        {/* Digital Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
                 linear-gradient(90deg, rgba(254,142,73,0.1) 1px, transparent 1px),
                 linear-gradient(0deg, rgba(254,142,73,0.1) 1px, transparent 1px)
               `,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-orange-400 rounded-full"
            initial={{
              top: `${particle.top}%`,
              left: 0,
              opacity: 0,
            }}
            animate={{
              left: isActive ? "100%" : 0,
              opacity: isActive ? [0, 1, 1, 0] : 0,
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              ease: "linear",
            }}
            style={{
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}