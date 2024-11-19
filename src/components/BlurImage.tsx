import * as React from "react";
import { motion } from "framer-motion";

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
  myDuration: number;
}

export const BlurImage: React.FC<BlurImageProps> = ({ src, alt, className, myDuration }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      initial={{ filter: "blur(20px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: myDuration }}
    />
  );
};
