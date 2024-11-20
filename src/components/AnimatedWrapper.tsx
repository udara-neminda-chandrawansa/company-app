import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedWrapper = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: index * 0.2, // Add staggered animation for each child
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedWrapper;
