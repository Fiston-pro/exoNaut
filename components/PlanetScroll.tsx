import React from 'react';
import Image from 'next/image';
import { lessonsDummyData } from '@/data/lessonsDummyData';
import { userDummyData } from '@/data/userDummyData';

const icons = [
  '/images/planets/planet_img_1.png',
  '/images/planets/planet_img_2.png',
  '/images/planets/planet_img_3.png',
  '/images/planets/planet_img_4.png',
  '/images/planets/planet_img_5.png',
  // Add more icon paths as needed
];

const PlanetScroll: React.FC = () => {
  const firstLesson = lessonsDummyData[0];

  return (
    <div className=" px-4 py-8 relative">
      {
        lessonsDummyData.map((lesson, index) => // unit level
        <div>

          <div key={index} className="text-left bg-secondary-dark rounded-lg px-6 py-3 w-[300px]">
            <div className="text-lg font-semibold">Unit {index + 1}</div>
            <div className="text-xl font-bold">{lesson.name}</div>
          </div>

          {
            lesson.lessons && lesson.lessons.map((lesson, index) => {
              const randomIconNumber = Math.floor(Math.random() * 21) + 1;
              return (
                <div className="flex flex-col items-center mt-10 ">
              <div
                key={index}
                className="mb-16 w-full relative transition-all duration-300"
                style={{
                  left: `${Math.sin(index * 0.6) * 50}px`, // Adjust amplitude and frequency for a better S-shape
                }}
              >
                <Image
                  src={`/images/planets/planet_img_${randomIconNumber}.png`}
                  alt={`Planet ${randomIconNumber}`}
                  width={80}
                  height={80}
                  className="rounded-full bg-neutral-light p-1"
                />
              </div>
              </div>
            )
          }
          )
          }
        </div>
        )
      }
    </div>
  );
};

export default PlanetScroll;
