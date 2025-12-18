import { GITHUB_ACCOUNTS } from '@/data/github';

import Breakline from '@/common/components/elements/Breakline';

// import CodingActive from './CodingActive';
import Contributions from './Contributions';
import LeetCode from './LeetCode';

const Dashboard = () => {
  return (
    <>
      {/* <CodingActive />
      <Breakline className='mb-8 mt-10' /> */}
      <div className='space-y-10'>
        {GITHUB_ACCOUNTS?.filter((account) => account?.is_active).map(
          (account, index) => (
            <Contributions
              key={index}
              username={account?.username}
              type={account?.type}
              endpoint={account?.endpoint}
            />
          ),
        )}
      </div>
      <Breakline className='mb-8 mt-10' />
      <LeetCode username="PreetTaparia" />
    </>
  );
};

export default Dashboard;
