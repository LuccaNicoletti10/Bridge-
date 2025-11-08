"use client";
import React from "react";
import { UnderstandsHowYouWork } from "../understands-how-you-work/UnderstandsHowYouWork";

export const SkeletonOne = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-start">
      <div className="scale-[0.6] w-full h-full flex items-center justify-start pl-0">
        <UnderstandsHowYouWork />
      </div>
    </div>
  );
};
