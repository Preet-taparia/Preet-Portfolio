// components/ui/card-hover-effect.tsx

import { cn } from "@/lib/utils";
import { useState } from "react";
import getIcon from "./Icons";

export const HoverEffect = ({
  items,
  className,
}: {
  items: { title: string; icon: string }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 py-6 md:py-8 justify-items-center items-center",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full max-w-xs"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className={cn(
              "absolute inset-0 h-full w-full block rounded-3xl transition-all duration-600 ease-in-out",
              hoveredIndex === idx
                ? "bg-[#6A0DAD] opacity-100"
                : "bg-transparent opacity-0"
            )}
            style={{
              transitionProperty: "background-color, opacity",
              transitionDuration: hoveredIndex === idx ? "700ms" : "400ms",
              transitionDelay: hoveredIndex === idx ? "100ms" : "300ms",
            }}
          />
          <Card>
            <CardTitle>
              {hoveredIndex === idx ? (
                <div className="text-2xl text-white flex items-center justify-center">
                  {getIcon(item.icon, "text-[12px] sm:text-sm md:text-base xl:text-2xl")}
                </div>
              ) : (
                item.title
              )}
            </CardTitle>
          </Card>
        </div>
      ))}
    </div>
  );
};

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full px-4 py-4 sm:px-8 sm:py-6 lg:p-8 overflow-hidden bg-black/50 group-hover:bg-black/70 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 transition-transform duration-300 ease-in-out transform group-hover:scale-95 max-w-xs",
        className
      )}
    >
      <div className="flex items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
};

const CardTitle = ({
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
