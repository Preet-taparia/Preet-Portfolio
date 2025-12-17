import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface InfiniteLoopSliderProps {
  children: ReactNode;
  isReverse?: boolean;
  duration?: number;
}

const InfiniteLoopSlider = ({
  children,
  isReverse = false,
  duration = 400,
}: InfiniteLoopSliderProps) => {
  return (
    <StyledSlider
      className='flex w-fit animate-looping-tag hover:[animation-play-state:paused]'
      isReverse={isReverse}
      style={{ animationDuration: `${duration}s` }}
    >
      {children}
      {children}
    </StyledSlider>
  );
};

export default InfiniteLoopSlider;

const StyledSlider = styled.div<{ isReverse: boolean }>`
  animation-direction: ${({ isReverse }) => (isReverse ? 'reverse' : 'normal')};
`;
