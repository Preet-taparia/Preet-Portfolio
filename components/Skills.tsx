// components/Skills.tsx

import { HoverEffect } from "./ui/card-hover-effect";
import { skills } from "@/data";
import Header from "./Header";

const SkillGrid = () => {
  return (
    <div id="skills">
      <Header startLine="List of my" endLine="Skills" />
      <div className="flex flex-wrap items-center justify-center gap-16 ">
          <HoverEffect items={skills} />
      </div>
    </div>
  );
};

export default SkillGrid;
