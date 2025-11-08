"use client";
import { animate, motion } from "motion/react";
import React, { useEffect } from "react";
import {
  Folder,
  Globe,
  Mail,
  Calendar,
  Image,
  Music,
  Settings,
} from "lucide-react";

export default function App() {
  const scale = [1, 1.05, 1];
  const transform = [
    "translateY(0px)",
    "translateY(-8px)",
    "translateY(0px)",
  ];
  const sequence = [
    [
      ".window-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".window-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".window-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    // @ts-ignore
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#141313] flex items-center justify-center p-8">
      <div className="p-4 overflow-hidden h-full relative flex items-center justify-center w-full max-w-[1600px]">
        {/* Desktop window */}
        <div
          className="relative w-full bg-[#3D3C3B] rounded-2xl p-6"
          style={{
            aspectRatio: "16/10",
            border: "1px solid rgba(90, 89, 88, 0.5)",
            boxShadow:
              "0 8px 32px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
          }}
        >
          {/* Browser chrome */}
          <div className="flex items-center justify-between mb-8 px-3">
            {/* Left side - dots and address bar */}
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ED6A5E]" />
                <div className="w-3 h-3 rounded-full bg-[#F4BF4F]" />
                <div className="w-3 h-3 rounded-full bg-[#61C554]" />
              </div>
              <div
                className="w-40 h-6 bg-[#2C2B2B] rounded flex items-center px-3"
                style={{
                  border: "1px solid #5A5958",
                  boxShadow:
                    "inset 0 1px 2px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#666] mr-2" />
                <div className="h-0.5 w-20 bg-[#666] rounded" />
              </div>
            </div>

            {/* Right side - controls */}
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 flex items-center justify-center">
                <div className="w-2.5 h-2.5 border border-[#666] rounded-sm" />
              </div>
              <div className="w-5 h-5 flex items-center justify-center">
                <div className="w-3 h-0.5 bg-[#666] rounded" />
              </div>
              <div
                className="w-20 h-6 bg-[#2C2B2B] rounded"
                style={{ border: "1px solid #5A5958" }}
              />
            </div>
          </div>

          {/* Main content area */}
          <div className="relative h-[calc(100%-120px)] px-6">
            {/* Notion window - top left */}
            <motion.div
              className="window-1 absolute top-0 left-12 w-[280px] h-[220px] bg-gradient-to-br from-[#403F3E] to-[#353433] rounded-xl overflow-hidden"
              style={{
                border: "1px solid #5A5958",
                boxShadow:
                  "0 8px 24px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 255, 255, 0.03) inset",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Window header */}
              <div
                className="h-8 bg-[#2E2D2C] flex items-center px-3 gap-2"
                style={{ borderBottom: "1px solid #5A5958" }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#ED6A5E] opacity-60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F4BF4F] opacity-60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#61C554] opacity-60" />
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  {/* Notion icon */}
                  <div className="w-7 h-7 bg-white rounded flex items-center justify-center">
                    <span className="text-xs">N</span>
                  </div>
                  <span className="text-[#D4D3D2] text-sm">
                    Notion
                  </span>
                </div>

                {/* Content lines */}
                <div className="space-y-3">
                  <div className="h-2 bg-[#5A5958] rounded opacity-70 w-full" />
                  <div className="h-2 bg-[#5A5958] rounded opacity-60 w-4/5" />
                  <div className="h-2 bg-[#5A5958] rounded opacity-50 w-3/5" />
                  <div className="h-2 bg-[#5A5958] rounded opacity-40 w-4/5" />
                  <div className="h-2 bg-[#5A5958] rounded opacity-30 w-2/3" />
                </div>
              </div>
            </motion.div>

            {/* ChatGPT window - bottom left */}
            <motion.div
              className="window-2 absolute bottom-0 left-12 w-[280px] h-[190px] bg-gradient-to-br from-[#403F3E] to-[#353433] rounded-xl overflow-hidden"
              style={{
                border: "1px solid #5A5958",
                boxShadow:
                  "0 8px 24px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 255, 255, 0.03) inset",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Window header */}
              <div
                className="h-8 bg-[#2E2D2C] flex items-center px-3 gap-2"
                style={{ borderBottom: "1px solid #5A5958" }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#ED6A5E] opacity-60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F4BF4F] opacity-60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#61C554] opacity-60" />
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  {/* ChatGPT icon */}
                  <div className="w-7 h-7">
                    <OpenAILogo className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-[#D4D3D2] text-sm">
                    ChatGPT
                  </span>
                </div>

                {/* Chat bubbles */}
                <div className="space-y-3 mt-4">
                  <div className="h-2.5 bg-[#5A5958] rounded-full opacity-60 w-3/4" />
                  <div className="h-2.5 bg-[#10A37F] rounded-full opacity-70 w-2/3 ml-auto" />
                  <div className="h-2.5 bg-[#5A5958] rounded-full opacity-60 w-4/5" />
                </div>
              </div>
            </motion.div>

            {/* Excel window - right side, larger */}
            <motion.div
              className="window-3 absolute top-8 right-12 w-[520px] h-[380px] bg-gradient-to-br from-[#403F3E] to-[#353433] rounded-xl overflow-hidden"
              style={{
                border: "1px solid #5A5958",
                boxShadow:
                  "0 12px 32px rgba(0, 0, 0, 0.5), 0 0 24px rgba(255, 255, 255, 0.04) inset",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Window header */}
              <div
                className="h-8 bg-[#2E2D2C] flex items-center px-3 gap-2"
                style={{ borderBottom: "1px solid #5A5958" }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#ED6A5E] opacity-60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F4BF4F] opacity-60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#61C554] opacity-60" />
              </div>

              <div className="p-5">
                {/* Excel header */}
                <div className="flex items-center gap-3 mb-5">
                  {/* Excel icon */}
                  <div className="w-7 h-7 bg-[#1D6F42] rounded flex items-center justify-center">
                    <span className="text-xs text-white">
                      X
                    </span>
                  </div>
                  <span className="text-[#D4D3D2] text-sm">
                    Excel
                  </span>
                </div>

                {/* Excel toolbar */}
                <div className="flex gap-2 mb-4">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="w-7 h-4 bg-[#5A5958] rounded opacity-50"
                    />
                  ))}
                </div>

                {/* Excel grid rows */}
                <div className="space-y-3">
                  {[...Array(8)].map((_, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="flex items-center gap-3"
                    >
                      {/* Row number */}
                      <div className="w-5 text-[#888] text-[9px] text-center">
                        {rowIndex + 1}
                      </div>
                      {/* Cells */}
                      <div className="flex-1 h-5 bg-[#5A5958] rounded opacity-40" />
                      <div className="w-16 h-5 bg-[#5A5958] rounded opacity-50" />
                      <div className="w-16 h-5 bg-[#5A5958] rounded opacity-50" />
                      <div className="w-16 h-5 bg-[#5A5958] rounded opacity-50" />
                      <div className="w-16 h-5 bg-[#5A5958] rounded opacity-50" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Dock icons at bottom */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 p-3 bg-[#2C2B2B]/50 rounded-2xl backdrop-blur-xl"
            style={{
              border: "1px solid rgba(90, 89, 88, 0.3)",
            }}
          >
            {[...Array(7)].map((_, i) => (
              <Container key={i} className="w-10 h-10">
                {i === 0 && <Folder className="w-4 h-4" />}
                {i === 1 && <Globe className="w-4 h-4" />}
                {i === 2 && <Mail className="w-4 h-4" />}
                {i === 3 && <Calendar className="w-4 h-4" />}
                {i === 4 && <Image className="w-4 h-4" />}
                {i === 5 && <Music className="w-4 h-4" />}
                {i === 6 && <Settings className="w-4 h-4" />}
              </Container>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={
        className +
        " rounded-lg flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]"
      }
    >
      {children}
    </div>
  );
};

export const OpenAILogo = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <svg
      className={className}
      width="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.153 11.46a6.888 6.888 0 0 0-.608-5.73 7.117 7.117 0 0 0-3.29-2.93 7.238 7.238 0 0 0-4.41-.454 7.065 7.065 0 0 0-2.41-1.742A7.15 7.15 0 0 0 12.514 0a7.216 7.216 0 0 0-4.217 1.346 7.061 7.061 0 0 0-2.603 3.539 7.12 7.12 0 0 0-2.734 1.188A7.012 7.012 0 0 0 .966 8.268a6.979 6.979 0 0 0 .88 8.273 6.89 6.89 0 0 0 .607 5.729 7.117 7.117 0 0 0 3.29 2.93 7.238 7.238 0 0 0 4.41.454 7.061 7.061 0 0 0 2.409 1.742c.92.404 1.916.61 2.923.604a7.215 7.215 0 0 0 4.22-1.345 7.06 7.06 0 0 0 2.605-3.543 7.116 7.116 0 0 0 2.734-1.187 7.01 7.01 0 0 0 1.993-2.196 6.978 6.978 0 0 0-.884-8.27Zm-10.61 14.71c-1.412 0-2.505-.428-3.46-1.215.043-.023.119-.064.168-.094l5.65-3.22a.911.911 0 0 0 .464-.793v-7.86l2.389 1.36a.087.087 0 0 1 .046.065v6.508c0 2.952-2.491 5.248-5.257 5.248ZM4.062 21.354a5.17 5.17 0 0 1-.635-3.516c.042.025.115.07.168.1l5.65 3.22a.928.928 0 0 0 .928 0l6.898-3.93v2.72a.083.083 0 0 1-.034.072l-5.711 3.255a5.386 5.386 0 0 1-4.035.522 5.315 5.315 0 0 1-3.23-2.443ZM2.573 9.184a5.283 5.283 0 0 1 2.768-2.301V13.515a.895.895 0 0 0 .464.793l6.897 3.93-2.388 1.36a.087.087 0 0 1-.08.008L4.52 16.349a5.262 5.262 0 0 1-2.475-3.185 5.192 5.192 0 0 1 .527-3.98Zm19.623 4.506-6.898-3.93 2.388-1.36a.087.087 0 0 1 .08-.008l5.713 3.255a5.28 5.28 0 0 1 2.054 2.118 5.19 5.19 0 0 1-.488 5.608 5.314 5.314 0 0 1-2.39 1.742v-6.633a.896.896 0 0 0-.459-.792Zm2.377-3.533a7.973 7.973 0 0 0-.168-.099l-5.65-3.22a.93.93 0 0 0-.928 0l-6.898 3.93V8.046a.083.083 0 0 1 .034-.072l5.712-3.251a5.375 5.375 0 0 1 5.698.241 5.262 5.262 0 0 1 1.865 2.28c.39.92.506 1.93.335 2.913ZM9.631 15.009l-2.39-1.36a.083.083 0 0 1-.046-.065V7.075c.001-.997.29-1.973.832-2.814a5.297 5.297 0 0 1 2.231-1.935 5.382 5.382 0 0 1 5.659.72 4.89 4.89 0 0 0-.168.093l-5.65 3.22a.913.913 0 0 0-.465.793l-.003 7.857Zm1.297-2.76L14 10.5l3.072 1.75v3.5L14 17.499l-3.072-1.75v-3.5Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};