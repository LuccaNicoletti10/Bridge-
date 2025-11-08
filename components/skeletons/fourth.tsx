import React from "react";
import { Compare } from "@/components/ui/compare";

export const SkeletonFour = () => {
  return (
    <div className="h-full flex items-center justify-center relative bg-transparent">
      <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[200px] w-[160px] md:h-[300px] md:w-[400px]"
        slideMode="hover"
        autoplay={true}
        autoplayDuration={3000}
      />
    </div>
  );
};
