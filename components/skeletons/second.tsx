"use client";
import React from "react";
import { BridgeTwoSecondDemo } from "../acts-before-you/BridgeTwoSecondDemo";

export const SkeletonTwo = () => {
  return (
    <div className="relative h-full w-full">
      <div className="scale-[0.5] origin-center w-full h-full flex items-center justify-center">
        <BridgeTwoSecondDemo />
      </div>
    </div>
  );
};
