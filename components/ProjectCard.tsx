// components/ProjectCard.tsx

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Define the Project type
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

// Updated Card styled component
const Card = styled.div<{ $isDragging: boolean }>`
  width: 320px;
  height: 550px;
  background-color: ${({ theme }) => theme.card};
  cursor: ${({ $isDragging }) => ($isDragging ? 'grabbing' : 'grab')};
  border-radius: 10px;
  border-color: rgba(255, 255, 255, 0.5);
  border-width: 2px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 280px; /* Reduce width on smaller screens */
  }

  @media (max-width: 480px) {
    width: 95%; /* Use 95% of screen width on mobile devices */
    height: auto; /* Let the height adjust automatically */
  }
`;

// Image for project and icons
const Image = styled.img<{ $isIcon?: boolean }>`
  width: ${({ $isIcon }) => ($isIcon ? '30px' : '100%')};
  height: ${({ $isIcon }) => ($isIcon ? 'auto' : '180px')};
  background-color: ${({ theme }) => theme.white};
  border-radius: ${({ $isIcon }) => ($isIcon ? '4px' : '10px')};
  box-shadow: ${({ $isIcon }) => ($isIcon ? 'none' : '0 0 16px 2px rgba(0, 0, 0, 0.3)')};

  @media (max-width: 768px) {
    height: ${({ $isIcon }) => ($isIcon ? '24px' : '160px')}; /* Adjust height for icons and project image on smaller screens */
  }

  @media (max-width: 480px) {
    height: ${({ $isIcon }) => ($isIcon ? '20px' : '140px')}; /* Further adjust height for mobile */
  }
`;

// Styled component for tags section
const Tags = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 480px) {
    justify-content: space-between; /* Adjust alignment for mobile screens */
  }
`;

// Styled component for details section
const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// Styled component for title
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center; /* Center align title */
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 18px; /* Adjust font size on mobile */
  }
`;

// Styled component for description
const Description = styled.div`
  margin-top: 8px;
  color: ${({ theme }) => theme.text_secondary + 99};
  text-align: justify; /* Justify align description text */
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 14px; /* Adjust description text size on mobile */
  }
`;

// Styled component for buttons
const Button = styled.a`
  padding: 10px;
  color: white;
  background: #6A0DAD;
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
    filter: brightness(1.1);
  }

  @media (max-width: 768px) {
    font-size: 18px; /* Adjust font size on tablet screens */
    padding: 8px; /* Adjust padding */
  }

  @media (max-width: 480px) {
    font-size: 16px; /* Adjust font size on mobile screens */
    padding: 6px;
  }
`;

// ProjectCard component
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
    }
  }, []);

  return (
    <Draggable
      disabled={isMobile}
      onStart={() => setIsDragging(true)}
      onStop={() => setIsDragging(false)}
    >
      <Card $isDragging={isDragging}>
        <Image src={project.img} alt={project.title} />
        <Details>
          <Title>{project.title}</Title>
          <Tags>
            <TooltipProvider delayDuration={500}>
              {project.icons.map((icon, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <Image src={icon.img} alt={icon.name} $isIcon />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{icon.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </Tags>
          <Description>{project.des}</Description>
        </Details>
        <div className="flex flex-row gap-2 items-center justify-center">
          {project.repo && (
            <Button href={project.repo} target="_blank">
              View Code
            </Button>
          )}
          {project.link && (
            <Button href={project.link} target="_blank">
              View Demo
            </Button>
          )}
        </div>
      </Card>
    </Draggable>
  );
};

export default ProjectCard;
