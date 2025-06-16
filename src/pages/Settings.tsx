import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Download,
  Trash2,
  Save
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [settings, setSettings] = useState({
    // Профиль
    username: user?.username || '',
    email: user?.email || '',
    organization: user?.organization || '',
    group: user?.group || '',
    
    // Уведомления
    emailNotifications: true,
    pushNotifications: true,
    lessonReminders: true,
    achievementNotifications: true,
    
    // Приватность
    profileVisibility: 'public',
    showProgress: true,
    showAchievements: true,
    
    // Интерфейс
    theme: 'system',
    language: 'ru',
    animations: true,
    soundEffects: true,
    
    // Обучение
    difficultyLevel: 'medium',
    autoSave: true,
    showHints: true,
  });

  const handleSave = () => {
    // Здесь будет API вызов для сохранения настроек
    toast.success('Настройки сохранены');
  };

  const handleReset = () => {
    // Сброс к значениям по умолчанию
    toast.success('Настройки сброшены');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Вы уверены, что хотите удалить аккаунт? Это действие нельзя отменить.')) {
      // Здесь будет API вызов для удаления аккаунта
      toast.error('Функция удаления аккаунта временно недоступна');
    }
  };

  const SettingSection: React.FC<{ 
    title: string; 
    icon: React.ReactNode; 
    children: React.ReactNode 
  }> = ({ title, icon, children }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          {icon}
        </div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
      </div>
      {children}
    </motion.div>
  );

  const ToggleSwitch: React.FC<{ 
    checked: boolean; 
    onChange: (checked: boolean) => void;
    label: string;
    description?: string;
  }> = ({ checked, onChange, label, description }) => (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="text-sm font-medium text-gray-900 dark:text-white">{label}</p>
        {description && (
          <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
        )}
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          checked ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-700'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );

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
            Настройки
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Персонализируйте ваш опыт обучения
          </p>
        </div>
      </motion.div>

      <div className="space-y-6">
        {/* Профиль */}
        <SettingSection 
          title="Профиль" 
          icon={<User className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Имя пользователя
              </label>
              <input
                type="text"
                value={settings.username}
                onChange={(e) => setSettings({ ...settings, username: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Организация
              </label>
              <input
                type="text"
                value={settings.organization}
                onChange={(e) => setSettings({ ...settings, organization: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Группа
              </label>
              <input
                type="text"
                value={settings.group}
                onChange={(e) => setSettings({ ...settings, group: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>
        </SettingSection>

        {/* Уведомления */}
        <SettingSection 
          title="Уведомления" 
          icon={<Bell className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
        >
          <div className="space-y-3">
            <ToggleSwitch
              checked={settings.emailNotifications}
              onChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
              label="Email уведомления"
              description="Получать уведомления на почту"
            />
            <ToggleSwitch
              checked={settings.pushNotifications}
              onChange={(checked) => setSettings({ ...settings, pushNotifications: checked })}
              label="Push уведомления"
              description="Уведомления в браузере"
            />
            <ToggleSwitch
              checked={settings.lessonReminders}
              onChange={(checked) => setSettings({ ...settings, lessonReminders: checked })}
              label="Напоминания об уроках"
              description="Напоминать о незавершенных уроках"
            />
            <ToggleSwitch
              checked={settings.achievementNotifications}
              onChange={(checked) => setSettings({ ...settings, achievementNotifications: checked })}
              label="Уведомления о достижениях"
              description="Уведомлять о новых достижениях"
            />
          </div>
        </SettingSection>

        {/* Приватность */}
        <SettingSection 
          title="Приватность" 
          icon={<Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Видимость профиля
              </label>
              <select
                value={settings.profileVisibility}
                onChange={(e) => setSettings({ ...settings, profileVisibility: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="public">Публичный</option>
                <option value="friends">Только друзья</option>
                <option value="private">Приватный</option>
              </select>
            </div>
            <ToggleSwitch
              checked={settings.showProgress}
              onChange={(checked) => setSettings({ ...settings, showProgress: checked })}
              label="Показывать прогресс"
              description="Другие пользователи могут видеть ваш прогресс"
            />
            <ToggleSwitch
              checked={settings.showAchievements}
              onChange={(checked) => setSettings({ ...settings, showAchievements: checked })}
              label="Показывать достижения"
              description="Другие пользователи могут видеть ваши достижения"
            />
          </div>
        </SettingSection>

        {/* Интерфейс */}
        <SettingSection 
          title="Интерфейс" 
          icon={<Palette className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Тема
              </label>
              <select
                value={settings.theme}
                onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="light">Светлая</option>
                <option value="dark">Темная</option>
                <option value="system">Системная</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Язык
              </label>
              <select
                value={settings.language}
                onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="ru">Русский</option>
                <option value="en">English</option>
              </select>
            </div>
            <ToggleSwitch
              checked={settings.animations}
              onChange={(checked) => setSettings({ ...settings, animations: checked })}
              label="Анимации"
              description="Включить анимации интерфейса"
            />
            <ToggleSwitch
              checked={settings.soundEffects}
              onChange={(checked) => setSettings({ ...settings, soundEffects: checked })}
              label="Звуковые эффекты"
              description="Воспроизводить звуки при взаимодействии"
            />
          </div>
        </SettingSection>

        {/* Обучение */}
        <SettingSection 
          title="Обучение" 
          icon={<Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Уровень сложности
              </label>
              <select
                value={settings.difficultyLevel}
                onChange={(e) => setSettings({ ...settings, difficultyLevel: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="easy">Легкий</option>
                <option value="medium">Средний</option>
                <option value="hard">Сложный</option>
              </select>
            </div>
            <ToggleSwitch
              checked={settings.autoSave}
              onChange={(checked) => setSettings({ ...settings, autoSave: checked })}
              label="Автосохранение"
              description="Автоматически сохранять прогресс"
            />
            <ToggleSwitch
              checked={settings.showHints}
              onChange={(checked) => setSettings({ ...settings, showHints: checked })}
              label="Показывать подсказки"
              description="Отображать подсказки во время обучения"
            />
          </div>
        </SettingSection>

        {/* Данные */}
        <SettingSection 
          title="Данные" 
          icon={<Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
        >
          <div className="space-y-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              <Download className="w-4 h-4" />
              <span>Экспортировать данные</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors">
              <Trash2 className="w-4 h-4" />
              <span>Очистить кэш</span>
            </button>
          </div>
        </SettingSection>

        {/* Кнопки действий */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSave}
              className="flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Сохранить</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleReset}
              className="px-6 py-3 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors"
            >
              Сбросить
            </motion.button>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDeleteAccount}
            className="flex items-center space-x-2 px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            <span>Удалить аккаунт</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Settings;