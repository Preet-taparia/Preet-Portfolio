import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import jsonDb from '@/common/libs/jsonDb';
import { ProjectItemProps } from '@/common/types/projects';
import ProjectDetail from '@/modules/projects/components/ProjectDetail';

interface ProjectsDetailPageProps {
  project: ProjectItemProps;
}

const ProjectsDetailPage: NextPage<ProjectsDetailPageProps> = ({ project }) => {
  const PAGE_TITLE = project?.title;
  const PAGE_DESCRIPTION = project?.description;

  const canonicalUrl = `https://preet-portfolio.vercel.app/project/${project?.slug}`;

  return (
    <>
      <NextSeo
        title={`${project?.title} - Project - Preet Taparia`}
        description={project?.description}
        canonical={canonicalUrl}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: project?.updated_at.toString(),
            modifiedTime: project?.updated_at.toString(),
            authors: ['Preet Taparia'],
          },
          url: canonicalUrl,
          images: [
            {
              url: project?.image,
            },
          ],
          siteName: `${project?.title} - Project - Preet Taparia`,
        }}
      />
      <Container data-aos='fade-up'>
        <BackButton url='/projects' />
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <ProjectDetail {...project} />
      </Container>
    </>
  );
};

export default ProjectsDetailPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await jsonDb.projects.findUnique({
    where: {
      slug: String(params?.slug),
    },
  });

  if (!response) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  return {
    props: {
      project: {
        id: response.id,
        title: response.title,
        slug: response.slug,
        description: response.description,
        image: response.image,
        is_featured: response.is_featured ?? false,
        link_demo: response.demo_url,
        link_github: response.github_url,
        stacks: response.tech_stack,
        content: response.content,
        is_show: response.is_show,
        created_at: response.created_at ?? null,
        updated_at: response.updated_at,
      },
    },
  };
};
