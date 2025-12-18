import type { NextApiRequest, NextApiResponse } from 'next';

import jsonDb from '@/common/libs/jsonDb';
import { ProjectItemProps } from '@/common/types/projects';

type Data = {
  status: boolean;
  data?: {
    posts: ProjectItemProps[];
    total?: number;
  };
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const projects = await jsonDb.projects.findMany({
      orderBy: [{ updated_at: 'desc' }]
    });

    const transformedProjects: ProjectItemProps[] = projects
      .filter(project => project.is_show !== false)
      .map(project => ({
        title: project.title,
        slug: project.slug,
        description: project.description,
        image: project.image,
        link_demo: project.demo_url,
        link_github: project.github_url,
        stacks: project.tech_stack,
        content: project.content,
        is_show: true,
        is_featured: project.is_featured,
        updated_at: new Date(project.updated_at),
      }));

    res.status(200).json({ 
      status: true, 
      data: { 
        posts: transformedProjects,
        total: transformedProjects.length
      } 
    });
  } catch (error) {
    res.status(500).json({ status: false, error: 'Failed to fetch projects' });
  }
}