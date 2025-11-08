import { cn } from "@/lib/utils";
import {
  IconLock,
  IconApps,
  IconBolt,
  IconMoon,
  IconApi,
  IconEye,
  IconBrain,
  IconUserScan,
} from "@tabler/icons-react";

export const GridFeatures = () => {
  const features = [
    {
      title: "Private and Local-First",
      description:
        "Everything starts and stays on your device. Bridge is built local-first, meaning screen capture, filtering, and inference all happen privately — no cloud syncing, no hidden data pipelines.",
      icon: <IconLock />,
    },
    {
      title: "Cross-App Context",
      description:
        "Bridge understands what's happening across apps — Notion, Excel, Slack, Figma, Gmail — so help always arrives in the right place, at the right time.",
      icon: <IconApps />,
    },
    {
      title: "Automates Your Workflow",
      description:
        "Bridge adapts to your daily patterns and builds automations that match your natural rhythm. It handles repetitive steps while keeping you in control.",
      icon: <IconBolt />,
    },
    {
      title: "Works While You Sleep",
      description: "Bridge reviews your previous day, identifies bottlenecks, and reorganizes workflows overnight — preparing you for a cleaner start the next morning.",
      icon: <IconMoon />,
    },
    {
      title: "Future-Ready Context API",
      description: "Bridge will soon power the universal context layer — an API any developer can plug into to make their systems truly context-aware.",
      icon: <IconApi />,
    },
    {
      title: "Visual Input",
      description:
        "Captures visual context from apps, tabs, and actions to understand what you're working on in real time.",
      icon: <IconEye />,
    },
    {
      title: "Behavioral Mapping",
      description:
        "Understands your decision patterns and focus to anticipate what you need next.",
      icon: <IconBrain />,
    },
    {
      title: "Cognitive Profiling",
      description: "Builds a model of how you think and create, evolving with every task you complete.",
      icon: <IconUserScan />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200" />
        <span className="group-hover:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted dark:text-muted-dark max-w-xs mx-auto relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
