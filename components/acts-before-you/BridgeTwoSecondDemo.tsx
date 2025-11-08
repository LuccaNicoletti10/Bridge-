import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

export function BridgeTwoSecondDemo() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Loop the animation every 5 seconds (3.5s animation + 1.5s pause)
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full relative flex items-center justify-center bg-white dark:bg-black">
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950"
      />

      <AnimatePresence mode="wait">
        <AnimationSequence key={animationKey} />
      </AnimatePresence>
    </div>
  );
}

function AnimationSequence() {
  return (
    <div className="relative w-full h-full">
      {/* Desktop-like workspace */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* App icons grid */}
        <div className="relative">
          <div className="flex gap-8">
            {/* Decoy icon 1 */}
            <motion.div
              className="w-20 h-20 bg-[#2A2A2A] rounded-2xl border border-[#3B3A3A]"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 0.3 }}
            />

            {/* Target icon - Excel/Spreadsheet */}
            <motion.div
              className="relative w-20 h-20 bg-[#2A2A2A] rounded-2xl border border-[#3B3A3A] flex items-center justify-center"
              initial={{ opacity: 0.5, scale: 1 }}
              animate={{
                opacity: 1,
                scale: [1, 1.05, 1],
              }}
              transition={{
                scale: { delay: 0.3, duration: 0.3 },
              }}
            >
              {/* Simple grid icon */}
              <div className="grid grid-cols-3 gap-1 w-10 h-10">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-[#E7D7BA] rounded-sm opacity-60"
                  />
                ))}
              </div>

              {/* Bridge anticipation glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.8, 0.6],
                  boxShadow: [
                    "0 0 0px rgba(254, 142, 73, 0)",
                    "0 0 30px rgba(254, 142, 73, 0.8)",
                    "0 0 20px rgba(254, 142, 73, 0.6)",
                  ],
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: "easeOut",
                }}
              />
            </motion.div>

            {/* Decoy icon 2 */}
            <motion.div
              className="w-20 h-20 bg-[#2A2A2A] rounded-2xl border border-[#3B3A3A]"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 0.3 }}
            />
          </div>

          {/* Cursor with glow trail */}
          <motion.div
            className="absolute top-0 left-0 pointer-events-none"
            initial={{ x: -100, y: -50 }}
            animate={{
              x: 108, // Move to center of middle icon
              y: 40,
            }}
            transition={{
              duration: 1.2,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {/* Cursor glow */}
            <motion.div
              className="absolute -inset-4 rounded-full"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0, 0.6, 0.3],
                scale: [0.5, 1.5, 1],
              }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              style={{
                background:
                  "radial-gradient(circle, rgba(254, 142, 73, 0.4) 0%, transparent 70%)",
              }}
            />

            {/* Cursor */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 3L10.5 20L13 12L21 9.5L3 3Z"
                fill="#E7D7BA"
                stroke="#FE8E49"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        </div>

        {/* Floating text - "Anticipating your next move..." */}
        <motion.div
          className="absolute top-[35%] left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            delay: 0.6,
            duration: 1.0,
            times: [0, 0.3, 0.7, 1],
          }}
        >
          <div
            className="text-[#E7D7BA] text-sm tracking-wide px-4 py-2 rounded-full backdrop-blur-sm"
            style={{
              background: "rgba(254, 142, 73, 0.15)",
              border: "1px solid rgba(254, 142, 73, 0.3)",
            }}
          >
            Anticipating your next move…
          </div>
        </motion.div>

        {/* App window that opens automatically */}
        <motion.div
          className="absolute top-1/2 left-1/2"
          initial={{
            opacity: 0,
            scale: 0.3,
            x: "-50%",
            y: "-50%",
          }}
          animate={{
            opacity: [0, 1, 1, 1],
            scale: [0.3, 1, 1, 1],
            x: "-50%",
            y: "-50%",
          }}
          transition={{
            delay: 1.0,
            duration: 0.7,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <motion.div
            className="w-[500px] h-[320px] bg-[#1A1A1A] rounded-xl border border-[#FE8E49]/40 overflow-hidden relative"
            initial={{ filter: "blur(10px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{ delay: 1.3, duration: 0.4 }}
            style={{
              boxShadow: "0 20px 60px rgba(254, 142, 73, 0.3)",
            }}
          >
            {/* Window header */}
            <div className="h-10 border-b border-[#FE8E49]/30 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF605C]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD44]"></div>
              <div className="w-3 h-3 rounded-full bg-[#00CA4E]"></div>
              <span className="ml-2 text-[#E7D7BA] text-sm">
                Q4 Analysis.xlsx
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-8 bg-[#2A2A2A] rounded border border-[#FE8E49]/20"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.02 }}
                  />
                ))}
              </div>

              {/* Chart bars */}
              <div className="flex items-end gap-2 h-24 mt-6">
                {[70, 85, 92, 78].map((height, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-[#FE8E49] to-[#CD7640] rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{
                      delay: 0.7 + i * 0.05,
                      duration: 0.3,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Checkmark notification */}
            <motion.div
              className="absolute top-16 right-5"
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                delay: 1.6,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
              }}
            >
              <div className="flex items-center gap-2 bg-[#FE8E49] text-[#0A0A0A] px-4 py-2 rounded-full">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ delay: 1.7, duration: 0.4 }}
                >
                  <Check className="w-4 h-4" />
                </motion.div>
                <span className="text-sm tracking-wide">
                  Applied fix automatically
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Background blur effect */}
          <motion.div
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            style={{
              background:
                "radial-gradient(circle, rgba(231, 215, 186, 0.1) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
        </motion.div>

        {/* Ambient particles throughout */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#FE8E49] rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1.5, 0],
                y: [0, -30 - Math.random() * 20],
              }}
              transition={{
                delay: 0.5 + Math.random() * 1,
                duration: 1 + Math.random() * 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
