import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Trophy, Target, Clock, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const navigate = useNavigate();

  const achievements = [
    { name: 'Первые шаги', description: 'Завершите свой первый урок', icon: Star, unlocked: true },
    { name: 'Исследователь химии', description: 'Завершите 5 уроков', icon: Trophy, unlocked: true },
    { name: 'Мастер органики', description: 'Завершите модуль органической химии', icon: Target, unlocked: false },
    { name: 'Быстрый ученик', description: 'Завершите 3 урока за один день', icon: Clock, unlocked: false },
  ];

  return (
    <div className="max-w-4xl mx-auto">
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
            Ваш профиль
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Отслеживайте свой прогресс в обучении
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Статистика обучения
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <div className="text-xl font-semibold text-blue-600 dark:text-blue-400">1,250</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Всего XP</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <div className="text-xl font-semibold text-green-600 dark:text-green-400">7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Дней подряд</div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                <div className="text-xl font-semibold text-purple-600 dark:text-purple-400">24ч</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Время изучения</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl">
                <div className="text-xl font-semibold text-yellow-600 dark:text-yellow-400">Уровень 3</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Текущий уровень</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Достижения
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className={`p-4 rounded-xl border transition-all ${
                      achievement.unlocked
                        ? 'border-green-200 bg-green-50 dark:border-green-700 dark:bg-green-900/20'
                        : 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className={`w-6 h-6 ${
                        achievement.unlocked 
                          ? 'text-green-600 dark:text-green-400' 
                          : 'text-gray-400 dark:text-gray-600'
                      }`} />
                      <div>
                        <h3 className={`font-medium ${
                          achievement.unlocked 
                            ? 'text-green-900 dark:text-green-100' 
                            : 'text-gray-500 dark:text-gray-400'
                        }`}>
                          {achievement.name}
                        </h3>
                        <p className={`text-sm ${
                          achievement.unlocked 
                            ? 'text-green-700 dark:text-green-300' 
                            : 'text-gray-400 dark:text-gray-500'
                        }`}>
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Студент</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Энтузиаст химии</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 dark:text-gray-400">Прогресс уровня</span>
                  <span className="font-medium text-gray-900 dark:text-white">250/500 XP</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '50%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-blue-500 h-2 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl p-6 border border-yellow-200/50 dark:border-yellow-700/50">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Недельная цель
            </h3>
            <div className="flex items-center space-x-3 mb-3">
              <Target className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              <span className="text-gray-700 dark:text-gray-300">Завершить 5 уроков</span>
            </div>
            <div className="w-full bg-yellow-200 dark:bg-yellow-800/30 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                transition={{ duration: 1, delay: 0.7 }}
                className="bg-yellow-500 h-2 rounded-full"
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">3 из 5 завершено</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;