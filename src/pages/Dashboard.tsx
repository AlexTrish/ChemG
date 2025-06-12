import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Atom, 
  FlaskConical, 
  TableProperties, 
  Beaker,
  Award,
  Target,
  Clock,
  TrendingUp
} from 'lucide-react';
import ModuleCard from '../components/cards/ModuleCard';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const modules = [
    {
      title: 'Органическая химия',
      description: 'Изучите увлекательный мир углеродных соединений, углеводородов и органических реакций.',
      icon: Atom,
      progress: 65,
      difficulty: 'Средний' as const,
      lessons: 24,
      color: 'bg-blue-500',
      path: '/organic',
    },
    {
      title: 'Неорганическая химия',
      description: 'Освойте принципы неорганических соединений, координационных комплексов и металлургии.',
      icon: FlaskConical,
      progress: 40,
      difficulty: 'Продвинутый' as const,
      lessons: 18,
      color: 'bg-purple-500',
      path: '/inorganic',
    },
    {
      title: 'Таблица Менделеева',
      description: 'Интерактивный исследователь периодической таблицы со свойствами элементов.',
      icon: TableProperties,
      progress: 85,
      difficulty: 'Начальный' as const,
      lessons: 12,
      color: 'bg-green-500',
      path: '/periodic',
    },
    {
      title: 'Эксперименты',
      description: 'Виртуальная химическая лаборатория с безопасными интерактивными экспериментами.',
      icon: Beaker,
      progress: 20,
      difficulty: 'Средний' as const,
      lessons: 15,
      color: 'bg-orange-500',
      path: '/experiments',
    },
  ];

  const stats = [
    { label: 'Всего XP', value: '1,250', icon: Award, color: 'text-yellow-600' },
    { label: 'Дней подряд', value: '7', icon: Target, color: 'text-green-600' },
    { label: 'Время изучения', value: '24ч', icon: Clock, color: 'text-blue-600' },
    { label: 'Прогресс', value: '+15%', icon: TrendingUp, color: 'text-purple-600' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
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