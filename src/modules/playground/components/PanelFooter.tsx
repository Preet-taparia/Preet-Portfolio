import {
  MdOutlineFullscreen as FullScreenIcon,
  MdOutlineFullscreenExit as ExitFullScreenIcon,
} from 'react-icons/md';

import Tooltip from '@/common/components/elements/Tooltip';

interface PanelFooterProps {
  isFullScreen?: boolean;
  onCloseFullScreen?: () => void;
  onFullScreen?: () => void;
}

const PanelFooter = ({
  isFullScreen,
  onCloseFullScreen,
  onFullScreen,
}: PanelFooterProps) => {
  return (
    <div className='flex items-center justify-between rounded-b-md border border-t-0 border-neutral-700 bg-neutral-900 px-2 py-1'>
      <div className='w-full text-center text-sm text-neutral-500'>
        &copy;{' '}
        <a
          href='https://preet-portfolio.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:underline'
        >
          2025 Preet Taparia
          <span className='hidden sm:inline'>
            {' '}— Built with <span role='img' aria-label='love'>❤️</span> and caffeine.
          </span>
        </a>
      </div>

      {isFullScreen ? (
        <Tooltip title='Exit Fullscreen'>
          <ExitFullScreenIcon
            size={22}
            onClick={onCloseFullScreen}
            className='cursor-pointer text-neutral-500'
            data-umami-event='Exit Fullscreen Playground'
          />
        </Tooltip>
      ) : (
        <Tooltip title='Enter Fullscreen'>
          <FullScreenIcon
            size={22}
            onClick={onFullScreen}
            className='cursor-pointer text-neutral-500'
            data-umami-event='Enter Fullscreen Playground'
          />
        </Tooltip>
      )}
    </div>
  );
};

export default PanelFooter;
