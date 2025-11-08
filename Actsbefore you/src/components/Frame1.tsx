export function Frame1() {
  return (
    <div className="w-full aspect-video bg-[#1A1919] rounded-lg border border-[#3B3A3A] flex items-center justify-center overflow-hidden relative">
      {/* Desktop Window Container */}
      <div className="relative w-[85%] h-[75%] bg-[#1F1E1E] rounded-xl border border-[#3B3A3A] shadow-2xl flex flex-col">
        {/* Window Header */}
        <div className="h-8 border-b border-[#3B3A3A] flex items-center px-3 gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF605C] opacity-60"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD44] opacity-60"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#00CA4E] opacity-60"></div>
        </div>

        {/* App Windows Container */}
        <div className="flex-1 relative p-6">
          {/* Notion Window - Top Left */}
          <div 
            className="absolute top-6 left-6 w-36 h-28 bg-[#252424] rounded-lg border border-[#3B3A3A] shadow-lg"
            style={{
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.03)',
            }}
          >
            <div className="h-6 border-b border-[#3B3A3A] flex items-center px-2">
              <div className="text-[10px] text-[#FFFFFFCC] tracking-wide">Notion</div>
            </div>
            <div className="p-2 space-y-1.5">
              <div className="h-1.5 bg-[#3B3A3A] rounded w-3/4"></div>
              <div className="h-1.5 bg-[#3B3A3A] rounded w-full"></div>
              <div className="h-1.5 bg-[#3B3A3A] rounded w-2/3"></div>
            </div>
          </div>

          {/* ChatGPT Window - Bottom Left */}
          <div 
            className="absolute bottom-6 left-6 w-36 h-28 bg-[#252424] rounded-lg border border-[#3B3A3A] shadow-lg"
            style={{
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.03)',
            }}
          >
            <div className="h-6 border-b border-[#3B3A3A] flex items-center px-2">
              <div className="text-[10px] text-[#FFFFFFCC] tracking-wide">ChatGPT</div>
            </div>
            <div className="p-2 space-y-2">
              <div className="bg-[#3B3A3A] rounded p-1.5 text-[8px] text-[#FFFFFF99]">
                Hello! How can I...
              </div>
            </div>
          </div>

          {/* Excel Window - Large Right */}
          <div 
            className="absolute top-3 right-6 w-56 h-48 bg-[#252424] rounded-lg border border-[#3B3A3A] shadow-xl"
            style={{
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.03)',
            }}
          >
            <div className="h-6 border-b border-[#3B3A3A] flex items-center px-2">
              <div className="text-[10px] text-[#FFFFFFCC] tracking-wide">Excel</div>
            </div>
            <div className="p-2">
              <div className="grid grid-cols-4 gap-1">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="h-6 bg-[#2C2B2B] rounded border border-[#3B3A3A]"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dock Icons */}
        <div className="h-16 border-t border-[#3B3A3A] flex items-center justify-center gap-2 px-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={i} 
              className="w-10 h-10 bg-[#2C2B2B] rounded-lg border border-[#3B3A3A] opacity-40"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
