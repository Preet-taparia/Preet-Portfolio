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

const Header = ({ startLine, endLine }: { startLine: string, endLine: string }) => {
  return (
    <h1 className="heading py-10">
      {splitText(startLine)}
      <span className="text-purple">
        {splitText(endLine)}
      </span>
    </h1>
  );
};

export default Header;
