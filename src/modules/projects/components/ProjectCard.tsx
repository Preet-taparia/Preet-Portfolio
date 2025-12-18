import Link from 'next/link';
import { AiFillPushpin as PinIcon } from 'react-icons/ai';
import { FaGithub as GithubIcon } from 'react-icons/fa';
import { HiOutlineExternalLink as DemoIcon, HiOutlineArrowSmRight as ViewIcon } from 'react-icons/hi';

import { STACKS } from '@/data/stacks';

import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import Tooltip from '@/common/components/elements/Tooltip';
import Breakline from '@/common/components/elements/Breakline';
import { ProjectItemProps } from '@/common/types/projects';

const ProjectCard = ({
  title,
  slug,
  description,
  image,
  stacks,
  is_featured,
  link_demo,
  link_github,
}: ProjectItemProps) => {
  
  // Parse stacks from stringified JSON in your json file
  let stacksArray: string[] = [];
  try {
    if (stacks) {
      stacksArray = typeof stacks === 'string' ? JSON.parse(stacks) : stacks;
    }
  } catch (error) {
    console.warn('Failed to parse stacks:', stacks);
    stacksArray = [];
  }

  const handleExternalLink = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Link href={`/projects/${slug}`}>
      <Card className='group relative flex h-full flex-col border border-neutral-200 bg-white transition-all duration-300 hover:scale-[101%] hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900'>
        
        {is_featured && (
          <div className='absolute right-0 top-0 z-[2] flex items-center gap-1 rounded-bl-xl rounded-tr-xl bg-lime-300 px-3 py-1 text-[12px] font-bold uppercase tracking-wider text-emerald-950 shadow-sm'>
            <PinIcon size={14} />
            <span>Featured</span>
          </div>
        )}

        {/* Project Image Header */}
        <div className='relative h-48 w-full overflow-hidden rounded-t-xl'>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className='object-cover object-center transition-transform duration-500 group-hover:scale-105'
          />
          <div className='absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <div className='flex items-center gap-2 font-medium text-white'>
              <span>View Project Detail</span>
              <ViewIcon size={20} />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className='flex flex-1 flex-col p-5'>
          <div className='flex-1 space-y-3'>
            <h3 className='text-lg font-bold text-neutral-800 transition-colors duration-300 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-400'>
              {title}
            </h3>
            
            <p className='text-[14px] leading-relaxed text-neutral-600 line-clamp-3 dark:text-neutral-400'>
              {description}
            </p>

            {/* Tech Stack Icons */}
            <div className='flex flex-wrap items-center gap-3 pt-2'>
              {stacksArray.map((stack) => (
                <Tooltip key={stack} title={stack}>
                  <div className='transition-transform hover:scale-110'>
                    {STACKS[stack] || <span className='text-[10px]'>{stack}</span>}
                  </div>
                </Tooltip>
              ))}
            </div>
          </div>

          <Breakline className='my-4 border-neutral-100 dark:border-neutral-800' />

          {/* Action Footer */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              {link_github && (
                <button
                  onClick={(e) => handleExternalLink(e, link_github)}
                  className='flex items-center gap-1.5 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
                >
                  <GithubIcon size={18} />
                  <span className='text-xs font-semibold'>Source</span>
                </button>
              )}
              {link_demo && (
                <button
                  onClick={(e) => handleExternalLink(e, link_demo)}
                  className='flex items-center gap-1.5 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
                >
                  <DemoIcon size={18} />
                  <span className='text-xs font-semibold'>Demo</span>
                </button>
              )}
            </div>
            
            {/* Minimalist Tech count indicator */}
            <span className='text-[10px] font-medium uppercase tracking-widest text-neutral-400'>
              {stacksArray.length} Tools
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;