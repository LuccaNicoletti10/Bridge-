import { motion } from 'motion/react';

export function Scene5Conclusion() {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Ambient glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-[#FE8E49]/20 via-[#CD7640]/10 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      {/* Bridge logo */}
      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 -m-12"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <div className="w-full h-full rounded-full border-2 border-[#FE8E49]/30" />
        </motion.div>

        {/* Logo circle */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#FE8E49] to-[#CD7640] flex items-center justify-center relative overflow-hidden">
          {/* Inner pulse */}
          <motion.div
            className="absolute inset-0 bg-white rounded-full"
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          
          {/* Logo symbol - simplified bridge */}
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path
              d="M15 35 Q30 25 45 35"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="15" cy="35" r="3" fill="white" />
            <circle cx="45" cy="35" r="3" fill="white" />
            <line x1="30" y1="25" x2="30" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </motion.div>

      {/* Main text */}
      <motion.div
        className="mt-16 text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.h1
          className="text-[#E7D7BA] text-5xl tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          Bridge acts before you ask.
        </motion.h1>

        <motion.p
          className="text-[#E8D9BC] text-xl tracking-wide opacity-80"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          The first proactive context engine.
        </motion.p>
      </motion.div>

      {/* Particle sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FE8E49] rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Bottom subtle glow line */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#FE8E49] to-transparent"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 0.5, scaleX: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      />
    </motion.div>
  );
}
