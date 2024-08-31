import React from 'react';

const animateClass = 'hover:animate-rubberBand';

const splitText = (text: string) => {
  return text.split(' ').map((word, index) => (
    <span key={index} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
      {word.split('').map((char, charIndex) => (
        <span key={charIndex} className={`inline-block ${animateClass}`}>
          {char}
        </span>
      ))}
      <span>&nbsp;</span>
    </span>
  ));
};

const Header = ({ startLine, endLine, cls }: { startLine: string, endLine: string, cls?: string }) => {
  return (
    <h1 className="heading py-10 cursor-default">
      <div className={`${cls}`}>
        {splitText(startLine)}
        <span className="text-purple">
          {splitText(endLine)}
        </span>
      </div>
    </h1>
  );
};

export default Header;
