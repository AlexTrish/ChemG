import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock, CheckCircle, XCircle, RotateCcw, Home } from 'lucide-react';
import { TestResults as TestResultsType } from './TestTemplate';

interface TestResultsProps {
  results: TestResultsType;
  onRetry: () => void;
  onHome: () => void;
}

const TestResults: React.FC<TestResultsProps> = ({ results, onRetry, onHome }) => {
  const percentage = Math.round((results.score / results.totalQuestions) * 100);
  
  const getGrade = (percentage: number) => {
    if (percentage >= 90) return { grade: 'Отлично', color: 'text-green-600', bg: 'bg-green-100' };
    if (percentage >= 70) return { grade: 'Хорошо', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (percentage >= 50) return { grade: 'Удовлетворительно', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { grade: 'Неудовлетворительно', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const gradeInfo = getGrade(percentage);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm text-center"
        >
          {/* Иконка результата */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="mb-6"
          >
            {percentage >= 70 ? (
              <Trophy className="w-16 h-16 text-yellow-500 mx-auto" />
            ) : (
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto">
                <XCircle className="w-8 h-8 text-gray-500" />
              </div>
            )}
          </motion.div>

          {/* Заголовок */}
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Тест завершен!
          </h1>
          
          {/* Оценка */}
          <div className={`inline-block px-4 py-2 rounded-full ${gradeInfo.bg} ${gradeInfo.color} font-medium mb-6`}>
            {gradeInfo.grade}
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {results.score}/{results.totalQuestions}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Правильных ответов</div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {percentage}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Процент успеха</div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
              <div className="text-2xl font-bold text-gray-900 dark:text-white flex items-center justify-center">
                <Clock className="w-5 h-5 mr-1" />
                {formatTime(results.timeSpent)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Время прохождения</div>
            </div>
          </div>

          {/* Прогресс бар */}
          <div className="mb-8">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className={`h-3 rounded-full ${
                  percentage >= 70 ? 'bg-green-500' : percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
              />
            </div>
          </div>

          {/* Кнопки действий */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onRetry}
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Пройти еще раз</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onHome}
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>На главную</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestResults;