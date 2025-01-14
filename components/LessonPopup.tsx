import React, { useState, useRef, useEffect } from 'react';
import { FaVolumeUp, FaTimes } from 'react-icons/fa';

interface Answer {
  id: number;
  text: string;
  isCorrect: boolean;
}

interface LessonPopupProps {
  lesson: {
    description: string;
    question: string;
    video: string;
    answers: Answer[];
  };
  onClose: () => void;
  onComplete: (answeredCorrectly: boolean) => void;
}

const LessonPopup: React.FC<LessonPopupProps> = ({ lesson, onComplete, onClose }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [countdown, setCountdown] = useState(2);
  const speechSynthesis = useRef(window.speechSynthesis);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [astronautNumber, setAstronautNumber] = useState(2);
  const [showCongratulations, setShowCongratulations] = useState(false);

  useEffect(() => {
    // Play the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error attempting to play video:", error);
      });
    }
  }, []);

  useEffect(() => {
    // Randomly choose 2, 3, or 4 for the astronaut GIF
    setAstronautNumber(Math.floor(Math.random() * 3) + 2);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showResult) {
      timer = setInterval(() => {
        setCountdown((prevCount) => {
          if (prevCount <= 1) {
            clearInterval(timer);
            if (isCorrect) {
              setShowCongratulations(true);
              setTimeout(() => {
                onComplete(true);
              }, 2000); // Show congratulations for 2 seconds before moving to next planet
            } else {
              setShowQuiz(false);
              setShowResult(false);
              setSelectedAnswer(null);
              // Replay the video when returning to it after an incorrect answer
              if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play().catch(error => {
                  console.error("Error attempting to replay video:", error);
                });
              }
            }
            return 2;
          }
          return prevCount - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [showResult, isCorrect, onComplete]);

  const handleVideoEnd = () => {
    setShowQuiz(true);
  };

  const handleAnswerSelect = (answerId: number) => {
    setSelectedAnswer(answerId);
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      const selectedAnswerObj = lesson.answers.find(a => a.id === selectedAnswer);
      if (selectedAnswerObj) {
        handleAnswerSubmit(selectedAnswerObj);
      }
    }
  };

  const readQuestionAndAnswers = () => {
    const textToRead = `${lesson.question} ${lesson.answers.map((answer, index) => `Option ${index + 1}: ${answer.text}`).join('. ')}`;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    speechSynthesis.current.speak(utterance);
  };

  const handleAnswerSubmit = (selectedAnswer: Answer) => {
    const correct = selectedAnswer.isCorrect;
    setIsCorrect(correct);
    setShowResult(true);
    setCountdown(2);
    // Remove the immediate call to onComplete(true) here
  };

  const handleClose = () => {
    // You might want to add logic here to save any progress
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-secondary-dark text-white rounded-lg p-8 z-10 max-w-3xl w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-white transition duration-300"
          onClick={handleClose}
          aria-label="Close lesson"
        >
          <FaTimes className="text-2xl" />
        </button>
        {showCongratulations ? (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-green-500 animate-bounce mb-4">
              Congratulations, ExoNaut!
            </h2>
            <p className="text-xl">You have mastered this challenge. Get ready for the next planet!</p>
          </div>
        ) : !showQuiz ? (
          <div>
            <video
              ref={videoRef}
              src={lesson.video}
              controls
              autoPlay
              className="w-full mb-4"
              onEnded={handleVideoEnd}
            />
            <button
              className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded transition duration-300"
              onClick={handleVideoEnd}
            >
              Go to Quiz
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center mb-6">
              <div className="flex-grow pr-6">
                <h2 className="text-2xl font-bold mb-4">{lesson.question}</h2>
                <button
                  className="p-3 bg-violet-600 hover:bg-violet-700 rounded-full transition duration-300"
                  onClick={readQuestionAndAnswers}
                  aria-label="Read question and answers aloud"
                >
                  <FaVolumeUp className="text-white text-2xl" />
                </button>
              </div>
              <div className="w-40 h-40 flex-shrink-0 overflow-hidden">
                <img 
                  src={`/videos/astronauts/astronaut_${astronautNumber}.gif`}
                  alt={`Cool Astronaut ${astronautNumber} GIF`}
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
            </div>
            {lesson.answers.map((answer) => (
              <button
                key={answer.id}
                className={`block w-full text-left p-2 mb-2 border rounded transition duration-300 ${
                  selectedAnswer === answer.id
                    ? 'bg-violet-600 text-white'
                    : 'bg-secondary hover:bg-secondary-light'
                } ${
                  showResult
                    ? answer.isCorrect
                      ? 'bg-green-500 text-white transform scale-105 animate-bounce'
                      : selectedAnswer === answer.id
                      ? 'bg-red-500 text-white'
                      : ''
                    : ''
                }`}
                onClick={() => !showResult && handleAnswerSelect(answer.id)}
                disabled={showResult}
              >
                {answer.text}
                {showResult && answer.isCorrect && (
                  <span className="ml-2 font-bold">(Correct Answer)</span>
                )}
              </button>
            ))}
            {!showResult ? (
              <button
                className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded mt-4 transition duration-300"
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
              >
                Submit
              </button>
            ) : (
              <div className="mt-4">
                <p className={`text-xl font-semibold mb-2 ${
                  isCorrect ? 'text-green-500 animate-bounce' : 'text-red-500'
                }`}>
                  {isCorrect
                    ? 'Congratulations our ExoNaut! You got it right!'
                    : 'Oops! That\'s not correct. The correct answer is bouncing now'}
                </p>
                <div className="text-2xl font-bold text-center">
                  {countdown}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonPopup;