import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import jsonDb from '@/common/libs/jsonDb';
import { ProjectItemProps } from '@/common/types/projects';
import Projects from '@/modules/projects';

interface ProjectsPageProps {
  projects: ProjectItemProps[];
}

const PAGE_TITLE = 'Projects';
const PAGE_DESCRIPTION =
  'A showcase of my journey in software engineering, spanning freelance solutions, hackathon prototypes, academic experiments, alongside my own projects.';

const ProjectsPage: NextPage<ProjectsPageProps> = ({ projects }) => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMore = () => setVisibleProjects((prev) => prev + 2);
  const hasMore = visibleProjects < projects.length;

  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Preet Taparia`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Projects
          projects={projects.slice(0, visibleProjects)}
          loadMore={loadMore}
          hasMore={hasMore}
        />
      </Container>
    </>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps = async () => {
  const response = await jsonDb.projects.findMany({
    orderBy: [
      { is_featured: 'desc' },
      { updated_at: 'desc' },
    ],
  });

  // TRANSFORM the data here so it matches ProjectItemProps
  const projects = response.map((project) => ({
    title: project.title,
    slug: project.slug,
    description: project.description,
    image: project.image,
    link_demo: project.demo_url ?? "",
    link_github: project.github_url ?? "",
    stacks: project.tech_stack,
    content: project.content ?? "",
    is_show: project.is_show,
    is_featured: project.is_featured,
    updated_at: project.updated_at,
  }));

  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects)),
    }
  };
}