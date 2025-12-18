/* eslint-disable @next/next/no-img-element */

interface Badge {
  id: string;
  displayName: string;
  icon: string;
}

interface BadgesListProps {
  badges: Badge[];
}

const BadgesList = ({ badges }: BadgesListProps) => {
  const activeBadges = badges?.filter((b) => !b.icon.startsWith('data:image'));

  if (!activeBadges || activeBadges.length === 0) {
    return (
      <div className='flex h-full flex-col items-center justify-center rounded-xl border border-neutral-200 bg-white p-5 text-neutral-500 dark:border-neutral-900 dark:bg-neutral-900'>
        No badges yet.
      </div>
    );
  }

  return (
    <div className='flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-900 dark:bg-neutral-900'>
      <div className='flex items-center gap-2'>
        <h3 className='text-base font-medium dark:text-neutral-200'>Badges</h3>
        <span className='rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400'>
          {activeBadges.length}
        </span>
      </div>

      {/* ADDED p-4: This padding ensures the hover animation (zoom/shadow) 
         doesn't get cut off by the container edges.
      */}
      <div className='flex w-full gap-5 overflow-x-auto p-4 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
        {activeBadges.map((badge) => {
          const iconUrl = badge.icon.startsWith('http')
            ? badge.icon
            : `https://leetcode.com${badge.icon}`;

          return (
            <div
              key={badge.id}
              className='group relative flex flex-shrink-0 snap-center flex-col items-center justify-center'
            >
              <div className='relative flex h-40 w-40 flex-col items-center justify-center overflow-hidden rounded-2xl border border-neutral-100 bg-gradient-to-b from-neutral-50 to-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-200 hover:shadow-xl dark:border-neutral-800 dark:from-neutral-800 dark:to-neutral-900/50 dark:hover:border-neutral-700'>
                {/* Icon: Moves up slightly on hover to make room for text */}
                <img
                  src={iconUrl}
                  alt={badge.displayName}
                  className='h-24 w-24 object-contain drop-shadow-md transition-transform duration-300 group-hover:-translate-y-3 group-hover:scale-110'
                  loading='lazy'
                />

                <div className='absolute bottom-0 left-0 w-full translate-y-full bg-neutral-100/90 py-2 text-center text-xs font-semibold text-neutral-700 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0 dark:bg-neutral-700/90 dark:text-neutral-200'>
                  {badge.displayName}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BadgesList;