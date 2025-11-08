import { motion } from 'motion/react';

interface FloatingWindowProps {
  title: string;
  x: string;
  y: string;
  relevant: boolean;
  delay: number;
}

export function FloatingWindow({ title, x, y, relevant, delay }: FloatingWindowProps) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
      animate={{ 
        opacity: relevant ? 1 : 0.3,
        scale: 1,
        rotateX: 0,
        filter: relevant ? 'blur(0px)' : 'blur(3px)',
      }}
      transition={{ 
        delay,
        duration: 0.8,
        opacity: { delay: delay + 3 },
        filter: { delay: delay + 3 }
      }}
    >
      <div 
        className={`w-48 h-36 rounded-lg border ${
          relevant 
            ? 'bg-[#1A1A1A] border-[#FE8E49]/50' 
            : 'bg-[#1A1A1A]/50 border-[#E7D7BA]/20'
        } backdrop-blur-sm overflow-hidden`}
        style={{
          boxShadow: relevant 
            ? '0 8px 32px rgba(254, 142, 73, 0.2)' 
            : '0 4px 16px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Window header */}
        <div className={`h-8 border-b ${
          relevant ? 'border-[#FE8E49]/30' : 'border-[#E7D7BA]/10'
        } flex items-center px-3 gap-2`}>
          <div className="w-2 h-2 rounded-full bg-[#FF605C] opacity-60"></div>
          <div className="w-2 h-2 rounded-full bg-[#FFBD44] opacity-60"></div>
          <div className="w-2 h-2 rounded-full bg-[#00CA4E] opacity-60"></div>
          <span className="ml-2 text-[#E7D7BA] text-xs">{title}</span>
        </div>

        {/* Window content */}
        <div className="p-3 space-y-2">
          <div className="h-2 bg-[#E7D7BA]/20 rounded w-3/4"></div>
          <div className="h-2 bg-[#E7D7BA]/20 rounded w-full"></div>
          <div className="h-2 bg-[#E7D7BA]/20 rounded w-2/3"></div>
          <div className="h-8 bg-[#E7D7BA]/10 rounded mt-3"></div>
        </div>

        {/* Glow overlay for relevant windows */}
        {relevant && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-[#FE8E49]/10 to-transparent pointer-events-none"
            animate={{
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        )}
      </div>
    </motion.div>
  );
}
