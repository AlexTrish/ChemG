import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const clearSearch = () => {
    setQuery('');
  };

  return (
    <div className="relative">
      <div className={`relative flex items-center transition-all duration-200 ${
        isFocused ? 'w-80' : 'w-64'
      }`}>
        <Search className="absolute left-3 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Поиск тем, уроков или экспериментов..."
          className="w-full pl-10 pr-10 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white transition-all duration-200"
        />
        {query && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={clearSearch}
            className="absolute right-3 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <X className="w-3 h-3 text-gray-400" />
          </motion.button>
        )}
      </div>
      
      {query && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50"
        >
          <div className="p-2">
            <div className="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Результаты поиска
            </div>
            <div className="space-y-1">
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="text-sm font-medium text-gray-900 dark:text-white">Основы органической химии</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Введение в углеводороды</div>
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="text-sm font-medium text-gray-900 dark:text-white">Элементы таблицы Менделеева</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Интерактивный исследователь элементов</div>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SearchBar;