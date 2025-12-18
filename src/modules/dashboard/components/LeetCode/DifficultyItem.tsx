import { motion, Variants } from 'framer-motion';
import cn from '@/common/libs/cn';

interface DifficultyItemProps {
  data: {
    name: string;
    solved: number;
    total: number;
    percent: number;
    color: string;
  };
}

const DifficultyItem = ({ data }: DifficultyItemProps) => {
  const { name, solved, total, percent, color } = data;

  const progressVariants: Variants = {
    initial: { width: 0 },
    animate: {
      width: `${percent}%`,
      transition: { delay: 0.5, duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className='flex flex-col gap-1'>
      <div className='flex items-end justify-between text-xs sm:text-sm'>
        <span className='font-medium w-16 dark:text-neutral-300'>{name}</span>
        <span className='text-neutral-600 dark:text-neutral-400'>
           <span className='font-semibold dark:text-neutral-200'>{solved}</span>
           <span className='mx-1'>/</span>
           {total}
        </span>
      </div>
      
      <div className='relative h-3 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800'>
        <motion.div
          initial='initial'
          animate='animate'
          variants={progressVariants}
          className={cn('absolute left-0 top-0 h-full rounded-full', color)}
        />
      </div>
    </div>
  );
};

export default DifficultyItem;