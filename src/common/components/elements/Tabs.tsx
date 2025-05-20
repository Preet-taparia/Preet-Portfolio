import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

interface TabProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
}

export const Tab = ({ children }: TabProps) => {
  return <>{children}</>;
};

export const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className='rounded border-x border-b dark:border-neutral-800'>
      <div className='flex flex-wrap gap-2 p-2'>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`flex-grow basis-0 min-w-[180px] px-4 py-2 text-base font-normal rounded-md transition-colors duration-200
        ${activeTab === index
                ? 'bg-neutral-500 text-neutral-100 dark:bg-neutral-400 dark:text-neutral-900'
                : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-400 hover:dark:text-neutral-200'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>


      <div className='px-4 py-8 sm:px-8'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.4 }}
          >
            {tabs[activeTab].children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
