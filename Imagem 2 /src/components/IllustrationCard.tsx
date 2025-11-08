"use client";
import { animate, motion } from "motion/react";
import React, { useEffect } from "react";
import { cn } from "../lib/utils";

export function IllustrationCard() {
  return (
    <Card>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
    </Card>
  );
}

const Skeleton = () => {
  const scale = [1, 1.05, 1];
  const opacity = [0.6, 1, 0.6];
  
  const sequence = [
    [
      ".orb-glow",
      {
        scale,
        opacity,
      },
      { duration: 3 },
    ],
  ];

  useEffect(() => {
    // @ts-ignore
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 0.5,
    });
  }, []);

  return (
    <div className="p-8 overflow-hidden h-full relative flex flex-col items-center justify-center gap-10" style={{ background: '#211F1F' }}>
      {/* Animated glow background */}
      <div className="h-40 w-px absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto z-0 bg-gradient-to-b from-transparent via-white/20 to-transparent">
        <div className="w-32 h-32 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
          <Sparkles />
        </div>
      </div>

      {/* Main Orb Container */}
      <div className="relative flex items-center justify-center z-10">
        <OrbContainer />
      </div>

      {/* Chat Bubble */}
      <ChatBubble />
    </div>
  );
};

const OrbContainer = () => {
  return (
    <div className="relative flex items-center justify-center orb-glow">
      {/* Outer glow layers */}
      <div 
        className="absolute w-[380px] h-[380px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.02) 60%, transparent 100%)',
          filter: 'blur(40px)',
        }}
      ></div>
      <div 
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0.03) 70%, transparent 100%)',
          filter: 'blur(30px)',
        }}
      ></div>
      <div 
        className="absolute w-[240px] h-[240px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
          filter: 'blur(20px)',
        }}
      ></div>
      
      {/* Main Orb */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "h-[200px] w-[200px] rounded-full flex items-center justify-center",
          "bg-[rgba(248,248,248,0.02)]",
          "shadow-[0px_0px_12px_0px_rgba(248,248,248,0.3)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.5)]",
          "border border-white/10"
        )}
        style={{
          background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.03) 70%, rgba(255,255,255,0.01) 100%)',
        }}
      >
        <ChatbotIcon />
      </motion.div>
    </div>
  );
};

const ChatbotIcon = () => {
  return (
    <motion.svg 
      width="90" 
      height="90" 
      viewBox="0 0 90 90" 
      fill="none"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 0.9, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Chat bubble body */}
      <rect 
        x="20" 
        y="27" 
        width="50" 
        height="40" 
        rx="7" 
        stroke="white" 
        strokeWidth="2.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Chat bubble tail */}
      <path 
        d="M 45 67 L 41 74 L 50 67 Z" 
        fill="white"
      />
      
      {/* Antenna */}
      <line 
        x1="45" 
        y1="27" 
        x2="45" 
        y2="18" 
        stroke="white" 
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <circle 
        cx="45" 
        cy="15" 
        r="3" 
        fill="white"
      />
      
      {/* Eyes */}
      <motion.circle 
        cx="34" 
        cy="41" 
        r="2.8" 
        fill="white"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      />
      <motion.circle 
        cx="56" 
        cy="41" 
        r="2.8" 
        fill="white"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      />
      
      {/* Smile */}
      <path 
        d="M 33 51 Q 45 58 57 51" 
        stroke="white" 
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />
    </motion.svg>
  );
};

const ChatBubble = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="relative px-12 py-6 rounded-full"
      style={{
        backgroundColor: '#373131',
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.4)'
      }}
    >
      <p 
        style={{ 
          fontFamily: 'ui-monospace, "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
          fontSize: '26px',
          letterSpacing: '0.015em',
          fontWeight: '400',
          color: '#E0DFDF'
        }}
      >
        I don't know what he's doing
      </p>
    </motion.div>
  );
};

const Sparkles = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random() * 0.6 + 0.4;
  const random = () => Math.random();
  
  return (
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.5, 0],
          }}
          transition={{
            duration: random() * 3 + 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-3xl w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.70)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "font-normal text-neutral-400 max-w-2xl",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[28rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};