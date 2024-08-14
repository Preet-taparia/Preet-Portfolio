import React from "react";
import styled from "styled-components";
import Draggable from "react-draggable";


type Project = {
  id: number;
  title: string;
  des: string; // short description
  img: string; // image URL or path
  iconLists: string[]; // list of icons
  link: string; // link to the project or demo
  detail: string; // detailed page link (if any)
  repo: string; // repository link (if any)
  category: string; // project category
};

const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const Details = styled.div`
  flex: 1;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
`;

const Description = styled.div`
  margin-top: 8px;
  color: ${({ theme }) => theme.text_secondary + 99};
`;

const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
`;

type ProjectProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <Draggable>

    <Card>
      <Image src={project.img} />
      <Tags>
        {project.iconLists.map((icon, index) => (
          <img key={index} src={icon} alt="Icon" style={{ width: '24px' }} />
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Description>{project.des}</Description>
      </Details>
      <Button href={project.repo || project.link} target="_blank">
        View Code
      </Button>
    </Card>
        </Draggable>

  );
};

export default ProjectCard;