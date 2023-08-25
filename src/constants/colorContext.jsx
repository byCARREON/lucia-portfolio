import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const colors = ['#9BABB8', '#EEE3CB', '#D7C0AE', '#96B6C5', "#EBE4DA0", "96B6C5", "AAC8A7", "E4D0D0", "FFFEC4"];
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const changeBackgroundColor = () => {
    const newColor = getRandomColor();
    setCurrentColor(newColor);
  };

  return (
    <ColorContext.Provider value={{ currentColor, changeBackgroundColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColorContext = () => useContext(ColorContext);
