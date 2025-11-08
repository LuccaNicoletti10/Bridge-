"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface FigmaImageProps {
  imagePath: string;
  alt?: string;
}

export const FigmaImage = ({ 
  imagePath, 
  alt = "Figma design illustration" 
}: FigmaImageProps) => {
  return (
    <div className="relative w-full h-full bg-[#1A1919] rounded-lg overflow-hidden border border-[#3B3A3A] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full h-full rounded-lg overflow-hidden"
      >
        <Image
          src={imagePath}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        
        {/* Subtle overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
};
