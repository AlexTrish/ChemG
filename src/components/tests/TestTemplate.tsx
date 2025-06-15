import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Clock, ArrowRight } from 'lucide-react';

export interface Question {
  id: string;
  type: 'single' | 'multiple' | 'input';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
}

interface TestTemplateProps {
  title: string;
  questions: Question[];
  timeLimit?: number; // в секундах
  onComplete: (results: TestResults) => void;
  onExit: () => void;
}

export interface TestResults {
  score: number;
  totalQuestions: number;
  answers: Record<string, string | string[]>;
  timeSpent: number;
}

const TestTemplate: React.FC<TestTemplateProps> = ({
  title,
  questions,
  timeLimit,
  onComplete,
  onExit,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [timeLeft, setTimeLeft] = useState(timeLimit || 0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [startTime] = useState(Date.now());

  React.useEffect(() => {
    if (timeLimit && timeLeft > 0 && !isCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLimit && timeLeft === 0 && !isCompleted) {
      handleComplete();
    }
  }, [timeLeft, timeLimit, isCompleted]);

  const handleAnswer = (questionId: string, answer: string | string[]) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    setIsCompleted(true);
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    
    let score = 0;
    questions.forEach(question => {
      const userAnswer = answers[question.id];
      const correctAnswer = question.correctAnswer;
      
      if (question.type === 'multiple') {
        const userSet = new Set(userAnswer as string[]);
        const correctSet = new Set(correctAnswer as string[]);
        if (userSet.size === correctSet.size && [...userSet].every(x => correctSet.has(x))) {
          score++;
        }
      } else {
        if (userAnswer === correctAnswer) {
          score++;
        }
      }
    });

    onComplete({
      score,
      totalQuestions: questions.length,
      answers,
      timeSpent,
    });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Заголовок и прогресс */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h1>
            {timeLimit && (
              <div className="flex items-center space-x-2 text-orange-600 dark:text-orange-400">
                <Clock className="w-4 h-4" />
                <span className="font-mono">{formatTime(timeLeft)}</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Вопрос {currentQuestion + 1} из {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="bg-blue-500 h-2 rounded-full"
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Вопрос */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
        >
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
            {question.question}
          </h2>

          {/* Варианты ответов */}
          {question.type === 'single' && question.options && (
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleAnswer(question.id, option)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    answers[question.id] === option
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      answers[question.id] === option
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300 dark:border-gray-600'
                    }`}>
                      {answers[question.id] === option && (
                        <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                      )}
                    </div>
                    <span className="text-gray-900 dark:text-white">{option}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          )}

          {/* Множественный выбор */}
          {question.type === 'multiple' && question.options && (
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const selectedAnswers = (answers[question.id] as string[]) || [];
                const isSelected = selectedAnswers.includes(option);
                
                return (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => {
                      const newAnswers = isSelected
                        ? selectedAnswers.filter(a => a !== option)
                        : [...selectedAnswers, option];
                      handleAnswer(question.id, newAnswers);
                    }}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded border-2 ${
                        isSelected
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}>
                        {isSelected && (
                          <CheckCircle className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span className="text-gray-900 dark:text-white">{option}</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          )}

          {/* Ввод текста */}
          {question.type === 'input' && (
            <div>
              <textarea
                value={(answers[question.id] as string) || ''}
                onChange={(e) => handleAnswer(question.id, e.target.value)}
                placeholder="Введите ваш ответ..."
                className="w-full p-4 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                rows={4}
              />
            </div>
          )}

          {/* Кнопки навигации */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={onExit}
              className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              Выйти из теста
            </button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNext}
              disabled={!answers[question.id]}
              className="flex items-center space-x-2 px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <span>{currentQuestion === questions.length - 1 ? 'Завершить' : 'Далее'}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestTemplate;