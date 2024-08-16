// components/Skills.tsx

import { HoverEffect } from "./ui/card-hover-effect";
import { skills } from "@/data";

const SkillGrid = () => {
  return (
    <div className="pt-10" id="skills">
      <h1 className="heading">
        List of my{" "}
        <span className="text-purple">Skills</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={skills} />
        </div>
      </div>
    </div>
  );
};

export default SkillGrid;
