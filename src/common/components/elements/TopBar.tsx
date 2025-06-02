'use client';

import { useEffect, useState } from 'react';

const TopBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('topBarDismissed');
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
    sessionStorage.setItem('topBarDismissed', 'true');
  };

  if (!visible) return null;

  return (
    <aside
      role="alert"
      aria-live="polite"
      className="hidden items-center justify-center pt-6 gap-x-4 mx-auto"
    >
      <div className="flex items-center gap-x-2 border-b-2">
        <p className="text-sm font-medium leading-tight">
          🚧 This portfolio site is currently being tested — things might look off or behave unexpectedly.
        </p>
      <button
        onClick={handleClose}
        aria-label="Dismiss testing notification"
        className="underline hover:text-purple"
      >
        Dismiss
      </button>
      </div>
    </aside>
  );
};

export default TopBar;
