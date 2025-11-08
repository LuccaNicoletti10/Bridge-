export function Frame3LimitedByPrompts() {
  return (
    <div className="relative w-full aspect-video bg-[#1A1919] rounded-lg border border-[#3B3A3A] overflow-hidden flex flex-col items-center justify-center gap-6 px-8">
      {/* Excel Grid Window */}
      <div 
        className="relative w-48 h-36 bg-[#262525] rounded-lg border border-[#3B3A3A]"
        style={{
          boxShadow: '0 12px 24px rgba(0,0,0,0.3), inset 0 2px 4px rgba(0,0,0,0.4)'
        }}
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-[#2C2B2B] border-b border-[#3B3A3A] rounded-t-lg flex items-center px-2">
          <div className="text-[#808080] text-[9px] tracking-wide">Sheet1</div>
        </div>

        {/* Grid */}
        <div className="absolute inset-0 top-6 p-2 grid grid-cols-4 grid-rows-4 gap-1">
          {Array.from({ length: 16 }).map((_, i) => (
            <div 
              key={i}
              className="bg-[#1F1E1E] rounded border border-[#5E5B5B]"
              style={{
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.3)'
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Chat Bubble */}
      <div 
        className="relative px-4 py-3 bg-[#373131] rounded-2xl border border-[#3B3A3A] max-w-[280px]"
        style={{
          boxShadow: '0 8px 24px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.02)'
        }}
      >
        <p className="text-[#E0DFDF] text-[12px] leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          Analyze the screenshot and check for errors
        </p>
      </div>

      {/* Typing Indicator Bubble */}
      <div 
        className="relative self-end mr-8 px-4 py-2.5 bg-[#2C2B2B] rounded-2xl border border-[#3B3A3A]"
        style={{
          boxShadow: '0 6px 16px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.02)'
        }}
      >
        <div className="flex gap-1.5">
          <div 
            className="w-1.5 h-1.5 rounded-full bg-[#5E5B5B]"
            style={{
              animation: 'pulse 1.4s ease-in-out infinite'
            }}
          ></div>
          <div 
            className="w-1.5 h-1.5 rounded-full bg-[#5E5B5B]"
            style={{
              animation: 'pulse 1.4s ease-in-out 0.2s infinite'
            }}
          ></div>
          <div 
            className="w-1.5 h-1.5 rounded-full bg-[#5E5B5B]"
            style={{
              animation: 'pulse 1.4s ease-in-out 0.4s infinite'
            }}
          ></div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 60%, 100% {
            opacity: 0.4;
          }
          30% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
