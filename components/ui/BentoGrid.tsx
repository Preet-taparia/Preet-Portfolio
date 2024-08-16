// components/ui/BentoGrid.tsx

import { useState } from "react";
import { IoCopyOutline, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import { achievements } from "@/data";

const marqueeVariants = {
  animate: {
    y: [0, 300, 0], // adjust these values to control the height of the marquee
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15, // adjust duration to control the speed
        ease: "linear",
      },
    },
  },
};

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["Astronomy", "Travel", "Chess", "Astronomy", "Travel", "Chess"];
  const rightLists = ["Anime", "Marvel", "Music", "Anime", "Marvel", "Music"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  // Slider State
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? achievements.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === achievements.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && <img src={img} alt={img} className={cn(imgClassName, "object-cover object-center ")} />}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"} `}>
          {spareImg && <img src={spareImg} alt={spareImg} className="object-cover object-center w-full h-full" />}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute right-3 lg:right-5 overflow-hidden">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <motion.div
                  className="flex flex-col gap-3 md:gap-3 lg:gap-8"
                  variants={marqueeVariants}
                  animate="animate"
                >
                  {leftLists.map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                </motion.div>
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                <motion.div
                  className="flex flex-col gap-3 md:gap-3 lg:gap-8"
                  variants={marqueeVariants}
                  animate="animate"
                >
                  {rightLists.map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          )}
          {id === 4 && (
            <div className="relative h-[220px]">
              {/* Navigation buttons */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-2">
                <button
                  className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
                  onClick={handlePrevious}
                >
                  <IoChevronBack size={24} />
                </button>
              </div>

              {/* Achievement Content */}
              <div className="flex items-center justify-center px-4 py-4 md:px-8 md:py-8">
                <div className="text-center max-w-md mx-auto">
                  {achievements.map((achievement, index) => (
                    index === currentIndex && (
                      <div key={index}>
                        <h3 className="text-xl md:text-2xl font-semibold mb-2">
                          {achievement.name}
                        </h3>
                        <p className="text-md md:text-lg text-gray-200 mb-2">
                          {achievement.organisation}
                        </p>
                        <p className="text-sm md:text-base text-purple">
                          {achievement.detail}
                        </p>
                      </div>
                    )
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-2">
                <button
                  className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
                  onClick={handleNext}
                >
                  <IoChevronForward size={24} />
                </button>
              </div>
            </div>

          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}>
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};