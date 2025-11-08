"use client";
import { motion } from "framer-motion";

interface App {
  id: number;
  name: string;
  color: string;
  icon: string;
  top: string;
  left: string;
  priority: boolean;
}

interface AppWindowProps {
  app: App;
  isFiltered: boolean;
}

export function AppWindow({ app, isFiltered }: AppWindowProps) {
  const shouldBeSharp = app.priority && isFiltered;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isFiltered ? (shouldBeSharp ? 1 : 0.25) : 0.9,
        scale: isFiltered ? (shouldBeSharp ? 1 : 0.95) : 1,
        filter: isFiltered ? (shouldBeSharp ? "blur(0px)" : "blur(4px)") : "blur(0px)",
      }}
      transition={{ duration: 0.8, ease: "easeOut", delay: Math.random() * 0.2 }}
      className="absolute"
      style={{
        top: app.top,
        left: app.left,
        zIndex: shouldBeSharp ? 20 : 10,
      }}
    >
      <div className="relative">
        {/* Window Glow Effect for Priority Apps */}
        {shouldBeSharp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute -inset-2 bg-gradient-to-r from-[#FE8E49]/30 to-[#CD7640]/30 rounded-xl blur-xl"
          />
        )}
        
        {/* Window */}
        <div className="relative bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl w-64 overflow-hidden">
          {/* Title Bar */}
          <div
            className="flex items-center gap-2 px-3 py-2 text-white"
            style={{ backgroundColor: app.color }}
          >
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
            </div>
            <span className="flex-1 text-sm truncate">{app.name}</span>
          </div>
          
          {/* Window Content */}
          <div className="p-4 bg-white h-40">
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <div className="text-4xl mb-2">{app.icon}</div>
              <div className="text-xs text-gray-500">{app.name}</div>
              
              {/* Mock Content Lines */}
              <div className="mt-3 w-full space-y-2">
                <div className="h-1.5 bg-gray-200 rounded w-full" />
                <div className="h-1.5 bg-gray-200 rounded w-3/4" />
                <div className="h-1.5 bg-gray-200 rounded w-5/6" />
              </div>
            </div>
          </div>
        </div>

        {/* Priority Indicator */}
        {shouldBeSharp && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#FE8E49] to-[#CD7640] rounded-full shadow-lg flex items-center justify-center"
          >
            <span className="text-white text-xs">✓</span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
