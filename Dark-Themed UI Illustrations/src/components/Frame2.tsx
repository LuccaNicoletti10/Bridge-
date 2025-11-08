export function Frame2() {
  return (
    <div className="relative w-full aspect-video bg-[#211F1F] rounded-lg overflow-hidden border border-[#3B3A3A] flex flex-col items-center justify-center">
      
      {/* Glowing Orb */}
      <div className="relative mb-8">
        {/* Outer glow layers */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0) 70%)',
            width: '180px',
            height: '180px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(24px)'
          }}
        ></div>
        
        {/* Main orb */}
        <div 
          className="relative w-32 h-32 rounded-full flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)',
            boxShadow: '0 0 40px rgba(255,255,255,0.1), inset 0 1px 1px rgba(255,255,255,0.15)'
          }}
        >
          {/* Chatbot Face Icon */}
          <svg 
            width="48" 
            height="48" 
            viewBox="0 0 48 48" 
            fill="none"
            className="opacity-80"
          >
            {/* Head */}
            <rect 
              x="10" 
              y="12" 
              width="28" 
              height="24" 
              rx="4" 
              stroke="#FFFFFFCC" 
              strokeWidth="1.5"
            />
            {/* Antenna */}
            <line 
              x1="24" 
              y1="12" 
              x2="24" 
              y2="6" 
              stroke="#FFFFFFCC" 
              strokeWidth="1.5"
            />
            <circle 
              cx="24" 
              cy="6" 
              r="2" 
              fill="#FFFFFFCC"
            />
            {/* Eyes */}
            <circle 
              cx="18" 
              cy="22" 
              r="2" 
              fill="#FFFFFFCC"
            />
            <circle 
              cx="30" 
              cy="22" 
              r="2" 
              fill="#FFFFFFCC"
            />
            {/* Smile */}
            <path 
              d="M 17 28 Q 24 32 31 28" 
              stroke="#FFFFFFCC" 
              strokeWidth="1.5" 
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Chat Bubble */}
      <div 
        className="relative px-6 py-3 bg-[#373131] rounded-full"
        style={{
          boxShadow: '0 4px 16px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.05)'
        }}
      >
        <p className="text-[#E0DFDF] tracking-wide" style={{ fontFamily: 'monospace' }}>
          I don't know what he's doing
        </p>
      </div>
    </div>
  );
}
