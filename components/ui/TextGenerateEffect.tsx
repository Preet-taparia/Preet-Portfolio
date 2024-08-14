// components/ui/TextGenerateEffect.tsx

"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const lettersArray = words.split("");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope, animate]);

  const renderLetters = () => {
    return (
      <motion.div ref={scope}>
        {lettersArray.map((letter, idx) => (
          <motion.span
            key={letter + idx}
            className={`${
              idx > 5 ? "text-purple" : "dark:text-white text-black"
            } opacity-0`}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-3">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderLetters()}
        </div>
      </div>
    </div>
  );
};
