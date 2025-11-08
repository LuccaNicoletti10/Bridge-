import { motion } from 'motion/react';
import { NeuralPulse } from './NeuralPulse';
import { TypewriterText } from './TypewriterText';

export function Scene1Opening() {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Radar lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-1 origin-left"
            style={{
              height: '50vh',
              background: 'linear-gradient(90deg, #FE8E49 0%, transparent 100%)',
              transform: `rotate(${i * 45}deg)`,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ 
              scaleX: [0, 1, 0.8], 
              opacity: [0, 0.3, 0.15],
            }}
            transition={{ 
              duration: 2,
              delay: i * 0.1,
              ease: 'easeOut'
            }}
          />
        ))}
      </div>

      {/* Central pulse */}
      <NeuralPulse />

      {/* Text */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <TypewriterText
          text="Bridge analyzing your environment..."
          className="text-[#E7D7BA] tracking-wide"
          delay={1.5}
        />
      </motion.div>

      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FE8E49] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
