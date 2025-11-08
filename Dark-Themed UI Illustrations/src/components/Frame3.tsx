export function Frame3() {
  return (
    <div className="relative w-full aspect-video bg-[#1A1919] rounded-lg overflow-hidden border border-[#3B3A3A] flex flex-col items-center justify-center gap-6">
      
      {/* Excel-style Grid Window */}
      <div 
        className="w-[60%] bg-[#252424] rounded-lg border border-[#3B3A3A] p-3"
        style={{
          boxShadow: '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.04)'
        }}
      >
        {/* Grid */}
        <div className="grid grid-cols-6 grid-rows-4 gap-1.5">
          {Array.from({ length: 24 }).map((_, i) => (
            <div 
              key={i}
              className="h-6 bg-[#2C2B2B] rounded border border-[#5E5B5B]"
              style={{
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.4)'
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Chat Bubble */}
      <div className="relative flex flex-col items-center gap-3 w-[75%]">
        <div 
          className="w-full px-5 py-3 bg-[#373131] rounded-2xl"
          style={{
            boxShadow: '0 4px 16px rgba(0,0,0,0.25), inset 0 1px 1px rgba(255,255,255,0.05)'
          }}
        >
          <p className="text-[#E0DFDF] text-center tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
            Analyze the screenshot and check for errors
          </p>
        </div>

        {/* Typing indicator bubble */}
        <div 
          className="self-end px-4 py-2 bg-[#2C2B2B] rounded-xl mr-8"
          style={{
            boxShadow: '0 2px 12px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.03)'
          }}
        >
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-[#666] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-1.5 h-1.5 bg-[#666] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-1.5 h-1.5 bg-[#666] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
