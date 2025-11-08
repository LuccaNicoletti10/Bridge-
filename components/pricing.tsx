"use client";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { tiers } from "@/constants/tier";
import { Button } from "./button";

export function Pricing() {
  return (
    <div className="relative">
      <div className="mx-auto mt-4 md:mt-20 grid relative z-20 grid-cols-1 gap-8 items-stretch md:grid-cols-2 max-w-5xl">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={cn(
              tier.featured
                ? "relative bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)]  shadow-2xl"
                : " bg-white dark:bg-black",
              "rounded-lg px-6 py-8 sm:mx-8 lg:mx-0  h-full flex flex-col justify-between"
            )}
          >
            <div className="">
              <h3
                id={tier.id}
                className={cn(
                  tier.featured
                    ? "text-white"
                    : "text-muted dark:text-muted-dark",
                  "text-2xl font-bold leading-7"
                )}
              >
                {tier.name}
              </h3>
              <p
                className={cn(
                  tier.featured
                    ? "text-neutral-300"
                    : "text-neutral-600 dark:text-neutral-300",
                  "mt-4 text-sm leading-7"
                )}
              >
                {tier.description}
              </p>
              <ul
                role="list"
                className={cn(
                  tier.featured
                    ? "text-neutral-300"
                    : "text-neutral-600 dark:text-neutral-300",
                  "mt-8 space-y-3 text-sm leading-6 sm:mt-10"
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <IconCircleCheckFilled
                      className={cn(
                        tier.featured
                          ? "text-white"
                          : "text-muted dark:text-muted-dark",
                        "h-6 w-5 flex-none"
                      )}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Button
                onClick={tier.onClick}
                aria-describedby={tier.id}
                className={cn(
                  tier.featured
                    ? "bg-white text-black shadow-sm hover:bg-white/90 focus-visible:outline-white"
                    : "",
                  "mt-8 rounded-full py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full"
                )}
              >
                {tier.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
