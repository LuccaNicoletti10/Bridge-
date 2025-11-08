import React from 'react';

export function Frame1() {
  return (
    <div 
      className="relative w-full bg-[#1A1919] rounded-lg overflow-hidden"
      style={{
        aspectRatio: '16/9',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)'
      }}
    >
      {/* Desktop window mockup */}
      <div 
        className="absolute inset-4 bg-[#0D0D0D] rounded-xl"
        style={{
          border: '1px solid #3B3A3A'
        }}
      >
        {/* App windows container */}
        <div className="relative w-full h-[calc(100%-50px)] p-6">
          
          {/* Notion window - top left */}
          <div 
            className="absolute top-8 left-8 w-[140px] h-[100px] bg-[#1F1E1E] rounded-lg"
            style={{
              border: '1px solid #3B3A3A',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.06), inset 0 2px 4px rgba(0, 0, 0, 0.3)',
              transform: 'perspective(800px) rotateY(-2deg) rotateX(2deg)'
            }}
          >
            <div className="p-3">
              <div className="text-[#E0DFDF] opacity-80" style={{ fontSize: '11px' }}>Notion</div>
            </div>
          </div>

          {/* ChatGPT window - bottom left */}
          <div 
            className="absolute bottom-8 left-8 w-[140px] h-[100px] bg-[#1F1E1E] rounded-lg"
            style={{
              border: '1px solid #3B3A3A',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.06), inset 0 2px 4px rgba(0, 0, 0, 0.3)',
              transform: 'perspective(800px) rotateY(-2deg) rotateX(-2deg)'
            }}
          >
            <div className="p-3">
              <div className="text-[#E0DFDF] opacity-80" style={{ fontSize: '11px' }}>ChatGPT</div>
            </div>
          </div>

          {/* Excel window - large overlapping right */}
          <div 
            className="absolute top-6 right-6 w-[200px] h-[160px] bg-[#1F1E1E] rounded-lg"
            style={{
              border: '1px solid #3B3A3A',
              boxShadow: '0 0 24px rgba(255, 255, 255, 0.08), inset 0 2px 4px rgba(0, 0, 0, 0.3)',
              transform: 'perspective(800px) rotateY(2deg)'
            }}
          >
            <div className="p-3">
              <div className="text-[#E0DFDF] opacity-80" style={{ fontSize: '11px' }}>Excel</div>
              {/* Grid pattern suggestion */}
              <div className="mt-3 space-y-1">
                <div className="h-1.5 bg-[#2C2B2B] rounded opacity-60"></div>
                <div className="h-1.5 bg-[#2C2B2B] rounded opacity-60 w-4/5"></div>
                <div className="h-1.5 bg-[#2C2B2B] rounded opacity-60 w-3/5"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Dock icons */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="w-7 h-7 bg-[#2C2B2B] rounded-lg opacity-40"
              style={{
                border: '1px solid #3B3A3A'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
