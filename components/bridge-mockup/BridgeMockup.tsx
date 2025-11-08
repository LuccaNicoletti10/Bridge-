"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppWindow } from "./AppWindow";
import { BridgeFilter } from "./BridgeFilter";

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFiltered(true);
    }, 1000);

    const loopTimer = setInterval(() => {
      setIsFiltered(false);
      setTimeout(() => {
        setIsFiltered(true);
      }, 500);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(loopTimer);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div className="relative bg-gradient-to-b from-slate-900 to-black rounded-xl p-2 shadow-2xl h-full">
        <div className="relative bg-black rounded-lg p-2 h-full">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-black rounded-b-2xl z-50" />
          
          <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 rounded-md overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-slate-800 to-slate-900" />
            
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-orange-500/10 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-amber-600/10 to-transparent blur-3xl" />
            
            <div className="absolute inset-0 p-8">
              {appWindows.map((app) => (
                <AppWindow key={app.id} app={app} isFiltered={isFiltered} />
              ))}
            </div>
            
            <BridgeFilter isActive={isFiltered} />
            
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-lg pointer-events-none" />
        </div>
      </div>
      
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/40 blur-2xl rounded-full" />
    </div>
  );
}
