import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function Scene4Action() {
  return (
    <motion.div
      className="w-full h-full flex items-center justify-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Main document window - expanded */}
      <motion.div
        className="w-[600px] h-[400px] bg-[#1A1A1A] rounded-xl border border-[#FE8E49]/40 relative overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Window header */}
        <div className="h-12 border-b border-[#FE8E49]/30 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF605C]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD44]"></div>
          <div className="w-3 h-3 rounded-full bg-[#00CA4E]"></div>
          <span className="ml-3 text-[#E7D7BA]">Q4 Analysis - Ready</span>
        </div>

        {/* Content with charts */}
        <div className="p-6 space-y-4">
          {/* Chart bars */}
          <div className="flex items-end gap-3 h-32">
            {[60, 80, 95, 70].map((height, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-gradient-to-t from-[#FE8E49] to-[#CD7640] rounded-t"
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.6, ease: 'easeOut' }}
              />
            ))}
          </div>

          {/* Data rows */}
          <div className="space-y-2">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="h-10 bg-[#2A2A2A] rounded flex items-center px-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 + i * 0.1 }}
              >
                <div className="flex-1 h-2 bg-[#FE8E49]/20 rounded" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating text */}
        <motion.div
          className="absolute top-20 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <div className="bg-[#FE8E49] text-[#0A0A0A] px-4 py-1.5 rounded-full text-sm tracking-wide">
            Shortcut applied.
          </div>
        </motion.div>

        <motion.div
          className="absolute top-32 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          <div className="bg-[#CD7640] text-[#E7D7BA] px-4 py-1.5 rounded-full text-sm tracking-wide">
            Context restored.
          </div>
        </motion.div>

        {/* Light particles being absorbed */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#FE8E49] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 30}%`,
              }}
              animate={{
                y: [0, 100 + Math.random() * 200],
                opacity: [1, 0],
                scale: [1, 0],
              }}
              transition={{
                duration: 1 + Math.random(),
                delay: Math.random() * 2,
                ease: 'easeIn',
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Side panel */}
      <motion.div
        className="absolute right-[10%] top-1/2 -translate-y-1/2 w-80 bg-[#1A1A1A]/95 backdrop-blur-sm rounded-xl border border-[#FE8E49]/20 p-5"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="space-y-4">
          <motion.div
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.3 }}
          >
            <div className="w-5 h-5 rounded-full bg-[#FE8E49] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-[#0A0A0A]" />
            </div>
            <div>
              <div className="text-[#E7D7BA] text-sm">Detected: Incomplete section</div>
              <div className="text-[#E8D9BC] text-xs opacity-70">"Q4 Analysis"</div>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.6 }}
          >
            <div className="w-5 h-5 rounded-full bg-[#FE8E49] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-[#0A0A0A]" />
            </div>
            <div>
              <div className="text-[#E7D7BA] text-sm">Action: Filled missing formula</div>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.9 }}
          >
            <div className="w-5 h-5 rounded-full bg-[#FE8E49] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-[#0A0A0A]" />
            </div>
            <div>
              <div className="text-[#E7D7BA] text-sm">Reminder set for tomorrow</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
