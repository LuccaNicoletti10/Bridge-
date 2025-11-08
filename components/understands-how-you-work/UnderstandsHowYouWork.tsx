import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function UnderstandsHowYouWork() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Loop animation every 4 seconds (2s animation + 2s pause)
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full relative flex items-center justify-center bg-white dark:bg-black">
      {/* Gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950"
      />

      <AnimatePresence mode="wait">
        <AnimationSequence key={animationKey} />
      </AnimatePresence>
    </div>
  );
}

interface AppWindow {
  id: number;
  title: string;
  icon: string;
  x: string;
  y: string;
  width: string;
  height: string;
}

function AnimationSequence() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const windows: AppWindow[] = [
    {
      id: 1,
      title: "Notion",
      icon: "📝",
      x: "15%",
      y: "25%",
      width: "280px",
      height: "200px",
    },
    {
      id: 2,
      title: "Gmail",
      icon: "✉️",
      x: "55%",
      y: "20%",
      width: "320px",
      height: "220px",
    },
    {
      id: 3,
      title: "Excel",
      icon: "📊",
      x: "30%",
      y: "55%",
      width: "300px",
      height: "200px",
    },
  ];

  if (!isClient) {
    return null;
  }

  const connections = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 1, to: 3 },
  ];

  return (
    <div className="relative w-full h-full">
      {/* Phase 1: Windows appear (0.0-0.6s) */}
      {windows.map((window, i) => (
        <motion.div
          key={window.id}
          className="absolute"
          style={{ left: window.x, top: window.y }}
          initial={{
            opacity: 0,
            scale: 0.8,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: [0, 0.7, 0.7, 0.3, 0],
            scale: [0.8, 1, 1, 0.95, 0.95],
            filter: [
              "blur(8px)",
              "blur(5px)",
              "blur(5px)",
              "blur(8px)",
              "blur(10px)",
            ],
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            times: [0, 0.3, 0.7, 0.9, 1],
          }}
        >
          <div
            className="bg-white/90 dark:bg-[#1A1A1A]/80 backdrop-blur-sm rounded-xl border border-neutral-200 dark:border-[#E7D7BA]/20 overflow-hidden shadow-lg"
            style={{
              width: window.width,
              height: window.height,
            }}
          >
            {/* Window header */}
            <div className="h-10 border-b border-neutral-200 dark:border-[#E7D7BA]/10 flex items-center px-4 gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF605C]/60"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD44]/60"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#00CA4E]/60"></div>
              <span className="ml-1 text-neutral-700 dark:text-[#E7D7BA]/80 text-sm">
                {window.icon} {window.title}
              </span>
            </div>

            {/* Window content */}
            <div className="p-4 space-y-3">
              <div className="h-2 bg-neutral-200 dark:bg-[#E7D7BA]/20 rounded w-3/4"></div>
              <div className="h-2 bg-neutral-200 dark:bg-[#E7D7BA]/20 rounded w-full"></div>
              <div className="h-2 bg-neutral-200 dark:bg-[#E7D7BA]/20 rounded w-5/6"></div>
              <div className="h-12 bg-neutral-100 dark:bg-[#E7D7BA]/10 rounded mt-4"></div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Scanning wave - beige to orange (0.0-0.6s) */}
      <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, #E7D7BA, #FE8E49, #E7D7BA, transparent)",
          boxShadow:
            "0 0 30px rgba(254, 142, 73, 0.6), 0 0 60px rgba(231, 215, 186, 0.4)",
        }}
        initial={{ top: "20%", opacity: 0, scaleX: 0 }}
        animate={{
          top: ["20%", "80%"],
          opacity: [0, 1, 1, 0],
          scaleX: [0, 1, 1, 1],
        }}
        transition={{
          duration: 0.8,
          times: [0, 0.2, 0.8, 1],
          ease: "easeInOut",
        }}
      />

      {/* Radial scan effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle 300px at 50% 50%, rgba(254, 142, 73, 0.1), transparent)",
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
      />

      {/* Phase 2: Neural connection lines (0.6-1.4s) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {connections.map((conn, i) => {
          const fromWindow = windows.find(
            (w) => w.id === conn.from,
          );
          const toWindow = windows.find(
            (w) => w.id === conn.to,
          );

          if (!fromWindow || !toWindow) return null;

          // Calculate center positions
          const fromX =
            parseFloat(fromWindow.x) +
            (parseFloat(fromWindow.width) /
              2 /
              window.innerWidth) *
              100;
          const fromY =
            parseFloat(fromWindow.y) +
            (parseFloat(fromWindow.height) /
              2 /
              window.innerHeight) *
              100;
          const toX =
            parseFloat(toWindow.x) +
            (parseFloat(toWindow.width) /
              2 /
              window.innerWidth) *
              100;
          const toY =
            parseFloat(toWindow.y) +
            (parseFloat(toWindow.height) /
              2 /
              window.innerHeight) *
              100;

          return (
            <motion.line
              key={`${conn.from}-${conn.to}`}
              x1={`${fromX}%`}
              y1={`${fromY}%`}
              x2={`${toX}%`}
              y2={`${toY}%`}
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 1, 0],
                opacity: [0, 0.8, 0.8, 0],
              }}
              transition={{
                duration: 0.8,
                delay: 0.6 + i * 0.15,
                times: [0, 0.4, 0.9, 1],
              }}
            />
          );
        })}

        <defs>
          <linearGradient
            id="connectionGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#E7D7BA"
              stopOpacity="0.8"
            />
            <stop
              offset="50%"
              stopColor="#FE8E49"
              stopOpacity="1"
            />
            <stop
              offset="100%"
              stopColor="#E7D7BA"
              stopOpacity="0.8"
            />
          </linearGradient>
        </defs>
      </svg>

      {/* Connection node pulses */}
      {windows.map((window, i) => (
        <motion.div
          key={`node-${window.id}`}
          className="absolute w-3 h-3 rounded-full bg-[#FE8E49]"
          style={{
            left: `calc(${window.x} + ${parseFloat(window.width) / 2}px)`,
            top: `calc(${window.y} + ${parseFloat(window.height) / 2}px)`,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1.2, 1, 0],
            boxShadow: [
              "0 0 0px rgba(254, 142, 73, 0)",
              "0 0 15px rgba(254, 142, 73, 0.8)",
              "0 0 10px rgba(254, 142, 73, 0.6)",
              "0 0 0px rgba(254, 142, 73, 0)",
            ],
          }}
          transition={{
            duration: 0.8,
            delay: 0.6 + i * 0.1,
            times: [0, 0.3, 0.8, 1],
          }}
        />
      ))}

      {/* Phase 3: Single focused window (1.4-2.0s) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{
          opacity: 0,
          scale: 0.8,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: [0, 0, 1],
          scale: [0.8, 0.8, 1],
          filter: ["blur(10px)", "blur(10px)", "blur(0px)"],
        }}
        transition={{
          duration: 0.6,
          delay: 1.4,
          times: [0, 0.3, 1],
        }}
      >
        <div
          className="w-[450px] h-[280px] bg-white dark:bg-[#1A1A1A] rounded-xl border border-orange-500/50 dark:border-[#FE8E49]/50 overflow-hidden"
          style={{
            boxShadow: "0 20px 60px rgba(254, 142, 73, 0.3)",
          }}
        >
          {/* Window header */}
          <div className="h-10 border-b border-orange-500/30 dark:border-[#FE8E49]/30 flex items-center px-4 gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF605C]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD44]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#00CA4E]"></div>
            <span className="ml-1 text-neutral-700 dark:text-[#E7D7BA] text-sm">
              📊 Your Workflow
            </span>
          </div>

          {/* Window content with pattern */}
          <div className="p-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 dark:from-[#FE8E49] dark:to-[#CD7640]"></div>
              <div className="flex-1 space-y-2">
                <div className="h-2 bg-neutral-200 dark:bg-[#E7D7BA]/40 rounded w-3/4"></div>
                <div className="h-2 bg-neutral-200 dark:bg-[#E7D7BA]/30 rounded w-1/2"></div>
              </div>
            </div>
            <div className="h-px bg-neutral-200 dark:bg-[#E7D7BA]/10"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-200 to-amber-300 dark:from-[#E7D7BA] dark:to-[#E8D9BC]"></div>
              <div className="flex-1 space-y-2">
                <div className="h-2 bg-neutral-200 dark:bg-[#E7D7BA]/40 rounded w-2/3"></div>
                <div className="h-2 bg-neutral-200 dark:bg-[#E7D7BA]/30 rounded w-3/5"></div>
              </div>
            </div>
            <div className="h-px bg-neutral-200 dark:bg-[#E7D7BA]/10"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-amber-200 dark:from-[#FE8E49]/60 dark:to-[#E7D7BA]"></div>
              <div className="flex-1 space-y-2">
                <div className="h-2 bg-neutral-200 dark:bg-[#E7D7BA]/40 rounded w-4/5"></div>
                <div className="h-2 bg-neutral-200 dark:bg-[#E7D7BA]/30 rounded w-2/5"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>


      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-[#FE8E49] rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: 1.5,
              delay: 0.3 + Math.random() * 1.5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}