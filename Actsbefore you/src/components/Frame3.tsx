export function Frame3() {
  return (
    <div className="w-full aspect-video bg-[#1A1919] rounded-lg border border-[#3B3A3A] flex flex-col items-center justify-center overflow-hidden relative gap-6">
      {/* Excel-style Grid Window */}
      <div 
        className="w-48 h-36 bg-[#252424] rounded-lg border border-[#3B3A3A]"
        style={{
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4), inset 0 2px 4px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Window Header */}
        <div className="h-7 border-b border-[#3B3A3A] flex items-center px-2 gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#FF605C] opacity-50"></div>
          <div className="w-2 h-2 rounded-full bg-[#FFBD44] opacity-50"></div>
          <div className="w-2 h-2 rounded-full bg-[#00CA4E] opacity-50"></div>
        </div>
        
        {/* Grid Content */}
        <div className="p-3">
          <div className="grid grid-cols-5 gap-1.5">
            {Array.from({ length: 15 }).map((_, i) => (
              <div 
                key={i} 
                className="h-5 bg-[#5E5B5B] rounded"
                style={{
                  boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.4)',
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Bubble - Main */}
      <div className="flex flex-col items-center gap-3">
        <div 
          className="bg-[#373131] px-5 py-2.5 rounded-2xl border border-[#3B3A3A] max-w-xs"
          style={{
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
          }}
        >
          <div className="text-[#E0DFDF] text-center text-sm tracking-wide leading-relaxed">
            Analyze the screenshot and check for errors
          </div>
        </div>

        {/* Typing indicator bubble */}
        <div 
          className="bg-[#373131] px-4 py-2 rounded-2xl border border-[#3B3A3A] self-end mr-16"
          style={{
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
          }}
        >
          <div className="text-[#E0DFDF] text-sm tracking-wider">
            ...
          </div>
        </div>
      </div>
    </div>
  );
}
