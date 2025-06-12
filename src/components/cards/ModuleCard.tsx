import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon, ArrowRight } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  progress: number;
  difficulty: 'Начальный' | 'Средний' | 'Продвинутый';
  lessons: number;
  color: string;
  onClick: () => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  description,
  icon: Icon,
  progress,
  difficulty,
  lessons,
  color,
  onClick,
}) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Начальный':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400';
      case 'Средний':
        return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'Продвинутый':
        return 'text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 cursor-pointer transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-lg group"
    >
      <div className="flex items-start justify-between mb-4">
        <motion.div 
          className={`p-3 rounded-xl ${color}`}
          whileHover={{ scale: 1.1 }}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
        
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(difficulty)}`}>
          {difficulty}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
        {description}
      </p>
      
      <div className="flex items-center justify-between mb-4 text-xs text-gray-500 dark:text-gray-400">
        <span>{lessons} уроков</span>
        <span>{progress}% завершено</span>
      </div>
      
      <div className="mb-4">
        <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-blue-500 h-2 rounded-full"
          />
        </div>
      </div>
      
      <motion.div 
        className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm"
        whileHover={{ x: 5 }}
      >
        Продолжить изучение
        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </motion.div>
    </motion.div>
  );
};

export default ModuleCard;