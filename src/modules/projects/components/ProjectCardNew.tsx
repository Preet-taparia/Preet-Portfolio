import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowRight as MoreIcon } from 'react-icons/bs';
import { FaGithub as GithubIcon } from 'react-icons/fa';
import { HiOutlineExternalLink as DemoIcon } from 'react-icons/hi';
import { TbCalendarBolt as DateIcon } from 'react-icons/tb';

import Breakline from '@/common/components/elements/Breakline';
import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import { formatDate } from '@/common/helpers';
import { ProjectItemProps } from '@/common/types/projects';

const ProjectCardNew = ({
  title,
  slug,
  description,
  image,
  link_demo,
  link_github,
  stacks,
  updated_at,
}: ProjectItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const defaultImage = '/images/project-placeholder.png';

  const handleExternalLink = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Link href={`/projects/${slug}`} passHref>
      <Card
        className='group relative flex h-[420px] w-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl dark:border-neutral-800 dark:bg-neutral-900'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Top Section: Image + Hover Overlay */}
        <div className='relative h-[220px] w-full overflow-hidden'>
          <Image
            src={image || defaultImage}
            alt={title}
            fill
            sizes='100vw'
            className='object-cover object-center transition-transform duration-500 group-hover:scale-110'
          />
          
          {/* Constant Gradient Overlay */}
          <div className='absolute inset-0 bg-gradient-to-b from-black/20 to-black/60'></div>

          {/* Centered "View Project" Overlay on Hover */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className='absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all duration-300'
          >
            <div className='flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow-xl'>
              <span>View Project</span>
              <MoreIcon size={16} />
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Content */}
        <div className='flex flex-1 flex-col justify-between p-5'>
          <div className='space-y-3'>
            <h3 className='text-xl font-semibold text-neutral-800 dark:text-neutral-100 group-hover:text-blue-500 transition-colors'>
              {title}
            </h3>
            
            <div className='flex items-center text-sm text-neutral-500 dark:text-neutral-400'>
              <DateIcon size={16} className='mr-1.5' />
              <span>{formatDate(updated_at?.toString() ?? '')}</span>
            </div>

            <p className='text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2'>
              {description}
            </p>

            {/* Stacks Badges */}
            <div className='flex flex-wrap items-center gap-2 pt-1'>
              {Array.isArray(stacks) ? (
                stacks.slice(0, 4).map((stack, index) => (
                  <span
                    key={index}
                    className='rounded-md bg-neutral-100 px-1.5 py-0.5 text-[10px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400'
                  >
                    {stack}
                  </span>
                ))
              ) : (
                <span className='text-[10px] text-neutral-400'>{stacks}</span>
              )}
              {Array.isArray(stacks) && stacks.length > 4 && (
                <span className='text-[10px] text-neutral-500'>+{stacks.length - 4}</span>
              )}
            </div>
          </div>

          <Breakline className='!border-neutral-200 dark:!border-neutral-800' />

          {/* Action Bar: Always Visible */}
          <div className='flex gap-4 pt-1 text-neutral-600 dark:text-neutral-400'>
            {link_github && (
              <button
                onClick={(e) => handleExternalLink(e, link_github)}
                className='flex items-center gap-1.5 hover:text-black dark:hover:text-white transition-colors'
              >
                <GithubIcon size={16} />
                <span className='text-xs font-semibold'>Code</span>
              </button>
            )}
            {link_demo && (
              <button
                onClick={(e) => handleExternalLink(e, link_demo)}
                className='flex items-center gap-1.5 hover:text-black dark:hover:text-white transition-colors'
              >
                <DemoIcon size={16} />
                <span className='text-xs font-semibold'>Live Demo</span>
              </button>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCardNew;