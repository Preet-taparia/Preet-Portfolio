// components/ui/card-hover-effect.tsx

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: { title: string }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 py-6 md:py-8 justify-items-center items-center", // Ensure items are centered
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full max-w-xs" // Set max width for card
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full block rounded-3xl"
                style={{ backgroundColor: getRandomColor() }}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.4, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full px-6 py-4 sm:px-8 sm:py-6 lg:p-8 overflow-hidden bg-black/50 hover:bg-black-0 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 transition-transform duration-300 ease-in-out transform hover:scale-105 max-w-xs ", // Ensure max width and center alignment
        className
      )}
    >
      <div className="flex items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-[12px] sm:text-sm md:text-base xl:text-lg text-zinc-100 font-bold tracking-wide text-center",
        className
      )}
    >
      {children}
    </h4>
  );
};
