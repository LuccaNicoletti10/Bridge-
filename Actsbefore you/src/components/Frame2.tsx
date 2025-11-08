export function Frame2() {
  return (
    <div className="w-full aspect-video bg-[#211F1F] rounded-lg border border-[#3B3A3A] flex flex-col items-center justify-center overflow-hidden relative">
      {/* Glowing Orb */}
      <div className="relative">
        {/* Outer glow layers */}
        <div className="absolute inset-0 -m-16 rounded-full bg-gradient-radial from-[#FFFFFF15] via-[#FFFFFF08] to-transparent blur-2xl"></div>
        <div className="absolute inset-0 -m-12 rounded-full bg-gradient-radial from-[#FFFFFF12] via-[#FFFFFF06] to-transparent blur-xl"></div>
        
        {/* Main orb */}
        <div 
          className="relative w-32 h-32 rounded-full flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))',
            boxShadow: '0 0 40px rgba(255, 255, 255, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
          }}
        >
          {/* Chatbot Face Icon */}
          <svg 
            width="48" 
            height="48" 
            viewBox="0 0 48 48" 
            fill="none" 
            className="text-[#FFFFFFCC]"
          >
            {/* Face circle */}
            <circle 
              cx="24" 
              cy="24" 
              r="18" 
              stroke="currentColor" 
              strokeWidth="1.5"
              fill="none"
            />
            {/* Eyes */}
            <circle cx="18" cy="21" r="2" fill="currentColor" />
            <circle cx="30" cy="21" r="2" fill="currentColor" />
            {/* Smile */}
            <path 
              d="M16 28 Q24 32 32 28" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round"
              fill="none"
            />
            {/* Antenna */}
            <line 
              x1="24" 
              y1="6" 
              x2="24" 
              y2="10" 
              stroke="currentColor" 
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="24" cy="4" r="2" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Chat Bubble */}
      <div className="mt-8 relative">
        <div 
          className="bg-[#373131] px-6 py-3 rounded-full border border-[#3B3A3A]"
          style={{
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
          }}
        >
          <div className="text-[#E0DFDF] tracking-wide" style={{ fontFamily: 'monospace' }}>
            I don't know what he's doing
          </div>
        </div>
        {/* Speech bubble pointer */}
        <div 
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0"
          style={{
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderBottom: '8px solid #373131',
          }}
        ></div>
      </div>
    </div>
  );
}
