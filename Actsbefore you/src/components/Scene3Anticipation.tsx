import { motion } from 'motion/react';
import { TypewriterText } from './TypewriterText';

export function Scene3Anticipation() {
  return (
    <motion.div
      className="w-full h-full flex items-center justify-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background fade */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-[#FE8E49]/10 via-transparent to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* Focused Excel window */}
      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="w-96 h-64 bg-[#1A1A1A] rounded-xl border-2 border-[#FE8E49] relative overflow-hidden"
          animate={{
            boxShadow: [
              '0 0 20px rgba(254, 142, 73, 0.3)',
              '0 0 40px rgba(254, 142, 73, 0.6)',
              '0 0 20px rgba(254, 142, 73, 0.3)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          {/* Window header */}
          <div className="h-10 border-b border-[#FE8E49]/30 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF605C]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD44]"></div>
            <div className="w-3 h-3 rounded-full bg-[#00CA4E]"></div>
            <span className="ml-3 text-[#E7D7BA] text-sm">Excel - Q4 Results</span>
          </div>

          {/* Content grid */}
          <div className="p-4">
            <div className="grid grid-cols-4 gap-2">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-8 bg-[#2A2A2A] rounded border border-[#FE8E49]/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + i * 0.05 }}
                />
              ))}
            </div>
          </div>

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-[#FE8E49]/5 to-transparent pointer-events-none"
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* Bridge icon moving to document */}
        <motion.div
          className="absolute -top-20 left-1/2"
          initial={{ x: -100, y: 0, opacity: 0 }}
          animate={{ 
            x: -50, 
            y: 80, 
            opacity: [0, 1, 1, 0.5],
          }}
          transition={{ 
            delay: 2,
            duration: 2,
            ease: 'easeInOut'
          }}
        >
          <div className="w-12 h-12 rounded-full bg-[#FE8E49] flex items-center justify-center">
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Text messages */}
      <motion.div
        className="absolute top-[15%] right-[10%] bg-[#1A1A1A]/90 backdrop-blur-sm px-6 py-3 rounded-xl border border-[#FE8E49]/30"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <TypewriterText
          text="You were about to update Q4 results."
          className="text-[#E7D7BA] text-sm tracking-wide"
          delay={1}
          speed={30}
        />
      </motion.div>

      <motion.div
        className="absolute top-[25%] right-[10%] bg-[#1A1A1A]/90 backdrop-blur-sm px-6 py-3 rounded-xl border border-[#CD7640]/30"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 0.6 }}
      >
        <TypewriterText
          text="I've already prepared your workspace."
          className="text-[#E8D9BC] text-sm tracking-wide"
          delay={2.5}
          speed={30}
        />
      </motion.div>

      {/* Environment fade effect */}
      <motion.div
        className="absolute inset-0 bg-[#0A0A0A] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 3, duration: 1 }}
        style={{ mixBlendMode: 'multiply' }}
      />
    </motion.div>
  );
}
