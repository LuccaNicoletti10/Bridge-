export function Frame1() {
  return (
    <div className="relative w-full h-full bg-[#1A1919] rounded-lg overflow-hidden border border-[#3B3A3A] flex items-center justify-center">
      {/* Desktop Window Container */}
      <div className="relative w-[85%] h-[75%] bg-[#1F1E1E] rounded-xl border border-[#3B3A3A] p-4 flex flex-col">
        
        {/* Floating App Windows */}
        <div className="relative flex-1">
          
          {/* Notion Window - Top Left */}
          <div 
            className="absolute top-[8%] left-[6%] w-[35%] h-[42%] bg-[#252424] rounded-lg border border-[#3B3A3A] p-2 transform -rotate-2"
            style={{
              boxShadow: '0 0 20px rgba(255,255,255,0.06), inset 0 1px 1px rgba(255,255,255,0.03)',
              filter: 'blur(0.3px)'
            }}
          >
            <div className="w-full h-1.5 bg-[#2C2B2B] rounded mb-1.5"></div>
            <div className="space-y-1">
              <div className="w-3/4 h-1 bg-[#2C2B2B] rounded"></div>
              <div className="w-full h-1 bg-[#2C2B2B] rounded"></div>
              <div className="w-5/6 h-1 bg-[#2C2B2B] rounded"></div>
            </div>
            <div className="absolute top-1.5 left-1.5 text-[8px] text-[#888] uppercase tracking-wider">Notion</div>
          </div>

          {/* ChatGPT Window - Bottom Left */}
          <div 
            className="absolute bottom-[8%] left-[8%] w-[32%] h-[38%] bg-[#252424] rounded-lg border border-[#3B3A3A] p-2 transform rotate-1"
            style={{
              boxShadow: '0 0 20px rgba(255,255,255,0.06), inset 0 1px 1px rgba(255,255,255,0.03)',
              filter: 'blur(0.2px)'
            }}
          >
            <div className="flex items-center gap-1 mb-1.5">
              <div className="w-1 h-1 rounded-full bg-[#3B3A3A]"></div>
              <div className="flex-1 h-0.5 bg-[#2C2B2B] rounded"></div>
            </div>
            <div className="space-y-1">
              <div className="w-2/3 h-1 bg-[#2C2B2B] rounded"></div>
              <div className="w-full h-1 bg-[#2C2B2B] rounded"></div>
            </div>
            <div className="absolute top-1.5 left-1.5 text-[8px] text-[#888] uppercase tracking-wider">ChatGPT</div>
          </div>

          {/* Excel Window - Large Right */}
          <div 
            className="absolute top-[15%] right-[5%] w-[48%] h-[65%] bg-[#262525] rounded-lg border border-[#3B3A3A] p-2"
            style={{
              boxShadow: '0 0 24px rgba(255,255,255,0.08), inset 0 1px 2px rgba(255,255,255,0.04)'
            }}
          >
            {/* Excel Grid */}
            <div className="w-full h-full grid grid-cols-4 grid-rows-5 gap-0.5">
              {Array.from({ length: 20 }).map((_, i) => (
                <div 
                  key={i} 
                  className="bg-[#2C2B2B] rounded"
                  style={{
                    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.3)'
                  }}
                ></div>
              ))}
            </div>
            <div className="absolute top-1.5 left-1.5 text-[8px] text-[#888] uppercase tracking-wider">Excel</div>
          </div>
        </div>

        {/* Dock Icons */}
        <div className="flex items-center justify-center gap-1.5 pt-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={i}
              className="w-6 h-6 bg-[#2C2B2B] rounded-lg border border-[#3B3A3A] opacity-40"
              style={{
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.4)'
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
