'use client';
import React, { useState } from "react";

const TechIcon = ({ icons, iconName }: { icons: string[]; iconName: string[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {icons.map((icon, index) => (
        <div
          key={index}
          className="border border-white/[.2] rounded-full bg-black w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center relative"
          style={{
            transform: `translateX(-${5 * index + 2}px)`,
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img src={icon} alt={iconName[index]} className="p-2" />
          {hoveredIndex === index && (
            <div className="absolute top-8 ml-2 px-3 py-2 bg-black text-white rounded text-sm whitespace-nowrap">
              {iconName[index]}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default TechIcon;