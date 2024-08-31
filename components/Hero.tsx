// components/Hero.tsx

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="pt-20 pb-10" id="hero">
      <div className="flex justify-center relative my-5 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Hello, my name is
          </p>
          <Header startLine={"Preet"} endLine={"Taparia"} cls="text-center text-[40px] md:text-5xl lg:text-6xl" />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I&apos;m a Computer Science Engineer with Interest in Backend and Web3 Technologies.
          </p>

          <a href="#Projects">
            <MagicButton
              title="See my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
