import DifficultyItem from './DifficultyItem';

interface Stat {
  difficulty: string;
  count: number;
}

interface DifficultyListProps {
  solved: Stat[];
  total: Stat[];
}

const DifficultyList = ({ solved, total }: DifficultyListProps) => {
  const getData = (diff: string) => {
    const solvedCount = solved?.find((s) => s.difficulty === diff)?.count || 0;
    const totalCount = total?.find((t) => t.difficulty === diff)?.count || 1;
    
    let color = '';

    switch (diff) {
      case 'Easy': color = 'bg-[#00B8A3]'; break;
      case 'Medium': color = 'bg-[#FFC01E]'; break;
      case 'Hard': color = 'bg-[#FF375F]'; break;
      default: color = 'bg-neutral-500';
    }

    return {
      name: diff,
      solved: solvedCount,
      total: totalCount,
      percent: (solvedCount / totalCount) * 100,
      color,
    };
  };

  const categories = ['Easy', 'Medium', 'Hard'].map(getData);

  return (
    <div className='mt-2'>
       <div className='relative flex flex-1 flex-col gap-2 rounded-lg bg-gradient-to-r from-neutral-200 to-neutral-200 p-[2px] dark:from-neutral-800 dark:to-neutral-800'>
        <div className='h-full w-full rounded-lg bg-neutral-50 p-4 dark:bg-dark'>
          <p className='mb-4 font-medium dark:text-neutral-200'>
             Difficulty Breakdown
          </p>
          <ul className='flex flex-col gap-4'>
            {categories.map((item) => (
              <li key={item.name}>
                <DifficultyItem data={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DifficultyList;