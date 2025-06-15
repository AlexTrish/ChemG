import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Atom, 
  FlaskConical, 
  TableProperties, 
  Beaker, 
  Settings,
  X,
  MessageCircle
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { name: 'Главная', href: '/', icon: Home },
  { name: 'Органическая химия', href: '/organic', icon: Atom },
  { name: 'Неорганическая химия', href: '/inorganic', icon: FlaskConical },
  { name: 'Таблица Менделеева', href: '/periodic', icon: TableProperties },
  { name: 'Эксперименты', href: '/experiments', icon: Beaker },
  { name: 'Чат с ИИ-наставником', href: '/ai-chat', icon: MessageCircle },
  { name: 'Настройки', href: '/settings', icon: Settings },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const [isLargeScreen, setIsLargeScreen] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : false
  );

  React.useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sidebarVariants = {
    hidden: { x: -280, transition: { type: 'spring', stiffness: 400, damping: 40 } },
    visible: { x: 0, transition: { type: 'spring', stiffness: 400, damping: 40 } }
  };

  // Показываем sidebar всегда на больших экранах, с анимацией только на мобильных
  if (isLargeScreen) {
    return (
      <aside className="fixed lg:static inset-y-0 left-0 z-50 w-70 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 lg:block">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-2 bg-blue-500 rounded-xl">
                <FlaskConical className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">ChemG</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Изучай химию играя</p>
              </div>
            </motion.div>
            
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors lg:hidden"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
          
          <nav className="flex-1 p-4 space-y-1">
            {navigationItems.map((item, index) => {
              const isActive = location.pathname === item.href;
              const Icon = item.icon;
              
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium text-sm">{item.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>
          
          <div className="p-4 border-t border-gray-100 dark:border-gray-800">
            <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Уровень 3</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">1,250 XP</p>
            </div>
          </div>
        </div>
      </aside>
    );
  }

  // Мобильная версия с анимацией
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={sidebarVariants}
          className="fixed inset-y-0 left-0 z-50 w-70 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 block lg:hidden"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-2 bg-blue-500 rounded-xl">
                  <FlaskConical className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900 dark:text-white">ChemG</h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Изучай химию играя</p>
                </div>
              </motion.div>
              
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors lg:hidden"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            
            <nav className="flex-1 p-4 space-y-1">
              {navigationItems.map((item, index) => {
                const isActive = location.pathname === item.href;
                const Icon = item.icon;
                
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-blue-500 text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium text-sm">{item.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            
            <div className="p-4 border-t border-gray-100 dark:border-gray-800">
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Уровень 3</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">1,250 XP</p>
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;