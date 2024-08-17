import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "@/data";
import ProjectCard from "@/components/ProjectCard";
import Header from "./Header";

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
  overflow-x: auto;
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
  cursor: pointer;
  flex-shrink: 0; /* Ensures buttons don't shrink when container is small */
  transition: background-color 0.3s ease; /* Smooth transition for background color */

  &:hover {
    background-color: white;
    color: #6A0DAD;
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
  }

  /* Increase button size for larger screens */
  @media (min-width: 1200px) {
    padding: 10px 24px;
    font-size: 18px;
  }

  /* Change to purple when active */
  ${({ $active }) =>
    $active &&
    `

    background-color: #6A0DAD;
    color: white;
  `}
`;


const Divider = styled.div`
  width: 1.5px;
  background: white;
  @media (max-width: 768px) {
    display: none; /* Hide dividers on small screens for a cleaner look */
  }
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
      <Header startLine="A small selection of" endLine="recent projects" />
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
              $active={toggle === "Fullstack"}
              onClick={() => setToggle("Fullstack")}
            >
              Full Stack
            </ToggleButton>
            <Divider />
            <ToggleButton
              $active={toggle === "Backend"}
              onClick={() => setToggle("Backend")}
            >
              Back End
            </ToggleButton>
            <Divider />
            <ToggleButton
              $active={toggle === "Web3"}
              onClick={() => setToggle("Web3")}
            >
              Web3
            </ToggleButton>
            <Divider />
            <ToggleButton
              $active={toggle === "Devops"}
              onClick={() => setToggle("Devops")}
            >
              Devops
            </ToggleButton>
            <Divider />
            <ToggleButton
              $active={toggle === "Other"}
              onClick={() => setToggle("Other")}
            >
              Other
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



