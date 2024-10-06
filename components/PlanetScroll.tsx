"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { lessonsDummyData } from '@/data/lessonsDummyData';
import LessonPopup from './LessonPopup';

// Update the interface to include userData and related functions
interface PlanetScrollProps {
  userData: {
    name: string;
    image: string;
    exoBucks: number;
    level: number;
  };
  onExoBucksEarned: (amount: number) => void;
  onLevelUp: () => void;
}

// Import or define the Lesson interface
interface Answer {
  id: number;
  text: string;
  isCorrect: boolean;
}

interface Lesson {
  id: number;
  name: string;
  description: string;
  video: string;
  question: string;
  answers: Answer[];
}

const PlanetScroll: React.FC<PlanetScrollProps> = ({ userData, onExoBucksEarned, onLevelUp }) => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  useEffect(() => {
    if (completedLessons.length > 0) {
      const nextLessonId = completedLessons[completedLessons.length - 1] + 1;
      const nextLesson = findLessonById(nextLessonId);
      if (nextLesson) {
        setTimeout(() => {
          setSelectedLesson(nextLesson);
        }, 500); // Small delay to ensure smooth transition
      }
    }
  }, [completedLessons]);

  const findLessonById = (id: number): Lesson | null => {
    for (const unit of lessonsDummyData) {
      const lesson = unit.lessons.find(l => l.id === id);
      if (lesson) return lesson;
    }
    return null;
  };

  const handleLessonComplete = (answeredCorrectly: boolean) => {
    if (selectedLesson) {
      // Add 100 ExoBucks for completing the lesson
      onExoBucksEarned(100);
      
      // Add 50 additional ExoBuck if the answer was correct
      if (answeredCorrectly) {
        onExoBucksEarned(50);
      }

      // Increment user level
      onLevelUp();

      // Add the completed lesson to the list
      setCompletedLessons(prev => [...prev, selectedLesson.id]);

      // Close the current lesson popup
      setSelectedLesson(null);
    }
  };

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
            const isLocked = lesson.id > userData.level;
            const isCurrentLevel = lesson.id === userData.level;
            const isCompleted = completedLessons.includes(lesson.id);

            return (
              <div key={lessonIndex} className="flex flex-col items-center mt-10">
                <div
                  className="mb-16 w-full relative transition-all duration-300"
                  style={{
                    left: `${Math.sin(lessonIndex * 0.6) * 50}px`,
                  }}
                >
                  <div 
                    className={`relative inline-block cursor-pointer ${
                      isCurrentLevel ? 'animate-pulse' : ''
                    }`}
                    onClick={() => !isLocked && setSelectedLesson(lesson)}
                  >
                    <Image
                      src={`/images/planets/planet_img_${randomIconNumber}.png`}
                      alt={`Planet ${randomIconNumber}`}
                      width={80}
                      height={80}
                      className={`rounded-full p-1 ${
                        isLocked ? 'bg-gray-400 filter grayscale' : 
                        isCompleted ? 'bg-green-500' : 'bg-secondary-dark'
                      } ${isCurrentLevel ? 'animate-bounce' : ''}`}
                    />
                    {isCurrentLevel && (
                      <div className="absolute -right-10 top-1/2 transform -translate-y-1/2">
                        <Image
                          src="/images/rocket_img.png"
                          alt="Current level"
                          width={40}
                          height={40}
                          className="animate-wiggle"
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
          onComplete={handleLessonComplete}
        />
      )}
    </div>
  );
};

export default PlanetScroll;
