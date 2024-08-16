import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "@/data";
import ProjectCard from "@/components/ProjectCard";

type Project = {
  id: number;
  title: string;
  des: string; 
  img: string; 
  icons: {
    img: string;
    name: string;
  }[]; 
  link?: string;
  repo?: string;
  category: string;
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

interface ToggleButtonProps {
  $active: boolean; // Use $ prefix for transient props
}

const ToggleButton = styled.div<ToggleButtonProps>`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({ $active, theme }) =>
    $active &&
    `
    background: ${theme.primary + 20};
  `}
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Projects: React.FC = () => {
  const [toggle, setToggle] = useState<string>("all");

  return (
    <div className="py-10" id="Projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        <Wrapper>
          <ToggleButtonGroup>
            <ToggleButton
              $active={toggle === "all"}
              onClick={() => setToggle("all")}
            >
              ALL
            </ToggleButton>
            <Divider />
            <ToggleButton
              $active={toggle === "Web"}
              onClick={() => setToggle("Web")}
            >
              WEB 2
            </ToggleButton>
            <Divider />
            <ToggleButton
              $active={toggle === "App"}
              onClick={() => setToggle("App")}
            >
              WEB 3
            </ToggleButton>
            <Divider />
            <ToggleButton
              $active={toggle === "Other"}
              onClick={() => setToggle("Other")}
            >
              OTHER
            </ToggleButton>
          </ToggleButtonGroup>

          <CardContainer>
            {toggle === "all" &&
              projects.map((project: Project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            {projects
              .filter((item: Project) => item.category === toggle)
              .map((project: Project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </CardContainer>
        </Wrapper>
      </div>
    </div>
  );
};

export default Projects;



