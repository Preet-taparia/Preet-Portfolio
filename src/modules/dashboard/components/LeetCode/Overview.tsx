import OverviewItem from '../Contributions/OverviewItem';

interface OverviewProps {
  profile: {
    ranking: number;
    reputation: number;
  };
  submitStats: {
    difficulty: string;
    count: number;
  }[];
  contestRanking?: {
    rating: number;
    topPercentage: number;
    globalRanking: number;
  };
}

const Overview = ({ submitStats, contestRanking }: OverviewProps) => {
  const totalSolved = submitStats?.find((s) => s.difficulty === 'All')?.count || 0;
  
  // Format the Top % (e.g. 10.5 becomes "Top 10.5%")
  const topPercentage = contestRanking?.topPercentage 
    ? `Top ${contestRanking.topPercentage}%` 
    : 'N/A';
    
  const rating = contestRanking?.rating 
    ? Math.round(contestRanking.rating) 
    : 'N/A';

  return (
    <div className='grid grid-cols-2 gap-3 py-2 sm:grid-cols-4'>
      <OverviewItem label='Total Solved' value={totalSolved} />
      <OverviewItem label='Contest Rating' value={rating} />
      <OverviewItem label='Global Rank' value={topPercentage} />
      <OverviewItem label='Hard Solved' value={submitStats?.find(s => s.difficulty === 'Hard')?.count || 0} />
    </div>
  );
};

export default Overview;