export function Frame3() {
  return (
    <div className="relative w-full h-full bg-[#1A1919] rounded-lg overflow-hidden border border-[#3B3A3A] flex flex-col items-center justify-center gap-4 p-4">
      
      {/* Excel-style Grid Window */}
      <div 
        className="w-full bg-[#252424] rounded-lg border border-[#3B3A3A] p-2"
        style={{
          boxShadow: '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.04)'
        }}
      >
        {/* Grid */}
        <div className="grid grid-cols-6 grid-rows-3 gap-1">
          {Array.from({ length: 18 }).map((_, i) => (
            <div 
              key={i}
              className="h-4 bg-[#2C2B2B] rounded border border-[#5E5B5B]"
              style={{
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.4)'
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Chat Bubble */}
      <div className="relative flex flex-col items-center gap-2 w-full">
        <div 
          className="w-full px-4 py-2 bg-[#373131] rounded-2xl text-xs"
          style={{
            boxShadow: '0 4px 16px rgba(0,0,0,0.25), inset 0 1px 1px rgba(255,255,255,0.05)'
          }}
        >
          <p className="text-[#E0DFDF] text-center tracking-wide">
            Analyze the screenshot and check for errors
          </p>
        </div>

        {/* Typing indicator bubble */}
        <div 
          className="self-end px-3 py-1.5 bg-[#2C2B2B] rounded-xl mr-4"
          style={{
            boxShadow: '0 2px 12px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.03)'
          }}
        >
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-[#666] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-1 h-1 bg-[#666] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-1 h-1 bg-[#666] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
