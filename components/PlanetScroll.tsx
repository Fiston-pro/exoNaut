"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { lessonsDummyData } from '@/data/lessonsDummyData';
import { userDummyData } from '@/data/userDummyData';
import LessonPopup from './LessonPopup';

const PlanetScroll: React.FC = () => {
  const userLevel = userDummyData.level;
  const [selectedLesson, setSelectedLesson] = useState<any | null>(null);

  return (
    <div className="px-4 py-8 relative">
      {lessonsDummyData.map((unit, unitIndex) => (
        <div key={unitIndex}>
          <div className="text-left bg-secondary-dark rounded-lg px-6 py-3 w-[300px]">
            <div className="text-lg font-semibold">Unit {unitIndex + 1}</div>
            <div className="text-xl font-bold">{unit.name}</div>
          </div>

          {unit.lessons && unit.lessons.map((lesson, lessonIndex) => {
            const randomIconNumber = Math.floor(Math.random() * 21) + 1;
            const isLocked = lesson.id > userLevel;
            const isCurrentLevel = lesson.id === userLevel;

            return (
              <div key={lessonIndex} className="flex flex-col items-center mt-10">
                <div
                  className="mb-16 w-full relative transition-all duration-300"
                  style={{
                    left: `${Math.sin(lessonIndex * 0.6) * 50}px`,
                  }}
                >
                  <div 
                    className="relative inline-block cursor-pointer"
                    onClick={() => !isLocked && setSelectedLesson(lesson)}
                  >
                    <Image
                      src={`/images/planets/planet_img_${randomIconNumber}.png`}
                      alt={`Planet ${randomIconNumber}`}
                      width={80}
                      height={80}
                      className={`rounded-full p-1 ${
                        isLocked ? 'bg-gray-400 filter grayscale' : 'bg-secondary-dark'
                      }`}
                    />
                    {isCurrentLevel && (
                      <div className="absolute -right-10 top-1/2 transform -translate-y-1/2">
                        <Image
                          src="/images/rocket_img.png"
                          alt="Current level"
                          width={40}
                          height={40}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
      
      {selectedLesson !== null && (
        <LessonPopup
          lesson={selectedLesson}
          onClose={() => setSelectedLesson(null)}
        />
      )}
    </div>
  );
};

export default PlanetScroll;
