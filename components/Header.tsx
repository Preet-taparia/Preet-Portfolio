import React from 'react';

const animateClass = 'hover:animate-rubberBand';

const splitText = (text: string) => {
  return text.split('').map((char, index) => (
    <span
      key={index}
      className={`inline-block ${animateClass}`}
      style={{ display: char === ' ' ? 'inline' : 'inline-block' }} // Ensure spaces are inline
    >
      {char}
    </span>
  ));
};

const Header = ({ startLine, endLine }: { startLine: string, endLine: string }) => {
  return (
    <h1 className="heading py-10">
      {splitText(startLine)}{' '}
      <span className="text-purple">
        {splitText(endLine)}
      </span>
    </h1>
  );
};

export default Header;
