import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InorganicChemistry: React.FC = () => {
  const navigate = useNavigate();


  const lessons = [
    {
      lessonsId: 1,
      lessonsName: 'Атомы и молекулы',
      lessonsProgress: 0,
      lessonsStatus: 'Не изучено',
      completed: false,
      description: 'Изучите строение атомов, молекул',
      difficulty: 'Начальный',
    },
    {
      lessonsId: 2,
      lessonsName: 'Простые и сложные вещества. Атомно-молекулярное учение',
      lessonsProgress: 0,
      lessonsStatus: 'Не изучено',
      completed: false,
      description: 'Изучите различия между простыми и сложными веществами, а также основные положения атомно-молекулярного учения',
      difficulty: 'Начальный',
    },
    {
      lessonsId: 3,
      lessonsName: 'Химические формулы',
      lessonsProgress: 0,
      lessonsStatus: 'Не изучено',
      completed: false,
      description: 'Узнайте, как записывать химические формулы, отражающие состав веществ с помощью символов элементов и числовых индексов',
      difficulty: 'Начальный',
    },
    {
      lessonsId: 4,
      lessonsName: 'Валентность. Составление формул по валентностям',
      lessonsProgress: 0,
      lessonsStatus: 'Не изучено',
      completed: false,
      description: 'Научитесь определять валентность элементов и составлять химические формулы соединений на основе их валентностей',
      difficulty: 'Начальный',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto h-[calc(100vh-10rem)] overflow-auto px-2">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center space-x-4 mb-6"
      >
        <button
          onClick={() => navigate('/')}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Неорганическая химия
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Освойте химию неорганических соединений
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-purple-500 dark:bg-purple-700 rounded-2xl p-6 text-white mb-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">Обзор прогресса</h2>
            <p className="opacity-90">Вы прошли 0% этого модуля!</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-semibold">0/4</div>
            <div className="text-sm opacity-90">Уроков завершено</div>
          </div>
        </div>
        <div className="mt-4">
          <div className="bg-white/20 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '0%' }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-white h-2 rounded-full"
            />
          </div>
        </div>
      </motion.div>

      <div className="space-y-4">
        {lessons.map((lesson, index) => (
          <motion.div
            key={lesson.lessonsId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className={`bg-white dark:bg-gray-800 rounded-xl p-6 border transition-all duration-200 ${
              lesson.completed
                ? 'border-green-200 dark:border-green-700 bg-green-50/50 dark:bg-green-900/10'
                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl ${
                  lesson.completed 
                    ? 'bg-green-100 dark:bg-green-900/20' 
                    : 'bg-blue-100 dark:bg-blue-900/20'
                }`}>
                  {lesson.completed ? (
                    <Award className="w-5 h-5 text-green-600 dark:text-green-400" />
                  ) : (
                    <Play className="w-5 h-5 text-purple-500 dark:text-purple-700" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {lesson.lessonsName}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    {lesson.description}
                  </p>
                  <div className="flex items-center space-x-4 text-xs">
                    <span className={`px-2 py-1 rounded-full ${
                      lesson.difficulty === 'Начальный' 
                        ? 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400'
                        : lesson.difficulty === 'Средний'
                        ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400'
                        : 'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400'
                    }`}>
                      {lesson.difficulty}
                    </span>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  lesson.completed
                    ? 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400'
                    : 'bg-purple-500 text-white hover:bg-purple-600 dark:bg-purple-700 dark:hover:bg-purple-800'
                }`}
              >
                {lesson.completed ? 'Повторить' : 'Начать'}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InorganicChemistry;