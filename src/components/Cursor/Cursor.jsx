// src/components/Cursor.jsx
import React, { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const cursorDot = document.querySelector('[data-cursor-dot]');

    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorDot.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 800, fill: 'forwards' }
      );
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
    
      <div className="cursor-dot" data-cursor-dot></div>
    </>
  );
};

export default Cursor;

