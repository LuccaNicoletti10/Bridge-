"use client";
import React from "react";
import { BridgeMockup } from "../bridge-mockup/BridgeMockup";

export const SkeletonThree = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-full pointer-events-none z-40" />
      <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] h-full z-20 overflow-hidden">
        <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px] h-full overflow-hidden">
          <div className="w-full h-full flex items-center justify-center scale-[0.45] md:scale-[0.65] origin-center">
            <BridgeMockup />
          </div>
        </div>
      </div>
    </div>
  );
};
