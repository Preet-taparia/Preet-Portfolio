import Link from 'next/link';
import { SiLeetcode as LeetCodeIcon } from 'react-icons/si';
import useSWR from 'swr';

import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { fetcher } from '@/services/fetcher';

import BadgesList from './BadgesList';
import DifficultyPieChart from './DifficultyPieChart';
import Overview from './Overview';

interface LeetCodeProps {
  username: string;
}

const LeetCode = ({ username }: LeetCodeProps) => {
  const { data } = useSWR(`/api/leetcode?username=${username}`, fetcher);

  const profile = data?.matchedUser?.profile;
  const submitStats = data?.matchedUser?.submitStats?.acSubmissionNum;
  const totalQuestions = data?.allQuestionsCount;
  const badges = data?.matchedUser?.badges;
  const contestRanking = data?.userContestRanking;

  return (
    <section className='flex flex-col gap-y-2'>
      <SectionHeading
        title='LeetCode Stats'
        icon={<LeetCodeIcon className='mr-1' />}
      />
      <SectionSubHeading>
        <div className='dark:text-neutral-400 md:flex-row md:items-center'>
          <span>Problem solving statistics</span>
        </div>
        <Link
          href={`https://github.com/${username}`}
          target='_blank'
          passHref
          className='font-code text-sm text-neutral-400 hover:text-neutral-700 dark:text-neutral-600 hover:dark:text-neutral-400'
        >
          @{username}
        </Link>
      </SectionSubHeading>

      {!data ? (
        <div className='py-6 text-center dark:text-neutral-400'>Loading LeetCode stats...</div>
      ) : (
        <div className='flex flex-col gap-4'>
          {/* Top Row: Key Stats (Ranking, Rating, Top %) */}
          <Overview 
            profile={profile} 
            submitStats={submitStats} 
            contestRanking={contestRanking} 
          />

          {/* Bottom Row: Pie Chart and Badges */}
          <div className='grid gap-4 md:grid-cols-2'>
            <DifficultyPieChart solved={submitStats} total={totalQuestions} />
            <BadgesList badges={badges} />
          </div>
        </div>
      )}
    </section>
  );
};

export default LeetCode;