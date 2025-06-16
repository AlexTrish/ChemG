import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Atom } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OrganicChemistry: React.FC = () => {
  const navigate = useNavigate();

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
            Органическая химия
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Исследуйте мир органических соединений
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-center py-20"
      >
        <Atom className="w-20 h-20 text-blue-500 mx-auto mb-6" />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Скоро будет доступно!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          Мы усердно работаем над созданием удивительного опыта изучения органической химии. 
          Ожидайте интерактивные уроки по улеводородам, структурным формулам и многому другому!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
        >
          Уведомить о готовности
        </motion.button>
      </motion.div>
    </div>
  );
};

export default OrganicChemistry;