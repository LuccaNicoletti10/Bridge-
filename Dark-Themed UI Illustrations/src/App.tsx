"use client";
import { motion } from "motion/react";
import { cn } from "./lib/utils";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4A4A4A] via-[#555555] to-[#606060] flex items-center justify-center p-8">
      <div className="w-full max-w-[850px]">
        <Card>
          <CardSkeletonContainer>
            <PromptScene />
          </CardSkeletonContainer>
        </Card>
      </div>
    </div>
  );
}

const PromptScene = () => {
  return (
    <div className="p-8 overflow-hidden h-full relative flex flex-col items-center justify-center gap-6">
      {/* Grid/Table Window - Screenshot */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[680px] bg-[rgba(60,60,60,0.5)] rounded-xl border border-[rgba(120,120,120,0.5)] p-6 backdrop-blur-sm"
        style={{
          boxShadow:
            "0 12px 40px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.15)",
        }}
      >
        {/* Window Header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[rgba(120,120,120,0.3)]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
          </div>
          <div className="flex-1 text-center">
            <div className="inline-block px-4 py-0.5 bg-[rgba(94,94,94,0.5)] rounded text-[10px] text-[#B0B0B0]">
              Spreadsheet.xlsx
            </div>
          </div>
        </div>

        {/* Spreadsheet Grid */}
        <div className="space-y-3">
          {/* Header Row */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-5 bg-[rgba(80,80,80,0.6)] rounded flex items-center justify-center">
              <span className="text-[9px] text-[#A0A0A0]">
                #
              </span>
            </div>
            {["A", "B", "C", "D", "E"].map((letter) => (
              <div
                key={letter}
                className="flex-1 h-5 bg-[rgba(80,80,80,0.6)] rounded flex items-center justify-center"
              >
                <span className="text-[9px] text-[#A0A0A0]">
                  {letter}
                </span>
              </div>
            ))}
          </div>

          {/* Data Rows */}
          {Array.from({ length: 6 }).map((_, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: rowIndex * 0.08,
              }}
            >
              {/* Row number */}
              <div className="w-8 h-5 bg-[rgba(80,80,80,0.6)] rounded flex items-center justify-center">
                <span className="text-[9px] text-[#A0A0A0]">
                  {rowIndex + 1}
                </span>
              </div>

              {/* First column - wider with more content */}
              <div
                className="flex-1 h-5 bg-[rgba(94,94,94,0.8)] rounded px-2 flex items-center"
                style={{
                  boxShadow: "inset 0 1px 3px rgba(0,0,0,0.4)",
                }}
              >
                <div className="w-3/4 h-1.5 bg-[rgba(140,140,140,0.6)] rounded"></div>
              </div>

              {/* Other columns */}
              {Array.from({ length: 4 }).map((_, colIndex) => (
                <div
                  key={colIndex}
                  className="flex-1 h-5 bg-[rgba(94,94,94,0.8)] rounded px-1.5 flex items-center"
                  style={{
                    boxShadow:
                      "inset 0 1px 3px rgba(0,0,0,0.4)",
                  }}
                >
                  <div className="w-2/3 h-1.5 bg-[rgba(140,140,140,0.6)] rounded"></div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Main Chat Bubble - Smaller */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative w-[380px] bg-[rgba(107,101,96,0.95)] rounded-[24px] px-6 py-4 backdrop-blur-md"
        style={{
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.1)",
          borderBottomLeftRadius: "6px",
        }}
      >
        <p
          className="text-[#D4D0CB]"
          style={{
            fontSize: "19px",
            lineHeight: "1.4",
            fontWeight: "400",
            letterSpacing: "-0.01em",
          }}
        >
          Analyze the screenshot
          <br />
          and check for errors
        </p>

        {/* Subtle glow effect */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-[rgba(107,101,96,0.4)] blur-xl -z-10"></div>
      </motion.div>

      {/* Typing Indicator Bubble - More Visible */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="self-end mr-12 bg-[rgba(100,95,92,0.95)] rounded-[18px] px-5 py-3 backdrop-blur-md"
        style={{
          boxShadow:
            "0 6px 24px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.08)",
          borderBottomRightRadius: "6px",
        }}
      >
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-[#BBB6B1] rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
              style={{
                boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
              }}
            ></motion.div>
          ))}
        </div>
      </motion.div>

      {/* Ambient particles */}
      <Sparkles />
    </div>
  );
};

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.3, 0],
          }}
          transition={{
            duration: random() * 3 + 4,
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
          className="inline-block bg-white opacity-40"
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
        "max-w-4xl w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-transparent shadow-[2px_4px_16px_0px_rgba(0,0,0,0.2)_inset] group",
        className,
      )}
    >
      {children}
    </div>
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
        "h-[28rem] md:h-[32rem] rounded-xl z-40",
        className,
        "bg-transparent",
      )}
    >
      {children}
    </div>
  );
};