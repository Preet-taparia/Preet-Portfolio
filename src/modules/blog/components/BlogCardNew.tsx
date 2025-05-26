import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowRight as MoreIcon } from 'react-icons/bs';
import { FaRegEye as ViewIcon } from 'react-icons/fa';
import { HiOutlineClock as ClockIcon } from 'react-icons/hi';
import { TbCalendarBolt as DateIcon } from 'react-icons/tb';

import Breakline from '@/common/components/elements/Breakline';
import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';

import {
  calculateReadingTime,
  formatDate,
  formatExcerpt,
} from '@/common/helpers';
import { BlogDetailProps } from '@/common/types/blog';

const BlogCardNew = ({
  id,
  title,
  featured_image_url,
  date,
  slug,
  content,
  excerpt,
  total_views_count,
  isExcerpt = true,
}: BlogDetailProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const readingTimeMinutes = content?.rendered
    ? calculateReadingTime(content.rendered)
    : 0;

  const defaultImage = '/images/placeholder.png';

  const slideDownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Link href={`/blog/${slug}?id=${id}`} passHref>
      <Card
        className='group relative flex h-[420px] w-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl dark:border-neutral-800 dark:bg-neutral-900'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='relative h-[220px] w-full overflow-hidden'>
          <Image
            src={featured_image_url || defaultImage}
            alt={typeof title === 'string' ? title : title?.rendered ?? ''}
            fill
            sizes='100vw'
            className='object-cover object-center transition-transform duration-500 group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 opacity-80'></div>
        </div>

        <div className='flex flex-1 flex-col justify-between p-5'>
          <div className='space-y-3'>
            <h3 className='text-xl font-semibold text-white group-hover:underline'>
              {typeof title === 'string' ? title : title?.rendered}
            </h3>
            <div className='flex items-center text-sm text-neutral-300'>
              <DateIcon size={16} className='mr-1.5' />
              <span>{formatDate(date ?? '')}</span>
            </div>
            {isExcerpt && (
              <p className='text-sm text-neutral-300'>
                {formatExcerpt(
                  excerpt && typeof excerpt !== 'string'
                    ? excerpt.rendered
                    : excerpt ?? '',
                )}
              </p>
            )}
          </div>

          <Breakline className='!border-neutral-700' />

          <div className='flex justify-between items-center pt-2 text-neutral-300'>
            <motion.div
              variants={slideDownVariants}
              initial='visible'
              animate={isHovered ? 'hidden' : 'visible'}
              className={clsx('flex gap-4', isHovered && 'hidden')}
            >
              <div className='flex items-center gap-1'>
                <ViewIcon size={14} />
                <span className='text-xs font-medium'>
                  {(total_views_count ?? 0).toLocaleString()} views
                </span>
              </div>
              <div className='flex items-center gap-1'>
                <ClockIcon size={14} />
                <span className='text-xs font-medium'>
                  {readingTimeMinutes.toLocaleString()} min read
                </span>
              </div>
            </motion.div>
            <motion.div
              variants={slideDownVariants}
              initial='hidden'
              animate={isHovered ? 'visible' : 'hidden'}
              className={clsx('flex items-center gap-1', !isHovered && 'hidden')}
            >
              <span className='text-xs font-medium'>Read More</span>
              <MoreIcon size={16} />
            </motion.div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCardNew;
