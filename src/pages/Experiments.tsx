import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Beaker, Play, BookOpen, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ChemistryLab3D from '../components/lab/ChemistryLab3D';

const Experiments: React.FC = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = React.useState<'menu' | 'lab3d'>('menu');

  if (currentView === 'lab3d') {
    return <ChemistryLab3D />;
  }

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
            Виртуальные эксперименты
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Безопасная интерактивная химическая лаборатория
          </p>
        </div>
      </motion.div>

      {/* Карточки экспериментов */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 cursor-pointer"
          onClick={() => setCurrentView('lab3d')}
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-xl">
              <Beaker className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                3D Лаборатория
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Интерактивная 3D среда
              </p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Проводите химические реакции в реалистичной 3D лаборатории с настоящим оборудованием и веществами.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded text-xs">
                Доступно
              </span>
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded text-xs">
                3D
              </span>
            </div>
            <Play className="w-5 h-5 text-orange-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 opacity-60"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-xl">
              <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Симулятор реакций
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Молекулярная визуализация
              </p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Наблюдайте за химическими реакциями на молекулярном уровне с анимированными процессами.
          </p>
          <div className="flex items-center justify-between">
            <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 rounded text-xs">
              Скоро
            </span>
            <BookOpen className="w-5 h-5 text-purple-500" />
          </div>
        </motion.div>
      </div>

      {/* Инструкции */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-700"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Как пользоваться 3D лабораторией
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Выберите вещества</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Кликните на пробирки с веществами для их выбора
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Настройте условия</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Включите нагревание или добавьте катализатор
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Запустите реакцию</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Нажмите кнопку воспроизведения для начала эксперимента
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                4
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Наблюдайте результат</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Смотрите анимацию реакции и изучайте продукты
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experiments;