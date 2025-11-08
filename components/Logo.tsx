"use client";
import Link from "next/link";
import React from "react";
import { ImageWithFallback } from "./ImageWithFallback";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 px-2 py-1 relative z-20"
    >
      <ImageWithFallback
        src="/bridge-logo.png"
        alt="Bridge Logo"
        className="w-12 h-12 object-contain filter brightness-0"
      />
      <span className="font-medium text-black dark:text-white">Bridge</span>
    </Link>
  );
};
