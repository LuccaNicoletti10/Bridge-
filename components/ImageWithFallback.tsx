"use client";
import Image from "next/image";
import React, { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  width?: number;
  height?: number;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = "",
  fallbackSrc = "/placeholder.png",
  width = 48,
  height = 48,
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => {
        if (imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
    />
  );
};
