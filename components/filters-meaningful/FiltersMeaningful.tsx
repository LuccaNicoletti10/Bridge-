"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

interface FrameItem {
  id: number;
  type: "important" | "redundant";
  content: string;
  color: string;
}

const FRAMES: FrameItem[] = [
  { id: 1, type: "redundant", content: "Static UI", color: "#3A3A3A" },
  { id: 2, type: "important", content: "User Action", color: "#FE8E49" },
  { id: 3, type: "redundant", content: "Idle Screen", color: "#3A3A3A" },
  { id: 4, type: "important", content: "Data Change", color: "#FE8E49" },
  { id: 5, type: "redundant", content: "Static Content", color: "#3A3A3A" },
  { id: 6, type: "important", content: "Key Event", color: "#FE8E49" },
  { id: 7, type: "redundant", content: "Background", color: "#3A3A3A" },
  { id: 8, type: "redundant", content: "Duplicate", color: "#3A3A3A" },
];

export function FiltersMeaningful() {
  const [animationKey, setAnimationKey] = useState(0);
  const [filteredFrames, setFilteredFrames] = useState<number[]>([]);
  const [processingFrame, setProcessingFrame] = useState<number | null>(null);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
      setFilteredFrames([]);
      setProcessingFrame(null);
    }, 8000);

    return () => clearInterval(animationInterval);
  }, []);

  useEffect(() => {
    if (animationKey > 0) {
      const processFrames = async () => {
        for (let i = 0; i < FRAMES.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 400));
          setProcessingFrame(i);
          
          await new Promise((resolve) => setTimeout(resolve, 300));
          if (FRAMES[i].type === "important") {
            setFilteredFrames((prev) => [...prev, i]);
          }
          setProcessingFrame(null);
        }
      };
      processFrames();
    }
  }, [animationKey]);

  return (
    <div className="w-full h-full relative flex items-center justify-center bg-white dark:bg-black p-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950" />

      <div className="relative w-full h-full flex gap-8">
        {/* Input Stream */}
        <div className="flex-1 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4"
          >
            Screen Capture Stream
          </motion.div>

          <div className="grid grid-cols-2 gap-3 flex-1">
            <AnimatePresence>
              {FRAMES.map((frame, index) => (
                <motion.div
                  key={`${animationKey}-${frame.id}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div
                    className={`
                      h-20 rounded-lg border-2 flex items-center justify-center
                      transition-all duration-300
                      ${
                        processingFrame === index
                          ? "border-[#FE8E49] bg-[#FE8E49]/10 scale-105"
                          : "border-neutral-700 bg-neutral-800"
                      }
                    `}
                  >
                    <span className="text-xs text-neutral-400">
                      {frame.content}
                    </span>

                    {/* Processing indicator */}
                    {processingFrame === index && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-[#FE8E49] rounded-full flex items-center justify-center"
                      >
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                      </motion.div>
                    )}

                    {/* Result indicator */}
                    {processingFrame === null && index < FRAMES.length && (
                      <>
                        {filteredFrames.includes(index) ? (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                          >
                            <Check className="w-4 h-4 text-white" />
                          </motion.div>
                        ) : (
                          index <= (processingFrame || -1) + 2 && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
                            >
                              <X className="w-4 h-4 text-white" />
                            </motion.div>
                          )
                        )}
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Filter Visualization */}
        <div className="flex items-center justify-center">
          <motion.div
            animate={{
              scale: processingFrame !== null ? [1, 1.1, 1] : 1,
            }}
            transition={{ duration: 0.3 }}
            className="relative w-16 h-full flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#FE8E49]/20 via-[#FE8E49]/40 to-[#FE8E49]/20 rounded-full blur-xl" />
            
            <div className="relative w-12 h-full bg-gradient-to-b from-[#FE8E49] to-[#CD7640] rounded-full flex items-center justify-center">
              <motion.div
                animate={{
                  rotate: processingFrame !== null ? 360 : 0,
                }}
                transition={{
                  duration: 1,
                  repeat: processingFrame !== null ? Infinity : 0,
                  ease: "linear",
                }}
                className="text-white text-2xl"
              >
                ⚡
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute -bottom-6 text-xs font-medium text-[#FE8E49] whitespace-nowrap"
            >
              AI Filter
            </motion.div>
          </motion.div>
        </div>

        {/* Filtered Output */}
        <div className="flex-1 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4"
          >
            Meaningful Events Only
          </motion.div>

          <div className="flex flex-col gap-3 flex-1">
            <AnimatePresence>
              {filteredFrames.map((frameIndex, displayIndex) => {
                const frame = FRAMES[frameIndex];
                return (
                  <motion.div
                    key={`filtered-${animationKey}-${frame.id}`}
                    initial={{ opacity: 0, x: -20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                    className="relative"
                  >
                    <div className="h-20 rounded-lg border-2 border-[#FE8E49] bg-gradient-to-br from-[#FE8E49]/20 to-[#CD7640]/20 flex items-center justify-center">
                      <span className="text-sm font-medium text-[#E7D7BA]">
                        {frame.content}
                      </span>

                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-[#FE8E49] rounded-full flex items-center justify-center"
                      >
                        <span className="text-white text-xs font-bold">
                          {displayIndex + 1}
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {filteredFrames.length === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 rounded-lg bg-[#FE8E49]/10 border border-[#FE8E49]/30"
              >
                <p className="text-xs text-center text-[#E7D7BA]">
                  ✓ Filtered out 5 redundant frames
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
