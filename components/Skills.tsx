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
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={skills} />
    </div>
  );
};

export default SkillGrid;
