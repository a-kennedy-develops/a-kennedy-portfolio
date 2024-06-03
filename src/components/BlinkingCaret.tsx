import { motion } from "framer-motion";

const BlinkingCaret = () => {
  return (
    <motion.span
      animate={{ opacity: [0, 0, 1, 1] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 1],
      }}
      className="text-[75%] text-electric-yellow"
      aria-hidden="true"
    >
      |
    </motion.span>
  );
};

export default BlinkingCaret;
