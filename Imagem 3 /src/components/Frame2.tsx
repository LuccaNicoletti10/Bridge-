import React from 'react';

export function Frame2() {
  return (
    <div 
      className="relative w-full bg-[#211F1F] rounded-lg overflow-hidden flex items-center justify-center"
      style={{
        aspectRatio: '16/9',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)'
      }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Glowing orb */}
        <div className="relative flex items-center justify-center">
          {/* Outer glow layers */}
          <div 
            className="absolute w-[140px] h-[140px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 70%)',
              filter: 'blur(20px)'
            }}
          />
          <div 
            className="absolute w-[120px] h-[120px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 60%, transparent 80%)',
              filter: 'blur(15px)'
            }}
          />
          
          {/* Main orb */}
          <div 
            className="relative w-[100px] h-[100px] rounded-full flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 0 30px rgba(255, 255, 255, 0.1), inset 0 2px 8px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Chatbot face icon */}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Head circle */}
              <circle cx="24" cy="24" r="16" stroke="#FFFFFFCC" strokeWidth="1.5" />
              
              {/* Eyes */}
              <circle cx="18" cy="21" r="2" fill="#FFFFFFCC" />
              <circle cx="30" cy="21" r="2" fill="#FFFFFFCC" />
              
              {/* Smile */}
              <path 
                d="M 16 28 Q 24 32, 32 28" 
                stroke="#FFFFFFCC" 
                strokeWidth="1.5" 
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Chat bubble */}
        <div 
          className="relative px-5 py-3 bg-[#373131] rounded-full"
          style={{
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.05)'
          }}
        >
          <span className="text-[#E0DFDF]" style={{ fontFamily: 'monospace', fontSize: '12px' }}>
            I don't know what he's doing
          </span>
        </div>
      </div>
    </div>
  );
}
