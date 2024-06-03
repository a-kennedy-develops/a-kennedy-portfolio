import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { LANDING_TITLES } from "src/utils/constants";
import BlinkingCaret from "./BlinkingCaret";

const TypingText = () => {
  const count = useMotionValue(0);
  const textIndex = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const selectedText = useTransform(
    textIndex,
    (latest) => LANDING_TITLES[latest] || ""
  );
  const displayText = useTransform(rounded, (latest) =>
    selectedText.get().slice(0, latest)
  );
  const updated = useMotionValue(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const startAnimation = () => {
      setIsAnimating(true);
      animate(count, 60, {
        type: "tween",
        duration: 1.5,
        ease: "easeIn",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.85,
        onUpdate(latest) {
          if (updated.get() === true && latest === 60) {
            updated.set(false);
          } else if (updated.get() === false && latest === 0) {
            if (textIndex.get() === LANDING_TITLES.length - 1) {
              textIndex.set(0);
            } else {
              textIndex.set(textIndex.get() + 1);
            }
            updated.set(true);
          }
        },
      });
    };

    if (!isAnimating) {
      startAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <motion.span>{displayText}</motion.span>
      <BlinkingCaret />
    </>
  );
};

export default TypingText;
