import React from 'react';

const LogoGrid = ({ logos }) => {
  const numColumns = Math.ceil(Math.sqrt(logos.length));
  const columnTemplate = `repeat(${numColumns}, minmax(0, 1fr))`;

  return (
    <div className="grid border gap-1" style={{ gridTemplateColumns: columnTemplate }}>
      {logos.map((logo, index) => (
        <div key={index} className="border border-black p-2 flex items-center justify-center">
          <img src={logo} alt={`Logo ${index}`} className="w-[50%]" />
        </div>
      ))}
    </div>
  );
};

export default LogoGrid;
