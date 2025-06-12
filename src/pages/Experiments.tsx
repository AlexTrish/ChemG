import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Beaker } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Experiments: React.FC = () => {
  const navigate = useNavigate();

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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-center py-20"
      >
        <Beaker className="w-20 h-20 text-orange-500 mx-auto mb-6" />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Виртуальная лаборатория в разработке!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          Скоро вы сможете проводить безопасные виртуальные эксперименты с реалистичными 
          реакциями, измерениями и лабораторным оборудованием!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
        >
          Присоединиться к бета-тестированию
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Experiments;