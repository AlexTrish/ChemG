import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, ArrowLeft, Type } from 'lucide-react';

export interface TextInputQuestion {
  id: string;
  question: string;
  placeholder?: string;
  correctAnswer: string;
  acceptableAnswers?: string[]; // альтернативные правильные ответы
  explanation?: string;
  timeLimit?: number;
  maxLength?: number;
}

interface TextInputTestProps {
  title: string;
  questions: TextInputQuestion[];
  onComplete: (results: TestResults) => void;
  onExit: () => void;
}

export interface TestResults {
  score: number;
  totalQuestions: number;
  answers: Record<string, string>;
  timeSpent: number;
  correctAnswers: string[];
}

const TextInputTest: React.FC<TextInputTestProps> = ({
  title,
  questions,
  onComplete,
  onExit,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(questions[currentQuestion]?.timeLimit || 0);
  const [startTime] = useState(Date.now());

  React.useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && questions[currentQuestion]?.timeLimit) {
      handleNext();
    }
  }, [timeLeft, currentQuestion]);

  React.useEffect(() => {
    setTimeLeft(questions[currentQuestion]?.timeLimit || 0);
  }, [currentQuestion]);

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: answer }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const isAnswerCorrect = (userAnswer: string, question: TextInputQuestion): boolean => {
    const normalizedUserAnswer = userAnswer.toLowerCase().trim();
    const normalizedCorrectAnswer = question.correctAnswer.toLowerCase().trim();
    
    if (normalizedUserAnswer === normalizedCorrectAnswer) {
      return true;
    }
    
    if (question.acceptableAnswers) {
      return question.acceptableAnswers.some(
        acceptable => acceptable.toLowerCase().trim() === normalizedUserAnswer
      );
    }
    
    return false;
  };

  const handleComplete = () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    let score = 0;
    const correctAnswers: string[] = [];

    questions.forEach(question => {
      const userAnswer = answers[question.id] || '';
      if (isAnswerCorrect(userAnswer, question)) {
        score++;
        correctAnswers.push(question.id);
      }
    });

    onComplete({
      score,
      totalQuestions: questions.length,
      answers,
      timeSpent,
      correctAnswers,
    });
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentAnswer = answers[question.id] || '';

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Заголовок и прогресс */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h1>
            {question.timeLimit && (
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
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            {question.question}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Введите ваш ответ в поле ниже
          </p>

          {/* Поле ввода */}
          <div className="mb-8">
            <div className="relative">
              <Type className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <textarea
                value={currentAnswer}
                onChange={(e) => handleAnswer(e.target.value)}
                placeholder={question.placeholder || "Введите ваш ответ..."}
                maxLength={question.maxLength || 500}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                rows={4}
              />
            </div>
            
            {/* Счетчик символов */}
            <div className="flex justify-between items-center mt-2 text-xs text-gray-500 dark:text-gray-400">
              <span>
                {currentAnswer.length} / {question.maxLength || 500} символов
              </span>
              {currentAnswer.length > 0 && (
                <span className="text-green-600 dark:text-green-400">
                  ✓ Ответ введен
                </span>
              )}
            </div>
          </div>

          {/* Подсказка */}
          <div className="mb-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              💡 Совет: Будьте точны в формулировке. Проверьте правописание и грамматику.
            </p>
          </div>

          {/* Кнопки навигации */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <button
                onClick={onExit}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
              >
                Выйти
              </button>
              
              {currentQuestion > 0 && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePrevious}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Назад</span>
                </motion.button>
              )}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNext}
              disabled={currentAnswer.trim().length === 0}
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

export default TextInputTest;