import { motion } from 'motion/react';

export function NeuralPulse() {
  return (
    <div className="relative w-40 h-40">
      {/* Outer rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border-2 border-[#FE8E49]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.8, 0.2, 0.8],
            scale: [0.5 + i * 0.2, 1.2 + i * 0.2, 0.5 + i * 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Center core */}
      <motion.div
        className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-gradient-to-br from-[#FE8E49] to-[#CD7640]"
        animate={{
          boxShadow: [
            '0 0 20px rgba(254, 142, 73, 0.5)',
            '0 0 40px rgba(254, 142, 73, 0.8)',
            '0 0 20px rgba(254, 142, 73, 0.5)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-white"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </div>
  );
}
