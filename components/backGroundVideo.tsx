import React from 'react';
import Image from 'next/image';

interface BackgroundGifProps {
  src: string;
}

const BackgroundGif: React.FC<BackgroundGifProps> = ({ src }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
      <Image 
        src={src}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
    </div>
  );
};

export default BackgroundGif;
