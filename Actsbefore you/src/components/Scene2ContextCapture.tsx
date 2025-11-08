import { motion } from 'motion/react';
import { FloatingWindow } from './FloatingWindow';
import { ScanLine } from './ScanLine';
import { TypewriterText } from './TypewriterText';

export function Scene2ContextCapture() {
  const windows = [
    { id: 1, title: 'Notion', x: '15%', y: '20%', relevant: false },
    { id: 2, title: 'Excel', x: '55%', y: '15%', relevant: true },
    { id: 3, title: 'Gmail', x: '25%', y: '55%', relevant: false },
    { id: 4, title: 'Slack', x: '65%', y: '60%', relevant: false },
  ];

  return (
    <motion.div
      className="w-full h-full relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Floating windows */}
      {windows.map((window, i) => (
        <FloatingWindow
          key={window.id}
          title={window.title}
          x={window.x}
          y={window.y}
          relevant={window.relevant}
          delay={i * 0.2}
        />
      ))}

      {/* Scanning wave */}
      <ScanLine />

      {/* Text overlays */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <TypewriterText
          text="Understanding your task flow..."
          className="text-[#E7D7BA] tracking-wide"
          delay={1}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/2 -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        <TypewriterText
          text="Detecting patterns from yesterday's work."
          className="text-[#E8D9BC] text-sm tracking-wide opacity-80"
          delay={3}
        />
      </motion.div>

      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-[#FE8E49]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [0, -50],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
