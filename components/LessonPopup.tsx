import React, { useState } from 'react';

interface Answer {
  id: number;
  text: string;
  isCorrect: boolean;
}

interface LessonPopupProps {
  lesson: {
    id: number;
    name: string;
    description: string;
    video: string;
    question: string;
    answers: Answer[];
  };
  onClose: () => void;
}

const LessonPopup: React.FC<LessonPopupProps> = ({ lesson, onClose }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleVideoEnd = () => {
    setShowQuiz(true);
  };

  const handleAnswerSelect = (answerId: number) => {
    setSelectedAnswer(answerId);
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowResult(true);
    }
  };

  const handleClose = () => {
    if (showResult) {
      onClose();
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50" onClick={handleClose}></div>
      <div className="bg-secondary-dark text-white rounded-lg p-8 z-10 max-w-3xl w-full">
        <h2 className="text-2xl font-bold mb-4">{lesson.description}</h2>
        {!showQuiz ? (
          <div>
            <video
              src={lesson.video}
              controls
              className="w-full mb-4"
              onEnded={handleVideoEnd}
            />
            <button
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded transition duration-300"
              onClick={handleVideoEnd}
            >
              Skip to Quiz
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-semibold mb-4">Quiz</h3>
            <p className="mb-4">{lesson.question}</p>
            {lesson.answers.map((answer) => (
              <button
                key={answer.id}
                className={`block w-full text-left p-2 mb-2 border rounded transition duration-300 ${
                  selectedAnswer === answer.id
                    ? 'bg-primary text-white'
                    : 'bg-secondary hover:bg-secondary-light'
                } ${
                  showResult
                    ? answer.isCorrect
                      ? 'bg-green-500 text-white'
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
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded mt-4 transition duration-300"
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
              >
                Submit
              </button>
            ) : (
              <div className="mt-4">
                <p className="text-xl font-semibold mb-2">
                  {lesson.answers.find(a => a.id === selectedAnswer)?.isCorrect
                    ? 'Congratulations! You got it right!'
                    : 'Oops! That\'s not correct. The correct answer is highlighted in green.'}
                </p>
                <button
                  className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded transition duration-300"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonPopup;
