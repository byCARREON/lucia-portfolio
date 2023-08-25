import React, { useEffect, useRef } from 'react';

function AnimatedText({ children }) {
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const windowHeight = window.innerHeight;
      const textElement = textRef.current;

      if (textElement) {
        const textRect = textElement.getBoundingClientRect();
        const isVisible = textRect.top < windowHeight;

        if (isVisible) {
          anime({
            targets: textElement,
            translateY: [-20, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1000,
            delay: 1000
          });

          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div ref={textRef}>{children}</div>;
}

export default AnimatedText;
