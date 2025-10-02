import { motion } from 'framer-motion';
import { useMemo, useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import useSWR from 'swr';

import ProjectCardNewSkeleton from '@/common/components/skeleton/ProjectCardNewSkeleton';
import { ProjectItemProps } from '@/common/types/projects';
import ProjectCardNew from '@/modules/projects/components/ProjectCardNew';
import { fetcher } from '@/services/fetcher';

const ProjectCarousel = () => {
  const { data, isLoading, error } = useSWR(`/api/projects`, fetcher, {
    revalidateOnFocus: false,
    refreshInterval: 0,
  });

  const projectData: ProjectItemProps[] = useMemo(() => {
    return data?.data?.posts || [];
  }, [data]);

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  const renderProjectCards = () => {
    if (isLoading) {
      return Array.from({ length: 3 }, (_, index) => (
        <ProjectCardNewSkeleton key={index} />
      ));
    }

    if (error || !projectData || projectData.length === 0) {
      return (
        <div className="flex h-40 w-full items-center justify-center text-neutral-600 dark:text-neutral-400">
          {error ? 'Failed to load projects' : 'No projects found'}
        </div>
      );
    }

    return projectData.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className='w-full max-w-[340px] flex-shrink-0'
      >
        <ProjectCardNew {...item} />
      </motion.div>
    ));
  };

  return (
    <div
      className='flex gap-4 overflow-x-scroll p-1 scrollbar-hide'
      {...events}
      ref={ref}
    >
      {renderProjectCards()}
    </div>
  );
};

export default ProjectCarousel;