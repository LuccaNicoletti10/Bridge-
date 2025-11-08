import { motion } from 'motion/react';

export function ScanLine() {
  return (
    <>
      {/* Horizontal scan line */}
      <motion.div
        className="absolute left-0 right-0 h-1 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, #FE8E49, #CD7640, #FE8E49, transparent)',
          boxShadow: '0 0 20px rgba(254, 142, 73, 0.6), 0 0 40px rgba(254, 142, 73, 0.3)',
        }}
        initial={{ top: '0%', opacity: 0 }}
        animate={{ 
          top: '100%',
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
          opacity: {
            times: [0, 0.1, 0.9, 1],
          }
        }}
      />

      {/* Vertical scan line */}
      <motion.div
        className="absolute top-0 bottom-0 w-1 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent, #FE8E49, #E7D7BA, #FE8E49, transparent)',
          boxShadow: '0 0 20px rgba(254, 142, 73, 0.5), 0 0 30px rgba(231, 215, 186, 0.3)',
        }}
        initial={{ left: '0%', opacity: 0 }}
        animate={{ 
          left: '100%',
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 5,
          delay: 1,
          ease: 'easeInOut',
          opacity: {
            times: [0, 0.1, 0.9, 1],
          }
        }}
      />

      {/* Radial sweep effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0deg, rgba(254, 142, 73, 0.1) 30deg, transparent 60deg)',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 6,
          ease: 'linear',
        }}
      />
    </>
  );
}
