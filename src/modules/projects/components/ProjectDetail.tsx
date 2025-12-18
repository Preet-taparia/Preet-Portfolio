import { STACKS } from '@/data/stacks';

import Image from '@/common/components/elements/Image';
import MDXComponent from '@/common/components/elements/MDXComponent';
import Tooltip from '@/common/components/elements/Tooltip';
import { ProjectItemProps } from '@/common/types/projects';

import ProjectLink from './ProjectLink';

const ProjectDetail = ({
  title,
  image,
  stacks,
  link_demo,
  link_github,
  content,
}: ProjectItemProps) => {
  
  return (
    <div className='space-y-8'>
      <div className='flex flex-col items-start justify-between gap-5 sm:flex-row lg:flex-row lg:items-center'>
        <div className='flex flex-wrap items-center gap-2'>
          <span className='mb-1 text-[15px] text-neutral-700 dark:text-neutral-300'>
            Tech Stack :
          </span>
          <div className='flex flex-wrap items-center gap-3'>
            {stacks.map((stack: string, index: number) => (
              <div key={index}>
                <Tooltip title={stack}>
                  {STACKS[stack] || <span className="text-xs">{stack}</span>}
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
        <ProjectLink
          title={title}
          link_demo={link_demo}
          link_github={link_github}
        />
      </div>
      
      <div className='overflow-hidden rounded-xl'>
        <Image
          src={image}
          width={800}
          height={400}
          alt={title}
          className='w-full aspect-[2/1] object-cover object-center transition-transform duration-300 hover:scale-105'
        />
      </div>

      {content && (
        <div className='mt-5 space-y-6 leading-[1.8] dark:text-neutral-300'>
          <MDXComponent>{content}</MDXComponent>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;