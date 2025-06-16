import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Atom, FlaskConical, TableProperties, Beaker, Award, Target, Clock, TrendingUp } from 'lucide-react';
import ModuleCard from '../components/cards/ModuleCard';

const defaultModuleInfo = {
  inorganic: {
    progress: 0,
    difficulty: 'Начальный' as const,
    lessons: 0,
  },
  organic: {
    progress: 0,
    difficulty: 'Начальный' as const,
    lessons: 0,
  },
  periodictable: {
    progress: 0,
    difficulty: 'Начальный' as const,
    lessons: 0,
  },
  experiments: {
    progress: 0,
    difficulty: 'Начальный' as const,
    lessons: 0,
  },
};

// TODO: Replace defaultModuleInfo with data from API (/user/info)
const moduleInfo = defaultModuleInfo;

const defaultStats = {
  experience: '0',
  days: '0',
  time: '0ч',
  progress: '0%',
};

// TODO: Replace defaultStats with data from API (/user/info)
const userStats = defaultStats;

const stats = [
  { label: 'Всего XP', value: userStats.experience, icon: Award, color: 'text-yellow-600' },
  { label: 'Дней подряд', value: userStats.days, icon: Target, color: 'text-green-600' },
  { label: 'Время изучения', value: userStats.time, icon: Clock, color: 'text-blue-600' },
  { label: 'Прогресс', value: userStats.progress, icon: TrendingUp, color: 'text-purple-600' },
];

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const modules = [
    {
      title: 'Неорганическая химия',
      description: 'Освойте принципы неорганических соединений, координационных комплексов и металлургии.',
      icon: FlaskConical,
      progress: moduleInfo.inorganic.progress,
      difficulty: moduleInfo.inorganic.difficulty,
      lessons: moduleInfo.inorganic.lessons,
      color: 'bg-purple-500',
      path: '/inorganic',
    },
    {
      title: 'Органическая химия',
      description: 'Изучите увлекательный мир углеродных соединений, углеводородов и органических реакций.',
      icon: Atom,
      progress: moduleInfo.organic.progress,
      difficulty: moduleInfo.organic.difficulty,
      lessons: moduleInfo.organic.lessons,
      color: 'bg-blue-500',
      path: '/organic',
    },
    {
      title: 'Таблица Менделеева',
      description: 'Интерактивный исследователь периодической таблицы со свойствами элементов.',
      icon: TableProperties,
      progress: moduleInfo.periodictable.progress,
      difficulty: moduleInfo.periodictable.difficulty,
      lessons: moduleInfo.periodictable.lessons,
      color: 'bg-green-500',
      path: '/periodic',
    },
    {
      title: 'Эксперименты',
      description: 'Виртуальная химическая лаборатория с безопасными интерактивными экспериментами.',
      icon: Beaker,
      progress: moduleInfo.experiments.progress,
      difficulty: moduleInfo.experiments.difficulty,
      lessons: moduleInfo.experiments.lessons,
      color: 'bg-orange-500',
      path: '/experiments',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto h-[calc(100vh-10rem)] overflow-auto px-2 scrollbar-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">
          Добро пожаловать! 👨‍🔬
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Готовы продолжить изучение химии? Давайте исследуем удивительный мир молекул.
        </p>
      </motion.div>

      {/* Статистика */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-5 h-5 ${stat.color}`} />
                <span className="text-xl font-semibold text-gray-900 dark:text-white">
                  {stat.value}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Модули обучения */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Продолжить изучение
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Все модули
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <ModuleCard
                {...module}
                onClick={() => navigate(module.path)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Быстрые действия */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Быстрый старт
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 hover:border-gray-200 dark:hover:border-gray-500 transition-all duration-200 text-left"
          >
            <h4 className="font-medium text-gray-900 dark:text-white mb-1">Ежедневный вызов</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Решите сегодняшнюю задачу по химии</p>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 hover:border-gray-200 dark:hover:border-gray-500 transition-all duration-200 text-left"
          >
            <h4 className="font-medium text-gray-900 dark:text-white mb-1">Практический тест</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Проверьте свои знания</p>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 hover:border-gray-200 dark:hover:border-gray-500 transition-all duration-200 text-left"
          >
            <h4 className="font-medium text-gray-900 dark:text-white mb-1">Учебные группы</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Присоединитесь к совместному обучению</p>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;