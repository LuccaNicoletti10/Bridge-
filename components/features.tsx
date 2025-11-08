import React from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { cn } from "@/lib/utils";
import { GridLineHorizontal, GridLineVertical } from "./grid-lines";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { SkeletonFour } from "./skeletons/fourth";

export const Features = () => {
  const features = [
    {
      title: "Understands How You Work",
      description:
        "Bridge continuously observes your screen, apps, and interactions to map how you work — quietly and without disruption. It sees what you do, learns your patterns, and adapts to your pace.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b border-r dark:border-neutral-800 lg:min-h-[600px]",
    },
    {
      title: "Acts Before You Ask",
      description:
        "By comparing live activity with your cognitive profile, Bridge anticipates your next step. It proactively offers shortcuts, corrections, and reminders before you even ask.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800 lg:min-h-[600px]",
    },
    {
      title: "Filters What's Meaningful",
      description:
        "Not everything on your screen matters. Bridge filters out redundant frames, static content, and unimportant clicks — focusing AI power where it counts.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-r dark:border-neutral-800",
    },
    {
      title: "Builds Your Cognitive Profile",
      description:
        "Bridge learns how you think, not just what you do. It tracks your friction points, decisions, and creative flows to form an evolving cognitive model of you.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 overflow-hidden">
      <Heading as="h2">The features we offer are what will help you move faster than ever</Heading>
      <Subheading className="text-center ">
        From contextual memory to proactive task automation, Bridge is packed with tools that understand your workflow, learn from your habits, and act before you ask.
      </Subheading>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="mt-2 h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
        <GridLineHorizontal
          style={{
            top: 0,
            left: "-10%",
            width: "120%",
          }}
        />

        <GridLineHorizontal
          style={{
            bottom: 0,
            left: "-10%",
            width: "120%",
          }}
        />

        <GridLineVertical
          style={{
            top: "-10%",
            right: 0,
            height: "120%",
          }}
        />
        <GridLineVertical
          style={{
            top: "-10%",
            left: 0,
            height: "120%",
          }}
        />
      </div>
    </div>
  );
};

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-2 sm:p-4 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Heading as="h3" size="sm" className="text-left">
      {children}
    </Heading>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Subheading className="text-left max-w-md mx-0 lg:text-sm mt-2 mb-2">
      {children}
    </Subheading>
  );
};
