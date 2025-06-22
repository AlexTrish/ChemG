import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, Maximize2, Minimize2, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { elements, Element } from '../components/infoModules/periodicTableInfo';

const categories = [
  { key: 'alkali-metal', name: 'Щелочные металлы', color: '#FFE66D' },
  { key: 'alkaline-earth-metal', name: 'Щелочноземельные', color: '#95E1D3' },
  { key: 'transition-metal', name: 'Переходные металлы', color: '#A8E6CF' },
  { key: 'post-transition-metal', name: 'Постпереходные металлы', color: '#FFD93D' },
  { key: 'metalloid', name: 'Полуметаллы', color: '#FF8B94' },
  { key: 'nonmetal', name: 'Неметаллы', color: '#FF6B6B' },
  { key: 'halogen', name: 'Галогены', color: '#6BCF7F' },
  { key: 'noble-gas', name: 'Благородные газы', color: '#4ECDC4' },
  { key: 'lanthanide', name: 'Лантаноиды', color: '#b39ddb' },
  { key: 'actinide', name: 'Актиноиды', color: '#80cbc4' },
];

const getCategoryColor = (category: string) => {
  const found = categories.find(c => c.key === category);
  return found ? found.color : '#E0E0E0';
};

const AtomModel: React.FC<{ element: Element }> = ({ element }) => {
  const getElectronShells = (atomicNumber: number) => {
    const shells = [];
    let remaining = atomicNumber;
    const shellCapacities = [2, 8, 18, 32, 32, 18, 8];
    for (let i = 0; i < shellCapacities.length && remaining > 0; i++) {
      const electronsInShell = Math.min(remaining, shellCapacities[i]);
      shells.push(electronsInShell);
      remaining -= electronsInShell;
    }
    return shells;
  };
  const shells = getElectronShells(element.number);

  return (
    <motion.div
      className="relative mx-auto"
      style={{
        width: 192,
        height: 192,
        minWidth: 192,
        minHeight: 192,
        maxWidth: 192,
        maxHeight: 192,
      }}
      initial={{ scale: 0.95 }}
      animate={{ scale: [0.95, 1.05, 0.95] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Ядро */}
      <motion.div
        className="absolute"
        style={{
          width: 48,
          height: 48,
          left: '38%',
          top: '38%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          background: `radial-gradient(circle at 50% 50%, ${element.color} 70%, #fff0 100%)`,
          boxShadow: `0 0 30px 0 ${element.color}80`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-white text-xl font-bold drop-shadow">{element.symbol}</span>
      </motion.div>
      {shells.map((electronCount, shellIndex) => {
        const radius = 48 + shellIndex * 24;
        return (
          <motion.div
            key={shellIndex}
            className="absolute"
            style={{
              width: radius * 2,
              height: radius * 2,
              left: `calc(50% - ${radius}px)`,
              top: `calc(50% - ${radius}px)`,
              borderRadius: '50%',
              border: `2px solid ${element.color}40`,
              boxShadow: `0 0 12px 2px ${element.color}30 inset`,
              filter: 'blur(0.5px)',
              pointerEvents: 'none'
            }}
            animate={{ rotate: shellIndex % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 8 + shellIndex * 3, repeat: Infinity, ease: "linear" }}
          >
            {Array.from({ length: electronCount }).map((_, electronIndex) => {
              const angle = (electronIndex / electronCount) * 2 * Math.PI;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <motion.div
                  key={electronIndex}
                  className="absolute"
                  style={{
                    width: 12,
                    height: 12,
                    left: `calc(50% + ${x}px - 6px)`,
                    top: `calc(50% + ${y}px - 6px)`,
                    borderRadius: '50%',
                    background: `radial-gradient(circle at 60% 40%, #fff 60%, ${element.color} 100%)`,
                    border: `1.5px solid ${element.color}`,
                    boxShadow: `0 0 6px 2px ${element.color}80`
                  }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1.2 + shellIndex * 0.2 + electronIndex * 0.05,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: electronIndex * 0.07,
                  }}
                />
              );
            })}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

const PeriodicTable: React.FC = () => {
  const navigate = useNavigate();
  const [isShortForm, setIsShortForm] = useState(true);
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [hoveredElement, setHoveredElement] = useState<Element | null>(null);

  const getCategoryColor = (category: string) => {
    const colors = {
      'alkali-metal': '#FFE66D',
      'alkaline-earth-metal': '#95E1D3',
      'transition-metal': '#A8E6CF',
      'post-transition-metal': '#FFD93D',
      'metalloid': '#FF8B94',
      'nonmetal': '#FF6B6B',
      'halogen': '#6BCF7F',
      'noble-gas': '#4ECDC4',
    };
    return colors[category as keyof typeof colors] || '#E0E0E0';
  };

  const getElementPosition = (element: Element, isShort: boolean) => {
    if (isShort) {
      return {
        row: element.period,
        col: element.group <= 2 ? element.group : element.group - 10
      };
    } else {
      return {
        row: element.period,
        col: element.group
      };
    }
  };

  const ElementModal = ({ element, onClose }: { element: Element; onClose: () => void }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-2"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-blue-200 dark:border-blue-700"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg"
              style={{ backgroundColor: element.color }}
            >
              {element.symbol}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{element.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">{element.nameEn}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <div className="mb-4">
          <AtomModel element={element} />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Атомный номер</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white">{element.number}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Атомная масса</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white">{element.atomicMass}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Группа</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white">{element.group}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Период</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white">{element.period}</div>
          </div>
        </div>
        <div className="mb-2">
          <div className="text-xs text-gray-500 dark:text-gray-400">Электронная конфигурация</div>
          <div className="font-mono text-sm text-gray-900 dark:text-white">{element.electronConfig}</div>
        </div>
        <div className="mt-4">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Описание</div>
          <div className="text-gray-700 dark:text-gray-300 text-sm">{element.description}</div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-10rem)] overflow-y-auto px-2">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center justify-between mb-6"
      >
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/')}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Таблица Менделеева
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Интерактивный исследователь элементов
            </p>
          </div>
        </div>

        {/* Переключатель формы таблицы */}
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-600 dark:text-gray-400">Короткопериодная</span>
          <button
            onClick={() => setIsShortForm(!isShortForm)}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <motion.span
              animate={{ x: isShortForm ? 2 : 22 }}
              className="inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform"
            />
          </button>
          <span className="text-sm text-gray-600 dark:text-gray-400">Длиннопериодная</span>
        </div>
      </motion.div>

      {/* Легенда */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6 bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Категории элементов:</h3>
        <div className="flex flex-wrap gap-3">
          {[
            { category: 'alkali-metal', name: 'Щелочные металлы' },
            { category: 'alkaline-earth-metal', name: 'Щелочноземельные' },
            { category: 'transition-metal', name: 'Переходные металлы' },
            { category: 'metalloid', name: 'Полуметаллы' },
            { category: 'nonmetal', name: 'Неметаллы' },
            { category: 'halogen', name: 'Галогены' },
            { category: 'noble-gas', name: 'Благородные газы' },
          ].map(({ category, name }) => (
            <div key={category} className="flex items-center space-x-2">
              <div 
                className="w-4 h-4 rounded"
                style={{ backgroundColor: getCategoryColor(category) }}
              />
              <span className="text-xs text-gray-600 dark:text-gray-400">{name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Таблица элементов */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        <div className={`grid gap-1 ${isShortForm ? 'grid-cols-8' : 'grid-cols-18'}`}>
          {elements.map((element) => {
            const position = getElementPosition(element, isShortForm);
            const gridColumn = position.col;
            const gridRow = position.row;
            
            return (
              <motion.button
                key={element.number}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedElement(element)}
                onMouseEnter={() => setHoveredElement(element)}
                onMouseLeave={() => setHoveredElement(null)}
                className="relative w-16 h-16 rounded-lg border-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 shadow-sm hover:shadow-md"
                style={{
                  backgroundColor: getCategoryColor(element.category),
                  gridColumn,
                  gridRow,
                }}
              >
                <div className="text-center p-1">
                  <div className="text-xs text-gray-700 font-medium">{element.number}</div>
                  <div className="text-lg font-bold text-gray-900">{element.symbol}</div>
                  <div className="text-xs text-gray-700 truncate">{element.name}</div>
                </div>
                
                {/* Подсказка при наведении */}
                <AnimatePresence>
                  {hoveredElement?.number === element.number && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-lg px-2 py-1 whitespace-nowrap z-20"
                    >
                      {element.name} ({element.atomicMass})
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Информационная панель */}
      {hoveredElement && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-700"
        >
          <div className="flex items-center space-x-4">
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold shadow-lg"
              style={{ backgroundColor: hoveredElement.color }}
            >
              {hoveredElement.symbol}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {hoveredElement.name} ({hoveredElement.nameEn})
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Атомный номер: {hoveredElement.number} | Атомная масса: {hoveredElement.atomicMass}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                {hoveredElement.description}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Модальное окно элемента */}
      <AnimatePresence>
        {selectedElement && (
          <ElementModal
            element={selectedElement}
            onClose={() => setSelectedElement(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PeriodicTable;