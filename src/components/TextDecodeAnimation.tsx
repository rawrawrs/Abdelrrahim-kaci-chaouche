
import React, { useState, useEffect } from 'react';

interface TextDecodeAnimationProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

const TextDecodeAnimation = ({ 
  text, 
  className = '', 
  delay = 0, 
  duration = 2000 
}: TextDecodeAnimationProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isDecoding, setIsDecoding] = useState(false);

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

  useEffect(() => {
    const startDecoding = () => {
      setIsDecoding(true);
      let iteration = 0;
      
      const interval = setInterval(() => {
        setDisplayText(prevText => 
          text
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setIsDecoding(false);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const timer = setTimeout(startDecoding, delay);
    return () => clearTimeout(timer);
  }, [text, delay, duration, characters]);

  return <span className={className}>{displayText}</span>;
};

export default TextDecodeAnimation;
