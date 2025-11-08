import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";

export const Footer = () => {
  const links = [
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  const legal = [
    {
      name: "Privacy Policy",
      href: "#",
    },
    {
      name: "Terms of Service",
      href: "#",
    },
    {
      name: "Refund Policy",
      href: "#",
    },
  ];
  const socials = [
    {
      name: "Twitter",
      href: "https://x.com/Lucca_Nf",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/lucca-nicoletti-8b450026a/",
    },
  ];
  return (
    <div className="relative py-20">
      <p className="text-center text-5xl md:text-9xl lg:text-[18rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
        BRIDGE
      </p>
    </div>
  );
};
