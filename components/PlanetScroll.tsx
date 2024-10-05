import React from 'react';
import Image from 'next/image';

const icons = [
  '/images/planets/planet_img_1.png',
  '/images/planets/planet_img_2.png',
  '/images/planets/planet_img_3.png',
  '/images/planets/planet_img_4.png',
  '/images/planets/planet_img_5.png',
  // Add more icon paths as needed
];

const PlanetScroll: React.FC = () => {
  return (
    <div className="h-[600px] px-4 py-8 relative">
      <div className="flex flex-col items-center">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="mb-16 w-full relative transition-all duration-300"
            style={{
              left: `${Math.sin(index * 0.6) * 50}px`, // Adjust amplitude and frequency for a better S-shape
            }}
          >
            <Image
              src={icon}
              alt={`Planet ${index + 1}`}
              width={80}
              height={80}
              className="rounded-full bg-secondary-light p-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanetScroll;
