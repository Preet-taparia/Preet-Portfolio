import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

interface Stat {
  difficulty: string;
  count: number;
}

interface DifficultyPieChartProps {
  solved: Stat[];
  total: Stat[];
}

const DifficultyPieChart = ({ solved, total }: DifficultyPieChartProps) => {
  const getData = (diff: string, color: string) => {
    const solvedCount = solved?.find((s) => s.difficulty === diff)?.count || 0;
    return { name: diff, value: solvedCount, color };
  };

  const data = [
    getData('Easy', '#00b8a3'),   // Teal
    getData('Medium', '#ffc01e'), // Yellow
    getData('Hard', '#ff375f'),   // Red
  ];

  const totalSolved = solved?.find((s) => s.difficulty === 'All')?.count || 0;

  return (
    <div className='flex h-full flex-col justify-between rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-900 dark:bg-neutral-900'>
      <h3 className='text-base font-medium dark:text-neutral-200'>Solved Problems</h3>
      
      <div className='flex flex-col items-center gap-6 mt-4 lg:mt-0 lg:flex-row lg:justify-between'>
        <div className='relative h-[180px] w-[180px] flex-shrink-0 [&_.recharts-surface]:outline-none [&_.recharts-wrapper]:outline-none'>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={85}
                dataKey="value"
                cornerRadius={5}
                paddingAngle={2}
                startAngle={90}
                endAngle={-270}
                stroke="none"
                isAnimationActive={true}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color} 
                    className="stroke-none outline-none transition-opacity hover:opacity-80 focus:outline-none" 
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          
          {/* Center Text */}
          <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center pointer-events-none'>
            <div className='text-3xl font-extrabold text-neutral-800 dark:text-white'>
              {totalSolved}
            </div>
            <div className='text-xs font-medium text-neutral-500 dark:text-neutral-400'>
              Solved
            </div>
          </div>
        </div>

        <div className='flex w-full max-w-[200px] flex-col gap-3'>
           <div className="flex justify-between mb-1 text-xs text-neutral-500 dark:text-neutral-400">
              <span>Difficulty</span>
              <span>Solved / Total</span>
           </div>
          {data.map((item) => {
            const totalCount = total?.find(t => t.difficulty === item.name)?.count || 0;
            return (
              <div key={item.name} className='flex items-center justify-between'>
                <div className="flex items-center gap-2">
                   <span className='h-3 w-3 rounded-[3px]' style={{ backgroundColor: item.color }} />
                   <span className='text-sm font-medium dark:text-neutral-200'>{item.name}</span>
                </div>
                <div className='text-sm dark:text-neutral-400'>
                  <span className='font-bold text-neutral-800 dark:text-white'>{item.value}</span>
                  <span className='mx-1 text-neutral-400'>/</span>
                  <span className="font-medium">{totalCount}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DifficultyPieChart;