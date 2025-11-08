import React from 'react';

export function Frame3() {
  return (
    <div 
      className="relative w-full bg-[#1A1919] rounded-lg overflow-hidden flex items-center justify-center"
      style={{
        aspectRatio: '16/9',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)'
      }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Excel-style grid window */}
        <div 
          className="w-[180px] h-[120px] bg-[#0D0D0D] rounded-lg p-3"
          style={{
            border: '1px solid #3B3A3A',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.06), inset 0 2px 4px rgba(0, 0, 0, 0.4)'
          }}
        >
          {/* Grid of cells */}
          <div className="grid grid-cols-4 gap-1.5 h-full">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i}
                className="bg-[#5E5B5B] rounded opacity-60"
                style={{
                  boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.3)'
                }}
              />
            ))}
          </div>
        </div>

        {/* Chat bubble with prompt */}
        <div className="relative">
          <div 
            className="px-4 py-3 bg-[#373131] rounded-2xl max-w-[280px]"
            style={{
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.05)'
            }}
          >
            <span className="text-[#E0DFDF]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px' }}>
              Analyze the screenshot and check for errors
            </span>
          </div>

          {/* Small "..." bubble */}
          <div 
            className="absolute -bottom-3 right-0 px-3 py-2 bg-[#373131] rounded-xl"
            style={{
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.05)'
            }}
          >
            <span className="text-[#E0DFDF]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px' }}>
              …
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
