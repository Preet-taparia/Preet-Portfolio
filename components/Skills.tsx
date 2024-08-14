import { HoverEffect } from "./ui/card-hover-effect";

const skills = [
  { title: "HTML" },
  { title: "CSS" },
  { title: "Bootstrap" },
  { title: "Tailwind" },
  { title: "JavaScript" },
  { title: "Python" },
  { title: "TypeScript" },
  { title: "React.js" },
  { title: "Next.js" },
  { title: "Node.js" },
  { title: "Express.js" },
  { title: "Django" },
  { title: "Flask" },
  { title: "FastAPI" },
  { title: "MongoDB" },
  { title: "MySQL" },
  { title: "Postgres SQL" },
  { title: "SQL Lite" },
  { title: "Redis" },
];

const SkillGrid = () => {
  return (
    <div className="py-10" id="Skills">
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
