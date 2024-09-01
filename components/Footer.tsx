import React from "react";
import { socialMedia } from "@/data";
import getIcon from "./ui/Icons";

const Footer = () => {
 
  return (
    <footer className="w-full py-5" id="footer">
      <div className="flex mt-0 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Made by Preet Taparia
        </p>

        <div className="flex items-center mt-5 sm:mt-0 gap-1 sm:gap-2 md:gap-3">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="relative inline-flex overflow-hidden mx-auto rounded-lg p-[1px] focus:outline-none"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="h-8 w-8 sm:h-10 sm:w-10 inline-flex cursor-pointer items-center justify-center rounded-lg bg-slate-950 text-sm font-medium text-white backdrop-blur-3xl gap-2">
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getIcon(info.icon)}
                </a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
