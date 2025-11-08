"use client";
import { animate, motion } from "framer-motion";
import { useEffect } from "react";

export function DesktopWindows() {
  useEffect(() => {
    const controls1 = animate(
      ".window-1",
      {
        scale: [1, 1.05, 1],
        y: [0, -8, 0],
      },
      {
        duration: 0.8,
        repeat: Infinity,
        repeatDelay: 1,
      }
    );
    
    const controls2 = animate(
      ".window-2",
      {
        scale: [1, 1.05, 1],
        y: [0, -8, 0],
      },
      {
        duration: 0.8,
        delay: 0.8,
        repeat: Infinity,
        repeatDelay: 1,
      }
    );
    
    const controls3 = animate(
      ".window-3",
      {
        scale: [1, 1.05, 1],
        y: [0, -8, 0],
      },
      {
        duration: 0.8,
        delay: 1.6,
        repeat: Infinity,
        repeatDelay: 1,
      }
    );

    return () => {
      controls1.stop();
      controls2.stop();
      controls3.stop();
    };
  }, []);

  return (
    <div className="w-full h-full bg-[#141313] flex items-center justify-center p-1">
      <div className="relative w-full h-full bg-[#3D3C3B] rounded-lg p-2"
        style={{
          border: "1px solid rgba(90, 89, 88, 0.5)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Browser chrome */}
        <div className="flex items-center justify-between mb-2 px-1">
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ED6A5E]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#F4BF4F]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#61C554]" />
            </div>
            <div className="w-16 h-2.5 bg-[#2C2B2B] rounded flex items-center px-1"
              style={{ border: "1px solid #5A5958" }}
            >
              <div className="w-0.5 h-0.5 rounded-full bg-[#666] mr-1" />
              <div className="h-0.5 w-8 bg-[#666] rounded" />
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="relative h-[calc(100%-28px)] px-1">
          {/* Notion window - top left */}
          <motion.div
            className="window-1 absolute top-0 left-1 w-[100px] h-[80px] bg-gradient-to-br from-[#403F3E] to-[#353433] rounded-lg overflow-hidden"
            style={{
              border: "1px solid #5A5958",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div className="h-4 bg-[#2E2D2C] flex items-center px-2 gap-1"
              style={{ borderBottom: "1px solid #5A5958" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#ED6A5E] opacity-60" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#F4BF4F] opacity-60" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#61C554] opacity-60" />
            </div>
            <div className="p-2">
              <div className="flex items-center gap-1 mb-2">
                <div className="w-3 h-3 bg-white rounded flex items-center justify-center">
                  <span className="text-[6px]">N</span>
                </div>
                <span className="text-[#D4D3D2] text-[7px]">Notion</span>
              </div>
              <div className="space-y-1">
                <div className="h-1 bg-[#5A5958] rounded opacity-70 w-full" />
                <div className="h-1 bg-[#5A5958] rounded opacity-60 w-4/5" />
                <div className="h-1 bg-[#5A5958] rounded opacity-50 w-3/5" />
              </div>
            </div>
          </motion.div>

          {/* ChatGPT window - bottom left */}
          <motion.div
            className="window-2 absolute bottom-0 left-1 w-[100px] h-[70px] bg-gradient-to-br from-[#403F3E] to-[#353433] rounded-lg overflow-hidden"
            style={{
              border: "1px solid #5A5958",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div className="h-4 bg-[#2E2D2C] flex items-center px-2 gap-1"
              style={{ borderBottom: "1px solid #5A5958" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#ED6A5E] opacity-60" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#F4BF4F] opacity-60" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#61C554] opacity-60" />
            </div>
            <div className="p-2">
              <div className="flex items-center gap-1 mb-2">
                <OpenAILogo className="h-3 w-3 text-white" />
                <span className="text-[#D4D3D2] text-[7px]">ChatGPT</span>
              </div>
              <div className="space-y-1">
                <div className="h-1 bg-[#5A5958] rounded-full opacity-60 w-3/4" />
                <div className="h-1 bg-[#10A37F] rounded-full opacity-70 w-2/3 ml-auto" />
              </div>
            </div>
          </motion.div>

          {/* Excel window - right side */}
          <motion.div
            className="window-3 absolute top-1 right-1 w-[160px] h-[140px] bg-gradient-to-br from-[#403F3E] to-[#353433] rounded-lg overflow-hidden"
            style={{
              border: "1px solid #5A5958",
              boxShadow: "0 12px 32px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="h-4 bg-[#2E2D2C] flex items-center px-2 gap-1"
              style={{ borderBottom: "1px solid #5A5958" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#ED6A5E] opacity-60" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#F4BF4F] opacity-60" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#61C554] opacity-60" />
            </div>
            <div className="p-2">
              <div className="flex items-center gap-1 mb-2">
                <div className="w-3 h-3 bg-[#1D6F42] rounded flex items-center justify-center">
                  <span className="text-[6px] text-white">X</span>
                </div>
                <span className="text-[#D4D3D2] text-[7px]">Excel</span>
              </div>
              <div className="flex gap-1 mb-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-3 h-2 bg-[#5A5958] rounded opacity-50" />
                ))}
              </div>
              <div className="space-y-1">
                {[...Array(5)].map((_, rowIndex) => (
                  <div key={rowIndex} className="flex items-center gap-1">
                    <div className="w-2 text-[#888] text-[6px]">{rowIndex + 1}</div>
                    <div className="flex-1 h-2 bg-[#5A5958] rounded opacity-40" />
                    <div className="w-8 h-2 bg-[#5A5958] rounded opacity-50" />
                    <div className="w-8 h-2 bg-[#5A5958] rounded opacity-50" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const OpenAILogo = ({ className }: { className?: string }) => {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none">
      <path
        d="M26.153 11.46a6.888 6.888 0 0 0-.608-5.73 7.117 7.117 0 0 0-3.29-2.93 7.238 7.238 0 0 0-4.41-.454 7.065 7.065 0 0 0-2.41-1.742A7.15 7.15 0 0 0 12.514 0a7.216 7.216 0 0 0-4.217 1.346 7.061 7.061 0 0 0-2.603 3.539 7.12 7.12 0 0 0-2.734 1.188A7.012 7.012 0 0 0 .966 8.268a6.979 6.979 0 0 0 .88 8.273 6.89 6.89 0 0 0 .607 5.729 7.117 7.117 0 0 0 3.29 2.93 7.238 7.238 0 0 0 4.41.454 7.061 7.061 0 0 0 2.409 1.742c.92.404 1.916.61 2.923.604a7.215 7.215 0 0 0 4.22-1.345 7.06 7.06 0 0 0 2.605-3.543 7.116 7.116 0 0 0 2.734-1.187 7.01 7.01 0 0 0 1.993-2.196 6.978 6.978 0 0 0-.884-8.27Zm-10.61 14.71c-1.412 0-2.505-.428-3.46-1.215.043-.023.119-.064.168-.094l5.65-3.22a.911.911 0 0 0 .464-.793v-7.86l2.389 1.36a.087.087 0 0 1 .046.065v6.508c0 2.952-2.491 5.248-5.257 5.248ZM4.062 21.354a5.17 5.17 0 0 1-.635-3.516c.042.025.115.07.168.1l5.65 3.22a.928.928 0 0 0 .928 0l6.898-3.93v2.72a.083.083 0 0 1-.034.072l-5.711 3.255a5.386 5.386 0 0 1-4.035.522 5.315 5.315 0 0 1-3.23-2.443ZM2.573 9.184a5.283 5.283 0 0 1 2.768-2.301V13.515a.895.895 0 0 0 .464.793l6.897 3.93-2.388 1.36a.087.087 0 0 1-.08.008L4.52 16.349a5.262 5.262 0 0 1-2.475-3.185 5.192 5.192 0 0 1 .527-3.98Zm19.623 4.506-6.898-3.93 2.388-1.36a.087.087 0 0 1 .08-.008l5.713 3.255a5.28 5.28 0 0 1 2.054 2.118 5.19 5.19 0 0 1-.488 5.608 5.314 5.314 0 0 1-2.39 1.742v-6.633a.896.896 0 0 0-.459-.792Zm2.377-3.533a7.973 7.973 0 0 0-.168-.099l-5.65-3.22a.93.93 0 0 0-.928 0l-6.898 3.93V8.046a.083.083 0 0 1 .034-.072l5.712-3.251a5.375 5.375 0 0 1 5.698.241 5.262 5.262 0 0 1 1.865 2.28c.39.92.506 1.93.335 2.913ZM9.631 15.009l-2.39-1.36a.083.083 0 0 1-.046-.065V7.075c.001-.997.29-1.973.832-2.814a5.297 5.297 0 0 1 2.231-1.935 5.382 5.382 0 0 1 5.659.72 4.89 4.89 0 0 0-.168.093l-5.65 3.22a.913.913 0 0 0-.465.793l-.003 7.857Zm1.297-2.76L14 10.5l3.072 1.75v3.5L14 17.499l-3.072-1.75v-3.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
