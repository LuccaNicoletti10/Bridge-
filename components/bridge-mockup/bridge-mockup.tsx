"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppWindow } from "./app-window";
import { BridgeFilter } from "./bridge-filter";

const appWindows = [
  { id: 1, name: "Notion", color: "#000000", icon: "📝", top: "5%", left: "5%", priority: false },
  { id: 2, name: "Excel", color: "#217346", icon: "📊", top: "15%", left: "25%", priority: true },
  { id: 3, name: "Slack", color: "#4A154B", icon: "💬", top: "8%", left: "50%", priority: false },
  { id: 4, name: "Chrome", color: "#4285F4", icon: "🌐", top: "35%", left: "10%", priority: false },
  { id: 5, name: "Figma", color: "#F24E1E", icon: "🎨", top: "30%", left: "40%", priority: true },
  { id: 6, name: "Spotify", color: "#1DB954", icon: "🎵", top: "50%", left: "15%", priority: false },
  { id: 7, name: "Gmail", color: "#EA4335", icon: "📧", top: "45%", left: "55%", priority: false },
  { id: 8, name: "Calendar", color: "#1976D2", icon: "📅", top: "25%", left: "70%", priority: true },
  { id: 9, name: "VS Code", color: "#007ACC", icon: "💻", top: "60%", left: "35%", priority: false },
  { id: 10, name: "Teams", color: "#6264A7", icon: "👥", top: "65%", left: "65%", priority: false },
  { id: 11, name: "Discord", color: "#5865F2", icon: "🎮", top: "12%", left: "80%", priority: false },
  { id: 12, name: "Zoom", color: "#2D8CFF", icon: "📹", top: "55%", left: "8%", priority: false },
];

export function BridgeMockup() {
  const [isFiltered, setIsFiltered] = useState(false);
  const [showBranding, setShowBranding] = useState(false);

  useEffect(() => {
    // Start the filter animation after a brief delay
    const timer = setTimeout(() => {
      setIsFiltered(true);
    }, 1000);

    const brandingTimer = setTimeout(() => {
      setShowBranding(true);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(brandingTimer);
    };
  }, []);

  const handleReset = () => {
    setIsFiltered(false);
    setShowBranding(false);
    setTimeout(() => {
      setIsFiltered(true);
      setTimeout(() => setShowBranding(true), 1500);
    }, 100);
  };

  return (
    <div className="relative w-full max-w-7xl">
      {/* Monitor Frame */}
      <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl p-6 shadow-2xl">
        {/* Monitor Bezel */}
        <div className="relative bg-black rounded-2xl p-3 shadow-inner">
          {/* Screen */}
          <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 rounded-xl overflow-hidden">
            {/* Desktop Background with warm lighting */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-slate-800 to-slate-900" />
            
            {/* Ambient Light Effects */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-orange-500/10 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-amber-600/10 to-transparent blur-3xl" />

            {/* App Windows Container */}
            <div className="absolute inset-0 p-8">
              {appWindows.map((app) => (
                <AppWindow
                  key={app.id}
                  app={app}
                  isFiltered={isFiltered}
                />
              ))}
            </div>

            {/* Bridge AI Filter */}
            <BridgeFilter isActive={isFiltered} />

            {/* Bridge Branding */}
            <AnimatePresence>
              {showBranding && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-8 left-8 flex items-center gap-3"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-orange-500 blur-xl opacity-50" />
                    <div className="relative bg-gradient-to-r from-[#FE8E49] to-[#CD7640] text-white px-6 py-3 rounded-xl shadow-2xl">
                      <span className="text-xl">Bridge</span>
                      <span className="ml-2 text-sm opacity-80">AI</span>
                    </div>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 200 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="h-0.5 bg-gradient-to-r from-orange-500/50 to-transparent"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Reflections and Glass Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Screen Reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl pointer-events-none" />
        </div>

        {/* Monitor Stand */}
        <div className="mt-4 flex flex-col items-center">
          <div className="w-32 h-20 bg-gradient-to-b from-slate-700 to-slate-800 rounded-t-lg" />
          <div className="w-48 h-3 bg-gradient-to-b from-slate-800 to-slate-900 rounded-full" />
        </div>
      </div>

      {/* Control Button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-gradient-to-r from-[#FE8E49] to-[#CD7640] text-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          Replay Animation
        </button>
      </div>

      {/* Description */}
      <div className="mt-6 text-center text-slate-400 max-w-2xl mx-auto">
        <p>
          Bridge AI intelligently filters through the noise, highlighting what matters most
          while fading distractions into the background.
        </p>
      </div>
    </div>
  );
}
