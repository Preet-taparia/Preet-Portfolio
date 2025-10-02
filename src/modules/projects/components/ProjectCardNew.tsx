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

  const slideDownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

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
        <div className='relative h-[220px] w-full overflow-hidden'>
          <Image
            src={image || defaultImage}
            alt={title}
            fill
            sizes='100vw'
            className='object-cover object-center transition-transform duration-500 group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 opacity-80'></div>
        </div>

        <div className='flex flex-1 flex-col justify-between p-5'>
          <div className='space-y-3'>
            <h3 className='text-xl font-semibold text-white group-hover:underline'>
              {title}
            </h3>
            <div className='flex items-center text-sm text-neutral-300'>
              <DateIcon size={16} className='mr-1.5' />
              <span>{formatDate(updated_at?.toString() ?? '')}</span>
            </div>
            <p className='text-sm text-neutral-300 line-clamp-2'>
              {description}
            </p>
            <div className='flex items-center text-xs text-neutral-400'>
              <span className='truncate'>{stacks}</span>
            </div>
          </div>

          <Breakline className='!border-neutral-700' />

          <div className='flex justify-between items-center pt-2 text-neutral-300'>
            <motion.div
              variants={slideDownVariants}
              initial='visible'
              animate={isHovered ? 'hidden' : 'visible'}
              className={clsx('flex gap-3', isHovered && 'hidden')}
            >
              {link_github && (
                <button
                  onClick={(e) => handleExternalLink(e, link_github)}
                  className='flex items-center gap-1 hover:text-white transition-colors'
                  title='View on GitHub'
                >
                  <GithubIcon size={14} />
                  <span className='text-xs font-medium'>Code</span>
                </button>
              )}
              {link_demo && (
                <button
                  onClick={(e) => handleExternalLink(e, link_demo)}
                  className='flex items-center gap-1 hover:text-white transition-colors'
                  title='View Live Demo'
                >
                  <DemoIcon size={14} />
                  <span className='text-xs font-medium'>Demo</span>
                </button>
              )}
            </motion.div>
            <motion.div
              variants={slideDownVariants}
              initial='hidden'
              animate={isHovered ? 'visible' : 'hidden'}
              className={clsx('flex items-center gap-1', !isHovered && 'hidden')}
            >
              <span className='text-xs font-medium'>View Project</span>
              <MoreIcon size={16} />
            </motion.div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCardNew;