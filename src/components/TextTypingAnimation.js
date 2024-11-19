import React from "react";
import { motion } from "framer-motion";

const TextTypingAnimation = ({ text }) => {
  // Split the text into words
  const words = text.split(" ");

  return (
    <p className="p-0 m-0">
      {words.map((word, index) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: index / 10 // Delay increases for each word
          }}
          key={index}
          className="p-0 m-0"
        >
          {word}{" "}
        </motion.span>
      ))}
    </p>
  );
};

export default TextTypingAnimation;
