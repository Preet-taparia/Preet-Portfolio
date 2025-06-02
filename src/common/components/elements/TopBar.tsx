import { useState } from 'react';

const TopBar = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (

    <div className='hidden items-center justify-center gap-x-2 bg-cover bg-no-repeat p-2.5 text-sm shadow-lg backdrop-blur-2xl dark:border-b dark:border-neutral-800 dark:text-neutral-300 lg:flex'>
      <span>🚧</span>
      <span>This portfolio site is currently being built — things might look off or behave unexpectedly.</span>
      <button
        onClick={handleClose}
        aria-label="Dismiss testing notification"
        className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-1 rounded-full px-3 py-1 text-sm font-semibold transition"
      >
        Dismiss
      </button>
    </div>
  );
};

export default TopBar;
