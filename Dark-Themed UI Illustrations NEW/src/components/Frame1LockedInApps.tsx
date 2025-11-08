export function Frame1LockedInApps() {
  return (
    <div className="relative w-full aspect-video bg-[#1A1919] rounded-lg border border-[#3B3A3A] overflow-hidden flex items-center justify-center">
      {/* Desktop Window Container */}
      <div className="relative w-[85%] h-[75%] bg-[#1F1E1E] rounded-xl border border-[#3B3A3A] shadow-[0_24px_48px_rgba(0,0,0,0.4)]">
        {/* Window Header */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-[#252424] border-b border-[#3B3A3A] rounded-t-xl flex items-center px-3 gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#3B3A3A]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#3B3A3A]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#3B3A3A]"></div>
        </div>

        {/* App Windows */}
        <div className="absolute inset-0 top-8 p-6">
          {/* Notion Window - Top Left */}
          <div 
            className="absolute top-[8%] left-[6%] w-[32%] h-[35%] bg-[#262525] rounded-lg border border-[#3B3A3A] shadow-[0_8px_24px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.03)]"
            style={{
              transform: 'perspective(800px) rotateY(-2deg) rotateX(1deg)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.03), 0 0 20px rgba(255,255,255,0.06)'
            }}
          >
            <div className="absolute top-2 left-3 text-[#E0DFDF] text-[11px] tracking-wide opacity-90">
              Notion
            </div>
            <div className="absolute inset-0 top-7 px-3 pb-3">
              <div className="w-full h-1.5 bg-[#3B3A3A] rounded-sm mb-2 opacity-60"></div>
              <div className="w-3/4 h-1.5 bg-[#3B3A3A] rounded-sm mb-2 opacity-40"></div>
              <div className="w-5/6 h-1.5 bg-[#3B3A3A] rounded-sm opacity-30"></div>
            </div>
          </div>

          {/* ChatGPT Window - Bottom Left */}
          <div 
            className="absolute bottom-[8%] left-[6%] w-[32%] h-[38%] bg-[#262525] rounded-lg border border-[#3B3A3A]"
            style={{
              transform: 'perspective(800px) rotateY(-1deg) rotateX(-1deg)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.03), 0 0 20px rgba(255,255,255,0.06)'
            }}
          >
            <div className="absolute top-2 left-3 text-[#E0DFDF] text-[11px] tracking-wide opacity-90">
              ChatGPT
            </div>
            <div className="absolute bottom-2 left-3 right-3 h-7 bg-[#1F1E1E] rounded border border-[#3B3A3A] flex items-center px-2">
              <div className="w-1 h-1 bg-[#5E5B5B] animate-pulse"></div>
            </div>
          </div>

          {/* Excel Window - Large Right */}
          <div 
            className="absolute top-[5%] right-[6%] w-[52%] h-[80%] bg-[#262525] rounded-lg border border-[#3B3A3A]"
            style={{
              transform: 'perspective(800px) rotateY(1deg) rotateX(-0.5deg)',
              boxShadow: '0 12px 32px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.03), 0 0 24px rgba(255,255,255,0.08)'
            }}
          >
            <div className="absolute top-2 left-3 text-[#E0DFDF] text-[11px] tracking-wide opacity-90">
              Excel
            </div>
            {/* Grid */}
            <div className="absolute inset-0 top-7 p-3 grid grid-cols-5 grid-rows-6 gap-1.5">
              {Array.from({ length: 30 }).map((_, i) => (
                <div 
                  key={i}
                  className="bg-[#2C2B2B] rounded-sm border border-[#3B3A3A] opacity-60"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Dock Icons */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={i}
              className="w-7 h-7 rounded-lg bg-[#2C2B2B] border border-[#3B3A3A] opacity-40"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
